'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
}

export function ImageModal({ src, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className='w-full h-full object-contain p-2 m-0 rounded cursor-zoom-in transition-transform duration-300 hover:scale-105'
        onClick={() => setIsOpen(true)}
      />

      <AnimatePresence>
        {isOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className='absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out'
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className='relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center z-10'
            >
              <button
                onClick={() => setIsOpen(false)}
                className='absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md'
              >
                <X className='w-5 h-5' />
              </button>

              <img
                src={src}
                alt={alt}
                className='max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10'
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
