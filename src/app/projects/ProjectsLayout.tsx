'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CornerDownRight,
  Terminal,
  Cpu,
  Server,
  Folder,
} from 'lucide-react';
import { useLang } from '@/context/LangContext';

export default function ProjectsLayout({ projects }: { projects: any[] }) {
  const { t } = useLang();

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='show'
      className='flex flex-col lg:flex-row gap-12 lg:gap-16 pb-20'
    >
      {/* Main Content */}
      <div className='flex-1 max-w-2xl flex flex-col gap-10'>
        <motion.div variants={itemVariants} className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
            {t.projectsPage?.title || 'Projects'}
          </h1>
          <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
            {t.projectsPage?.subtitle || 'Selected works and experiments.'}
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8 mt-2'
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className='group flex flex-col gap-1.5'
            >
              <Link href={`/projects/${project.slug}`} className='w-full'>
                <div className='w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-md mb-2 overflow-hidden transition-colors group-hover:bg-gray-300 dark:group-hover:bg-gray-700 relative'>
                  {project.metadata.image && (
                    <Image
                      src={project.metadata.image}
                      alt={project.metadata.title}
                      fill
                      className='object-fill'
                    />
                  )}
                </div>
              </Link>
              <Link href={`/projects/${project.slug}`}>
                <h2 className='font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300'>
                  {project.metadata.title}
                </h2>
              </Link>
              <p className='text-[11px] text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 leading-relaxed flex-1 transition-colors duration-300'>
                {project.metadata.description}
              </p>
              <div className='flex flex-wrap gap-1 mt-0.5'>
                {project.metadata.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className='px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[9px] text-gray-500 dark:text-gray-400 font-medium'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className='inline-flex items-center gap-1.5 text-[11px] font-medium mt-1 text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 w-fit pt-0.5'
              >
                <CornerDownRight
                  className='w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'
                  strokeWidth={1.5}
                />
                <span className='underline underline-offset-4 decoration-2 decoration-gray-300 dark:decoration-gray-700 group-hover:decoration-black dark:group-hover:decoration-white transition-all duration-300'>
                  {t.projectsPage.details}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Connect Aside */}
      <motion.aside
        variants={itemVariants}
        className='w-full lg:w-48 xl:w-56 shrink-0 flex flex-col gap-8 lg:mt-6'
      >
        <div className='hidden lg:flex w-full justify-end'>
          <div className='w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 items-center justify-center p-1'>
            <div className='w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>
              <Folder className='w-4 h-4 text-gray-400' strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 items-end mt-4'>
          <div className='flex flex-col gap-3 items-end'>
            <h3 className='text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500'>
              {t.projectsPage?.categories || 'Categories'}
            </h3>
            <nav className='flex flex-col gap-2.5 text-xs text-right'>
              <a
                href='#'
                className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
              >
                <span>Fullstack</span>
                <span className='w-4 flex justify-center'>
                  <Terminal className='w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300' />
                </span>
              </a>
              <a
                href='#'
                className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
              >
                <span>AI Engineering</span>
                <span className='w-4 flex justify-center'>
                  <Cpu className='w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300' />
                </span>
              </a>
              <a
                href='#'
                className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
              >
                <span>Backend</span>
                <span className='w-4 flex justify-center'>
                  <Server className='w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300' />
                </span>
              </a>
            </nav>
          </div>

          <div className='flex flex-col gap-3 items-end mt-4'>
            <h3 className='text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500'>
              {t.projectsPage?.techStack || 'Tech Stack'}
            </h3>
            <nav className='flex flex-col gap-2.5 text-xs text-right'>
              <a
                href='#'
                className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
              >
                <span>Next.js</span>
                <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'>
                  ↗
                </span>
              </a>
              <a
                href='#'
                className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
              >
                <span>Go</span>
                <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'>
                  ↗
                </span>
              </a>
              <a
                href='#'
                className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
              >
                <span>Python</span>
                <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'>
                  ↗
                </span>
              </a>
              <a
                href='#'
                className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300'
              >
                <span>Docker</span>
                <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'>
                  ↗
                </span>
              </a>
            </nav>
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}
