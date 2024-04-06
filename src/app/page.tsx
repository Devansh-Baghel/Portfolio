import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { MdOutgoingMail as MailIcon } from "react-icons/md";
import Projects from "./components/Projects";
import TechStack from "./components/Stack";

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

      <TechStack />
    </main>
  );
}
