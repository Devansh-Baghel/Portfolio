'use client';

import AOSComponent from '@/lib/aos';
import Link from 'next/link';
import Image from 'next/image';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import { BsBook as BookIcon } from 'react-icons/bs';
import { IoBookOutline as ReadIcon } from 'react-icons/io5';
import books from '@/content/books.json';

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

export default function Books() {
  const currentlyReading = books.filter((b) => b.status === 'reading').slice(0, 2);
  const recentlyRead = books
    .filter((b) => b.status === 'read')
    .sort((a, b) => {
      const dateA = a.dateFinished ?? '';
      const dateB = b.dateFinished ?? '';
      return dateB.localeCompare(dateA);
    })
    .slice(0, 4);
  const displayBooks = [...currentlyReading, ...recentlyRead];

  return (
    <AOSComponent>
      <section
        id="books"
        className="relative z-10 mt-32 p-6 text-slate-900"
      >
        <h3
          data-aos="fade-left"
          className="books-title motion-preset-blur-right mb-8 font-heading text-4xl"
        >
          Books
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" data-aos="fade-left">
          {displayBooks.map((book) => (
            <div
              key={book.title}
              className="wrapper flex flex-col rounded-[30px] border-[3px] border-slate-900 p-4 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <div className="flex gap-4">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={80}
                  height={120}
                  className="h-[120px] w-[80px] flex-shrink-0 rounded-xl object-cover border-2 border-slate-900"
                  unoptimized
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="line-clamp-2 text-lg font-bold leading-snug">
                      {book.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">{book.author}</p>
                  </div>
                  <span
                    className={`mt-2 inline-flex w-fit items-center gap-1.5 rounded-[20px] px-3 py-1 text-xs font-medium ${getStatusColor(book.status)}`}
                  >
                    {getStatusIcon(book.status)}
                    {book.status === 'reading' ? 'Reading' : 'Read'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/books"
          data-aos="fade-left"
          className="wrapper mt-4 flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          View All Books
          <LinkIcon />
        </Link>
      </section>
    </AOSComponent>
  );
}
