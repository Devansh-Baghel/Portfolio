"use client";

import Image from "next/image";
import Link from "next/link";
import Glow from "@/components/Glow";

export default function NotFound() {
  return (
    <main className="relative mx-auto min-h-screen sm:max-w-[600px] lg:max-w-[1400px]">
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="relative max-w-[600px]">
          {/* Background decorative element */}
          <Image
            src="/shape-76.svg"
            height={300}
            width={300}
            alt=""
            priority
            className="images glow absolute left-[-60px] top-[-80px] z-[-10] h-[300px] w-[300px] animate-spin opacity-50 animate-duration-[40000ms] animate-infinite animate-ease-in-out"
          />
          <Glow />

          {/* Main 404 content */}
          <div className="wrapper rounded-[30px] border-[3px] border-slate-900 p-8 text-slate-900 shadow-[4px_4px_0px_0px_#1e293b] md:p-12">
            <div className="text-center">
              {/* 404 number */}
              <h1 className="motion-preset-slide-right animate-blur-in-500 font-heading text-[80px] leading-none md:text-[120px]">
                404
              </h1>

              {/* Error message */}
              <h2 className="motion-preset-slide-right mt-4 animate-blur-in-600 font-heading text-2xl motion-delay-200 md:text-3xl">
                Page Not Found
              </h2>

              {/* Description */}
              <p className="motion-preset-slide-right mt-4 animate-blur-in-700 text-lg motion-delay-300 md:text-xl">
                Oops! The page you're looking for doesn't exist. It might have
                been moved, deleted, or you entered the wrong URL.
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <Link
                  href="/"
                  className="motion-preset-slide-right inline-block animate-blur-in-800 rounded-[30px] border-2 border-slate-900 bg-slate-900 px-6 py-3 text-lg font-medium text-white shadow-[4px_4px_0px_0px_#84cc16] transition-all duration-200 motion-delay-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Go Home
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="motion-preset-slide-right inline-block animate-blur-in-800 rounded-[30px] border-[3px] border-slate-900 px-6 py-3 text-lg font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 motion-delay-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Go Back
                </button>
              </div>

              {/* Additional links */}
              <div className="motion-delay-600 motion-preset-slide-right mt-8 animate-blur-in-900">
                <p className="mb-4 text-slate-600">
                  Or check out these sections:
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link
                    href="/#projects"
                    className="underline underline-offset-2 hover:text-lime-500"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/#tech-stack"
                    className="underline underline-offset-2 hover:text-lime-500"
                  >
                    Tech Stack
                  </Link>
                  <Link
                    href="/#contact"
                    className="underline underline-offset-2 hover:text-lime-500"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="underline underline-offset-2 hover:text-lime-500"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
