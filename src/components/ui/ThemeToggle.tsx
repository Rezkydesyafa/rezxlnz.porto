'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='w-[72px] h-9 rounded-full bg-gray-100 dark:bg-[#151515] border border-gray-200/60 dark:border-gray-800/60 shadow-inner' />
    );
  }

  return (
    <div
      className='relative flex items-center p-1 w-[72px] h-9 rounded-full bg-gray-100 dark:bg-[#151515] border border-gray-200/60 dark:border-gray-800/60 shadow-inner cursor-pointer'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {/* Sliding Background */}
      {resolvedTheme && (
        <motion.div
          className='absolute left-1 top-1 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-sm'
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          initial={false}
          animate={{
            x: resolvedTheme === 'dark' ? 34 : 0,
          }}
        />
      )}

      <div className='relative flex items-center justify-between w-full px-1.5 z-10'>
        <div
          className={`flex items-center justify-center w-5 h-5 transition-colors duration-300 ${resolvedTheme === 'dark' ? 'text-gray-500' : 'text-amber-500'}`}
        >
          <Sun className='w-3.5 h-3.5' />
        </div>
        <div
          className={`flex items-center justify-center w-5 h-5 transition-colors duration-300 ${resolvedTheme === 'dark' ? 'text-blue-400' : 'text-gray-400'}`}
        >
          <Moon className='w-3.5 h-3.5' />
        </div>
      </div>
    </div>
  );
}
