import { type Project, projects } from '@/data/portfolio';

export async function getAllProjects(): Promise<Project[]> {
  try {
    return [...projects];
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    return projects.find((project) => project.slug === slug) ?? null;
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    return projects.map((project) => project.slug);
  } catch (error) {
    console.error('Error reading project slugs:', error);
    return [];
  }
}
