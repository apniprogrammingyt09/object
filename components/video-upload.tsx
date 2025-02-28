"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Video } from "lucide-react"

type VideoResult = {
  video_results: Array<{
    frame_index: number
    object_count: Record<string, number>
    detections: Array<{
      class: string
      confidence: number
      bbox: number[]
    }>
  }>
}

export function VideoUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<VideoResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [maxCounts, setMaxCounts] = useState<Record<string, number>>({})
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setResult(null)
      setError(null)
      setMaxCounts({})

      // Create URL for video preview
      if (videoUrl) URL.revokeObjectURL(videoUrl)
      setVideoUrl(URL.createObjectURL(selectedFile))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setError("Please select a video file")
      return
    }

    setIsLoading(true)
    setProgress(0)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      // Simulate progress since the API doesn't provide progress updates
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 5
          return newProgress > 90 ? 90 : newProgress
        })
      }, 500)

      const response = await fetch("https://krish09bha-object-detection-kodrish.hf.space/upload-video/", {
        method: "POST",
        body: formData,
      })

      clearInterval(progressInterval)
      setProgress(100)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      setResult(data)

      // Calculate max counts across all frames
      if (data.video_results && data.video_results.length > 0) {
        const counts: Record<string, number> = {}

        data.video_results.forEach((frame) => {
          Object.entries(frame.object_count).forEach(([object, count]) => {
            if (!counts[object] || counts[object] < (count as number)) {
              counts[object] = count as number
            }
          })
        })

        setMaxCounts(counts)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  // Clean up video URL when component unmounts
  useEffect(() => {
    return () => {
      if (videoUrl) URL.revokeObjectURL(videoUrl)
    }
  }, [videoUrl])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Video</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input type="file" id="video-upload" accept="video/*" onChange={handleFileChange} className="hidden" />
              <label htmlFor="video-upload" className="flex flex-col items-center justify-center cursor-pointer">
                <Video className="h-10 w-10 text-gray-400 mb-2" />
                <span className="text-sm font-medium">{file ? file.name : "Click to upload a video"}</span>
                <span className="text-xs text-gray-500 mt-1">MP4, MOV, AVI up to 50MB</span>
              </label>
            </div>

            {videoUrl && (
              <div className="mt-4">
                <video src={videoUrl} controls className="w-full h-auto rounded-lg" style={{ maxHeight: "300px" }}>
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            <Button type="submit" disabled={!file || isLoading} className="w-full">
              {isLoading ? "Processing..." : "Detect Objects"}
            </Button>

            {isLoading && (
              <div className="space-y-2">
                <Progress value={progress} />
                <p className="text-sm text-center text-muted-foreground">Processing video... {progress}%</p>
              </div>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Detection Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Maximum Object Count</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                  {Object.entries(maxCounts).map(([object, count]) => (
                    <div key={object} className="bg-muted rounded-md p-3">
                      <div className="font-medium">{object}</div>
                      <div className="text-2xl">{count}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Frame Analysis</h3>
                <div className="text-sm text-muted-foreground mb-2">Analyzed {result.video_results.length} frames</div>

                <div className="overflow-auto max-h-60 border rounded-md">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Frame
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Objects Detected
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-card divide-y divide-gray-200">
                      {result.video_results.map((frame) => (
                        <tr key={frame.frame_index}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">{frame.frame_index}</td>
                          <td className="px-4 py-2 text-sm">
                            {Object.entries(frame.object_count).map(([object, count]) => (
                              <span
                                key={object}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-1"
                              >
                                {object}: {count}
                              </span>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

