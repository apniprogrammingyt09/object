import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Object Detection - KodRish",
  description: "Upload videos and images for AI-powered object detection.",
  generator: "KodRish Innovation & Solution LLP",
  keywords: [
    "AI Object Detection",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Image Processing",
    "KodRish",
  ],
  openGraph: {
    title: "AI Object Detection - KodRish",
    description: "Upload videos and images for AI-powered object detection.",
    url: "https://kodrish.me",
    type: "website",
    images: [
      {
        url: "/kodrish-logo.png",
        width: 1200,
        height: 630,
        alt: "AI Object Detection Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KodrishSolution",
    title: "AI Object Detection - KodRish",
    description: "Upload videos and images for AI-powered object detection.",
    images: ["/kodrish-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}