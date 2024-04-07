import { LuExternalLink as LinkIcon } from "react-icons/lu";
import { FaCodeBranch as CodeIcon } from "react-icons/fa6";

export default function Projects() {
  return (
    <section
      className="md:absolute md:right-12 top-[100vh] flex flex-col gap-6 mt-24 ml-6 sm:ml-10 md:ml-0"
      id="projects"
    >
      <h3 className="text-4xl mb-4 text-slate-900">Projects</h3>

      <div className="wrapper p-6 border-slate-900 border-[3px] rounded-[30px] flex flex-col gap-4">
        <h3 className="text-[.9em] text-slate-900">SpendSync 💸✨</h3>
        <div className="text-lg flex flex-col md:flex-row gap-2 md:gap-4">
          <a
            target="_blank"
            href="https://spendsync.baghel.dev"
            className="px-6 py-1 border-[2px] font-medium border-slate-900 rounded-[30px] bg-slate-900 text-white flex items-center gap-2"
          >
            Deployed site
            <LinkIcon className="w-[20px] h-[20px] inline text-white" />
          </a>
          <a
            target="_blank"
            href="https://github.com/devansh-baghel/spendsync"
            className="px-6 py-1 border-[2px] font-medium border-slate-900 rounded-[30px] flex items-center gap-2"
          >
            Source code
            <CodeIcon className="w-[17px] h-[17px] inline" />
          </a>
        </div>
        <div>
          <p className="text-xl">
            An all in one financial planning and money tracking tool with a
            sleek and intuitive user interface.
          </p>
          <div className="badge-container">
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white"
              alt="TypeScript"
            />
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&amp;logo=vite&amp;logoColor=white"
              alt="Vite"
            />
            <img
              src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&amp;logo=react%20query&amp;logoColor=white"
              alt="React Query"
            />
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white"
              alt="TailwindCSS"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white"
              alt="MongoDB"
            />
            <img
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white"
              alt="NodeJS"
            />
            <img
              src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB"
              alt="Express.js"
            />
          </div>
        </div>
      </div>
      <div className="wrapper p-6 h-24 border-slate-900 border-[3px] rounded-[30px]">
        <h3 className="text-3xl text-slate-900 flex items-center gap-3">
          CodeStash
          <span className="italic text-2xl font-sans">&minus; coming soon</span>
        </h3>
      </div>
      <a
        href="https://github.com/devansh-baghel"
        target="_blank"
        className="wrapper text-center pt-3 h-16 border-slate-900 border-[3px] font-medium rounded-[30px] text-[20px]"
      >
        More on github
      </a>
    </section>
  );
}
