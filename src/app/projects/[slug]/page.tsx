import { getProjects, readMDXFile } from '@/lib/mdx';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    'content',
    'projects',
    `${slug}.mdx`,
  );
  const { metadata, content } = readMDXFile(filePath);

  return (
    <article className='max-w-3xl flex flex-col gap-8 pb-32'>
      <div className='flex flex-col gap-6'>
        <Link
          href='/projects'
          className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors w-fit'
        >
          <ArrowLeft className='w-4 h-4' /> Back to Projects
        </Link>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug'>
            {metadata.title}
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-400'>
            {metadata.description}
          </p>

          <div className='flex flex-wrap items-center gap-4 mt-2'>
            {metadata.githubUrl && (
              <a
                href={metadata.githubUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
              >
                <Github className='w-4 h-4' /> Source Code
              </a>
            )}
            {metadata.liveUrl && (
              <a
                href={metadata.liveUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors'
              >
                Live Demo <ExternalLink className='w-4 h-4' />
              </a>
            )}
          </div>

          {metadata.tags && (
            <div className='flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800'>
              {metadata.tags.map((tag: string) => (
                <span
                  key={tag}
                  className='px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800/80 text-xs font-mono text-gray-600 dark:text-gray-400'
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-img:rounded-xl prose-a:text-blue-500 hover:prose-a:text-blue-600'>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
