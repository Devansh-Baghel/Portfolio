import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { MdOutgoingMail as MailIcon } from "react-icons/md";
import Projects from "./components/Projects";
import TechStack from "./components/Stack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="">
      <aside className="text-slate-900 pt-6 pl-6">
        <img 
        src="/shape-76.svg" 
        alt="" 
        className="absolute z-[-10] w-[400px] h-[400px] top-[-120px] left-[-80px] animate-spin animate-infinite animate-duration-[40000ms] animate-ease-in-out" 
        
        />
        <h1 className="text-[60px] mt-4 leading-tight">Devansh Baghel</h1>
        <h3 className="text-[27px] mt-20">Fullstack Developer</h3>
        <p className="text-xl mt-4">
          Hello there 👋, I&apos;m Devansh Baghel, and I build full-stack web
          apps with{" "}
          <a
            href="#tech-stack"
            className="underline cursor-pointer underline-offset-2"
          >
            modern tools
          </a>
          .
        </p>
        <button className="text-sm md:text-xl px-6 py-2 border-2 xl:border-[3px] font-medium border-slate-900 rounded-[30px] mt-6 bg-slate-900 text-white">
          Résumé
        </button>
        <a
          href="#contact"
          className="text-sm md:text-xl px-6 py-2 border-2 xl:border-[3px] font-medium border-slate-900 rounded-[30px] ml-[20px]"
        >
          Contact me
        </a>

        <div className="mt-6 flex gap-4 items-center">
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
      <div>
        <img src="/Grad_07.png" alt="" />
      </div>

      <Projects />

      <TechStack />

      <Contact />
    </main>
  );
}
