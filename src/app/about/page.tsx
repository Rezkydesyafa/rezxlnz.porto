'use client';

import { useLang } from '@/context/LangContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const { t } = useLang();

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
        {/* Header */}
        <motion.div variants={itemVariants} className='flex flex-col gap-2'>
          <Link
            href='/'
            className='inline-flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors w-fit mb-1'
          >
            <ArrowLeft className='w-3 h-3' /> {t.common.back_to_home}
          </Link>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
            {t.about.title}
          </h1>
          <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={itemVariants}
          className='flex flex-col gap-4 text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed'
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.section
          variants={itemVariants}
          className='border-t border-gray-100 dark:border-gray-800/60 pt-8 flex flex-col gap-6'
        >
          <h2 className='text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100'>
            {t.about.skills}
          </h2>
          <ul className='flex flex-col gap-3 text-xs text-gray-600 dark:text-gray-400'>
            <li className='flex gap-2 items-start'>
              <span className='text-gray-300 dark:text-gray-600'>•</span>
              <div>
                <strong className='font-medium text-gray-900 dark:text-gray-100'>
                  {t.about.languages}
                </strong>
                <span className='font-light'>
                  {' '}
                  : Go, Python, Java, Typescript.
                </span>
              </div>
            </li>
            <li className='flex gap-2 items-start'>
              <span className='text-gray-300 dark:text-gray-600'>•</span>
              <div>
                <strong className='font-medium text-gray-900 dark:text-gray-100'>
                  {t.about.databases}
                </strong>
                <span className='font-light'>
                  {' '}
                  : MySQL (MariaDB), PostgreSQL, Redis, MongoDB.
                </span>
              </div>
            </li>
            <li className='flex gap-2 items-start'>
              <span className='text-gray-300 dark:text-gray-600'>•</span>
              <div>
                <strong className='font-medium text-gray-900 dark:text-gray-100'>
                  {t.about.streaming}
                </strong>
                <span className='font-light'> : Kafka, RabbitMQ.</span>
              </div>
            </li>
            <li className='flex gap-2 items-start'>
              <span className='text-gray-300 dark:text-gray-600'>•</span>
              <div>
                <strong className='font-medium text-gray-900 dark:text-gray-100'>
                  {t.about.containerization}
                </strong>
                <span className='font-light'>
                  {' '}
                  : Docker, Podman, Kubernetes.
                </span>
              </div>
            </li>
            <li className='flex gap-2 items-start'>
              <span className='text-gray-300 dark:text-gray-600'>•</span>
              <div>
                <strong className='font-medium text-gray-900 dark:text-gray-100'>
                  {t.about.cloud}
                </strong>
                <span className='font-light'>
                  {' '}
                  : Google Cloud Platform, Microsoft Azure.
                </span>
              </div>
            </li>
            <li className='flex gap-2 items-start'>
              <span className='text-gray-300 dark:text-gray-600'>•</span>
              <div>
                <strong className='font-medium text-gray-900 dark:text-gray-100'>
                  {t.about.technical_skills}
                </strong>
                <span className='font-light'>
                  {' '}
                  : Git Conventional Commits, CI/CD, System Design, Performance
                  Optimization, Clean Code.
                </span>
              </div>
            </li>
          </ul>
        </motion.section>

        {/* Experience */}
        <motion.section
          variants={itemVariants}
          className='border-t border-gray-100 dark:border-gray-800/60 pt-8 flex flex-col gap-6'
        >
          <h2 className='text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100'>
            {t.about.experience}
          </h2>

          <div className='flex flex-col gap-4 w-full text-xs flex-1'>
            <div className='flex text-[9px] font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 pb-2'>
              <div className='w-28 md:w-32 lg:w-40 shrink-0'>
                {t.about.date_header}
              </div>
              <div className='w-36 md:w-44 xl:w-52 shrink-0'>
                {t.about.role_header}
              </div>
              <div className='flex-1'>{t.about.company_header}</div>
            </div>

            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-0 group'>
              <div className='w-28 md:w-32 lg:w-40 shrink-0 text-[11px] font-mono text-gray-500'>
                Feb 2026 - Present
              </div>
              <div className='w-36 md:w-44 xl:w-52 shrink-0 font-medium text-gray-900 dark:text-gray-100'>
                AI Engineer Cohort
              </div>
              <a
                href='#'
                className='flex-1 flex items-center justify-between md:justify-start gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-light'
              >
                <span>Pijak in collaboration with IBM SkillsBuild</span>
                <ArrowRight className='w-3 h-3 -rotate-45 opacity-50 group-hover:opacity-100 transition-opacity' />
              </a>
            </div>

            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-0 group'>
              <div className='w-28 md:w-32 lg:w-40 shrink-0 text-[11px] font-mono text-gray-500'>
                Sept 2024 - Jan 2025
              </div>
              <div className='w-36 md:w-44 xl:w-52 shrink-0 font-medium text-gray-900 dark:text-gray-100'>
                Baparekraf Digital Talent
              </div>
              <a
                href='#'
                className='flex-1 flex items-center justify-between md:justify-start gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-light'
              >
                <span>Baparekraf Digital Talent 2023</span>
                <ArrowRight className='w-3 h-3 -rotate-45 opacity-50 group-hover:opacity-100 transition-opacity' />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Honors & Certifications */}
        <motion.section
          variants={itemVariants}
          className='border-t border-gray-100 dark:border-gray-800/60 pt-8 flex flex-col gap-6'
        >
          <h2 className='text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100'>
            {t.about.honors}
          </h2>
          <ul className='flex flex-col gap-3 text-xs text-gray-600 dark:text-gray-400'>
            <li className='flex gap-2 items-start group'>
              <span className='text-gray-300 dark:text-gray-600'>•</span>
              <div className='flex-1 font-light'>
                Graduated with Distinction (Top 10%) from the{' '}
                <a
                  href='#'
                  className='inline-flex items-center gap-1 font-medium text-gray-900 dark:text-gray-100 hover:underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4'
                >
                  Bangkit Machine Learning Path
                  <ArrowRight className='w-2.5 h-2.5 -rotate-45' />
                </a>
              </div>
            </li>
            <li className='flex gap-2 items-start group'>
              <span className='text-gray-300 dark:text-gray-600'>•</span>
              <div className='flex-1 font-light'>
                Microsoft PL-300{' '}
                <a
                  href='#'
                  className='inline-flex items-center gap-1 font-medium text-gray-900 dark:text-gray-100 hover:underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4'
                >
                  PowerBI Data Analyst
                  <ArrowRight className='w-2.5 h-2.5 -rotate-45' />
                </a>
              </div>
            </li>
            <li className='flex gap-2 items-start group'>
              <span className='text-gray-300 dark:text-gray-600'>•</span>
              <div className='flex-1 font-light'>
                Finalist of{' '}
                <a
                  href='#'
                  className='inline-flex items-center gap-1 font-medium text-gray-900 dark:text-gray-100 hover:underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4'
                >
                  Hology Competitive Programming
                  <ArrowRight className='w-2.5 h-2.5 -rotate-45' />
                </a>
              </div>
            </li>
          </ul>
        </motion.section>

        {/* Online Presence */}
        <motion.section
          variants={itemVariants}
          className='border-t border-gray-100 dark:border-gray-800/60 pt-8 flex flex-col gap-6'
        >
          <h2 className='text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100'>
            {t.about.online_presence}
          </h2>
          <div className='flex flex-wrap items-center gap-2.5 text-xs text-gray-500 dark:text-gray-400'>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
            >
              LinkedIn <ArrowRight className='w-2.5 h-2.5 -rotate-45' />
            </a>
            <span>/</span>
            <a
              href='https://github.com'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
            >
              GitHub <ArrowRight className='w-2.5 h-2.5 -rotate-45' />
            </a>
            <span>/</span>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
            >
              Twitter <ArrowRight className='w-2.5 h-2.5 -rotate-45' />
            </a>
            <span>/</span>
            <a
              href='mailto:email@example.com'
              className='inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
            >
              Mail <ArrowRight className='w-2.5 h-2.5 -rotate-45' />
            </a>
            <span>/</span>
            <a
              href='#'
              className='inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
            >
              Credly <ArrowRight className='w-2.5 h-2.5 -rotate-45' />
            </a>
          </div>
        </motion.section>
      </div>

      {/* Connect Aside */}
      <motion.aside
        variants={itemVariants}
        className='w-full lg:w-48 xl:w-56 shrink-0 flex flex-col gap-8 lg:mt-6'
      >
        {/* Profile icon bubble */}
        <div className='hidden lg:flex w-full justify-end'>
          <div className='w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 items-center justify-center p-1'>
            <div className='w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>
              <svg
                className='w-4 h-4 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 items-end mt-4'>
          <h3 className='text-[10px] font-mono tracking-widest uppercase text-gray-400 dark:text-gray-500'>
            {t.about.connect}
          </h3>
          <nav className='flex flex-col gap-2.5 text-xs text-right w-full lg:w-auto'>
            <a
              href='https://github.com'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors'
            >
              <span>GitHub</span>
              <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 transition-opacity'>
                ↗
              </span>
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors'
            >
              <span>LinkedIn</span>
              <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 transition-opacity'>
                ↗
              </span>
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noreferrer'
              className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors'
            >
              <span>Twitter</span>
              <span className='w-4 flex justify-center text-[10px] font-mono opacity-50 group-hover:opacity-100 transition-opacity'>
                ↗
              </span>
            </a>
            <a
              href='mailto:email@example.com'
              className='flex flex-row items-center justify-end gap-3 group text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors'
            >
              <span>Email</span>
              <span className='w-4 flex justify-center font-mono text-gray-400 opacity-50 group-hover:opacity-100 transition-opacity'>
                @
              </span>
            </a>
          </nav>
        </div>
      </motion.aside>
    </motion.div>
  );
}
