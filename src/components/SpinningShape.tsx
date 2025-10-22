'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function SpinningShape() {
  const searchParams = useSearchParams();
  const isFasterSpin = searchParams.get('spin') === 'faster';

  const spinDuration = isFasterSpin ? '1000ms' : '40000ms';

  return (
    <Image
      src="/shape-76.svg"
      height={400}
      width={400}
      alt=""
      priority
      className="images glow absolute left-[-80px] top-[-120px] z-[-10] h-[400px] w-[400px] animate-spin animate-infinite animate-ease-in-out"
      style={{ animationDuration: spinDuration }}
    />
  );
}
