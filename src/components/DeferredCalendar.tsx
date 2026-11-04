'use client';

import { useInView } from 'motion/react';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { cardBase } from '@/utils/constants';

const GitHubCalendar = dynamic(
  () =>
    import('react-github-calendar').then((m) => ({
      default: m.GitHubCalendar,
    })),
  { ssr: false },
);

interface DeferredCalendarProps {
  username: string;
  year: number;
}

function toLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function DeferredCalendar({
  username,
  year,
}: DeferredCalendarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '300px', once: true });

  return (
    <div
      ref={ref}
      className={cn(
        'disable-scrollbar flex wrapper',
        cardBase,
        'p-6',
        'min-h-[170px] items-center justify-center',
      )}
    >
      {inView && (
        <GitHubCalendar
          username={username}
          colorScheme="light"
          year={year}
          transformData={(contributions) => {
            const today = toLocalDateString(new Date());
            return contributions.filter((c) => c.date <= today).toReversed();
          }}
        />
      )}
    </div>
  );
}
