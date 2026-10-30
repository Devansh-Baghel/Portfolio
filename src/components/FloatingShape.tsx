// src/components/FloatingShape.tsx
'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import Float from '@/components/fancy/blocks/float';

type FloatingShapeProps = {
  shapeUrl: string;
  directionClass: string;
  speed?: number;
  amplitude?: [number, number, number];
  style?: CSSProperties;
};

export default function FloatingShape({
  shapeUrl,
  directionClass,
  amplitude,
  speed,
  style,
}: FloatingShapeProps) {
  return (
    <Float speed={speed} amplitude={amplitude} className="images">
      <Image
        src={shapeUrl}
        height={100}
        width={100}
        alt=""
        draggable={false}
        style={style}
        className={`absolute glow-lite -z-10 h-[100px] w-[100px] pointer-events-none ${directionClass}`}
      />
    </Float>
  );
}
