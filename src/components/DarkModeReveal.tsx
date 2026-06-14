'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import GhostCursor from '@/components/GhostCursor';

export default function DarkModeReveal() {
  const searchParams = useSearchParams();
  const isDarkMode = searchParams.get('darkmode') === 'true';

  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  const handlePointerMove = useCallback((e: PointerEvent) => {
    setCursorPos({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, []);

  useEffect(() => {
    if (!isDarkMode) return;
    document.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });
    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, [isDarkMode, handlePointerMove]);

  if (!isDarkMode) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#0f172a',
          maskImage: `radial-gradient(circle 180px at ${cursorPos.x}% ${cursorPos.y}%, transparent 0%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle 180px at ${cursorPos.x}% ${cursorPos.y}%, transparent 0%, black 100%)`,
        }}
      />
      <GhostCursor
        color="#ffffff"
        brightness={1.2}
        trailLength={40}
        inertia={0.6}
        grainIntensity={0.03}
        bloomStrength={0.15}
        bloomRadius={0.8}
        bloomThreshold={0.02}
        edgeIntensity={0}
        fadeDelayMs={800}
        fadeDurationMs={1200}
        zIndex={41}
        trackingTarget="document"
      />
    </div>
  );
}
