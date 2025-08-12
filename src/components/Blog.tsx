"use client";

import AOSComponent from "@/lib/aos";
import Link from "next/link";
import { LuExternalLink as LinkIcon } from "react-icons/lu";

export default function Blog() {
  return (
    <AOSComponent>
      <section
        id="blog"
        className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900"
      >
        <h3 className="gitroll-title mb-4 text-4xl" data-aos="fade-left">
          Latest Posts
        </h3>

        <div className="flex flex-col gap-4" data-aos="fade-left">
          {/* Featured Blog Post */}
          <div className="wrapper rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <h4 className="mb-2 text-xl font-medium">
              Building a Modern Full-Stack Application with Next.js and TypeScript
            </h4>
            <p className="mb-4 text-slate-600">
              A comprehensive guide to building scalable web applications using Next.js 15, TypeScript, and modern development practices.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>Dec 15, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* View All Blogs Button */}
          <Link
            href="/blog"
            className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            View All Posts
            <LinkIcon />
          </Link>
        </div>
      </section>
    </AOSComponent>
  );
}
