'use client';

import { VscGitStash as CodeStashIcon } from 'react-icons/vsc';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mt-32 p-6 text-slate-900">
      <ScrollReveal>
        <h3 className="projects-title mb-8 font-heading text-4xl">
          Selected Projects
        </h3>
      </ScrollReveal>

      <div id="projects-container" className="mb-6 flex flex-col gap-6">
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
          className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          More on github
          <LinkIcon />
        </a>
      </ScrollReveal>
    </section>
  );
}
