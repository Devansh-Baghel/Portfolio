import Image from "next/image";

const frontend = [
  "next.svg",
  "ts.svg",
  "js.svg",
  "react.svg",
  "react_query.svg",
  "tailwindcss.svg",
  "html.svg",
  "css.svg",
];

const backend = [
  "mongodb.svg",
  "node.svg",
  "express.svg",
  "postman.svg",
  "docker.svg",
  "heroku.svg",
  "python.svg",
];

const misc = ["linux.svg", "git.svg", "github.svg", "bash.svg", "neovim.svg"];

// TODO: add tooltip on hover to these icons
export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900"
    >
      <h3 className="tech-stack-title mb-4 text-4xl">
        Tech Stack <span className="hidden md:inline">/ Tools</span>
      </h3>

      <div className="stack-wrapper flex grid-cols-[2.2fr_0.9fr] grid-rows-[1fr_1fr] flex-col gap-6 md:grid">
        <div className="wrapper col-start-1 col-end-2 row-start-1 row-end-2 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
          <h3 className="vertical mb-4 text-3xl">Frontend</h3>

          <div className="flex max-w-80 flex-wrap gap-4">
            {frontend.map((elm) => (
              <Image
                height={45}
                width={45}
                alt={elm}
                key={elm}
                src={`/skillicons/${elm}`}
              />
            ))}
          </div>
        </div>
        <div className="wrapper col-start-1 col-end-2 row-start-2 row-end-3 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
          <h3 className="vertical mb-4 text-3xl">Backend</h3>

          <div className="flex max-w-80 flex-wrap gap-4">
            {backend.map((elm) => (
              <Image
                height={45}
                width={45}
                alt={elm}
                key={elm}
                src={`/skillicons/${elm}`}
              />
            ))}
          </div>
        </div>
        <div className="wrapper col-start-2 col-end-3 row-start-1 row-end-3 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
          <h3 className="vertical mb-4 text-3xl">Misc.</h3>

          <div className="flex max-w-80 flex-wrap gap-4">
            {misc.map((elm) => (
              <Image
                height={45}
                width={45}
                alt={elm}
                key={elm}
                src={`/skillicons/${elm}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
