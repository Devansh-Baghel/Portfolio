export default function BlogIndexSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://baghel.dev/blog#webpage',
    url: 'https://baghel.dev/blog',
    name: 'Blog | Devansh Baghel',
    description:
      'Thoughts on web development, programming, and building things on the internet.',
    isPartOf: {
      '@id': 'https://baghel.dev/#website',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
