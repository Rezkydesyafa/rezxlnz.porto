'use client';

import { useState, useEffect } from 'react';
import { Award, Trophy, GraduationCap, Medal, ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import AchievementModal from './AchievementModal';

function AchievementCard({
  achievement,
  onClick,
}: {
  achievement: any;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className='cursor-pointer flex flex-col gap-2 p-2.5 rounded-lg border border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-[#111]/30 w-full transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1 hover:shadow-sm active:scale-[0.99] group'
    >
      {/* Image Container */}
      <div className='w-full aspect-16/10 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden relative shadow-sm border border-gray-100 dark:border-gray-800'>
        {achievement.image ? (
          <img
            src={achievement.image}
            alt={achievement.title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
          />
        ) : (
          <div className='absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 font-mono text-[8px] uppercase tracking-widest'>
            Certificate
          </div>
        )}
      </div>

      <div className='flex flex-col gap-1.5 px-0.5 mt-1'>
        {/* Number and Date Row */}
        <div className='flex items-center justify-between text-[8px] font-mono uppercase tracking-[1.1px] text-gray-400 dark:text-gray-500'>
          <span className='truncate mr-2'>{achievement.certNumber}</span>
          <span className='shrink-0'>{achievement.date}</span>
        </div>

        {/* Title and Issuer */}
        <div className='flex flex-col gap-0'>
          <h3 className='text-[11px] font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-black dark:group-hover:text-white transition-colors'>
            {achievement.title}
          </h3>
          <p className='text-[9px] font-serif italic text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5'>
            {achievement.issuer}
          </p>
        </div>

        {/* Tags Row */}
        <div className='flex items-center gap-1.5 mt-1 pt-2 border-t border-gray-100 dark:border-gray-800/60'>
          <span className='text-[8px] font-medium text-gray-500 dark:text-gray-400'>
            {achievement.type}
          </span>
          <div className='w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600' />
          <span className='text-[8px] font-medium text-gray-500 dark:text-gray-400'>
            {achievement.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AchievementsClient({
  achievements,
}: {
  achievements: any[];
}) {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [selectedAchievement, setSelectedAchievement] = useState<any | null>(
    null,
  );

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedAchievement) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedAchievement]);

  const sortedAchievements = [...achievements].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    // Fallback if date is invalid, though sample data is valid (e.g., 'July 2025')
    if (isNaN(dateA) || isNaN(dateB)) return 0;

    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 pb-20'>
        {/* Main Content */}
        <div className='flex-1 max-w-2xl flex flex-col gap-10'>
          {/* Header Section */}
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
              Achievements
            </h1>
            <p className='text-xs font-light text-gray-500 dark:text-gray-400 leading-relaxed'>
              A curated collection of certificates and badges I&apos;ve earned
              throughout my professional and academic journey.
            </p>
          </div>

          {/* Grid Section */}
          <div className='flex flex-col gap-4 mt-2'>
            <div className='flex justify-end'>
              <div className='relative'>
                <select
                  value={sortOrder}
                  onChange={(e) =>
                    setSortOrder(e.target.value as 'newest' | 'oldest')
                  }
                  className='appearance-none bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 text-[10px] uppercase font-mono tracking-widest py-1.5 pl-3 pr-8 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 transition-colors cursor-pointer'
                >
                  <option value='newest'>Newest</option>
                  <option value='oldest'>Oldest</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500'>
                  <ChevronDown className='w-3 h-3' />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {sortedAchievements.map((item) => (
                <div
                  key={item.id}
                  className='animate-in fade-in zoom-in-95 duration-300'
                >
                  <AchievementCard
                    achievement={item}
                    onClick={() => setSelectedAchievement(item)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connect Aside */}
        <aside className='w-full lg:w-48 xl:w-56 shrink-0 flex flex-col gap-8 lg:mt-6'>
          <div className='hidden lg:flex w-full justify-end'>
            <div className='w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 items-center justify-center p-1'>
              <div className='w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>
                <Award className='w-4 h-4 text-gray-400' strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6 items-end mt-4'>
            <div className='flex flex-col gap-3 items-end'>
              <h3 className='text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500'>
                Types
              </h3>
              <nav className='flex flex-col gap-2.5 text-xs text-right'>
                <a
                  href='#'
                  className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
                >
                  <span>Professional</span>
                  <span className='w-4 flex justify-center'>
                    <Medal className='w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300' />
                  </span>
                </a>
                <a
                  href='#'
                  className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
                >
                  <span>Academic</span>
                  <span className='w-4 flex justify-center'>
                    <GraduationCap className='w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300' />
                  </span>
                </a>
                <a
                  href='#'
                  className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
                >
                  <span>Competitions</span>
                  <span className='w-4 flex justify-center'>
                    <Trophy className='w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300' />
                  </span>
                </a>
              </nav>
            </div>

            <div className='flex flex-col gap-3 items-end mt-4'>
              <h3 className='text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500'>
                Platforms
              </h3>
              <nav className='flex flex-col gap-2.5 text-xs text-right'>
                <a
                  href='#'
                  className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
                >
                  <span>Bangkit</span>
                  <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'>
                    ↗
                  </span>
                </a>
                <a
                  href='#'
                  className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
                >
                  <span>IBM</span>
                  <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'>
                    ↗
                  </span>
                </a>
                <a
                  href='#'
                  className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
                >
                  <span>Coursera</span>
                  <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'>
                    ↗
                  </span>
                </a>
                <a
                  href='#'
                  className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
                >
                  <span>Dicoding</span>
                  <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'>
                    ↗
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </aside>
      </div>

      {/* Modal Render */}
      <AnimatePresence>
        {selectedAchievement && (
          <AchievementModal
            achievement={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
