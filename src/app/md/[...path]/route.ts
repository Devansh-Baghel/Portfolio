import { createDualmarkRouteHandler } from '@dualmark/nextjs';
import { getAllBlogPosts } from '@/lib/mdx';

const handler = createDualmarkRouteHandler({
  siteUrl: 'https://baghel.dev',
  collections: {
    blog: {
      converter: 'blog',
      getEntries: async () => {
        const posts = await getAllBlogPosts();
        return posts.map((post) => ({
          id: post.slug,
          data: {
            title: post.title,
            description: post.excerpt,
            author: 'Devansh Baghel',
            publishedDate: new Date(post.date),
            modifiedDate: post.dateModified
              ? new Date(post.dateModified)
              : undefined,
            category: post.tags,
          },
          body: post.content,
        }));
      },
    },
  },
  staticPages: [
    {
      pattern: '/',
      render: () =>
        '# Devansh Baghel\n\nFull Stack Developer & Product Engineer. I help startups ship and scale web products across frontend, backend, payments, infrastructure, and SEO.\n\n- [Blog](/blog)\n- [GitHub](https://github.com/devansh-baghel)\n- [LinkedIn](https://linkedin.com/in/devanshbaghel)\n- [Twitter](https://twitter.com/bagheldotdev)\n- [Book a call](https://cal.com/baghel/15min)',
    },
    {
      pattern: '/blog',
      render: () =>
        '# Blog\n\nThoughts on web development, programming, and building things on the internet.',
    },
    {
      pattern: '/terms',
      render: () =>
        '# Terms & Conditions\n\nLast updated on 19-11-2024. These Terms constitute a binding agreement between Devansh Baghel and users of baghel.dev. By using the website you agree to these Terms. Governed by the laws of India, exclusive jurisdiction of courts in Greater Noida, Uttar Pradesh.',
    },
  ],
});

export const dynamic = 'force-static';
export const GET = handler.GET;
export const generateStaticParams = handler.generateStaticParams;
