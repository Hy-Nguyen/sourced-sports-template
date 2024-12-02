'use client';

import SourcedLogo from '@/public/svg/Logo';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SeachIcon from '@/public/svg/SeachIcon';

export default function NavBar() {
  const [currentLink, setCurrentLink] = useState('NFL FOOTBALL');
  const NavLinks = [
    {
      href: '/',
      label: 'NFL FOOTBALL',
    },
    {
      href: '/',
      label: 'NBA BASKETBALL',
    },
    {
      href: '/',
      label: 'NHL HOCKEY',
    },
    {
      href: '/',
      label: 'MLB BASEBALL',
    },
    {
      href: '/',
      label: 'NCAA FOOTBALL',
    },
  ];

  return (
    <nav className="fixed left-0 top-0 z-10 w-screen max-w-[100dvw] overflow-hidden border-b border-white/30 bg-main pb-4 text-[12px] font-semibold text-white">
      {/* nav container */}
      <div className="container flex items-center justify-between">
        <SourcedLogo />
        {/* Nav Links */}
        <div className="relative flex flex-row gap-6">
          {NavLinks.map((link) => (
            <div key={link.label} className="relative">
              <button
                onClick={() => setCurrentLink(link.label)}
                className={`transition-colors ${currentLink === link.label ? 'text-white' : 'text-suppressed hover:text-white/80'}`}
              >
                {link.label}
              </button>
              <AnimatePresence>
                {currentLink === link.label && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="bg-highlight absolute bottom-0 left-0 h-[2px] w-full"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {/* Seach and Login */}
        <div className="flex items-center gap-4">
          <SeachIcon />
          <button className="group relative">
            Login
            <div className="bg-highlight absolute left-0 top-full h-[2px] w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
          <button className="bg-highlight w-fit rounded-md px-4 py-2">Join Now</button>
        </div>
      </div>
    </nav>
  );
}
