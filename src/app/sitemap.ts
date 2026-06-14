import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllBlogPosts();

  const blogSitemaps = blogPosts.map((post) => ({
    url: `https://baghel.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://baghel.dev',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://baghel.dev/blog',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogSitemaps,
    {
      url: 'https://baghel.dev/terms',
      lastModified: new Date('2024-11-19T23:26:36.000Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
