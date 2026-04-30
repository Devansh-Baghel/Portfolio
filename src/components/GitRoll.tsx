'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function GitRoll() {
  return (
    <section
      id="gitroll"
      className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900 relative z-10"
    >
      <ScrollReveal>
        <h3 className="tech-stack-title mb-4 font-heading text-4xl">
          GitRoll Profile
        </h3>
      </ScrollReveal>

      <ScrollReveal>
        <a
          href="https://gitroll.io/profile/uEYBeQmpK8LQdxyyFmiTOicIEPrG2"
          target="_blank"
          className="group relative"
        >
          <img
            src="/gitroll_18.avif"
            className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none"
            alt="GitRoll Profile Badge"
          />
        </a>
      </ScrollReveal>
    </section>
  );
}
