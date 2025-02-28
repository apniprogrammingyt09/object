"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

export function ImageUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    image: string
    object_count: Record<string, number>
  } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setResult(null)
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setError("Please select an image file")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("https://krish09bha-object-detection-kodrish.hf.space/upload-image/", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Image</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input type="file" id="image-upload" accept="image/*" onChange={handleFileChange} className="hidden" />
              <label htmlFor="image-upload" className="flex flex-col items-center justify-center cursor-pointer">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <span className="text-sm font-medium">{file ? file.name : "Click to upload an image"}</span>
                <span className="text-xs text-gray-500 mt-1">JPG, PNG, GIF up to 10MB</span>
              </label>
            </div>
            <Button type="submit" disabled={!file || isLoading} className="w-full">
              {isLoading ? "Processing..." : "Detect Objects"}
            </Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detection Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img src={result.image || "/placeholder.svg"} alt="Detected objects" className="w-full h-auto" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Object Count</h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {Object.entries(result.object_count).map(([object, count]) => (
                      <div key={object} className="bg-muted rounded-md p-3">
                        <div className="font-medium">{object}</div>
                        <div className="text-2xl">{count}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

