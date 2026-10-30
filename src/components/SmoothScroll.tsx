'use client';

import Lenis from 'lenis';
import { ReactNode, useEffect } from 'react';

function wantsSmoothScroll() {
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!wantsSmoothScroll()) return;

    let rafId: number | null = null;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
