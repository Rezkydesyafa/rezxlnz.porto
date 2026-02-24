import { getWritings, readMDXFile } from '@/lib/mdx';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const writings = getWritings();
  return writings.map((writing) => ({
    slug: writing.slug,
  }));
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    'content',
    'writings',
    `${slug}.mdx`,
  );
  const { metadata, content } = readMDXFile(filePath);

  return (
    <article className='max-w-3xl flex flex-col gap-8 pb-32'>
      <div className='flex flex-col gap-6'>
        <Link
          href='/writings'
          className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors w-fit'
        >
          <ArrowLeft className='w-4 h-4' /> Back to Writings
        </Link>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug'>
            {metadata.title}
          </h1>
          <div className='flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500'>
            <div className='flex items-center gap-1.5'>
              <Calendar className='w-4 h-4' />
              <time>{metadata.date || 'Unknown Date'}</time>
            </div>
            {metadata.tags && (
              <div className='flex border-l border-gray-200 dark:border-gray-800 pl-4 gap-2'>
                {metadata.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className='px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-500 hover:prose-a:text-blue-600'>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
