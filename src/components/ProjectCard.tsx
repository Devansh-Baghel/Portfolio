'use client';

import type { ReactNode } from 'react';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import ScrollReveal from '@/components/ScrollReveal';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  icon?: ReactNode;
  delay?: number;
}

export default function ProjectCard({
  project,
  icon,
  delay = 0,
}: ProjectCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
        <h3 className="flex gap-4 font-heading text-3xl">
          {project.title}
          {icon}
        </h3>
        <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
          <a
            target="_blank"
            href={project.deployedUrl}
            className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 bg-slate-900 px-6 py-1 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Deployed site
            <LinkIcon className="inline h-[20px] w-[20px] text-white" />
          </a>
          <a
            target="_blank"
            href={project.sourceUrl}
            className="flex items-center gap-2 rounded-[30px] border-[2px] border-slate-900 px-6 py-1 font-medium shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Source code
            <CodeIcon className="inline h-[17px] w-[17px]" />
          </a>
        </div>
        <div>
          <p className="mb-2 text-xl">{project.description}</p>
          <div className="badge-container">
            {project.badges.map((badge) => (
              <img key={badge.alt} src={badge.src} alt={badge.alt} />
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
