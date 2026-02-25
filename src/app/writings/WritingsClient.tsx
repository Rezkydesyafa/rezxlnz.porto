'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PenTool, Hash, Filter, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WritingsClient({
  initialWritings,
}: {
  initialWritings: any[];
}) {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags from all writings
  const allTags = Array.from(
    new Set(initialWritings.flatMap((w) => w.metadata.tags || [])),
  ).slice(0, 5); // Limit to top 5 for the aside

  // Filter and sort the writings
  const displayedWritings = initialWritings
    .filter((w) =>
      selectedTag ? w.metadata.tags?.includes(selectedTag) : true,
    )
    .sort((a, b) => {
      const dateA = new Date(a.metadata.date || '').getTime();
      const dateB = new Date(b.metadata.date || '').getTime();
      if (isNaN(dateA) || isNaN(dateB)) return 0;
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  // Format date helper (e.g., 'OCT 24, 2024')
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date
        .toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
        .toUpperCase();
    } catch {
      return dateString;
    }
  };

  return (
    <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 pb-20'>
      {/* Main Content */}
      <div className='flex-1 max-w-2xl flex flex-col gap-10'>
        {/* Header Section */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
            Writing
          </h1>
          <p className='text-xs font-light text-gray-500 dark:text-gray-400 leading-relaxed'>
            Selected works and experiments.
          </p>
        </div>

        {/* List Section */}
        <div className='flex flex-col mt-4 border-b border-gray-100 dark:border-gray-800/60'>
          {displayedWritings.length > 0 ? (
            displayedWritings.map((writing) => (
              <Link
                key={writing.slug}
                href={`/writings/${writing.slug}`}
                className='group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12 py-5 sm:py-6 border-t border-gray-100 dark:border-gray-800/60 transition-colors hover:bg-gray-50/50 dark:hover:bg-white/[0.02]'
              >
                <div className='w-32 shrink-0'>
                  <time className='text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500'>
                    {formatDate(writing.metadata.date || '')}
                  </time>
                </div>
                <div className='flex-1'>
                  <h2 className='text-[15px] font-medium text-gray-900 dark:text-gray-100 leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors'>
                    {writing.metadata.title}
                  </h2>
                </div>
              </Link>
            ))
          ) : (
            <div className='py-8 text-sm text-gray-500 text-center border-t border-gray-100 dark:border-gray-800/60'>
              No writings found for the selected tag.
            </div>
          )}
        </div>
      </div>

      {/* Connect/Filters Aside */}
      <aside className='w-full lg:w-48 xl:w-56 shrink-0 flex flex-col gap-8 lg:mt-6'>
        <div className='hidden lg:flex w-full justify-end'>
          <div className='w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 items-center justify-center p-1'>
            <div className='w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>
              <PenTool className='w-4 h-4 text-gray-400' strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 items-end mt-4'>
          {/* Sorting Control */}
          <div className='flex flex-col gap-3 items-end'>
            <h3 className='text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500 flex items-center gap-1.5'>
              Sort By <Filter className='w-3 h-3' />
            </h3>
            <div className='relative min-w-[120px] z-20'>
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className='w-full flex items-center justify-between gap-2 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-[10px] uppercase font-mono tracking-widest py-1.5 px-3 rounded hover:border-gray-300 dark:hover:border-gray-700 transition-colors'
              >
                <span>{sortOrder}</span>
                <ChevronDown
                  className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isSortOpen && (
                  <>
                    <div
                      className='fixed inset-0 z-40'
                      onClick={() => setIsSortOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className='absolute top-full right-0 mt-1 w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded shadow-lg z-50 overflow-hidden'
                    >
                      <button
                        onClick={() => {
                          setSortOrder('newest');
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-right px-3 py-2 text-[10px] uppercase font-mono tracking-widest transition-colors ${
                          sortOrder === 'newest'
                            ? 'bg-gray-500 dark:bg-gray-700 text-white font-medium'
                            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-900 hover:text-gray-800 dark:hover:text-gray-200'
                        }`}
                      >
                        Newest
                      </button>
                      <button
                        onClick={() => {
                          setSortOrder('oldest');
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-right px-3 py-2 text-[10px] uppercase font-mono tracking-widest transition-colors ${
                          sortOrder === 'oldest'
                            ? 'bg-gray-500 dark:bg-gray-700 text-white font-medium'
                            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-900 hover:text-gray-800 dark:hover:text-gray-200'
                        }`}
                      >
                        Oldest
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Tags Filter */}
          {allTags.length > 0 && (
            <div className='flex flex-col gap-3 items-end mt-4'>
              <h3 className='text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500 flex items-center gap-1.5'>
                Topics <Hash className='w-3 h-3' />
              </h3>
              <nav className='flex flex-col gap-2.5 text-xs text-right'>
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`flex items-center justify-end gap-2 group transition-colors ${
                    selectedTag === null
                      ? 'text-gray-900 dark:text-gray-100 font-medium'
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                  }`}
                >
                  <span>All Writing</span>
                  <span className='w-3 flex justify-center text-[10px] opacity-50 group-hover:opacity-100 transition-opacity'>
                    {selectedTag === null ? '•' : ''}
                  </span>
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`flex items-center justify-end gap-2 group transition-colors ${
                      selectedTag === tag
                        ? 'text-gray-900 dark:text-gray-100 font-medium'
                        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                    }`}
                  >
                    <span>{tag}</span>
                    <span className='w-3 flex justify-center text-[10px] opacity-50 group-hover:opacity-100 transition-opacity'>
                      {selectedTag === tag ? '•' : ''}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
