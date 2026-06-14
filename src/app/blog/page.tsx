import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Glow from '@/components/Glow';
import { Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/mdx';
import { format } from 'date-fns';
import FloatingShape from '@/components/FloatingShape';
import BlogIndexSchema from '@/components/BlogIndexSchema';
import { cn } from '@/lib/utils';
import { cardBase, buttonFilled } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on web development, programming, and building things on the internet.',
  alternates: {
    canonical: 'https://baghel.dev/blog',
  },
};

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();

  return (
    <main className="relative mx-auto min-h-screen sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px]">
      <BlogIndexSchema />
      {/* Rest of your component remains the same */}
      <div className="p-6 pt-14 text-slate-900 lg:px-20">
        <Image
          src="/shape-76.svg"
          height={300}
          width={300}
          alt=""
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
            Blog
          </h1>

          <p className="motion-preset-slide-right mt-4 animate-blur-in-700 text-xl motion-delay-300">
            Thoughts on web development, programming, and building things on the
            internet.
          </p>
        </div>

        <FloatingShape
          shapeUrl="/shapes/shape-85.svg"
          directionClass="right-0"
          amplitude={[100, 100, 30]}
          speed={0.2}
        />

        <div
          className="flex flex-col gap-8"
          id="blog-container"
          style={{
            backgroundImage: 'url("/backgrounds/Grad_17.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundRepeat: 'repeat-y',
          }}
        >
          {blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className="blog-wrapper motion-preset-slide-right animate-blur-in-800"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className={cn(cardBase, 'p-8')}>
                  <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </time>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mb-4 text-3xl font-semibold hover:text-lime-500">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mb-6 text-lg leading-relaxed text-slate-700">
                    {post.excerpt}
                  </p>

                  {post.tags.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-[20px] border-2 border-slate-900 bg-lime-500 px-3 py-1 text-sm font-medium text-slate-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className={cn(
                      buttonFilled,
                      'inline-flex items-center gap-2 px-6 py-2',
                    )}
                  >
                    Read More
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center text-slate-600">
              <p>No blog posts yet. Coming soon!</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            More posts coming soon! Follow me on{' '}
            <a
              href="https://twitter.com/bagheldotdev"
              target="_blank"
              className="underline underline-offset-2 hover:text-lime-500"
            >
              Twitter
            </a>{' '}
            for updates.
          </p>
        </div>
      </div>
    </main>
  );
}
