'use client';

import { motion } from 'framer-motion';
export default function MenuButton({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isOpen ? 'text-highlight-2' : 'text-[#EDE4FA]'} transition-colors duration-300`}
    >
      <motion.rect
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        width="28"
        height="2"
        fill="currentColor"
      />
      <motion.rect
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        y="16"
        width="28"
        height="2"
        fill="currentColor"
      />
      <motion.rect
        animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        x="2"
        y="8"
        width="26"
        height="2"
        fill="currentColor"
      />
    </svg>
  );
}
