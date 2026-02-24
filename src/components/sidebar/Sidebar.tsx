'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/components/sidebar/Menu';
import { useLang } from '@/context/LangContext';

export function Sidebar() {
  const { locale, setLocale, t } = useLang();

  return (
    <aside className='w-[200px] shrink-0 min-h-screen py-8 px-6 flex flex-col fixed inset-y-0 left-0'>
      {/* Profile Section */}
      <div className='flex flex-col items-center mb-12'>
        <div className='mb-6 relative w-20 h-20 rounded-xl border border-gray-200/50 dark:border-gray-800/50 overflow-hidden'>
          {/* Placeholder for Profile Image */}
          <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800 mix-blend-saturation' />
        </div>

        {/* Available for hire text */}
        <div className='inline-flex items-center gap-1.5 w-fit'>
          <span className='relative flex h-1.5 w-1.5'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500'></span>
          </span>
          <span className='text-[9px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400'>
            {t.sidebar.available}
          </span>
        </div>
      </div>

      <div className='flex-1 flex flex-col justify-between'>
        {/* Navigation Menu */}
        <Menu />

        {/* Footer Info */}
        <div className='flex flex-col gap-2 mt-12'>
          <div className='flex items-center gap-3 text-xs font-mono font-bold tracking-wider'>
            <button
              onClick={() => setLocale('id')}
              className={`uppercase transition-colors ${locale === 'id' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'}`}
            >
              ID
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`uppercase transition-colors ${locale === 'en' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'}`}
            >
              ENG
            </button>
          </div>

          <div className='flex flex-col gap-1 mt-4 text-[10px] uppercase font-mono text-gray-400 dark:text-gray-500'>
            <span>@rezxlnz</span>
            <span>Jakarta, WIB (UTC+7)</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
