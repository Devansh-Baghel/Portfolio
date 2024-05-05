import { LuExternalLink as LinkIcon } from "react-icons/lu";
import { FaCodeBranch as CodeIcon } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects">
      <h3>Projects</h3>

      <div id="projects-container">
        <div>
          <h3>SpendSync 💸✨</h3>
          <div>
            <a target="_blank" href="https://spendsync.baghel.dev">
              Deployed site
              <LinkIcon className="w-[20px] h-[20px] inline text-white" />
            </a>
            <a
              target="_blank"
              href="https://github.com/devansh-baghel/spendsync"
            >
              Source code
              <CodeIcon className="w-[17px] h-[17px] inline" />
            </a>
          </div>
          <div>
            <p>
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
        <div>
          <h3>
            CodeStash
            <span>&minus; coming soon</span>
          </h3>
        </div>
        <a href="https://github.com/devansh-baghel" target="_blank">
          More on github
          <LinkIcon />
        </a>
      </div>
    </section>
  );
}
