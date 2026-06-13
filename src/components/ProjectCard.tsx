'use client';

import { useState, type ReactNode } from 'react';
import { LuExternalLink as LinkIcon, LuInfo as InfoIcon } from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import ProjectModal from '@/components/ProjectModal';
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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ScrollReveal delay={delay}>
      <div className={cn('wrapper', cardBase, 'flex flex-col gap-4 p-6')}>
        <h3 className="flex gap-4 font-heading text-3xl">
          {project.title}
          {icon}
        </h3>
        <p className="text-xl">{project.description}</p>
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
        <img
          src={project.previewImage}
          alt={`${project.title} preview`}
          className="w-full rounded-[20px] border-[3px] border-slate-900 object-cover"
        />
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className={cn(
            buttonFilled,
            'flex w-full cursor-pointer items-center justify-center gap-2 px-6 py-2',
          )}
        >
          Learn more
          <InfoIcon className="inline h-[18px] w-[18px] text-white" />
        </button>
      </div>
      <ProjectModal
        project={project}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </ScrollReveal>
  );
}
