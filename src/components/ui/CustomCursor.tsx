'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use MotionValues instead of React state to avoid expensive re-renders on mouse move
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring physics for smooth interpolation
  const springConfig = { damping: 28, stiffness: 800, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const springConfigOuter = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpringOuter = useSpring(cursorX, springConfigOuter);
  const cursorYSpringOuter = useSpring(cursorY, springConfigOuter);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Check if device supports hover (not a touch screen)
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) {
      return; // Do not render custom cursor on touch devices
    }

    const updateMousePosition = (e: MouseEvent) => {
      // Update motion values directly, bypassing React renders
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest(
        'a, button, input, select, textarea, [role="button"], .cursor-pointer',
      );
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition, {
      passive: true,
    });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY, mounted]);

  // Don't render anything until mounted on the client to prevent hydration mismatch
  if (!mounted) return null;
  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className='fixed top-0 left-0 w-2.5 h-2.5 bg-black dark:bg-white rounded-full pointer-events-none z-9999'
        style={{
          boxShadow: '0 0 4px rgba(0,0,0,0.2)',
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      <motion.div
        className='fixed top-0 left-0 w-8 h-8 border border-gray-400 dark:border-gray-500 rounded-full pointer-events-none z-9998 mix-blend-difference'
        style={{
          x: cursorXSpringOuter,
          y: cursorYSpringOuter,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.0 : 1,
          backgroundColor: isHovering
            ? 'rgba(255, 255, 255, 1)'
            : 'rgba(0, 0, 0, 0)',
          borderColor: isHovering ? 'transparent' : 'inherit',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
    </>
  );
}
