import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { MdOutgoingMail as MailIcon } from "react-icons/md";
import Projects from "./components/Projects";
import TechStack from "./components/Stack";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white text-3xl hero max-w-[1400px] relative m-auto mb-[320vh]">
      <aside className="md:fixed text-slate-900 max-w-[600px]">
        <img
          src="/shape-76.svg"
          alt=""
          className="images absolute animate-spin animate-infinite animate-duration-[40000ms] animate-ease-in-out w-[400px] h-[400px] top-[-120px] left-[-80px]"
        />
        <h1 className="text-[2em] relative z-10 md:text-[3.5em] md:absolute left-6 md:top-10 top-10 leading-tight">
          Devansh Baghel
        </h1>
        <h3 className="md:mt-[350px] relative z-10 mt-28 ml-6 sm:ml-10 md:ml-[50px] text-[0.9em] md:text-[38px] text-slate-800">
          Fullstack Developer
        </h3>
        <p className="md:ml-[50px] relative z-10 ml-6 sm:ml-10 text-xl mt-4">
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
        <button className="text-sm md:text-xl px-6 py-2 border-2 xl:border-[3px] font-medium border-slate-900 rounded-[30px] mt-6 md:ml-[50px] ml-6 sm:ml-10 bg-slate-900 text-white">
          Résumé
        </button>
        <button className="text-sm md:text-xl px-6 py-2 border-2 xl:border-[3px] font-medium border-slate-900 rounded-[30px] mt-4 ml-[20px] ">
          Contact me
        </button>

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

      <section
        className="md:absolute md:right-12 top-[320vh] flex flex-col gap-6 mt-24 ml-6 sm:ml-10 md:ml-0 mb-80"
        id="contact"
      >
        <h3 className="text-4xl mb-4 text-slate-900">Contact me</h3>
        <form className="flex flex-col gap-6 text-xl placeholder:text-xl">
          <input
            className="wrapper p-6 md:h-20 border-slate-900 border-[3px] rounded-[30px] md:w-[600px] placeholder:text-xl placeholder:text-slate-800"
            required
            placeholder="Your name"
            id="name"
          />
          <input
            className="wrapper p-6 md:h-20 border-slate-900 border-[3px] rounded-[30px] md:w-[600px] placeholder:text-xl placeholder:text-slate-800"
            required
            placeholder="Your email"
            id="email"
            type="email"
          />
          <textarea
            className="wrapper p-6 md:h-32 border-slate-900 border-[3px] rounded-[30px] md:w-[600px] placeholder:text-xl placeholder:text-slate-800"
            required
            placeholder="Your message"
            id="message"
          />

          <button className="text-sm md:text-xl px-6 py-4 border-[2px] font-medium border-slate-900 rounded-[30px] bg-slate-900 text-white">
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
