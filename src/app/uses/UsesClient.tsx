'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Laptop, Monitor, Terminal } from 'lucide-react';
import { useLang } from '@/context/LangContext';

const icons = [
  <Monitor className='w-3.5 h-3.5 text-gray-500' key='hardware' />,
  <Terminal className='w-3.5 h-3.5 text-gray-500' key='software' />,
  <Laptop className='w-3.5 h-3.5 text-gray-500' key='design' />,
];

export default function UsesClient() {
  const { t } = useLang();

  return (
    <div className='max-w-3xl flex flex-col gap-10 pb-20'>
      <div className='flex flex-col gap-2'>
        <Link
          href='/'
          className='inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-100 transition-colors w-fit mb-4'
        >
          <ArrowLeft className='w-3.5 h-3.5' /> {t.common.back_to_home}
        </Link>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
          {t.usesPage.title}
        </h1>
        <p className='text-xs font-light text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl'>
          {t.usesPage.subtitle}
        </p>

        <div className='mt-8 relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 bg-gray-100 dark:bg-gray-900'>
          <Image
            src='/assets/setup.png'
            alt='My development setup'
            fill
            className='object-cover grayscale hover:grayscale-0 transition-all duration-300'
            priority
          />
        </div>
      </div>

      <div className='flex flex-col gap-10 mt-8 border-t border-gray-100 dark:border-gray-800/60 pt-8'>
        {t.usesPage.setupList.map((group, index) => (
          <section
            key={index}
            className='flex flex-col sm:flex-row gap-4 sm:gap-12 sm:items-baseline border-b border-gray-100 dark:border-gray-800/60 pb-10 last:border-0 last:pb-0'
          >
            <div className='w-full sm:w-32 shrink-0'>
              <h2 className='text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 flex items-center gap-2'>
                {icons[index]}
                {group.category}
              </h2>
            </div>
            <ul className='flex-1 flex flex-col gap-6'>
              {group.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  className='flex flex-col gap-1 group'
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <h3 className='text-[14px] font-medium text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300'>
                    {item.name}
                  </h3>
                  <p className='text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 leading-relaxed max-w-xl transition-colors duration-300'>
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
