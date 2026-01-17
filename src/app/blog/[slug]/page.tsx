import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import Glow from '@/components/Glow';
import MDXContent from '@/components/MDXContent';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { format } from 'date-fns';
import Float from '@/components/fancy/blocks/float';
import FloatingShape from '@/components/FloatingShape';
import BlogFloatingShapes from '@/components/BlogFloatingShapes';

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
    title: `${post.title} | Devansh Baghel`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Devansh Baghel'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
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

  return (
    <main className="relative mx-auto min-h-screen sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px]">
      <div className="p-6 pt-14 text-slate-900 lg:px-20">
        {/* Background decorative element */}
        <Image
          src="/shape-76.svg"
          height={300}
          width={300}
          alt="spinning blob"
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
          <article className="motion-preset-slide-right animate-blur-in-900 motion-delay-500 backdrop-blur-sm rounded-[30px]">
          <div className="blog-wrapper rounded-[30px] border-[3px] border-slate-900 p-8 shadow-[4px_4px_0px_0px_#1e293b] lg:p-12">
            <MDXContent content={post.content} />
          </div>
        </article>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-[30px] border-2 border-slate-900 bg-slate-900 px-6 py-3 font-medium text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <ArrowLeft className="h-4 w-4" />
            More Posts
          </Link>
        </div>
        </BlogFloatingShapes>
      </div>
    </main>
  );
}
