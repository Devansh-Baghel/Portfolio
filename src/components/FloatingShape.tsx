import Image from "next/image";
import Float from "./fancy/blocks/float";

type FloatingShapeProps = {
  shapeUrl: string;
  directionClass: string;
  speed?: number;
  amplitude?: [number, number, number];
};

export default function FloatingShape({
  shapeUrl,
  directionClass,
  amplitude,
  speed,
}: FloatingShapeProps) {
  return (
    <Float speed={speed} amplitude={amplitude}>
      <svg width="0" height="0" id="glow__svg__lite">
        <filter id="glow_lite">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="3"
            result="glow__svg__blur"
            id="glow__svg__res"
          />
          <feColorMatrix
            type="saturate"
            in="glow__svg__blur"
            values="2"
            result="glow__svg__sat"
          />
          <feBlend
            id="glow__svg__resBlend"
            in="SourceGraphic"
            in2="glow__svg__sat"
          />
        </filter>
      </svg>
      <Image
        src={shapeUrl}
        height={100}
        width={100}
        alt=""
        priority
        className={`absolute ${directionClass} glow-lite -z-10 h-[100px] w-[100px]`}
      />
    </Float>
  );
}
