import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { MdOutgoingMail as MailIcon } from "react-icons/md";
import Projects from "./components/Projects";
import TechStack from "./components/Stack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="sm:max-w-[600px] mx-auto relative lg:max-w-[1400px]">
      <aside className="text-slate-900 pl-10 pt-14 pr-6 lg:fixed lg:pl-20 lg:max-w-[500px]">
        <img
          src="/shape-76.svg"
          alt=""
          className="images absolute z-[-10] w-[400px] h-[400px] top-[-120px] left-[-80px] animate-spin animate-infinite animate-duration-[40000ms] animate-ease-in-out"
        />
        <h1 className="text-[60px] mt-4 leading-tight lg:text-[70px]">
          Devansh Baghel
        </h1>
        <h3 className="text-[27px] mt-20 lg:text-[32px]">
          Fullstack Developer
        </h3>
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

      <div className="lg:absolute lg:right-0 lg:max-w-[700px]">
        <img src="/Grad_07.png" alt="" className="hidden lg:block images" />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </main>
  );
}
