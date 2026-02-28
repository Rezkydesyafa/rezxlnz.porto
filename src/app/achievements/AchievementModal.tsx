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
        className='absolute inset-0 bg-black/60 dark:bg-black/80 '
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
        className='relative w-full max-w-[850px] bg-white dark:bg-[#111] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh]'
      >
        {/* Left Side: Image Content */}
        <div className='w-full h-48 sm:h-56 md:h-auto md:w-[60%] shrink-0 bg-gray-50 dark:bg-zinc-900/50 flex items-center justify-center relative'>
          <div className='w-full h-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden relative shadow-sm'>
            {achievement.image ? (
              <img
                src={achievement.image}
                alt={achievement.title}
                className='w-full h-full object-contain'
              />
            ) : (
              <div className='absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600 font-mono text-xs uppercase tracking-widest'>
                Certificate Preview
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Details Content */}
        <div className='w-full md:w-[40%] flex flex-col p-4 sm:p-5 md:py-8 md:pr-8 md:pl-5 overflow-y-auto'>
          {/* Close Button (Absolute on Top Right of the Modal) */}
          <button
            onClick={onClose}
            className='absolute top-3 right-3 md:top-6 md:right-6 p-1.5 md:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors z-10'
          >
            <X className='w-4 h-4 md:w-6 md:h-6' strokeWidth={1.5} />
          </button>

          {/* Header Info */}
          <div className='flex items-center gap-2 md:gap-3 mb-3 md:mb-6 text-[9px] font-mono uppercase tracking-[2px] text-gray-400 dark:text-gray-500'>
            <span>{achievement.certNumber}</span>
            <div className='w-px h-2 bg-gray-200 dark:bg-zinc-800' />
            <span>{achievement.date}</span>
          </div>

          {/* Title */}
          <h2 className='text-lg sm:text-xl md:text-[22px] font-medium text-gray-900 dark:text-gray-50 tracking-tight leading-snug mb-3 md:mb-5 max-w-[90%]'>
            {achievement.title}
          </h2>

          <div className='flex flex-col gap-4 md:gap-6'>
            {/* Issuer */}
            <p className='text-[11px] font-light text-gray-500 dark:text-gray-400'>
              Issued by{' '}
              <span className='font-medium text-gray-900 dark:text-gray-200 ml-1'>
                {achievement.issuer}
              </span>
            </p>

            {/* Description */}
            <p className='text-xs font-light text-gray-600 dark:text-gray-400 leading-relaxed'>
              {achievement.description ||
                'Validates overall understanding and foundational knowledge of the relevant technology concepts and best practices.'}
            </p>

            {/* Skills Validated */}
            <div className='flex flex-col gap-3 mt-1'>
              <h4 className='text-[9px] font-normal text-gray-400/80 tracking-[1.5px] uppercase'>
                Skills Validated
              </h4>
              <div className='flex flex-wrap items-center gap-2 text-[11px] font-light text-gray-900 dark:text-gray-200'>
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

          <div className='mt-5 md:mt-auto pt-4 md:pt-6 border-t border-gray-100 dark:border-zinc-800/60'>
            {/* Verify Button */}
            <a
              href={achievement.verifyUrl || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 md:gap-2.5 text-xs md:text-[13px] font-medium text-gray-900 dark:text-gray-100 group'
            >
              Verify Credential
              <ExternalLink
                className='w-3 h-3 md:w-3.5 md:h-3.5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors'
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
