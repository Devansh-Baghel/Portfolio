export interface Project {
  title: string;
  description: string;
  longDescription: string;
  deployedUrl: string;
  sourceUrl: string;
  previewImage: string;
  images: string[];
  badges: { src: string; alt: string }[];
}

export interface WorkEntry {
  role: string;
  company: string;
  date: string;
  location: string;
  bullets: string[];
}

export interface SkillCategory {
  name: string;
  skills: { path: string; name: string }[];
}

export const projects: Project[] = [
  {
    title: 'CodeStash',
    description: 'The best way to save, store and share your code snippets.',
    longDescription:
      'CodeStash is a full-stack snippet manager built for developers who want a single, reliable home for the code they reach for every day. Snippets are organized with tags and a fast keyboard-driven search, sync across devices in real time, and can be shared with a single link when you need to drop a useful trick into a thread or DM. It started as a personal tool and grew into something my friends actually use to keep their own snippet libraries in one place.',
    deployedUrl: 'https://codestash.baghel.dev',
    sourceUrl: 'https://github.com/devansh-baghel/codestash',
    previewImage: '/projects/codestash/c1.png',
    images: Array.from(
      { length: 9 },
      (_, i) => `/projects/codestash/c${i + 1}.png`,
    ),
    badges: [
      { src: '/badges/typescript.svg', alt: 'TypeScript' },
      { src: '/badges/react.svg', alt: 'React' },
      { src: '/badges/nextjs.svg', alt: 'Next.js' },
      { src: '/badges/react_query.svg', alt: 'React Query' },
      { src: '/badges/tailwindcss.svg', alt: 'TailwindCSS' },
      { src: '/badges/mongodb.svg', alt: 'MongoDB' },
      { src: '/badges/node.svg', alt: 'Node.js' },
      { src: '/badges/express.svg', alt: 'Express.js' },
    ],
  },
  {
    title: 'SpendSync',
    description:
      'An all in one financial planning and money tracking tool with a sleek and intuitive user interface.',
    longDescription:
      'SpendSync is a personal finance workspace that pulls budgeting, expense tracking, and goal planning into one calm, focused interface. The goal was to skip the spreadsheet tax — every screen is built to answer a specific question (where is my money going, am I on track this month, can I afford this) in under a few seconds. Charts are interactive and the underlying data is always a click away, so the app is useful for both at-a-glance reviews and end-of-month deep dives.',
    deployedUrl: 'https://spendsync.baghel.dev',
    sourceUrl: 'https://github.com/devansh-baghel/spendsync',
    previewImage: '/projects/spendsync/s1.png',
    images: Array.from(
      { length: 11 },
      (_, i) => `/projects/spendsync/s${i + 1}.png`,
    ),
    badges: [
      { src: '/badges/typescript.svg', alt: 'TypeScript' },
      { src: '/badges/react.svg', alt: 'React' },
      { src: '/badges/vite.svg', alt: 'Vite' },
      { src: '/badges/react_query.svg', alt: 'React Query' },
      { src: '/badges/tailwindcss.svg', alt: 'TailwindCSS' },
      { src: '/badges/mongodb.svg', alt: 'MongoDB' },
      { src: '/badges/node.svg', alt: 'Node.js' },
      { src: '/badges/express.svg', alt: 'Express.js' },
    ],
  },
];

export const workExperience: WorkEntry[] = [
  {
    role: 'Full Stack Developer',
    company: 'HypedX - by Digital Gimmick',
    date: 'Nov 2025 - Present',
    location: 'Remote',
    bullets: [
      'Maintained and developed features for a full-stack YouTube views marketplace using Next.js frontend and Node.js/TypeScript backend',
      'Implemented AI-powered features using OpenRouter and Vercel AI SDK for automated tag generation and content optimization',
      'Built automated MongoDB backup system with cron jobs (6-hour intervals) and Cloudflare R2 integration for cloud storage with automated cleanup policies',
      'Handled API rate-limiting on all tools of the platform',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { path: 'next.svg', name: 'Next.js' },
      { path: 'ts.svg', name: 'TypeScript' },
      { path: 'js.svg', name: 'JavaScript' },
      { path: 'react.svg', name: 'React' },
      { path: 'react_query.svg', name: 'React Query' },
      { path: 'tailwindcss.svg', name: 'Tailwind CSS' },
      { path: 'html.svg', name: 'HTML' },
      { path: 'css.svg', name: 'CSS' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { path: 'workers.svg', name: 'Cloudflare Workers' },
      { path: 'node.svg', name: 'Node.js' },
      { path: 'bun.svg', name: 'Bun' },
      { path: 'express.svg', name: 'Express.js' },
      { path: 'mongodb.svg', name: 'MongoDB' },
      { path: 'sqlite.svg', name: 'SQLite' },
      { path: 'postman.svg', name: 'Postman' },
      { path: 'docker.svg', name: 'Docker' },
      { path: 'heroku.svg', name: 'Heroku' },
    ],
  },
  {
    name: 'Misc.',
    skills: [
      { path: 'cloudflare.svg', name: 'Cloudflare' },
      { path: 'linux.svg', name: 'Linux' },
      { path: 'git-light.svg', name: 'Git' },
      { path: 'github.svg', name: 'GitHub' },
      { path: 'bash.svg', name: 'Bash' },
      { path: 'figma.svg', name: 'Figma' },
    ],
  },
];

export const githubYears = [2025, 2024, 2023];
