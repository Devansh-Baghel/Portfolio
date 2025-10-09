"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 w-full overflow-hidden pb-8 pt-16 text-slate-900">
      {/* Background gradient matching the portfolio theme */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-slate-100/50" />

      <div className="mx-auto max-w-[630px] px-6">
        {/* Main footer content */}
        <div className="wrapper rounded-[30px] border-[3px] border-slate-900 p-8 shadow-[4px_4px_0px_0px_#1e293b]">
          {/* Top section with name and tagline */}
          <div className="mb-8 text-center">
            <h3 className="font-heading text-3xl md:text-4xl">
              Devansh Baghel
            </h3>
            <p className="mt-2 text-lg text-slate-600">
              Full Stack Developer
            </p>
          </div>

          {/* Social links */}
          <div className="mb-8 flex justify-center gap-4">
            <Link
              href="https://github.com/devansh-baghel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-slate-900 bg-white p-3 shadow-[3px_3px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-slate-900 hover:text-white hover:shadow-none"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/devanshbaghel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-slate-900 bg-white p-3 shadow-[3px_3px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-slate-900 hover:text-white hover:shadow-none"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/DevanshBaghel5"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-slate-900 bg-white p-3 shadow-[3px_3px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-slate-900 hover:text-white hover:shadow-none"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@baghel.dev"
              className="rounded-full border-2 border-slate-900 bg-white p-3 shadow-[3px_3px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-slate-900 hover:text-white hover:shadow-none"
              aria-label="Email"
            >
              <HiMail className="h-5 w-5" />
            </Link>
          </div>

          {/* Navigation links */}
          <nav className="mb-6 flex flex-wrap justify-center gap-4 text-sm md:gap-6">
            <Link
              href="/#projects"
              className="transition-colors hover:text-lime-500"
            >
              Projects
            </Link>
            <Link
              href="/#tech-stack"
              className="transition-colors hover:text-lime-500"
            >
              Tech Stack
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-lime-500"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="transition-colors hover:text-lime-500"
            >
              Contact
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="transition-colors hover:text-lime-500"
            >
              Resume
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-lime-500"
            >
              Terms
            </Link>
          </nav>

          {/* Divider */}
          <div className="mb-6 h-[2px] w-full bg-slate-900/10" />

          {/* Bottom section */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-600 md:flex-row">
            <p>
              © {currentYear} Devansh Baghel. All rights reserved.
            </p>
            <p className="text-center">
              Built with <span className="text-lime-500">Next.js</span> &{" "}
              <span className="text-lime-500">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
