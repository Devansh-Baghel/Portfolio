import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Glow from '@/components/Glow';
import GoBackButton from '@/components/GoBackButton';
import { cn } from '@/lib/utils';
import { cardStatic, buttonFilled } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    'The page you are looking for does not exist. Return to the homepage or explore other sections.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative mx-auto min-h-screen sm:max-w-[600px] lg:max-w-[1400px]">
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="relative max-w-[600px]">
          <Image
            src="/shape-76.svg"
            height={300}
            width={300}
            alt=""
            priority
            className="images glow absolute left-[-60px] top-[-80px] z-[-10] h-[300px] w-[300px] animate-spin opacity-50 animate-duration-[40000ms] animate-infinite animate-ease-in-out"
          />
          <Glow />

          <div
            className={cn(
              'wrapper',
              cardStatic,
              'p-8 text-slate-900 md:p-12',
            )}
          >
            <div className="text-center">
              <h1 className="motion-preset-slide-right animate-blur-in-500 font-heading text-[80px] leading-none md:text-[120px]">
                404
              </h1>

              <h2 className="motion-preset-slide-right mt-4 animate-blur-in-600 font-heading text-2xl motion-delay-200 md:text-3xl">
                Page Not Found
              </h2>

              <p className="motion-preset-slide-right mt-4 animate-blur-in-700 text-lg motion-delay-300 md:text-xl">
                Oops! The page you&apos;re looking for doesn&apos;t exist. It
                might have been moved, deleted, or you entered the wrong URL.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <Link
                  href="/"
                  className={cn(
                    'motion-preset-slide-right inline-block animate-blur-in-800 motion-delay-500',
                    buttonFilled,
                    'px-6 py-3 text-lg shadow-[4px_4px_0px_0px_#84cc16]',
                  )}
                >
                  Go Home
                </Link>

                <GoBackButton />
              </div>

              <div className="motion-delay-600 motion-preset-slide-right mt-8 animate-blur-in-900">
                <p className="mb-4 text-slate-600">
                  Or check out these sections:
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link
                    href="/#projects"
                    className="underline underline-offset-2 hover:text-lime-500"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/#tech-stack"
                    className="underline underline-offset-2 hover:text-lime-500"
                  >
                    Tech Stack
                  </Link>
                  <Link
                    href="/#contact"
                    className="underline underline-offset-2 hover:text-lime-500"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="underline underline-offset-2 hover:text-lime-500"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
