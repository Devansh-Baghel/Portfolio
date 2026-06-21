import { createLlmsTxtHandler } from '@dualmark/nextjs';

const handler = createLlmsTxtHandler({
  brandName: 'Devansh Baghel',
  description:
    'Personal portfolio and blog of Devansh Baghel — Full Stack Developer & Product Engineer.',
  sections: [
    {
      title: 'Pages',
      links: [
        {
          title: 'Home',
          href: 'https://baghel.dev/',
          description: 'Portfolio homepage with work, projects, and contact.',
        },
        {
          title: 'Blog',
          href: 'https://baghel.dev/blog',
          description:
            'Thoughts on web development, programming, and building things on the internet.',
        },
        {
          title: 'Terms',
          href: 'https://baghel.dev/terms',
          description: 'Terms and conditions for baghel.dev.',
        },
      ],
    },
    {
      title: 'Blog Posts',
      links: [
        {
          title: 'Cloudflare Is (Almost) All You Need',
          href: 'https://baghel.dev/blog/cloudflare-is-all-you-need',
          description:
            'How Cloudflare can replace most of your backend infrastructure.',
        },
        {
          title: 'Adding Rate Limiting to Express API with Unkey',
          href: 'https://baghel.dev/blog/rate-limiting-express-unkey',
          description: 'Implementing rate limiting in Express.js using Unkey.',
        },
        {
          title: 'Integrating Formbricks for User Feedback in CodeStash',
          href: 'https://baghel.dev/blog/formbricks-user-feedback-codestash',
          description:
            'Adding Formbricks user feedback surveys to a Next.js app.',
        },
      ],
    },
    {
      title: 'Projects',
      links: [
        {
          title: 'CodeStash',
          href: 'https://baghel.dev/projects/codestash',
          description:
            'A Reddit-meets-Stack-Overflow snippet manager with communities, comments, AI explanations, and VS Code integration.',
        },
        {
          title: 'SpendSync',
          href: 'https://baghel.dev/projects/spendsync',
          description:
            'A personal finance app for tracking income, expenses, and savings goals — with charts, CSV exports, multi-currency support, and a Stripe-powered premium tier.',
        },
      ],
    },
    {
      title: 'External',
      links: [
        {
          title: 'GitHub',
          href: 'https://github.com/devansh-baghel',
          description: 'Open source projects and contributions.',
        },
        {
          title: 'LinkedIn',
          href: 'https://linkedin.com/in/devanshbaghel',
          description: 'Professional profile and work history.',
        },
        {
          title: 'Twitter',
          href: 'https://twitter.com/bagheldotdev',
          description: 'Updates and tech thoughts.',
        },
        {
          title: 'Book a call',
          href: 'https://cal.com/baghel/15min',
          description: 'Schedule a 15-minute call.',
        },
      ],
    },
  ],
});

export const dynamic = 'force-static';
export const GET = handler.GET;
