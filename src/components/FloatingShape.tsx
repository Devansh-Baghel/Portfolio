// src/components/FloatingShape.tsx
'use client';

import type { CSSProperties } from "react";
import Image from "next/image";
import Float from "@/components/fancy/blocks/float";

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
      <svg width="0" height="0" id="glowsvg-lite">
        <filter id="glow-lite">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="glowsvgblur" />
          <feColorMatrix type="saturate" in="glowsvgblur" values="2" result="glowsvgsat" />
          <feBlend in="SourceGraphic" in2="glowsvgsat" />
        </filter>
      </svg>

      <Image
        src={shapeUrl}
        height={100}
        width={100}
        alt=""
        priority
        draggable={false}
        style={style}
        className={`absolute glow-lite -z-10 h-[100px] w-[100px] pointer-events-none ${directionClass}`}
      />
    </Float>
  );
}
