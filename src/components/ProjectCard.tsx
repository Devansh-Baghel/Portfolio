'use client';

import type { ReactNode } from 'react';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import ScrollReveal from '@/components/ScrollReveal';
import type { Project } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { cardBase, buttonFilled, buttonOutline } from '@/utils/constants';

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
      <div className={cn('wrapper', cardBase, 'flex flex-col gap-4 p-6')}>
        <h3 className="flex gap-4 font-heading text-3xl">
          {project.title}
          {icon}
        </h3>
        <p className="text-xl">{project.description}</p>
        <img
          src={project.previewImage}
          alt={`${project.title} preview`}
          className="w-full rounded-[20px] border-[3px] border-slate-900 object-cover"
        />
        <div className="flex flex-col gap-2 text-lg md:flex-row md:gap-4">
          <a
            target="_blank"
            href={project.deployedUrl}
            className={cn(buttonFilled, 'flex items-center gap-2 px-6 py-1')}
          >
            Deployed site
            <LinkIcon className="inline h-[20px] w-[20px] text-white" />
          </a>
          <a
            target="_blank"
            href={project.sourceUrl}
            className={cn(buttonOutline, 'flex items-center gap-2 px-6 py-1')}
          >
            Source code
            <CodeIcon className="inline h-[17px] w-[17px]" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
