'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '@/components/sidebar/Menu';
import { dictionary as t } from '@/lib/dictionaries';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('@/components/ui/ThemeToggle'), {
  ssr: false,
  loading: () => (
    <div className='w-[72px] h-9 rounded-full bg-gray-100 dark:bg-[#151515] border border-gray-200/60 dark:border-gray-800/60 shadow-inner' />
  ),
});

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  return (
    <div className='md:hidden'>
      {/* Mobile Top Bar */}
      <div className='fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md z-40 flex items-center justify-between px-6 border-b border-gray-100 dark:border-gray-800/60'>
        <div className='flex items-center gap-3'>
          <div className='relative w-8 h-8 rounded-full border border-gray-200/50 dark:border-gray-800/50 overflow-hidden'>
            <Image
              src='/assets/profile-pictureweb.jpg'
              alt='Profile'
              fill
              className='object-cover grayscale hover:grayscale-0 transition-all duration-300'
            />
          </div>
          <span className='font-bold text-sm tracking-tight'>Rezxlnz</span>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className='p-2 -mr-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
          aria-label='Open Menu'
        >
          <MenuIcon className='w-5 h-5' />
        </button>
      </div>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='fixed inset-0 bg-black/50 dark:bg-black/80 z-50 backdrop-blur-sm'
              onClick={closeMenu}
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 bottom-0 w-48 bg-white dark:bg-[#0a0a0a] z-50 flex flex-col shadow-xl border-l border-gray-200/50 dark:border-gray-800/50'
            >
              <div className='flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800/60'>
                <span className='font-bold text-sm'>Menu</span>
                <button
                  onClick={closeMenu}
                  className='p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors'
                  aria-label='Close Menu'
                >
                  <X className='w-5 h-5' />
                </button>
              </div>

              <div className='flex-1 overflow-y-auto p-6 flex flex-col justify-between'>
                {/* We can reuse the Menu component, but we have to wrap its links to close the drawer, 
                    since the Menu component doesn't know about `closeMenu`. Given Menu is imported, 
                    users interact with it normally. We capture clicks using event bubbling on a wrapper. */}
                <div
                  onClick={(e) => {
                    // Basic check to see if we clicked a link
                    if ((e.target as HTMLElement).closest('a')) {
                      closeMenu();
                    }
                  }}
                >
                  <Menu />
                </div>

                {/* Footer Info Mobile */}
                <div className='flex flex-col gap-6 mt-12 border-t border-gray-100 dark:border-gray-800/60 pt-6'>
                  <div className='flex items-center gap-3 text-xs font-mono font-bold tracking-wider'>
                    <ThemeToggle />
                  </div>
                  <div className='flex flex-col gap-1 text-[10px] uppercase font-mono text-gray-400 dark:text-gray-500'>
                    <span>@rezxlnz</span>
                    <span>Yogyakarta, WIB (UTC+7)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
