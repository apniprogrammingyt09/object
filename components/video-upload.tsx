"use client"

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Camera } from "lucide-react";

type ImageResult = {
  image_url: string;
  detections: Array<{
    class: string;
    confidence: number;
    bbox: number[];
  }>;
};

export function CameraCapture() {
  const [isCapturing, setIsCapturing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ImageResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const startCamera = async () => {
    setIsCapturing(true);
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setError("Failed to access camera");
      setIsCapturing(false);
    }
  };

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0);
    const imageUrl = canvasRef.current.toDataURL("image/png");
    setCapturedImage(imageUrl);
  };

  const handleSubmit = async () => {
    if (!capturedImage) {
      setError("No image captured");
      return;
    }

    setIsLoading(true);
    setProgress(0);
    setError(null);

    try {
      const blob = await fetch(capturedImage).then((res) => res.blob());
      const formData = new FormData();
      formData.append("file", blob, "captured_image.png");

      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 95 ? 95 : prev + 5));
      }, 400);

      const response = await fetch("https://krish09bha-object-detection-kodrish.hf.space/upload-image/", {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Capture Image</CardTitle>
        </CardHeader>
        <CardContent>
          {!isCapturing ? (
            <Button onClick={startCamera} className="w-full">
              Start Camera
            </Button>
          ) : (
            <>
              <video ref={videoRef} autoPlay className="w-full rounded-lg" />
              <canvas ref={canvasRef} className="hidden" />
              <Button onClick={captureImage} className="w-full mt-4">
                Capture Image
              </Button>
            </>
          )}
          {capturedImage && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-1">Captured Image</h3>
              <img src={capturedImage} alt="Captured" className="w-full rounded-lg" />
              <Button onClick={handleSubmit} disabled={isLoading} className="w-full mt-4">
                {isLoading ? "Processing..." : "Upload & Detect Objects"}
              </Button>
            </div>
          )}

          {isLoading && (
            <div className="space-y-2">
              <Progress value={progress} />
              <p className="text-sm text-center text-muted-foreground">Processing image... {progress}%</p>
            </div>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Detection Results</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={result.image_url} alt="Processed" className="w-full rounded-lg" />
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Detected Objects</h3>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {result.detections.map((det, index) => (
                  <div key={index} className="bg-muted rounded-md p-3">
                    <div className="font-medium">{det.class}</div>
                    <div className="text-2xl">{(det.confidence * 100).toFixed(1)}%</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
