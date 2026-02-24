import { getWritings } from '@/lib/mdx';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Writings - Mohamad Dwi Rezky Desyafa',
  description: 'Articles and thoughts on Software Development and AI.',
};

export default function WritingsPage() {
  const writings = getWritings().sort((a, b) => {
    if (new Date(a.metadata.date || '') > new Date(b.metadata.date || ''))
      return -1;
    return 1;
  });

  return (
    <div className='max-w-3xl flex flex-col gap-10'>
      <div className='flex flex-col gap-2'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors w-fit mb-4'
        >
          <ArrowLeft className='w-4 h-4' /> Back to Home
        </Link>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100'>
          Writings
        </h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Thoughts, tutorials, and insights on software engineering and AI.
        </p>
      </div>

      <div className='flex flex-col gap-6'>
        {writings.map((writing) => (
          <article
            key={writing.slug}
            className='flex flex-col gap-3 p-6 rounded-xl border border-gray-100 dark:border-gray-800/60 hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors'
          >
            <Link
              href={`/writings/${writing.slug}`}
              className='absolute inset-0 z-10'
            >
              <span className='sr-only'>View Article</span>
            </Link>

            <div className='flex items-center gap-2 text-xs font-medium text-gray-500'>
              <Calendar className='w-3.5 h-3.5' />
              <time>{writing.metadata.date || 'Unknown Date'}</time>
            </div>

            <h2 className='text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:underline decoration-2 underline-offset-4 decoration-gray-300 dark:decoration-gray-700'>
              {writing.metadata.title}
            </h2>

            {writing.metadata.description && (
              <p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-2'>
                {writing.metadata.description}
              </p>
            )}

            {writing.metadata.tags && (
              <div className='flex flex-wrap gap-2 mt-2 relative z-20'>
                {writing.metadata.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className='px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800/80 text-xs font-medium text-gray-600 dark:text-gray-400'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
