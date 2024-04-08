import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devansh Baghel",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
