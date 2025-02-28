"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin, Upload, Zap, BarChart3, Shield, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                About Our AI Object Detection System
              </h1>
              <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Revolutionizing Object Detection with AI-Powered Insights
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/detection">
                <Button size="lg" className="w-full gap-1.5">
                  Try It Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Developer */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-8 border-gray-100 dark:border-gray-800 shadow-xl">
                <Image
                  src="/krish.png"
                  alt="Krish Bhagat"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Krish Bhagat</h2>
                <p className="text-primary font-medium">
                  AI & Full-Stack Developer | Founder of KodRish Innovation & Solution LLP
                </p>
              </div>
              <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400">
                I am a passionate AI and full-stack developer specializing in machine learning, computer vision, and
                real-time AI applications. I founded KodRish Innovation & Solution LLP to bring cutting-edge tech
                solutions to businesses and students. With expertise in Python, React, and cloud computing, I am focused
                on building AI-driven products that enhance automation and efficiency.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="https://github.com/apniprogrammingyt09" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-1.5">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href="https://linkedin.com/in/krish-bhagat-47512a289" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-1.5">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Card className="bg-white dark:bg-gray-950">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Empowering users with accurate and real-time object detection for various applications. We aim to
                    make advanced AI technology accessible to everyone, from researchers to businesses and individual
                    users.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-950">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bringing AI-powered object recognition to the masses with speed and precision. We envision a world
                    where computer vision enhances everyday tasks and enables new possibilities across industries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Step 1: Upload</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Upload an image or video to our platform. We support various formats for your convenience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Step 2: AI Analysis</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our AI analyzes the content and detects objects using advanced deep learning models.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Step 3: View Results</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                View results, download reports, or integrate via API for your applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies We Use</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform is built with cutting-edge technologies for performance and reliability.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Machine Learning & Deep Learning</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">YOLO, TensorFlow, OpenCV</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M12 2H2v10h10V2z" />
                      <path d="M12 12H2v10h10V12z" />
                      <path d="M22 2h-10v10h10V2z" />
                      <path d="M22 12h-10v10h10V12z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Web Frameworks</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">React.js, Next.js, FastAPI</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Cloud & Databases</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">AWS, Firebase, MongoDB</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our unique advantages set us apart from other solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Real-Time Object Detection</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our system processes videos and images quickly, providing real-time results for immediate analysis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Detailed Reports & Insights</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get comprehensive analytics and visualizations to understand object detection results.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Privacy-Focused</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Your data is processed securely and we prioritize privacy in all our operations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Globe className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Open for Developers</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  API available for integration into your own applications and workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Experience AI-Powered Object Detection?
              </h2>
              <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start detecting objects in your images and videos today.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/detection">
                <Button size="lg" variant="secondary" className="w-full gap-1.5">
                  Start Detection Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

