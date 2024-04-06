import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { MdOutgoingMail as MailIcon } from "react-icons/md";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white text-3xl hero max-w-[1400px] relative m-auto">
      <aside className="fixed text-slate-900 max-w-[600px]">
        <img
          src="/shape-76.svg"
          alt=""
          className="images absolute animate-spin animate-infinite animate-duration-[40000ms] animate-ease-in-out w-[400px] h-[400px] top-[-120px] left-[-80px]"
        />
        <h1 className="text-[3.5em] absolute left-10 top-10 leading-tight">
          Devansh Baghel
        </h1>
        <h3 className="mt-[350px] ml-[50px] text-[38px] text-slate-800">
          Fullstack Developer
        </h3>
        <p className="ml-[50px] text-2xl mt-4">
          Hello there 👋, I'm Devansh Baghel, and I build full-stack web apps
          with{" "}
          <a
            href="#tech-stack"
            className="underline cursor-pointer underline-offset-2"
          >
            modern tools
          </a>
          .
        </p>
        <button className="text-xl px-6 py-2 border-[3px] font-medium border-slate-900 rounded-[30px] mt-6 ml-[50px] bg-slate-900 text-white">
          Résumé
        </button>
        <button className="text-xl px-6 py-2 border-[3px] font-medium border-slate-900 rounded-[30px] mt-4 ml-[20px] ">
          Contact me
        </button>

        <div className="mt-6 ml-[50px] flex gap-4 items-center">
          <a href="https://github.com/devansh-baghel" target="_blank">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/devanshbaghel" target="_blank">
            <LinkedinIcon className="w-8 h-8" />
          </a>
          <a href="mailto:hello@baghel.dev" target="_blank">
            <MailIcon className="w-10 h-10" />
          </a>
        </div>
      </aside>
      <div className="w-[700px] h-[500px] absolute right-0 z-0 images">
        <img src="/Grad_07.png" alt="" />
        <img src="/Grad_02.png" alt="" />
        <img src="/Grad_10.png" alt="" className="mt-[10vh]" />
        <img src="/Grad_05.png" alt="" className="mt-[10vh]" />
      </div>

      <Projects />

      <section
        className="absolute right-12 top-[200vh] flex flex-col gap-6 pt-10"
        id="tech-stack"
      >
        <h3 className="text-4xl mb-4 text-slate-900">Tech Stack / Tools</h3>

        <div className="wrapper p-6 border-slate-900 border-[3px] rounded-[30px]">
          <h3 className="text-3xl text-slate-900 mb-4">Frontend</h3>

          <div className="badge-container">
            <img
              src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white"
              alt="TypeScript"
            />
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E"
              alt="JavaScript"
            />
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&amp;logo=react%20query&amp;logoColor=white"
              alt="React Query"
            />
            <img
              src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&amp;logo=react-router&amp;logoColor=white"
              alt="React Router"
            />
            <img
              src="https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&amp;logo=react"
              alt="Context-API"
            />
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white"
              alt="HTML5"
            />
            <img
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white"
              alt="CSS3"
            />
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white"
              alt="TailwindCSS"
            />
          </div>
        </div>
        <div className="wrapper p-6 border-slate-900 border-[3px] rounded-[30px]">
          <h3 className="text-3xl text-slate-900 mb-4">Backend</h3>

          <div className="badge-container">
            <img
              src="https://img.shields.io/badge/Next-black?style=for-the-badge&amp;logo=next.js&amp;logoColor=white"
              alt="Next JS"
            />
            <img
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white"
              alt="NodeJS"
            />
            <img
              src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB"
              alt="Express.js"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white"
              alt="MongoDB"
            />
            <img
              src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens"
              alt="JWT"
            />
            <img
              src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white"
              alt="Postman"
            />
            <img
              src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&amp;logo=docker&amp;logoColor=white"
              alt="Docker"
            />

            <img
              src="https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&amp;logo=deno&amp;logoColor=white"
              alt="Deno JS"
            />
            <img
              src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&amp;logo=Cloudflare&amp;logoColor=white"
              alt="Cloudflare"
            />
            <img
              src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&amp;logo=vercel&amp;logoColor=white"
              alt="Vercel"
            />
            <img
              src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&amp;logo=bun&amp;logoColor=white"
              alt="Bun"
            />
          </div>
        </div>
        <div className="wrapper p-6 border-slate-900 border-[3px] rounded-[30px]">
          <h3 className="text-3xl text-slate-900 mb-4">Miscellaneous</h3>

          <div className="badge-container">
            <img
              src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&amp;logo=linux&amp;logoColor=black"
              alt="Linux"
            />
            <img
              src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&amp;logo=git&amp;logoColor=white"
              alt="Git"
            />
            <img
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white"
              alt="GitHub"
            />
            <img
              src="https://img.shields.io/badge/NeoVim-%2357A143.svg?&amp;style=for-the-badge&amp;logo=neovim&amp;logoColor=white"
              alt="Neovim"
            />
            <img
              src="https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&amp;logo=vim&amp;logoColor=white"
              alt="Vim"
            />
            <img
              src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&amp;logo=graphql&amp;logoColor=white"
              alt="GraphQL"
            />
            <img
              src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&amp;logo=gnu-bash&amp;logoColor=white"
              alt="Shell Script"
            />
            <img
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&amp;logo=python&amp;logoColor=ffdd54"
              alt="Python"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
