'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { skillCategories } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { cardBase } from '@/utils/constants';

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900 relative z-10"
      style={{
        backgroundImage: 'url("/image224.webp")',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'repeat-y',
      }}
    >
      <ScrollReveal>
        <h3 className="tech-stack-title mb-4 font-heading text-4xl">
          Tech Stack <span className="hidden md:inline">/ Tools</span>
        </h3>
      </ScrollReveal>

      <div className="stack-wrapper flex grid-cols-[2.2fr_0.9fr] grid-rows-[1fr_1fr] flex-col gap-6 md:grid">
        {skillCategories.map((category, index) => {
          const isMisc = category.name === 'Misc.';
          return (
            <div
              key={category.name}
              className={
                isMisc
                  ? 'col-start-2 col-end-3 row-start-1 row-end-3 md:h-full'
                  : index === 0
                    ? 'col-start-1 col-end-2 row-start-1 row-end-2'
                    : 'col-start-1 col-end-2 row-start-2 row-end-3'
              }
            >
              <ScrollReveal delay={index * 0.15} className={isMisc ? 'h-full' : undefined}>
                <div className={cn('wrapper', cardBase, 'p-6', isMisc && 'md:h-full')}>
                  <h3 className="vertical mb-4 font-heading text-3xl">
                    {category.name}
                  </h3>

                  <TooltipProvider delayDuration={0}>
                    <div className="flex max-w-80 flex-wrap gap-4">
                      {category.skills.map((elm) => (
                        <Tooltip key={elm.path}>
                          <TooltipTrigger>
                            <Image
                              height={45}
                              width={45}
                              alt={elm.name}
                              src={`/skillicons/${elm.path}`}
                            />
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            {elm.name}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
