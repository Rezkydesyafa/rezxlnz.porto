'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { experience, projects, stack, writings } from '@/data/home';
import { useLang } from '@/context/LangContext';

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

export default function Home() {
  const { t } = useLang();

  return (
    <div className='max-w-3xl lg:max-w-4xl flex flex-col gap-20 pb-20'>
      {/* Header Section */}
      <motion.section
        className='flex flex-col gap-6'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex flex-col md:block relative'>
          <div className='mb-8 md:mb-0'>
            <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-4'>
              Mohamad Dwi Rezky Desyafa
            </h1>
            <p className='text-lg font-light text-gray-600 dark:text-gray-400 mb-2'>
              {t.home.subtitle}
            </p>
            <p className='text-sm font-mono text-gray-500 dark:text-gray-500'>
              {t.home.location}
            </p>
          </div>

          <div className='flex flex-col gap-2.5 text-gray-500 dark:text-gray-400 md:absolute md:-right-24 lg:-right-36 xl:-right-48 md:top-2'>
            <a
              href='https://github.com'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group'
            >
              <Github className='w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity' />
              <span className='font-mono text-[11px] uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity'>
                Github
              </span>
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group'
            >
              <Linkedin className='w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity' />
              <span className='font-mono text-[11px] uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity'>
                LinkedIn
              </span>
            </a>
            <a
              href='mailto:email@example.com'
              className='flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group'
            >
              <Mail className='w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity' />
              <span className='font-mono text-[11px] uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity'>
                Email
              </span>
            </a>
          </div>
        </div>

        <div className='max-w-2xl text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-4'>
          <p className='mb-4'>{t.home.summary}</p>
          <p className='mb-4 whitespace-pre-line'>{t.home.description}</p>
        </div>

        <div className='flex flex-wrap gap-3 mt-3'>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/40 dark:bg-black/40 border border-gray-200 dark:border-gray-800 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors'
          >
            LinkedIn <ArrowRight className='w-3 h-3 -rotate-45' />
          </a>
          <a
            href='mailto:email@example.com'
            className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/40 dark:bg-black/40 border border-gray-200 dark:border-gray-800 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors'
          >
            Email <span className='text-gray-400'>@</span>
          </a>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-100px' }}
        className='flex flex-col gap-8'
      >
        <h2 className='text-sm font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400'>
          {t.home.experience}
        </h2>

        <div className='relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 flex flex-col gap-8'>
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className='relative pl-8 group cursor-default'
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[-9px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-[#0a0a0a] transition-colors duration-300 group-hover:border-gray-300 dark:group-hover:border-gray-500 ${exp.status === 'Present' ? 'bg-gray-900 dark:bg-gray-100 group-hover:bg-gray-700 dark:group-hover:bg-white' : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-600'}`}
              />

              <div className='flex flex-col sm:flex-row sm:items-baseline justify-between mb-2'>
                <div className='flex items-center gap-3 mb-1 sm:mb-0'>
                  <h3 className='font-semibold text-sm text-gray-900 dark:text-gray-100'>
                    {exp.company}
                  </h3>
                  {exp.status === 'Present' && (
                    <span className='px-2 py-0.5 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-[10px] font-bold tracking-wider uppercase'>
                      {t.home.present}
                    </span>
                  )}
                </div>
                <span className='text-xs font-mono text-gray-500 uppercase tracking-wider'>
                  {exp.date}
                </span>
              </div>

              <div className='text-xs text-gray-600 dark:text-gray-400 space-y-3 leading-relaxed'>
                {exp.description && <p>{exp.description}</p>}

                {exp.responsibilities.length > 0 && (
                  <div>
                    <p className='mb-2'>{t.home.key_responsibilities}</p>
                    <ul className='list-disc pl-5 space-y-1'>
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href='/about'
          className='inline-flex items-center gap-1.5 text-xs font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors mt-2'
        >
          {t.home.view_details} <ArrowRight className='w-3.5 h-3.5' />
        </Link>
      </motion.section>

      {/* Stack Section */}
      <motion.section
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col gap-6'
      >
        <h2 className='text-sm font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400'>
          {t.home.stack}
        </h2>
        <div className='flex flex-wrap gap-x-6 gap-y-3'>
          {stack.map((item, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              whileHover={{ y: -2, scale: 1.05 }}
              className='text-xs text-gray-600 dark:text-gray-400 font-mono transition-colors hover:text-gray-900 dark:hover:text-gray-100 cursor-default'
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col gap-8'
      >
        <h2 className='text-sm font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400'>
          {t.home.projects}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8'>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className='group flex flex-col gap-2 p-5 -m-5 rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-900/20 transition-colors'
            >
              <h3 className='font-bold text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                {project.title}
              </h3>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1'>
                {project.description}
              </p>
              <Link
                href={project.link}
                className='inline-flex items-center gap-1.5 text-xs font-medium mt-1 underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 hover:decoration-gray-900 dark:hover:decoration-gray-300 transition-colors w-fit'
              >
                <ArrowRight className='w-3.5 h-3.5 -rotate-45' /> Details
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          href='/projects'
          className='inline-flex items-center gap-1.5 text-xs font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors mt-2'
        >
          {t.home.view_all_projects} <ArrowRight className='w-3.5 h-3.5' />
        </Link>
      </motion.section>

      {/* Writings Section */}
      <motion.section
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col gap-8'
      >
        <h2 className='text-sm font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400'>
          {t.home.writings}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {writings.map((writing, i) => (
            <motion.article
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className='group flex flex-col gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800/60 bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-gray-900/60 hover:shadow-sm transition-all cursor-pointer'
            >
              <time className='text-[10px] font-medium text-gray-500 uppercase tracking-widest'>
                {writing.date}
              </time>
              <h3 className='font-bold text-sm text-gray-900 dark:text-gray-100 whitespace-pre-line leading-tight'>
                {writing.title}
              </h3>
              <div className='flex flex-wrap gap-1.5 mt-auto pt-2'>
                {writing.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-2 py-0.5 rounded border border-gray-200/50 dark:border-gray-700/50 bg-gray-50 dark:bg-gray-800/50 text-[10px] font-medium text-gray-600 dark:text-gray-400'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <Link
          href='/writings'
          className='inline-flex items-center gap-1.5 text-xs font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors mt-2'
        >
          {t.home.view_all_articles} <ArrowRight className='w-3.5 h-3.5' />
        </Link>
      </motion.section>
    </div>
  );
}
