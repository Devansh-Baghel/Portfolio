'use client';

import { useCallback, useEffect, useState } from 'react';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Project } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { buttonFilled, buttonOutline } from '@/utils/constants';

interface ProjectModalProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => api?.scrollTo(index),
    [api],
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          'max-h-[90vh] w-full max-w-3xl gap-0 overflow-y-auto rounded-[30px] border-[3px] border-slate-900 bg-white p-6 text-slate-900 shadow-[4px_4px_0px_0px_#1e293b] sm:rounded-[30px]',
        )}
      >
        <DialogTitle className="font-normal font-heading text-3xl">
          {project.title}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {project.description}
        </DialogDescription>

        <div className="mt-4">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {project.images.map((src, index) => (
                <CarouselItem key={src}>
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full rounded-[20px] border-[3px] border-slate-900 object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 border-[2px] border-slate-900 bg-white text-slate-900" />
            <CarouselNext className="right-3 border-[2px] border-slate-900 bg-white text-slate-900" />
          </Carousel>

          <div
            className="mt-4 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Carousel pagination"
          >
            {project.images.map((src, index) => {
              const isActive = index === current;
              return (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    'h-3 w-3 rounded-full border-[2px] border-slate-900 transition-all',
                    isActive
                      ? 'w-6 bg-slate-900'
                      : 'bg-white hover:bg-slate-200',
                  )}
                />
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          {project.longDescription}
        </p>

        <div className="mt-6">
          <h4 className="font-sans text-xl font-semibold">Tech stack</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <li
                key={badge.alt}
                className="rounded-full border-[2px] border-slate-900 bg-white px-3 py-1 text-sm font-medium text-slate-900"
              >
                {badge.alt}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-lg md:flex-row md:gap-4">
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
      </DialogContent>
    </Dialog>
  );
}
