'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface ProjectGalleryProps {
  title: string;
  images: string[];
}

export default function ProjectGallery({ title, images }: ProjectGalleryProps) {
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

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={src}>
              <img
                src={src}
                alt={`${title} screenshot ${index + 1}`}
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
        {images.map((src, index) => {
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
                isActive ? 'w-6 bg-slate-900' : 'bg-white hover:bg-slate-200',
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
