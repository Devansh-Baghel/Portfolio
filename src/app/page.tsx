import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { MdOutgoingMail as MailIcon } from "react-icons/md";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import Projects from "./components/Projects";
import TechStack from "./components/Stack";
import Contact from "./components/Contact";
import ScrollButton from "./components/ScrollButton";
import Image from "next/image";
import Glow from "./components/Glow";

export default function Home() {
  return (
    <main className="sm:max-w-[600px] mx-auto relative lg:max-w-[1400px]">
      <aside className="text-slate-900 pl-10 pt-14 pr-6 lg:fixed lg:pl-20 lg:max-w-[500px]">
        <Image
          src="/shape-76.svg"
          height={400}
          width={400}
          alt=""
          className="images glow absolute z-[-10] w-[400px] h-[400px] top-[-120px] left-[-80px] animate-spin animate-infinite animate-duration-[40000ms] animate-ease-in-out"
        />
        <Glow />
        <h1
          className="text-[60px] mt-4 leading-tight lg:text-[70px] motion-preset-slide-right"
          id="my-name"
        >
          Devansh Baghel
        </h1>
        <h2
          className="text-[27px] mt-20 lg:text-[32px] motion-preset-slide-right motion-delay-200"
          id="profession"
        >
          Fullstack Developer
        </h2>
        <p
          className="text-xl mt-4 motion-preset-slide-right motion-delay-300"
          id="more-info"
        >
          Hello there 👋, I&apos;m Devansh Baghel, and I build full-stack web
          apps with{" "}
          <a
            href="#tech-stack"
            className="underline cursor-pointer underline-offset-2 "
          >
            modern tools
          </a>
          .
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm motion-preset-slide-right motion-delay-500 inline-block md:text-xl px-6 py-2 border-2 xl:border-[3px] font-medium border-slate-900 rounded-[30px] mt-6 bg-slate-900 text-white"
        >
          Résumé
        </a>
        <a
          href="#contact"
          className="text-sm motion-preset-slide-right motion-delay-500 inline-block md:text-xl px-6 py-2 border-2 xl:border-[3px] font-medium border-slate-900 rounded-[30px] ml-[20px]"
        >
          Contact me
        </a>

        <div className="mt-6 flex gap-4 items-center motion-preset-slide-right motion-delay-500">
          <a
            href="https://github.com/devansh-baghel"
            target="_blank"
            aria-label="Github"
          >
            <GithubIcon className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/devanshbaghel"
            target="_blank"
            aria-label="Linkedin"
          >
            <LinkedinIcon className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/DevanshBaghel5"
            target="_blank"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-8 h-8" />
          </a>
          <a href="mailto:hello@baghel.dev" target="_blank" aria-label="Email">
            <MailIcon className="w-10 h-10" />
          </a>
        </div>
      </aside>

      <ScrollButton />

      <div className="lg:absolute lg:right-0 lg:max-w-[700px]">
        <Image
          src="/Grad_07.webp"
          alt="Backgrouno gradient"
          width={700}
          height={700}
          className="hidden lg:block images motion-preset-slide-left motion-duration-1500"
        />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </main>
  );
}
