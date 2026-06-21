import type { IconType } from 'react-icons';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiReactquery, SiVite } from 'react-icons/si';

export const techIcons: Record<string, IconType> = {
  TypeScript: BiLogoTypescript,
  React: FaReact,
  'Next.js': RiNextjsFill,
  'React Query': SiReactquery,
  TailwindCSS: RiTailwindCssFill,
  MongoDB: SiMongodb,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  Vite: SiVite,
};

export function getTechIcon(name: string): IconType | undefined {
  return techIcons[name];
}
