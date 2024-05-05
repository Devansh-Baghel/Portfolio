import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { MdOutgoingMail as MailIcon } from "react-icons/md";
import Projects from "./components/Projects";
import TechStack from "./components/Stack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <aside>
        <img src="/shape-76.svg" alt="" />
        <h1>Devansh Baghel</h1>
        <h3>Fullstack Developer</h3>
        <p>
          Hello there 👋, I&apos;m Devansh Baghel, and I build full-stack web
          apps with <a href="#tech-stack">modern tools</a>.
        </p>
        <button>Résumé</button>
        <a href="#contact">Contact me</a>

        <div>
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
