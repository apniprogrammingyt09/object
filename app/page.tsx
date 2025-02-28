"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Upload, Zap, Clock, BarChart3, Monitor, Star } from "lucide-react"
import Spline from "@splinetool/react-spline/next"
import { useEffect, useState } from "react"
const images = ["/123.avif", "/1234.avif", "/12345.avif"];

function AlternatingImage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={images[currentImage]}
      alt="Object detection in action"
      width={800}
      height={500}
      className="object-cover transition-opacity duration-500 ease-in-out"
    />
  );
}
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-Powered Object Detection Made Easy!
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Upload videos and images and let AI detect objects in real-time. Get accurate counts and detailed
                  analysis.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/detection">
                  <Button size="lg" className="gap-1.5">
                    Start Detection
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="flex justify-center lg:justify-end h-[500px]">
                <Spline
                  scene="https://prod.spline.design/UtEqCi5KnQrDuNqG/scene.splinecode"
                  style={{ width: "100%", height: "100%"}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What is Object Detection?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Object detection is a computer vision technique that identifies and locates objects within images or
                videos. Our AI-powered system uses advanced deep learning models to recognize multiple objects in
                real-time, providing accurate counts and detailed analysis.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex justify-center">
            <AlternatingImage />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Upload className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Upload Media</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Simply upload your images or videos to our platform.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">AI Processing</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our advanced AI model analyzes the content and detects objects.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Get Results</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      View detailed results with object counts, bounding boxes, and analysis.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Our AI?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our object detection system offers powerful features designed for accuracy and ease of use.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>High Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Detects objects with precision using state-of-the-art AI models.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle>Fast Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Quick results with optimized AI for efficient processing.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle>Detailed Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get comprehensive object counts and bounding boxes for analysis.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Monitor className="h-6 w-6" />
                </div>
                <CardTitle>User-Friendly UI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Simple interface designed for users of all technical levels.</CardDescription>
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Star className="h-6 w-6" />
                </div>
                <CardTitle>Multiple Format Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Process both images and videos with the same powerful AI model.</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/detection">
              <Button size="lg" className="gap-1.5">
                Start Detection
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our object detection system is designed to be simple and effective.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Upload Video</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Choose any video file from your device.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">AI Processes It</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Our model detects objects in your content.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">View Results</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get object count, bounding boxes, and analysis.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                4
              </div>
              <h3 className="text-xl font-bold">Download Report</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Save results for later reference.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/detection">
              <Button size="lg" className="gap-1.5">
                Try It Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from people who have used our object detection system.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Researcher</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "This object detection system has been invaluable for my research. The accuracy and speed are
                    impressive."
                  </p>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "The API is well-documented and easy to integrate. I've built several applications using this
                    service."
                  </p>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Emily Rodriguez</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Content Creator</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "I use this for analyzing my videos. The object detection is accurate and the interface is
                    intuitive."
                  </p>
                </div>
                <div className="mt-4 flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have questions or need support? We're here to help.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button size="lg" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

