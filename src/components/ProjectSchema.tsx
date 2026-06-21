import type { Project } from '@/data/portfolio';

interface ProjectSchemaProps {
  project: Project;
  slug: string;
}

export default function ProjectSchema({ project, slug }: ProjectSchemaProps) {
  const projectUrl = `https://baghel.dev/projects/${slug}`;

  const creativeWork = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: projectUrl,
    image: `https://baghel.dev${project.previewImage}`,
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': projectUrl,
    },
    keywords: project.badges.map((badge) => badge.alt).join(', '),
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
        name: 'Projects',
        item: 'https://baghel.dev/#projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
