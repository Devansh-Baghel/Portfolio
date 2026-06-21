'use client';

import { ChevronRight as ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import ScrollReveal from '@/components/ScrollReveal';
import type { Project } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { buttonFilled, buttonOutline, cardBase } from '@/utils/constants';

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
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-heading text-3xl">
            {project.title}
            {icon}
          </h3>
          <div className="flex shrink-0 items-center gap-2 text-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.deployedUrl}
              className={cn(
                buttonOutline,
                'flex items-center gap-2 px-6 py-1 text-lg',
              )}
            >
              Deployed site
              <LinkIcon className="inline h-[20px] w-[20px]" />
            </a>
          </div>
        </div>
        <p className="text-xl">{project.description}</p>
        <img
          src={project.previewImage}
          alt={`${project.title} preview`}
          className="w-full rounded-[20px] border-[3px] border-slate-900 object-cover"
        />
        <Link
          href={`/projects/${project.slug}`}
          className={cn(
            buttonFilled,
            'flex w-full cursor-pointer items-center justify-center gap-2 px-6 py-2',
          )}
        >
          Project details
          <ChevronRightIcon className="inline h-[18px] w-[18px] text-white" />
        </Link>
      </div>
    </ScrollReveal>
  );
}
