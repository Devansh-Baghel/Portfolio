'use client';

import { useInView } from 'motion/react';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

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

export default function DeferredCalendar({
  username,
  year,
}: DeferredCalendarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '300px', once: true });

  return (
    <div
      ref={ref}
      className="disable-scrollbar flex wrapper min-h-[170px] items-center justify-center"
    >
      {inView && (
        <GitHubCalendar
          username={username}
          colorScheme="light"
          year={year}
          transformData={(contributions) => contributions.toReversed()}
        />
      )}
    </div>
  );
}
