'use client';

import { VscGitStash as CodeStashIcon } from 'react-icons/vsc';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { cardBase, buttonOutline } from '@/utils/constants';

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mt-32 p-6 text-slate-900">
      <ScrollReveal>
        <h3 className="projects-title mb-8 font-heading text-4xl">
          Selected Projects
        </h3>
      </ScrollReveal>

      <div
        id="projects-container"
        className="mb-6 flex flex-col gap-6"
        style={{
          backgroundImage: 'url("/Grad_02.webp")',
          backgroundSize: 'contain',
          backgroundPosition: 'top',
          backgroundRepeat: 'repeat-y',
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={index * 0.15}
            icon={
              project.title === 'CodeStash' ? (
                <CodeStashIcon className="text-green" />
              ) : undefined
            }
          />
        ))}
      </div>

      <ScrollReveal>
        <a
          href="https://github.com/devansh-baghel"
          target="_blank"
          className={cn('wrapper', cardBase, 'flex h-16 items-center justify-center gap-2 text-center text-[20px] font-medium')}
        >
          More on github
          <LinkIcon />
        </a>
      </ScrollReveal>
    </section>
  );
}
