import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { MdOutgoingMail as MailIcon } from "react-icons/md";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import Projects from "@/components/Projects";
import TechStack from "@/components/Stack";
import Contact from "@/components/Contact";
import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";
import Glow from "@/components/Glow";
import GitRoll from "@/components/GitRoll";
import Github from "@/components/Github";
import Blog from "@/components/Blog";
import EasterEggLogs from "@/components/EasterEgg";
import FloatingShape from "@/components/FloatingShape";
import HeroImage from "@/components/HeroImage";
import { Suspense } from "react";
import SpinningShape from "@/components/SpinningShape";
import WorkExperience from "@/components/WorkExperience";
import VisitorCounter from "@/components/analytics/VisitorCounter";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { buttonFilled, cardBase } from "@/utils/constants";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const isBlackAndWhite = params.bw === "true";

  const filterClass = cn(
    "transition-[filter] duration-[5000ms] ease-in-out",
    isBlackAndWhite && "grayscale",
  );

  return (
    <main className="relative mx-auto sm:max-w-[600px] lg:max-w-[1400px]">
      <aside
        className={cn(
          "text-slate-900 pl-10 pr-6 pt-14 sticky lg:fixed lg:max-w-[500px] lg:pl-20",
          filterClass,
        )}
      >
        <Suspense
          fallback={
            <Image
              src="/shape-76.svg"
              height={400}
              width={400}
              alt="spinning blob"
              priority
              className="images glow absolute left-[-80px] top-[-120px] z-[-10] h-[400px] w-[400px] animate-spin animate-duration-[40000ms] animate-infinite animate-ease-in-out"
            />
          }
        >
          <SpinningShape />
        </Suspense>
        <Glow />
        <h1
          className="motion-preset-slide-right mt-4 animate-blur-in-500 font-heading text-[60px] leading-tight lg:text-[70px]"
          id="my-name"
        >
          Devansh Baghel
        </h1>

        <h2
          className="motion-preset-slide-right mt-20 animate-blur-in-600 font-heading text-[27px] motion-delay-200 lg:text-[32px]"
          id="profession"
        >
          Full Stack Developer
          <br />& Product Engineer
        </h2>

        <p
          className="motion-preset-slide-right mt-2 animate-blur-in-700 text-base font-medium text-slate-500 motion-delay-300"
          id="role"
        >
          Building products end-to-end.
        </p>

        <p
          className="motion-preset-slide-right mt-4 animate-blur-in-700 text-xl motion-delay-300"
          id="more-info"
        >
          Hello there 👋, I&apos;m Devansh Baghel, and I help startups ship and
          scale web products — from frontend and backend to payments,
          infrastructure, and SEO.{" "}
          {/*<a
            href="#work"
            className="cursor-pointer underline underline-offset-2 hover:text-lime-500"
          >
            See how I work
          </a>
          .*/}
        </p>

        <a
          href="https://cal.com/baghel/15min"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "motion-preset-slide-right mt-6 inline-block !animate-blur-in-800 motion-delay-500 md:text-xl xl:border-[3px]",
            buttonFilled,
            "px-6 py-2 text-sm shadow-[4px_4px_0px_0px_#84cc16]",
          )}
        >
          Book a call
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "motion-preset-slide-right ml-[20px] inline-block !animate-blur-in-800 motion-delay-500 font-medium md:text-xl",
            cardBase,
            "px-6 py-2 text-sm",
          )}
        >
          Résumé
        </a>

        <div className="motion-preset-slide-right mt-6 flex animate-blur-in-900 items-center gap-4 motion-delay-500">
          <a
            href="https://github.com/devansh-baghel"
            target="_blank"
            aria-label="Github"
          >
            <GithubIcon className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/devanshbaghel"
            target="_blank"
            aria-label="Linkedin"
          >
            <LinkedinIcon className="h-8 w-8" />
          </a>
          <a
            href="https://twitter.com/bagheldotdev"
            target="_blank"
            aria-label="Twitter"
          >
            <TwitterIcon className="h-8 w-8" />
          </a>
          <a href="mailto:hello@baghel.dev" target="_blank" aria-label="Email">
            <MailIcon className="h-10 w-10" />
          </a>
        </div>
        <VisitorCounter />
      </aside>

      <ScrollButton />

      <div
        className={cn("lg:absolute lg:right-0 lg:max-w-[700px]", filterClass)}
      >
        <HeroImage />
        <EasterEggLogs />
        <Suspense>
          <WorkExperience />
        </Suspense>
        <FloatingShape
          shapeUrl="/shapes/shape-81.svg"
          directionClass="left-[-20px] bottom-[-20px]"
          amplitude={[40, 100, 30]}
          speed={0.2}
        />
        <Projects />
        <FloatingShape
          shapeUrl="/shapes/shape-77.svg"
          directionClass="left-[-20px] bottom-[-20px]"
          amplitude={[40, 100, 30]}
          speed={0.2}
        />
        <TechStack />
        <FloatingShape
          shapeUrl="/shapes/custom/shape-86-green.svg"
          directionClass="right-0"
          amplitude={[100, 100, 30]}
          speed={0.2}
        />
        <Github />
        <FloatingShape
          shapeUrl="/shapes/shape-79.svg"
          directionClass="left-[-20px] bottom-[-20px]"
          amplitude={[40, 100, 30]}
          speed={0.2}
        />
        <ScrollReveal>
          <Blog />
        </ScrollReveal>
        <FloatingShape
          shapeUrl="/shapes/shape-85.svg"
          directionClass="right-0"
          amplitude={[100, 100, 30]}
          speed={0.2}
        />
        <GitRoll />
        <FloatingShape
          shapeUrl="/shapes/shape-80.svg"
          directionClass="left-[-20px] bottom-[-20px]"
          amplitude={[40, 100, 30]}
          speed={0.2}
        />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
