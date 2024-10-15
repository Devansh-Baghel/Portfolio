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
      className="text-slate-900 p-6 flex flex-col gap-6 mt-32 pb-0"
    >
      <h3 className="text-4xl">
        Tech Stack <span className="hidden md:inline">/ Tools</span>
      </h3>

      <div className="wrapper p-6 border-slate-900 border-[2px] rounded-[30px] flex flex-row-reverse justify-between gap-6 items-center">
        <h3 className="text-3xl vertical">Frontend</h3>

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
      <div className="wrapper p-6 border-slate-900 border-[2px] rounded-[30px] flex flex-row-reverse justify-between gap-6 items-center">
        <h3 className="text-3xl vertical">Backend</h3>

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
      <div className="wrapper p-6 border-slate-900 border-[2px] rounded-[30px] flex flex-row-reverse justify-between gap-6 items-center">
        <h3 className="text-3xl vertical">Misc.</h3>

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
    </section>
  );
}
