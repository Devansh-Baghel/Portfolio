import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/hint.min.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import { PostHogProvider } from "./providers";

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
    default: "Devansh Baghel - Full Stack Developer & Software Engineer",
    template: "%s | Devansh Baghel",
  },
  description:
    "Devansh Baghel is a full-stack developer specializing in Next.js, React, TypeScript, and modern web technologies. View my portfolio of projects including CodeStash and SpendSync.",
  keywords: [
    "Devansh Baghel",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Software Engineer",
    "Web Developer",
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
    title: "Devansh Baghel - Full Stack Developer & Software Engineer",
    description:
      "Devansh Baghel is a full-stack developer specializing in Next.js, React, TypeScript, and modern web technologies. View my portfolio of projects including CodeStash and SpendSync.",
    siteName: "Devansh Baghel Portfolio",
    images: [
      {
        url: "/og-image.png", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Devansh Baghel - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh Baghel - Full Stack Developer & Software Engineer",
    description:
      "Devansh Baghel is a full-stack developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    creator: "@DevanshBaghel5",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://baghel.dev",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
  },
  icons: {
    icon: "/shape-76.svg",
    shortcut: "/shape-76.svg",
    apple: "/apple-touch-icon.png", // You'll need to create this
  },
  manifest: "/manifest.json", // You'll need to create this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  axios.defaults.baseURL = process.env.DOMAIN;

  return (
    <html lang="en">
      <body className={`${inter.variable} ${chromate.variable} font-sans`}>
        <PostHogProvider>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
