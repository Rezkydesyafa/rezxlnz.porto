import Link from 'next/link';
import { ArrowLeft, Trophy } from 'lucide-react';

export const metadata = {
  title: 'Achievements - Mohamad Dwi Rezky Desyafa',
  description: 'Certifications, awards, and milestones.',
};

export default function AchievementsPage() {
  const achievements = [
    {
      title: 'Pijak in collaboration with IBM SkillsBuild - AI Engineer Cohort',
      date: '2026',
      description:
        'Selected to participate in an intensive, industry-focused AI Engineering program to build practical machine learning solutions.',
    },
    {
      title: 'Baparekraf Digital Talent',
      date: '2023',
      description:
        'Successfully completed the government-sponsored digital talent initiative.',
    },
  ];

  return (
    <div className='max-w-3xl flex flex-col gap-10 pb-20'>
      <div className='flex flex-col gap-2'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors w-fit mb-4'
        >
          <ArrowLeft className='w-4 h-4' /> Back to Home
        </Link>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100'>
          Achievements
        </h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Certifications, awards, and notable milestones from my journey.
        </p>
      </div>

      <div className='flex flex-col gap-6 mt-4'>
        {achievements.map((item, index) => (
          <div
            key={index}
            className='flex gap-4 p-5 rounded-xl border border-gray-100 dark:border-gray-800/60 bg-white/50 dark:bg-black/20'
          >
            <div className='mt-1'>
              <Trophy className='w-5 h-5 text-gray-400 dark:text-gray-500' />
            </div>
            <div className='flex w-full flex-col gap-1.5'>
              <div className='flex justify-between items-start'>
                <h3 className='font-bold text-gray-900 dark:text-gray-100'>
                  {item.title}
                </h3>
                <span className='text-xs font-mono font-medium text-gray-500'>
                  {item.date}
                </span>
              </div>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
