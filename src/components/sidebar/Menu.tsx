'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { dictionary as t } from '@/lib/dictionaries';
import { CornerDownRight } from 'lucide-react';

export function Menu() {
  const pathname = usePathname();
  const navItems = [
    { name: t.sidebar.home, path: '/' },
    { name: t.sidebar.about, path: '/about' },
    { name: t.sidebar.projects, path: '/projects' },
    { name: t.sidebar.achievements, path: '/achievements' },
    { name: t.sidebar.writings, path: '/writings' },
    { name: t.sidebar.uses, path: '/uses' },
  ];

  return (
    <nav className='flex flex-col gap-4'>
      <h3 className='text-xs font-mono font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100 mb-2'>
        {t.sidebar.menu}
      </h3>
      <ul className='flex flex-col gap-3'>
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path} className='relative flex items-center h-6'>
              <Link
                href={item.path}
                className={`flex items-center text-[13px] tracking-wide transition-colors w-full decoration-gray-400 dark:decoration-gray-500 underline-offset-4 ${
                  isActive
                    ? 'text-gray-900 dark:text-gray-100 font-medium underline'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 pl-[22px] hover:underline'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId='activeArrow'
                    className='text-gray-400 dark:text-gray-500 mr-2 shrink-0'
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <CornerDownRight
                      className='w-3.5 h-3.5'
                      strokeWidth={1.5}
                    />
                  </motion.div>
                )}
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
