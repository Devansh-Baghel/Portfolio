"use client";

import { LuExternalLink as LinkIcon } from "react-icons/lu";
import { FaCodeBranch as CodeIcon } from "react-icons/fa6";
import { VscGitStash as CodeStashIcon } from "react-icons/vsc";
import AOSComponent from "@/lib/aos";
import { useCallback, useRef } from "react";

import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

// TODO: convert all these images to next/image
export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current) {
      return;
    }

    const { width, height } = overlayRef.current?.getBoundingClientRect() ?? {};
    const xOffset = x - width / 2;
    const yOffset = y - height / 2;

    overlayRef.current?.style.setProperty("--x", `${xOffset}px`);
    overlayRef.current?.style.setProperty("--y", `${yOffset}px`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <AOSComponent>
      <section id="projects" className="mt-32 p-6 text-slate-900">
        <h3
          data-aos="fade-left"
          className="projects-title motion-preset-blur-right mb-8 text-4xl"
        >
          Selected Work
        </h3>

        <div id="projects-container" className="flex flex-col gap-6">
          {/* <div
            ref={containerRef}
            className={cn(
              "wrapper border-border group relative w-96 min-w-fit max-w-full overflow-hidden rounded-md border bg-zinc-700 p-6 text-zinc-200 shadow-lg",
            )}
          > */}

          <div
            data-aos="fade-left"
            ref
            className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <div
              ref={overlayRef}
              // Adjust height & width as required
              className="-z-1 absolute h-64 w-64 rounded-full bg-white opacity-0 bg-blend-soft-light blur-3xl transition-opacity group-hover:opacity-20"
              style={{
                transform: "translate(var(--x), var(--y))",
              }}
            />
            <h3 className="flex gap-4 text-3xl">
              CodeStash
              <CodeStashIcon className="text-green" />
            </h3>
            {/* <Image
            src="/codestash.png"
            alt="CodeStash"
            width={400}
            height={100}
            // width={400}
            // height={400}
          /> */}
            <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
              <a
                target="_blank"
                href="https://codestash.baghel.dev"
                className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Deployed site
                <LinkIcon className="inline h-[20px] w-[20px] text-white" />
              </a>
              <a
                target="_blank"
                href="https://github.com/devansh-baghel/codestash"
                className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Source code
                <CodeIcon className="inline h-[17px] w-[17px]" />
              </a>
            </div>
            <div>
              <p className="mb-2 text-xl">
                The best way to save, store and share your code snippets.
              </p>
              <div className="badge-container">
                <img
                  // src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white"
                  src="/badges/typescript.svg"
                  alt="TypeScript"
                />
                <img
                  // src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"
                  src="/badges/react.svg"
                  alt="React"
                />
                <img
                  // src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&amp;logo=nextjs&amp;logoColor=white"
                  src="/badges/nextjs.svg"
                  alt="Next Js"
                />
                <img
                  // src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&amp;logo=react%20query&amp;logoColor=white"
                  src="/badges/react_query.svg"
                  alt="React Query"
                />
                <img
                  // src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white"
                  src="/badges/tailwindcss.svg"
                  alt="TailwindCSS"
                />
                <img
                  // src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white"
                  src="/badges/mongodb.svg"
                  alt="MongoDB"
                />
                <img
                  // src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white"
                  src="/badges/node.svg"
                  alt="NodeJS"
                />
                <img
                  // src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB"
                  src="/badges/express.svg"
                  alt="Express.js"
                />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <h3 className="text-3xl">SpendSync 💸✨</h3>
            {/* <Image
            src="/spendsync.png"
            alt="SpendSync"
            width={400}
            height={100}
            // width={400}
            // height={400}
          /> */}
            <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
              <a
                target="_blank"
                href="https://spendsync.baghel.dev"
                className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Deployed site
                <LinkIcon className="inline h-[20px] w-[20px] text-white" />
              </a>
              <a
                target="_blank"
                href="https://github.com/devansh-baghel/spendsync"
                className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Source code
                <CodeIcon className="inline h-[17px] w-[17px]" />
              </a>
            </div>
            <div>
              <p className="mb-2 text-xl">
                An all in one financial planning and money tracking tool with a
                sleek and intuitive user interface.
              </p>
              <div className="badge-container">
                <img
                  // src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white"
                  src="/badges/typescript.svg"
                  alt="TypeScript"
                />
                <img
                  // src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"
                  src="/badges/react.svg"
                  alt="React"
                />
                <img
                  // src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&amp;logo=vite&amp;logoColor=white"
                  src="/badges/vite.svg"
                  alt="Vite"
                />
                <img
                  // src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&amp;logo=react%20query&amp;logoColor=white"
                  src="/badges/react_query.svg"
                  alt="React Query"
                />
                <img
                  // src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white"
                  src="/badges/tailwindcss.svg"
                  alt="TailwindCSS"
                />
                <img
                  // src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white"
                  src="/badges/mongodb.svg"
                  alt="MongoDB"
                />
                <img
                  // src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white"
                  src="/badges/node.svg"
                  alt="NodeJS"
                />
                <img
                  // src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB"
                  src="/badges/express.svg"
                  alt="Express.js"
                />
              </div>
            </div>
          </div>

          <a
            href="https://github.com/devansh-baghel"
            target="_blank"
            className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            More on github
            <LinkIcon />
          </a>
        </div>
      </section>
    </AOSComponent>
  );
}
