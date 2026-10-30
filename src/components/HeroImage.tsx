'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const GridDistortion = dynamic(() => import('@/components/GridDistortion'), {
  ssr: false,
});

function HeroImage() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div className="images hidden lg:block h-[700px] w-[700px]">
      {isDesktop && (
        <GridDistortion
          imageSrc="/Grad_07.webp"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
        />
      )}
    </div>
  );
}

export default HeroImage;
