export interface Project {
  name: string;
  desc: string;
  deployed: string;
  source: string;
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const name = 'Devansh Baghel';
export const tagline = 'Fullstack Developer';
export const bio =
  "Hello there, I'm Devansh Baghel, and I build full-stack web apps with modern tools.";

export const socials = {
  github: 'https://github.com/devansh-baghel',
  linkedin: 'https://linkedin.com/in/devanshbaghel',
  twitter: 'https://twitter.com/bagheldotdev',
  email: 'mailto:hello@baghel.dev',
};

export const resumeUrl = 'https://baghel.dev/resume.pdf';

export const projects: Project[] = [
  {
    name: 'CodeStash',
    desc: 'The best way to save, store and share your code snippets.',
    deployed: 'https://codestash.baghel.dev',
    source: 'https://github.com/devansh-baghel/codestash',
    tech: [
      'TypeScript',
      'React',
      'Next.js',
      'React Query',
      'TailwindCSS',
      'MongoDB',
      'Node.js',
      'Express.js',
    ],
  },
  {
    name: 'SpendSync',
    desc: 'An all in one financial planning and money tracking tool with a sleek and intuitive user interface.',
    deployed: 'https://spendsync.baghel.dev',
    source: 'https://github.com/devansh-baghel/spendsync',
    tech: [
      'TypeScript',
      'React',
      'Vite',
      'React Query',
      'TailwindCSS',
      'MongoDB',
      'Node.js',
      'Express.js',
    ],
  },
];

export const experience: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'HypedX - by Digital Gimmick',
    duration: 'Nov 2025 - Present',
    location: 'Remote',
    responsibilities: [
      'Maintained and developed features for a full-stack YouTube views marketplace using Next.js frontend and Node.js/TypeScript backend',
      'Implemented AI-powered features using OpenRouter and Vercel AI SDK for automated tag generation and content optimization',
      'Built automated MongoDB backup system with cron jobs (6-hour intervals) and Cloudflare R2 integration',
      'Handled API rate-limiting on all tools of the platform',
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'tui-portfolio',
    title: 'I made my portfolio run in a terminal',
    date: '2026-03-27',
    readTime: '5 min read',
    tags: ['OpenTUI', 'React', 'Terminal', 'TUI', 'Portfolio', 'Bun'],
    excerpt:
      'My portfolio website is fine, but what if you could view it in a terminal? I built a TUI version using OpenTUI and React that runs right in your terminal.',
  },
  {
    slug: 'formbricks-user-feedback-codestash',
    title: 'Integrating Formbricks for User Feedback in CodeStash',
    date: '2025-01-15',
    readTime: '7 min read',
    tags: ['Formbricks', 'Next.js', 'User Feedback', 'CodeStash', 'AI', 'Surveys'],
    excerpt:
      'Learn how to add in-app user feedback surveys using Formbricks to gather insights about AI-generated content and improve user experience in your Next.js applications.',
  },
  {
    slug: 'rate-limiting-express-unkey',
    title: 'Adding Rate Limiting to Express API with Unkey',
    date: '2024-12-15',
    readTime: '8 min read',
    tags: ['Express', 'Rate Limiting', 'API', 'Node.js', 'Unkey'],
    excerpt:
      "Learn how to implement rate limiting in your Express API using Unkey's ratelimiter to prevent abuse and manage resource usage effectively.",
  },
];

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      'Next.js',
      'TypeScript',
      'JavaScript',
      'React',
      'React Query',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    name: 'Backend',
    skills: [
      'Cloudflare Workers',
      'Node.js',
      'Bun',
      'Express.js',
      'MongoDB',
      'SQLite',
      'Postman',
      'Docker',
      'Heroku',
    ],
  },
  {
    name: 'Misc',
    skills: [
      'Cloudflare',
      'Linux',
      'Git',
      'GitHub',
      'Bash',
      'Figma',
    ],
  },
];

export const emailWorkerUrl = 'https://email-worker.dbaghel.workers.dev/api/email';
