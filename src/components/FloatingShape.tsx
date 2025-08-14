import Image from "next/image";
import Float from "./fancy/blocks/float";

export default function FloatingShape({ shapeUrl }: { shapeUrl: string }) {
  return (
    <Float speed={5} amplitude={[300, 300, 300]}>
      <Image
        src={shapeUrl}
        height={100}
        width={100}
        alt=""
        priority
        className="absolute right-[-20px] -z-10 h-[100px] w-[100px]"
      />
    </Float>
  );
}
