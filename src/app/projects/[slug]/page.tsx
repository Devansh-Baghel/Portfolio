import { ArrowLeft, ArrowUpRight, Briefcase, Mail } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaCodeBranch as CodeIcon } from 'react-icons/fa6';
import { LuExternalLink as LinkIcon } from 'react-icons/lu';
import Glow from '@/components/Glow';
import ProjectSchema from '@/components/ProjectSchema';
import type { Project } from '@/data/portfolio';
import { getAllProjectSlugs, getAllProjects, getProject } from '@/lib/projects';
import { getTechIcon } from '@/lib/techIcons';
import { cn } from '@/lib/utils';
import { buttonFilled, cardStatic } from '@/utils/constants';
import ProjectGallery from './ProjectGallery';

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `https://baghel.dev/projects/${slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: `https://baghel.dev/projects/${slug}`,
      authors: ['Devansh Baghel'],
      images: [
        {
          url: `https://baghel.dev${project.previewImage}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [`https://baghel.dev${project.previewImage}`],
    },
  };
}

function pickOtherProjects(current: Project, all: Project[]): Project[] {
  return all.filter((p) => p.slug !== current.slug);
}

function renderParagraphs(text: string) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph, index) => (
      <p key={index} className="mb-4 text-lg leading-relaxed last:mb-0">
        {paragraph}
      </p>
    ));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getAllProjects();
  const otherProjects = pickOtherProjects(project, allProjects);

  return (
    <main className="relative mx-auto min-h-screen sm:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px]">
      <ProjectSchema project={project} slug={slug} />
      <div className="p-6 pt-14 text-slate-900 lg:px-20">
        <Image
          src="/shape-76.svg"
          height={300}
          width={300}
          alt=""
          priority
          className="images glow absolute left-[-80px] top-[-120px] h-[400px] w-[400px] animate-spin opacity-50 animate-duration-[40000ms] animate-infinite animate-ease-in-out"
        />
        <Glow />

        <div className="mb-12">
          <Link
            href="/#projects"
            className="motion-preset-slide-right inline-flex animate-blur-in-500 items-center gap-2 text-lg font-medium motion-delay-100 hover:text-lime-500"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Projects
          </Link>

          <h1 className="motion-preset-slide-right mt-6 animate-blur-in-600 font-heading text-[40px] leading-tight motion-delay-200 lg:text-[50px]">
            {project.title}
          </h1>

          <p className="motion-preset-slide-right mt-4 animate-blur-in-700 text-lg text-slate-600 motion-delay-300 md:text-xl">
            {project.description}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.deployedUrl}
            className={cn(
              buttonFilled,
              'inline-flex items-center justify-center gap-2 px-6 py-3 text-lg',
            )}
          >
            Deployed site
            <LinkIcon className="inline h-5 w-5 text-white" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.sourceUrl}
            className={cn(
              'inline-flex items-center justify-center gap-2 rounded-[30px] border-[3px] border-slate-900 bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none',
            )}
          >
            <CodeIcon className="inline h-5 w-5" />
            Source code
          </a>
        </div>

        <ProjectGallery title={project.title} images={project.images} />

        {project.badges.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {project.badges.map((badge) => {
              const Icon = getTechIcon(badge.alt);
              return (
                <span
                  key={badge.alt}
                  className="inline-flex items-center gap-1.5 rounded-[20px] border-2 border-slate-900 bg-white px-3 py-1 text-sm font-medium text-slate-900"
                >
                  {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
                  {badge.alt}
                </span>
              );
            })}
          </div>
        )}

        <article
          className={cn('blog-wrapper', cardStatic, 'mt-12 p-8 lg:p-12')}
        >
          {renderParagraphs(project.longDescription)}
        </article>

        <aside className="mt-16 rounded-[30px] border-[3px] border-slate-900 bg-white p-8 text-center shadow-[4px_4px_0px_0px_#1e293b]">
          <h2 className="font-heading text-2xl text-slate-900 md:text-3xl">
            Want to see more?
          </h2>
          <p className="mt-3 text-base text-slate-700 md:text-lg">
            Browse more of my work, or get in touch to talk about your next
            project.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#projects"
              className={cn(
                buttonFilled,
                'inline-flex items-center gap-2 px-6 py-3',
              )}
            >
              <Briefcase className="h-4 w-4" />
              All projects
            </Link>
            <Link
              href="/#contact"
              className={cn(
                'inline-flex items-center gap-2 rounded-[30px] border-[3px] border-slate-900 bg-white px-6 py-3 font-medium text-slate-900 shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none',
              )}
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </Link>
          </div>
        </aside>

        {otherProjects.length > 0 && (
          <section className="mt-16" aria-labelledby="other-projects-heading">
            <h2
              id="other-projects-heading"
              className="mb-6 font-heading text-3xl text-slate-900"
            >
              Other projects
            </h2>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherProjects.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/projects/${other.slug}`}
                    className={cn(cardStatic, 'block h-full p-6')}
                  >
                    <h3 className="mb-2 text-xl font-semibold text-slate-900 hover:text-lime-600">
                      {other.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-700">
                      {other.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-lime-600">
                      View project
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link
                href="/#projects"
                className={cn(
                  buttonFilled,
                  'inline-flex items-center gap-2 px-6 py-3',
                )}
              >
                <ArrowLeft className="h-4 w-4" />
                All projects
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
