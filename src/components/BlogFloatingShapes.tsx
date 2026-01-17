// src/components/BlogFloatingShapes.tsx
'use client';

import { useEffect, useRef, useState } from "react";
import FloatingShape from "./FloatingShape";

const SHAPES = [
  { shapeUrl: "/shapes/shape-81.svg", amplitude: [40, 100, 30] as const, speed: 0.2 },
  { shapeUrl: "/shapes/shape-77.svg", amplitude: [40, 100, 30] as const, speed: 0.2 },
  { shapeUrl: "/shapes/custom/shape-86-green.svg", amplitude: [100, 100, 30] as const, speed: 0.2 },
  { shapeUrl: "/shapes/shape-79.svg", amplitude: [40, 100, 30] as const, speed: 0.2 },
  { shapeUrl: "/shapes/shape-85.svg", amplitude: [100, 100, 30] as const, speed: 0.2 },
  { shapeUrl: "/shapes/shape-80.svg", amplitude: [40, 100, 30] as const, speed: 0.2 },
];

type ShapeSpec = {
  shapeUrl: string;
  amplitude: [number, number, number];
  speed: number;
  side: "left" | "right";
  yFrac: number; // 0..1 (stable)
};

type Placement = ShapeSpec & {
  key: string;
  top: number; // px (derived)
};

function randInt(rng: () => number, min: number, max: number) {
  return Math.floor(rng() * (max - min + 1)) + min;
}

function hashSeed(str: string) {
  // small deterministic hash -> uint32
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithRng<T>(arr: T[], rng: () => number) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function BlogFloatingShapes({
  children,
  bottomPadding = 500,
  minTop = 160,
  shapeSize = 100,
  seed, // pass slug here for stability across remounts (optional but recommended)
}: {
  children: React.ReactNode;
  bottomPadding?: number;
  minTop?: number;
  shapeSize?: number;
  seed?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const specRef = useRef<ShapeSpec[] | null>(null);
  const [placements, setPlacements] = useState<Placement[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Create stable RNG (either seeded by slug, or “random once per mount”)
    const rng =
      seed != null ? mulberry32(hashSeed(seed)) : mulberry32(Math.floor(Math.random() * 2 ** 32));

    // Generate spec ONCE
    if (!specRef.current) {
      const count = randInt(rng, 4, 6);
      const picked = shuffleWithRng(SHAPES, rng).slice(0, count);

      specRef.current = picked.map((s) => ({
        shapeUrl: s.shapeUrl,
        amplitude: [...s.amplitude] as [number, number, number],
        speed: s.speed,
        side: rng() < 0.5 ? "left" : "right",
        yFrac: rng(), // stable 0..1
      }));
    }

    const updatePositions = () => {
      const h = el.scrollHeight;

      // “4000 -> max ~3500” rule
      const maxTop = Math.max(minTop, h - bottomPadding - shapeSize);

      const next = (specRef.current ?? []).map((spec, i) => {
        const top = minTop + spec.yFrac * (maxTop - minTop);

        return {
          ...spec,
          top,
          key: `${seed ?? "no-seed"}-${spec.shapeUrl}-${i}`, // stable key
        };
      });

      setPlacements(next);
    };

    updatePositions();

    const ro = new ResizeObserver(() => {
      // Reposition only; do NOT regenerate spec
      updatePositions();
    });
    ro.observe(el);

    return () => ro.disconnect();
  }, [bottomPadding, minTop, shapeSize, seed]);

  return (
    <div ref={ref} className="relative">
      {/* Shapes layer (behind content) */}
      {placements.map((p) => (
        <FloatingShape
          key={p.key}
          shapeUrl={p.shapeUrl}
          amplitude={p.amplitude}
          speed={p.speed}
          directionClass={p.side === "left" ? "left-[-20px]" : "right-0"}
          style={{ top: `${p.top}px` }}
        />
      ))}

      {/* Content layer (above shapes) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
