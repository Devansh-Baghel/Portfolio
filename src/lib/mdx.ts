import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  dateModified?: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  content: string;
  image?: string;
  published?: boolean;
}

function parseBlogPost(slug: string, fileContents: string): BlogPost {
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    dateModified: data.dateModified || undefined,
    excerpt: data.excerpt || '',
    readTime: data.readTime || '5 min read',
    tags: data.tags || [],
    content,
    image: data.image || undefined,
    published: data.published ?? true,
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        return parseBlogPost(slug, fileContents);
      })
      .filter((post) => post.published !== false)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return parseBlogPost(slug, fileContents);
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading blog slugs:', error);
    return [];
  }
}
