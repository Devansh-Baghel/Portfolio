# AGENTS.md

Instructions for AI coding agents working in this repository.

## Project Overview

Personal portfolio website (baghel.dev) built with Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS, and shadcn/ui. Deployed to Cloudflare Pages. Contains two packages:

- **Root**: Next.js portfolio site
- **`email-worker/`**: Cloudflare Worker (Hono) for contact form emails via Resend

## Build / Lint / Test Commands

```bash
# Development
bun dev                    # Start Next.js dev server
bun build                  # Production build
bun start                  # Start production server

# Linting & Formatting (Biome — NOT ESLint/Prettier)
bun run lint               # Check for lint + format issues
bun run format:check       # Same as lint
bun run format:write       # Auto-fix formatting

# Email Worker
bun run dev                # From email-worker/ directory
bun run deploy             # Deploy worker via Wrangler
bun run test               # Run Vitest (email-worker only, no tests exist yet)

# Single test (email-worker, if tests are added)
cd email-worker && bunx vitest run path/to/test.spec.ts

# No test framework configured for the main Next.js app
```

## Code Style

### Formatting (biome.json)

- 2-space indentation
- Single quotes in JS/TS, double quotes in JSX
- Trailing commas everywhere
- Semicolons always
- Line width: 80 characters
- Bracket spacing enabled
- Imports auto-organized by Biome

### Imports

Use the `@/` path alias for all `src/` imports — never relative paths across directories.

```ts
import { cn } from '@/lib/utils';
import Glow from '@/components/Glow';
import type { Metadata } from 'next';
```

Import order (Biome auto-organizes):
1. `type` imports
2. Third-party packages
3. `@/` aliased internal imports

Icon imports should use descriptive aliases:

```ts
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { Calendar } from 'lucide-react';
```

### Types

- TypeScript `strict: true` — do not use `any` unless absolutely necessary (e.g., MDX component overrides)
- Use `interface` for component props and extensible object shapes
- Use `type` for inline types, utility types, and cross-cutting definitions
- Prefer `import type` for type-only imports
- Use `Promise<>` return types for async functions

### Naming Conventions

- **Components**: PascalCase files and exports (`Contact.tsx`, `FloatingShape.tsx`)
- **Utilities/lib**: camelCase files (`mdx.ts`, `utils.ts`)
- **Hooks**: camelCase with `use` prefix (`useFaviconRotation.tsx`)
- **Pages**: Follow Next.js App Router conventions (`page.tsx`, `layout.tsx`, `not-found.tsx`)
- **CSS classes**: Tailwind utilities inline; shared class strings go in `src/utils/constants.ts`
- **shadcn/ui components**: Live in `src/components/ui/`, imported via `@/components/ui/`

### Component Patterns

- Server components by default — add `'use client'` only when needed (state, effects, event handlers)
- Default exports for components: `export default function Contact() { ... }`
- Named exports for utilities, types, and shared functions
- Use `cn()` from `@/lib/utils` for conditional/merged class names

### Error Handling

- Wrap filesystem/IO operations in try/catch, log errors with `console.error`, return safe defaults (empty arrays, null)
- Client-side: use `react-hot-toast` toast.promise for async operation feedback
- Worker-side: return error responses with appropriate HTTP status codes

### Styling

- Tailwind CSS utilities directly in JSX
- shadcn/ui (new-york style) components in `src/components/ui/`
- Custom animations via `tailwindcss-animated`, `tailwindcss-motion`, `tailwindcss-animate`
- Dark mode via `class` strategy
- Custom fonts: `inter` (body), `chromate` (headings) via CSS variables

### Key Libraries

| Purpose | Library |
|---|---|
| UI Components | shadcn/ui + Radix UI |
| Icons | react-icons + lucide-react |
| Animations | AOS, tailwindcss-animated, motion |
| Blog/MDX | gray-matter + next-mdx-remote/rsc |
| HTTP Client | axios |
| Analytics | PostHog |
| Email | Resend (via Cloudflare Worker) |
| Deployment | Cloudflare Pages / Wrangler |

## Git Commits

**Do NOT create git commits without explicit user permission.** Always ask before committing changes. The user decides when and how changes should be committed.

## File Structure

```
src/
├── app/           # Next.js App Router (pages, layouts, API routes)
├── components/    # React components (PascalCase)
│   └── ui/        # shadcn/ui primitives
├── content/blog/  # MDX blog posts
├── hooks/         # Custom React hooks
├── lib/           # Utilities (cn, mdx helpers, AOS wrapper)
└── utils/         # Shared constants
email-worker/      # Cloudflare Worker sub-project (separate package)
```
