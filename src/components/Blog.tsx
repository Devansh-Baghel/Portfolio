import AOSComponent from "@/lib/aos";
import Link from "next/link";
import { LuExternalLink as LinkIcon } from "react-icons/lu";
import { getAllBlogPosts } from "@/lib/mdx";
import { format } from "date-fns";

export default async function Blog() {
  const blogPosts = await getAllBlogPosts();
  const latestPost = blogPosts[0];

  return (
    <AOSComponent>
      <section
        id="blog"
        className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900"
      >
        <h3 className="gitroll-title mb-4 text-4xl" data-aos="fade-left">
          Latest Posts
        </h3>

        <div className="flex flex-col gap-4" data-aos="fade-left">
          {latestPost ? (
            <>
              <Link href={`/blog/${latestPost.slug}`}>
                <div className="wrapper rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  <h4 className="mb-2 text-xl font-medium">
                    {latestPost.title}
                  </h4>
                  <p className="mb-4 text-slate-600">
                    {latestPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{format(new Date(latestPost.date), 'MMM d, yyyy')}</span>
                    <span>•</span>
                    <span>{latestPost.readTime}</span>
                  </div>
                </div>
              </Link>

              <Link
                href="/blog"
                className="wrapper flex h-16 items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 text-center text-[20px] font-medium shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                View All Posts
                <LinkIcon />
              </Link>
            </>
          ) : (
            <div className="wrapper rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] text-center">
              <p className="text-slate-600">No blog posts yet. Coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </AOSComponent>
  );
}
