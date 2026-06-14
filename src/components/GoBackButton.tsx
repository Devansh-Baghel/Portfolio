'use client';

import { cn } from '@/lib/utils';
import { cardBase } from '@/utils/constants';

export default function GoBackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className={cn(
        'motion-preset-slide-right inline-block animate-blur-in-800 motion-delay-500 font-medium',
        cardBase,
        'px-6 py-3 text-lg',
      )}
    >
      Go Back
    </button>
  );
}
