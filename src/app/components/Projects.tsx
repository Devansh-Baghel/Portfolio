import { LuExternalLink as LinkIcon } from "react-icons/lu";
import { FaCodeBranch as CodeIcon } from "react-icons/fa6";
import { VscGitStash as CodeStashIcon } from "react-icons/vsc";

// TODO: convert all these images to next/image
export default function Projects() {
  return (
    <section id="projects" className="text-slate-900 p-6 mt-32">
      <h3 className="text-4xl mb-6">Selected Work</h3>

      <div id="projects-container" className="flex flex-col gap-6">
        <div className="wrapper p-6 border-slate-900 border-[3px] rounded-[30px] flex flex-col gap-4">
          <h3 className="text-3xl flex gap-4">
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
          <div className="text-lg flex flex-col md:flex-row gap-2 md:gap-4">
            <a
              target="_blank"
              href="https://codestash.baghel.dev"
              className="px-6 py-1 border-[2px] font-medium border-slate-900 rounded-[30px] bg-slate-900 text-white flex items-center gap-2"
            >
              Deployed site
              <LinkIcon className="w-[20px] h-[20px] inline text-white" />
            </a>
            <a
              target="_blank"
              href="https://github.com/devansh-baghel/codestash"
              className="px-6 py-1 border-[2px] font-medium border-slate-900 rounded-[30px] flex items-center gap-2"
            >
              Source code
              <CodeIcon className="w-[17px] h-[17px] inline" />
            </a>
          </div>
          <div>
            <p className="text-xl mb-2">
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
        <div className="wrapper p-6 border-slate-900 border-[3px] rounded-[30px] flex flex-col gap-4">
          <h3 className="text-3xl">SpendSync 💸✨</h3>
          {/* <Image
            src="/spendsync.png"
            alt="SpendSync"
            width={400}
            height={100}
            // width={400}
            // height={400}
          /> */}
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
            <p className="text-xl mb-2">
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
          className="wrapper text-center h-16 border-slate-900 border-[3px] font-medium rounded-[30px] text-[20px] flex justify-center items-center gap-2"
        >
          More on github
          <LinkIcon />
        </a>
      </div>
    </section>
  );
}
