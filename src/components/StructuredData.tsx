export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://baghel.dev/#person',
        name: 'Devansh Baghel',
        url: 'https://baghel.dev',
        image: 'https://baghel.dev/profile-image.jpg', // Add your profile image
        jobTitle: 'Product Engineer',
        description:
          'Product Engineer who helps startups ship and scale web products end-to-end — from frontend and backend to payments, infrastructure, SEO, and observability.',
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance',
        },
        knowsAbout: [
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'Node.js',
          'MongoDB',
          'Product Engineering',
          'Infrastructure',
          'SEO',
          'Payments',
          'Observability',
        ],
        sameAs: [
          'https://github.com/devansh-baghel',
          'https://linkedin.com/in/devanshbaghel',
          'https://twitter.com/bagheldotdev',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://baghel.dev/#website',
        url: 'https://baghel.dev',
        name: 'Devansh Baghel',
        description:
          'Devansh Baghel — Product Engineer. A working log of products shipped, problems owned, and systems maintained.',
        publisher: {
          '@id': 'https://baghel.dev/#person',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://baghel.dev/#webpage',
        url: 'https://baghel.dev',
        name: 'Devansh Baghel - Product Engineer | Building Products End-to-End',
        isPartOf: {
          '@id': 'https://baghel.dev/#website',
        },
        about: {
          '@id': 'https://baghel.dev/#person',
        },
        description:
          'Devansh Baghel is a Product Engineer who helps startups ship and scale web products end-to-end — from frontend and backend to payments, infrastructure, SEO, and observability.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
