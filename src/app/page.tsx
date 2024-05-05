import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { MdOutgoingMail as MailIcon } from "react-icons/md";
import Projects from "./components/Projects";
import TechStack from "./components/Stack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white text-3xl hero md:max-w-[1400px] relative m-auto mb-[320vh]">
      <aside className="md:fixed text-slate-900 max-w-[600px]">
        <img
          src="/shape-76.svg"
          alt=""
          className="images absolute animate-spin animate-infinite animate-duration-[40000ms] animate-ease-in-out w-[400px] h-[400px] top-[-120px] left-[-80px]"
        />
        <h1 className="text-[2em] relative z-10 md:text-[3.5em] md:absolute left-6 md:top-10 top-10 leading-tight max-w-[80vw]">
          Devansh Baghel
        </h1>
        <h3 className="md:mt-[350px] relative z-10 mt-28 ml-6 sm:ml-10 md:ml-[50px] text-[0.9em] md:text-[38px] text-slate-800">
          Fullstack Developer
        </h3>
        <p className="md:ml-[50px] relative z-10 ml-6 sm:ml-10 text-xl mt-4">
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
        <button className="text-sm md:text-xl px-6 py-2 border-2 xl:border-[3px] font-medium border-slate-900 rounded-[30px] mt-6 md:ml-[50px] ml-6 sm:ml-10 bg-slate-900 text-white">
          Résumé
        </button>
        <a
          href="#contact"
          className="text-sm md:text-xl px-6 py-2 border-2 xl:border-[3px] font-medium border-slate-900 rounded-[30px] mt-4 ml-[20px] "
        >
          Contact me
        </a>

        <div className="mt-6 md:ml-[50px] ml-6 sm:ml-10 flex gap-4 items-center">
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
      <div className="md:w-[700px] md:h-[500px] absolute z-0 images top-[120vh] md:top-0 w-[60vh] md:right-0">
        <img src="/Grad_07.png" alt="" className="hidden xl:block" />
      </div>

      <Projects />

      <TechStack />

      <Contact />
    </main>
  );
}
