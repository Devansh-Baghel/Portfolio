'use client';

import DeferredCalendar from '@/components/DeferredCalendar';
import ScrollReveal from '@/components/ScrollReveal';
import { githubYears } from '@/data/portfolio';

export default function Github() {
  return (
    <section
      id="github"
      className="relative z-10 mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900"
    >
      <ScrollReveal>
        <h3 className="gitroll-title mb-4 font-heading text-4xl">
          Commit History
        </h3>
      </ScrollReveal>

      <div className="flex flex-col gap-6">
        {githubYears.map((year, index) => (
          <ScrollReveal key={year} delay={index * 0.15}>
            <DeferredCalendar username="Devansh-Baghel" year={year} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
