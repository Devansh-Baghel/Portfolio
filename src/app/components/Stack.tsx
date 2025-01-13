"use client";

import AOSComponent from "@/lib/aos";
import Image from "next/image";

const frontend = [
  { path: "next.svg", name: "Next.js" },
  { path: "ts.svg", name: "TypeScript" },
  { path: "js.svg", name: "JavaScript" },
  { path: "react.svg", name: "React" },
  { path: "react_query.svg", name: "React Query" },
  { path: "tailwindcss.svg", name: "Tailwind CSS" },
  { path: "html.svg", name: "HTML" },
  { path: "css.svg", name: "CSS" },
];

const backend = [
  { path: "mongodb.svg", name: "MongoDB" },
  { path: "node.svg", name: "Node.js" },
  { path: "express.svg", name: "Express.js" },
  { path: "postman.svg", name: "Postman" },
  { path: "docker.svg", name: "Docker" },
  { path: "heroku.svg", name: "Heroku" },
  { path: "python.svg", name: "Python" },
];

const misc = [
  { path: "linux.svg", name: "Linux" },
  { path: "git.svg", name: "Git" },
  { path: "github.svg", name: "GitHub" },
  { path: "bash.svg", name: "Bash" },
  { path: "neovim.svg", name: "Neovim" },
];

// TODO: add tooltip on hover to these icons
export default function TechStack() {
  return (
    <AOSComponent>
      <section
        id="tech-stack"
        className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900"
      >
        <h3 className="tech-stack-title mb-4 text-4xl" data-aos="fade-down">
          Tech Stack <span className="hidden md:inline">/ Tools</span>
        </h3>

        <div className="stack-wrapper flex grid-cols-[2.2fr_0.9fr] grid-rows-[1fr_1fr] flex-col gap-6 md:grid">
          <div
            data-aos="fade-right"
            className="wrapper col-start-1 col-end-2 row-start-1 row-end-2 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <h3 className="vertical mb-4 text-3xl">Frontend</h3>

            <div className="flex max-w-80 flex-wrap gap-4">
              {frontend.map((elm) => (
                <span
                  className="hint--top hint--rounded"
                  key={elm.path}
                  aria-label={elm.name}
                >
                  <Image
                    height={45}
                    width={45}
                    alt={elm.name}
                    src={`/skillicons/${elm.path}`}
                  />
                </span>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="wrapper col-start-1 col-end-2 row-start-2 row-end-3 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <h3 className="vertical mb-4 text-3xl">Backend</h3>

            <div className="flex max-w-80 flex-wrap gap-4">
              {backend.map((elm) => (
                <span
                  className="hint--top hint--rounded"
                  key={elm.path}
                  aria-label={elm.name}
                >
                  <Image
                    height={45}
                    width={45}
                    alt={elm.name}
                    src={`/skillicons/${elm.path}`}
                  />
                </span>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="wrapper col-start-2 col-end-3 row-start-1 row-end-3 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <h3 className="vertical mb-4 text-3xl">Misc.</h3>

            <div className="flex max-w-80 flex-wrap gap-4">
              {misc.map((elm) => (
                <span
                  className="hint--top hint--rounded"
                  key={elm.path}
                  aria-label={elm.name}
                >
                  <Image
                    height={45}
                    width={45}
                    alt={elm.name}
                    src={`/skillicons/${elm.path}`}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AOSComponent>
  );
}
