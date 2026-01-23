import { FaGithub as GithubIcon } from 'react-icons/fa';
import { FaLinkedin as LinkedinIcon } from 'react-icons/fa';
import { MdOutgoingMail as MailIcon } from 'react-icons/md';
import { FaXTwitter as TwitterIcon } from 'react-icons/fa6';
import Projects from '@/components/Projects';
import TechStack from '@/components/Stack';
import Contact from '@/components/Contact';
import ScrollButton from '@/components/ScrollButton';
import Image from 'next/image';
import Glow from '@/components/Glow';
import GitRoll from '@/components/GitRoll';
import Github from '@/components/Github';
import Blog from '@/components/Blog';
import EasterEggLogs from '@/components/EasterEgg';
import FloatingShape from '@/components/FloatingShape';
import HeroImage from '@/components/HeroImage';
import { Suspense } from 'react';
import SpinningShape from '@/components/SpinningShape';
import WorkExperience from '@/components/WorkExperience';
import VisitorCounter from '@/components/analytics/VisitorCounter';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const isBlackAndWhite = params.bw === "true";

  const filterClass = cn(
    "transition-[filter] duration-[5000ms] ease-in-out",
    isBlackAndWhite && "grayscale"
  );

  return (
    <main className="relative mx-auto sm:max-w-[600px] lg:max-w-[1400px]">
      <aside
        className={cn(
          "pl-10 pr-6 pt-14 sticky lg:fixed lg:max-w-[500px] lg:pl-20",
          filterClass
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
          Fullstack Developer
        </h2>

        <p
          className="motion-preset-slide-right mt-4 animate-blur-in-700 text-xl motion-delay-300"
          id="more-info"
        >
          Hello there 👋, I&apos;m Devansh Baghel, and I build full-stack web
          apps with{' '}
          <a
            href="#tech-stack"
            className="cursor-pointer underline underline-offset-2 hover:text-lime-500"
          >
            modern tools
          </a>
          .
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="motion-preset-slide-right mt-6 inline-block !animate-blur-in-800 rounded-[30px] border-2 border-slate-900 bg-slate-900 px-6 py-2 text-sm font-medium text-white shadow-[4px_4px_0px_0px_#84cc16] transition-all duration-200 motion-delay-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-xl xl:border-[3px]"
        >
          Résumé
        </a>
        <a
          href="#contact"
          className="motion-preset-slide-right ml-[20px] inline-block !animate-blur-in-800 rounded-[30px] border-[3px] border-slate-900 px-6 py-2 text-sm font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 motion-delay-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-xl"
        >
          Contact me
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
        {/*
        <div className="mt-4 motion-preset-slide-right animate-blur-in-1000 motion-delay-600">
          <LatestCommit />
        </div> */}

        <VisitorCounter />
      </aside>

      <ScrollButton />

      <div className={cn(
        "lg:absolute lg:right-0 lg:max-w-[700px]", filterClass
      )}>
        <HeroImage />
        <EasterEggLogs />
        <WorkExperience />
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
        <Blog />
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
