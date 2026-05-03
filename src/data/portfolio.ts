export interface Project {
  title: string;
  description: string;
  deployedUrl: string;
  sourceUrl: string;
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
    deployedUrl: 'https://codestash.baghel.dev',
    sourceUrl: 'https://github.com/devansh-baghel/codestash',
    badges: [
      { src: '/badges/typescript.svg', alt: 'TypeScript' },
      { src: '/badges/react.svg', alt: 'React' },
      { src: '/badges/nextjs.svg', alt: 'Next Js' },
      { src: '/badges/react_query.svg', alt: 'React Query' },
      { src: '/badges/tailwindcss.svg', alt: 'TailwindCSS' },
      { src: '/badges/mongodb.svg', alt: 'MongoDB' },
      { src: '/badges/node.svg', alt: 'NodeJS' },
      { src: '/badges/express.svg', alt: 'Express.js' },
    ],
  },
  {
    title: 'SpendSync',
    description:
      'An all in one financial planning and money tracking tool with a sleek and intuitive user interface.',
    deployedUrl: 'https://spendsync.baghel.dev',
    sourceUrl: 'https://github.com/devansh-baghel/spendsync',
    badges: [
      { src: '/badges/typescript.svg', alt: 'TypeScript' },
      { src: '/badges/react.svg', alt: 'React' },
      { src: '/badges/vite.svg', alt: 'Vite' },
      { src: '/badges/react_query.svg', alt: 'React Query' },
      { src: '/badges/tailwindcss.svg', alt: 'TailwindCSS' },
      { src: '/badges/mongodb.svg', alt: 'MongoDB' },
      { src: '/badges/node.svg', alt: 'NodeJS' },
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
