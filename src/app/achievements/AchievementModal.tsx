import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

interface AchievementModalProps {
  achievement: any;
  onClose: () => void;
}

export default function AchievementModal({
  achievement,
  onClose,
}: AchievementModalProps) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6'>
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className='absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm'
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
        className='relative w-full max-w-[1010px] bg-white dark:bg-[#111] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]'
      >
        {/* Left Side: Image Content */}
        <div className='w-full md:w-[60%] p-6 md:p-10 shrink-0 bg-gray-50 dark:bg-zinc-900/50 flex items-center justify-center flex-col'>
          <div className='w-full aspect-16/10 sm:aspect-4/3 md:aspect-auto md:h-[400px] lg:h-[480px] bg-gray-200 dark:bg-zinc-800 rounded-xl overflow-hidden relative shadow-sm'>
            {achievement.image ? (
              <img
                src={achievement.image}
                alt={achievement.title}
                className='w-full h-full object-contain sm:object-cover'
              />
            ) : (
              <div className='absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 font-mono text-xs uppercase tracking-widest'>
                Certificate Preview
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Details Content */}
        <div className='w-full md:w-[40%] flex flex-col p-6 md:py-12 md:pr-10 md:pl-6 overflow-y-auto'>
          {/* Close Button (Absolute on Top Right of the Modal) */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors z-10'
          >
            <X className='w-5 h-5 md:w-6 md:h-6' strokeWidth={1.5} />
          </button>

          {/* Header Info */}
          <div className='flex items-center gap-4 mb-5 md:mb-8 text-[11px] font-mono uppercase tracking-[2.5px] text-gray-400 dark:text-gray-500'>
            <span>{achievement.certNumber}</span>
            <div className='w-px h-3 bg-gray-200 dark:bg-zinc-800' />
            <span>{achievement.date}</span>
          </div>

          {/* Title */}
          <h2 className='text-3xl md:text-[32px] font-medium text-gray-900 dark:text-gray-50 tracking-[-1.4px] leading-tight mb-6 md:mb-8'>
            {achievement.title}
          </h2>

          <div className='flex flex-col gap-6 md:gap-8'>
            {/* Issuer */}
            <p className='text-xs font-light text-gray-500 dark:text-gray-400'>
              Issued by{' '}
              <span className='font-medium text-gray-900 dark:text-gray-200 ml-1'>
                {achievement.issuer}
              </span>
            </p>

            {/* Description */}
            <p className='text-[13px] md:text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm'>
              {achievement.description ||
                'Validates overall understanding and foundational knowledge of the relevant technology concepts and best practices.'}
            </p>

            {/* Skills Validated */}
            <div className='flex flex-col gap-4 mt-2 md:mt-4'>
              <h4 className='text-[10px] font-normal text-gray-400/80 tracking-[2px] uppercase'>
                Skills Validated
              </h4>
              <div className='flex flex-wrap items-center gap-3 text-xs font-light text-gray-900 dark:text-gray-200'>
                {achievement.skills ? (
                  achievement.skills.map((skill: string, idx: number) => (
                    <div key={idx} className='flex items-center gap-3'>
                      <span>{skill}</span>
                      {idx !== achievement.skills.length - 1 && (
                        <span className='text-gray-300 dark:text-zinc-700 font-bold'>
                          •
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <>
                    <span>Knowledge</span>
                    <span className='text-gray-300 dark:text-zinc-700 font-bold'>
                      •
                    </span>
                    <span>Execution</span>
                    <span className='text-gray-300 dark:text-zinc-700 font-bold'>
                      •
                    </span>
                    <span>Delivery</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className='mt-auto pt-8 border-t border-gray-100 dark:border-zinc-800/60'>
            {/* Verify Button */}
            <a
              href={achievement.verifyUrl || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 text-sm font-medium text-gray-900 dark:text-gray-100 group'
            >
              Verify Credential
              <ExternalLink
                className='w-4 h-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors'
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
