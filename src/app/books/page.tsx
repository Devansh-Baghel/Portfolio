import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Glow from '@/components/Glow';
import { ArrowLeft } from 'lucide-react';
import { BsBook as BookIcon } from 'react-icons/bs';
import { IoBookOutline as ReadIcon } from 'react-icons/io5';
import books from '@/content/books.json';
import FloatingShape from '@/components/FloatingShape';

export const metadata: Metadata = {
  title: 'Books | Devansh Baghel',
  description: 'Books I am currently reading and have finished reading.',
  alternates: {
    canonical: './',
  },
};

type Book = (typeof books)[number];

function getStatusColor(status: Book['status']) {
  return status === 'reading'
    ? 'bg-lime-500 text-slate-900'
    : 'bg-slate-200 text-slate-700';
}

function getStatusIcon(status: Book['status']) {
  if (status === 'reading') return <BookIcon className="h-3 w-3" />;
  return <ReadIcon className="h-3 w-3" />;
}

export default function BooksPage() {
  const currentlyReading = books.filter((b) => b.status === 'reading');
  const alreadyRead = books
    .filter((b) => b.status === 'read')
    .sort((a, b) => {
      const dateA = a.dateFinished ?? '';
      const dateB = b.dateFinished ?? '';
      return dateB.localeCompare(dateA);
    });

  return (
    <main className="relative mx-auto min-h-screen sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px]">
      <div className="p-6 pt-14 text-slate-900 lg:px-20">
        <Image
          src="/shape-76.svg"
          height={300}
          width={300}
          alt="spinning blob"
          priority
          className="images glow absolute left-[-80px] top-[-120px] h-[400px] w-[400px] animate-spin opacity-50 animate-duration-[40000ms] animate-infinite animate-ease-in-out"
        />
        <Glow />

        <div className="mb-12">
          <Link
            href="/"
            className="motion-preset-slide-right inline-flex animate-blur-in-500 items-center gap-2 text-lg font-medium motion-delay-100 hover:text-lime-500"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Portfolio
          </Link>

          <h1 className="motion-preset-slide-right mt-6 animate-blur-in-600 font-heading text-[60px] leading-tight motion-delay-200 lg:text-[70px]">
            Books
          </h1>

          <p className="motion-preset-slide-right mt-4 animate-blur-in-700 text-xl motion-delay-300">
            What I&apos;m reading and what I&apos;ve read.
          </p>
        </div>

        <FloatingShape
          shapeUrl="/shapes/shape-85.svg"
          directionClass="right-0"
          amplitude={[100, 100, 30]}
          speed={0.2}
        />

        {currentlyReading.length > 0 && (
          <div className="mb-12">
            <h2 className="motion-preset-slide-right mb-6 font-heading text-3xl animate-blur-in-800 motion-delay-400">
              Currently Reading
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentlyReading.map((book, index) => (
                <div
                  key={book.title}
                  className={`blog-wrapper motion-preset-slide-right animate-blur-in-${800 + (index + 1) * 100} motion-delay-${500 + index * 100}`}
                >
                  <div className="flex flex-col rounded-[30px] border-[3px] border-slate-900 p-4 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                    <div className="flex gap-4">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        width={100}
                        height={150}
                        className="h-[150px] w-[100px] flex-shrink-0 rounded-xl object-cover border-2 border-slate-900"
                        unoptimized
                      />
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="line-clamp-2 text-xl font-bold leading-snug">
                            {book.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">{book.author}</p>
                        </div>
                        <span
                          className={`mt-2 inline-flex w-fit items-center gap-1.5 rounded-[20px] px-3 py-1 text-xs font-medium ${getStatusColor(book.status)}`}
                        >
                          {getStatusIcon(book.status)}
                          Reading
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {alreadyRead.length > 0 && (
          <div className="mb-12">
            <h2 className="motion-preset-slide-right mb-6 font-heading text-3xl animate-blur-in-1000">
              Already Read
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {alreadyRead.map((book, index) => (
                <div
                  key={book.title}
                  className={`blog-wrapper motion-preset-slide-right animate-blur-in-${1100 + index * 100}`}
                >
                  <div className="flex flex-col rounded-[30px] border-[3px] border-slate-900 p-4 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                    <div className="flex gap-4">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        width={100}
                        height={150}
                        className="h-[150px] w-[100px] flex-shrink-0 rounded-xl object-cover border-2 border-slate-900"
                        unoptimized
                      />
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="line-clamp-2 text-xl font-bold leading-snug">
                            {book.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">{book.author}</p>
                        </div>
                        <span
                          className={`mt-2 inline-flex w-fit items-center gap-1.5 rounded-[20px] px-3 py-1 text-xs font-medium ${getStatusColor(book.status)}`}
                        >
                          {getStatusIcon(book.status)}
                          Read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
