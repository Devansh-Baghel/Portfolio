import Link from 'next/link';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import { getAllBlogPosts } from '@/lib/mdx';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { cardBase, cardStatic } from '@/utils/constants';

const MAX_HOMEPAGE_POSTS = 3;

export default async function Blog() {
  const blogPosts = await getAllBlogPosts();
  const recentPosts = blogPosts.slice(0, MAX_HOMEPAGE_POSTS);

  return (
    <section
      id="blog"
      className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900 z-10 relative"
    >
      <h3 className="gitroll-title motion-preset-slide-right mb-4 font-heading text-4xl">
        Latest Posts
      </h3>

      <div className="flex flex-col gap-4 motion-preset-slide-right">
        {recentPosts.length > 0 ? (
          <>
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className={cn('wrapper', cardBase, 'p-6')}>
                  <h4 className="mb-2 text-xl font-bold">{post.title}</h4>
                  <p className="mb-4 text-slate-600">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}

            <Link
              href="/blog"
              className={cn(
                'wrapper',
                cardBase,
                'flex h-16 items-center justify-center gap-2 text-center text-[20px] font-medium',
              )}
            >
              View All Posts
              <LinkIcon />
            </Link>
          </>
        ) : (
          <div className={cn('wrapper', cardStatic, 'p-6 text-center')}>
            <p className="text-slate-600">No blog posts yet. Coming soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
