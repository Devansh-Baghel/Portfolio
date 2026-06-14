import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs, getAllBlogPosts } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import Glow from '@/components/Glow';
import MDXContent from '@/components/MDXContent';
import { Calendar, ArrowLeft, Clock, Briefcase, Mail } from 'lucide-react';
import { format } from 'date-fns';
import Float from '@/components/fancy/blocks/float';
import FloatingShape from '@/components/FloatingShape';
import BlogFloatingShapes from '@/components/BlogFloatingShapes';
import BlogPostSchema from '@/components/BlogPostSchema';
import { cn } from '@/lib/utils';
import { cardBase, cardStatic, buttonFilled } from '@/utils/constants';
import type { BlogPost } from '@/lib/mdx';

function pickRelatedPosts(
  current: BlogPost,
  all: BlogPost[],
  count = 2,
): BlogPost[] {
  const others = all.filter((p) => p.slug !== current.slug);
  if (others.length === 0) {
    return [];
  }

  const tagSet = new Set(current.tags);
  const scored = others.map((p) => ({
    post: p,
    overlap: p.tags.filter((t) => tagSet.has(t)).length,
  }));

  const hasOverlap = scored.some((s) => s.overlap > 0);
  if (!hasOverlap) {
    return others.slice(0, count);
  }

  return scored
    .sort((a, b) => {
      if (b.overlap !== a.overlap) {
        return b.overlap - a.overlap;
      }
      return a.post.date < b.post.date ? 1 : -1;
    })
    .slice(0, count)
    .map((s) => s.post);
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://baghel.dev/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://baghel.dev/blog/${slug}`,
      publishedTime: post.date,
      authors: ['Devansh Baghel'],
      images: [
        {
          url: post.image
            ? `https://baghel.dev${post.image}`
            : 'https://baghel.dev/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [
        post.image
          ? `https://baghel.dev${post.image}`
          : 'https://baghel.dev/og-image.png',
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = pickRelatedPosts(post, allPosts);

  return (
    <main className="relative mx-auto min-h-screen sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px]">
      <BlogPostSchema post={post} slug={slug} />
      <div className="p-6 pt-14 text-slate-900 lg:px-20">
        {/* Background decorative element */}
        <Image
          src="/shape-76.svg"
          height={300}
          width={300}
          alt=""
          priority
          className="images glow absolute left-[-80px] top-[-120px] h-[400px] w-[400px] animate-spin opacity-50 animate-duration-[40000ms] animate-infinite animate-ease-in-out"
        />
        <Glow />

        <BlogFloatingShapes bottomPadding={500}>
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/blog"
              className="motion-preset-slide-right inline-flex animate-blur-in-500 items-center gap-2 text-lg font-medium motion-delay-100 hover:text-lime-500"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Blog
            </Link>

            <h1 className="motion-preset-slide-right mt-6 animate-blur-in-600 font-heading text-[40px] leading-tight motion-delay-200 lg:text-[50px]">
              {post.title}
            </h1>

            <div className="motion-preset-slide-right mt-6 flex animate-blur-in-700 flex-wrap items-center gap-4 text-slate-600 motion-delay-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="motion-delay-400 motion-preset-slide-right mt-4 flex animate-blur-in-800 flex-wrap gap-2">
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
          </div>

          {/* Article Content */}
          <article
            itemScope
            itemType="https://schema.org/BlogPosting"
            className="motion-preset-slide-right animate-blur-in-900 motion-delay-500 backdrop-blur-sm rounded-[30px]"
          >
            <meta itemProp="headline" content={post.title} />
            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="author" content="Devansh Baghel" />
            <div
              itemProp="articleBody"
              className={cn('blog-wrapper', cardStatic, 'p-8 lg:p-12')}
            >
              <MDXContent content={post.content} />
            </div>
          </article>

          {/* End-of-post CTA */}
          <aside className="mt-12 rounded-[30px] border-[3px] border-slate-900 bg-white p-8 text-center shadow-[4px_4px_0px_0px_#1e293b]">
            <h2 className="font-heading text-2xl text-slate-900 md:text-3xl">
              Enjoyed this post?
            </h2>
            <p className="mt-3 text-base text-slate-700 md:text-lg">
              I help startups ship and scale web products end-to-end.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#projects"
                className={cn(
                  buttonFilled,
                  'inline-flex items-center gap-2 px-6 py-3',
                )}
              >
                <Briefcase className="h-4 w-4" />
                See my work
              </Link>
              <Link
                href="/#contact"
                className={cn(
                  'inline-flex items-center gap-2 rounded-[30px] border-[3px] border-slate-900 bg-white px-6 py-3 font-medium text-slate-900 shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none',
                )}
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Link>
            </div>
          </aside>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16" aria-labelledby="related-posts-heading">
              <h2
                id="related-posts-heading"
                className="mb-6 font-heading text-3xl text-slate-900"
              >
                More posts
              </h2>
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {relatedPosts.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/blog/${related.slug}`}
                      className={cn(cardBase, 'block h-full p-6')}
                    >
                      <div className="mb-3 flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={related.date}>
                          {format(new Date(related.date), 'MMM d, yyyy')}
                        </time>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-slate-900 hover:text-lime-600">
                        {related.title}
                      </h3>
                      <p className="text-base leading-relaxed text-slate-700">
                        {related.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link
                  href="/blog"
                  className={cn(
                    buttonFilled,
                    'inline-flex items-center gap-2 px-6 py-3',
                  )}
                >
                  <ArrowLeft className="h-4 w-4" />
                  All posts
                </Link>
              </div>
            </section>
          )}
        </BlogFloatingShapes>
      </div>
    </main>
  );
}
