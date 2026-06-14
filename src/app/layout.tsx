import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { PostHogProvider } from "./providers";
import VisitorBadge from "@/components/analytics/VisitorBadge";
import { FaviconAnimator } from "@/components/FaviconAnimator";
import GooeyToasterClient from "@/components/GooeyToasterClient";
import { Suspense } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import FunBox from "@/components/FunBox";

const chromate = localFont({
  src: "./Chromate-Regular.ttf",
  variable: "--font-chromate",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baghel.dev"),
  title: {
    default: "Devansh Baghel - Product Engineer | Building Products End-to-End",
    template: "%s",
  },
  description:
    "Devansh Baghel is a Product Engineer who helps startups ship and scale web products end-to-end — from frontend and backend to payments, infrastructure, SEO, and observability.",
  keywords: [
    "Devansh Baghel",
    "Product Engineer",
    "Founding Engineer",
    "Contract Engineer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "CodeStash",
    "SpendSync",
  ],
  authors: [{ name: "Devansh Baghel", url: "https://baghel.dev" }],
  creator: "Devansh Baghel",
  publisher: "Devansh Baghel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://baghel.dev",
    title: "Devansh Baghel - Product Engineer | Building Products End-to-End",
    description:
      "Devansh Baghel is a Product Engineer who helps startups ship and scale web products end-to-end — from frontend and backend to payments, infrastructure, SEO, and observability.",
    siteName: "Devansh Baghel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devansh Baghel - Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh Baghel - Product Engineer | Building Products End-to-End",
    description:
      "Devansh Baghel is a Product Engineer who helps startups ship and scale web products end-to-end — from frontend and backend to payments, infrastructure, SEO, and observability.",
    creator: "@bagheldotdev",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://baghel.dev",
    types: {
      'application/atom+xml': [
        {
          url: 'https://baghel.dev/feed.xml',
          title: 'Devansh Baghel — Blog',
        },
      ],
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head />
      <body className={`${inter.variable} ${chromate.variable} font-sans`}>
        <FaviconAnimator />
        <SmoothScroll>
          <PostHogProvider>
            <GooeyToasterClient />
            {children}
            <Suspense>
              <FunBox />
            </Suspense>
            <VisitorBadge />
          </PostHogProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
