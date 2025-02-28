import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageUpload } from "@/components/image-upload"
import { VideoUpload } from "@/components/video-upload"

export default function DetectionPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Object Detection</h1>

      <Tabs defaultValue="image" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="image">Image Detection</TabsTrigger>
          <TabsTrigger value="video">Video Detection</TabsTrigger>
        </TabsList>

        <TabsContent value="image" className="mt-4">
          <ImageUpload />
        </TabsContent>

        <TabsContent value="video" className="mt-4">
          <VideoUpload />
        </TabsContent>
      </Tabs>
    </div>
  )
}

