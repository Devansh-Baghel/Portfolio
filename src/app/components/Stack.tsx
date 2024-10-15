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
      className="text-slate-900 p-6 flex flex-col gap-6 mt-32 pb-0 max-w-[630px]"
    >
      <h3 className="text-4xl tech-stack-title mb-4">
        Tech Stack <span className="hidden md:inline">/ Tools</span>
      </h3>

      <div className="md:grid flex flex-col gap-6 grid-rows-[1fr_1fr] grid-cols-[2.2fr_0.9fr] stack-wrapper">
        <div className="wrapper row-start-1 row-end-2 col-start-1 col-end-2 p-6 border-slate-900 border-[3px] rounded-[30px]">
          <h3 className="text-3xl mb-4 vertical">Frontend</h3>

          <div className="flex flex-wrap gap-4 max-w-80">
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
        <div className="wrapper row-start-2 row-end-3 col-start-1 col-end-2 p-6 border-slate-900 border-[3px] rounded-[30px]">
          <h3 className="text-3xl mb-4 vertical">Backend</h3>

          <div className="flex flex-wrap gap-4 max-w-80">
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
        <div className="wrapper row-start-1 row-end-3 col-start-2 col-end-3 p-6 border-slate-900 border-[3px] rounded-[30px]">
          <h3 className="text-3xl mb-4 vertical">Misc.</h3>

          <div className="flex flex-wrap gap-4 max-w-80">
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
