import type { BlogPost } from '@/lib/mdx';

interface BlogPostSchemaProps {
  post: BlogPost;
  slug: string;
}

export default function BlogPostSchema({ post, slug }: BlogPostSchemaProps) {
  const postUrl = `https://baghel.dev/blog/${slug}`;

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      '@id': 'https://baghel.dev/#person',
      name: 'Devansh Baghel',
      url: 'https://baghel.dev',
    },
    publisher: {
      '@type': 'Person',
      '@id': 'https://baghel.dev/#person',
      name: 'Devansh Baghel',
      url: 'https://baghel.dev',
    },
    image: 'https://baghel.dev/og-image.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://baghel.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://baghel.dev/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
