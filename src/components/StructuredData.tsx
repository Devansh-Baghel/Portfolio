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
        jobTitle: 'Full Stack Developer',
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
          'Full Stack Development',
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
        name: 'Devansh Baghel Portfolio',
        description:
          'Full Stack Developer Portfolio showcasing modern web applications',
        publisher: {
          '@id': 'https://baghel.dev/#person',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://baghel.dev/#webpage',
        url: 'https://baghel.dev',
        name: 'Devansh Baghel - Full Stack Developer Portfolio',
        isPartOf: {
          '@id': 'https://baghel.dev/#website',
        },
        about: {
          '@id': 'https://baghel.dev/#person',
        },
        description:
          'Portfolio showcasing full-stack web development projects using React, Next.js, TypeScript, and modern technologies',
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
