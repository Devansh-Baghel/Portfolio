import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/hint.min.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";

const chromate = localFont({
  src: "./Chromate-Regular.ttf",
  variable: "--font-chromate",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// TODO: add opengraph images
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
export const metadata: Metadata = {
  title: "Devansh Baghel - Portfolio",
  description: "Portfolio of Devansh Baghel",
  icons: {
    icon: "/shape-76.svg",
  },
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
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
