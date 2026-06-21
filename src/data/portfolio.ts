export interface Project {
  slug: string;
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
    slug: 'codestash',
    title: 'CodeStash',
    description:
      'A Reddit-meets-Stack-Overflow snippet manager with communities, comments, AI explanations, and VS Code integration.',
    longDescription:
      'CodeStash is a full-stack snippet manager that blends the social mechanics of Reddit with the technical depth of Stack Overflow. Sign in with JWT auth, drop a snippet into one of the topic-based communities (c/react, c/python, etc.), and let others upvote, comment, or save it for later. Posts support 10 languages with syntax highlighting, and you can create them three ways: paste code directly, upload a local file, or pull from any public GitHub repo, gist, or raw URL.\n\nThe headline feature is an AI explainer powered by Google\'s Gemini — hit "Explain this" on any snippet and the model returns a concise markdown breakdown with a relevant GitHub alert (NOTE/TIP/WARNING/CAUTION). There is also a VS Code integration that downloads the snippet with the correct extension and opens it in your editor via the vscode:// URI scheme. Rate-limited with Unkey, files routed through Cloudinary, search backed by MongoDB text indexes, and a clean React Query + Zustand frontend on Next.js 14 with shadcn and HeroUI components.',
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
    slug: 'spendsync',
    title: 'SpendSync',
    description:
      'A personal finance app for tracking income, expenses, and savings goals — with charts, CSV exports, multi-currency support, and a Stripe-powered premium tier.',
    longDescription:
      'SpendSync is a personal finance workspace built around three primitives: a wallet, transactions, and goals. Log income and expenses with categories and wallet types (Cash, Credit, Debit, Bank), attach photo receipts via Cloudinary, and watch the account balance update in real time. Set savings goals with targets, fund them from your balance (MongoDB transactions keep the books consistent), and watch the progress bars fill up — deleting a goal refunds the saved amount back to your account.\n\nThe Statistics page renders Chart.js doughnuts and bar charts that break down your income and expenses by week, month, and year. Export everything to CSV when tax season rolls around, switch between six currencies (USD, EUR, JPY, INR, AUD, CAD), or pop the command palette with Cmd+K to jump anywhere. Premium unlocks the insights dashboard via a one-time $30 Stripe checkout. The whole thing is Vite + React 18 + TypeScript on the frontend, Express + MongoDB on the backend, and shadcn/ui throughout.',
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
