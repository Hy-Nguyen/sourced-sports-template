'use client';

import SourcedLogo from '@/public/svg/Logo';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SeachIcon from '@/public/svg/SeachIcon';
import MenuButton from '@/public/svg/nav/MenuButton';

export default function NavBar() {
  const [currentLink, setCurrentLink] = useState('NFL FOOTBALL');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className="fixed left-0 top-0 z-50 w-screen max-w-[100dvw] overflow-x-clip border-white/30 bg-main text-[12px] font-semibold text-white lg:border-b lg:pb-4">
      {/* nav container */}
      <div className="flex items-center justify-between px-4 lg:container">
        <SourcedLogo />
        {/* Nav Links */}
        <div className="relative hidden flex-row gap-6 lg:flex">
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
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-highlight"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {/* Seach and Login */}
        <div className="hidden items-center gap-4 lg:flex">
          <SeachIcon />
          <button className="group relative">
            Login
            <div className="absolute left-0 top-full h-[2px] w-full bg-highlight opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
          <button className="w-fit rounded-md bg-highlight px-4 py-2">Join Now</button>
        </div>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuButton isOpen={isMenuOpen} />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed left-0 top-[60px] z-50 h-full min-h-[100dvh] w-full border-t border-white/10 bg-main lg:hidden"
            >
              {/* Search and Login */}
              <div className="flex flex-row items-center justify-between border-b border-white/10 p-4 py-6">
                <SeachIcon />
                <div className="flex flex-row items-center gap-4">
                  <button onClick={() => setIsMenuOpen(false)} className="group relative">
                    Login
                    <div className="absolute left-0 top-full h-[2px] w-full bg-highlight opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                  <button onClick={() => setIsMenuOpen(false)} className="w-fit rounded-md bg-highlight px-4 py-2">
                    Join Now
                  </button>
                </div>
              </div>

              {/* Nav Links */}
              <div className="flex w-full flex-col items-start justify-start gap-4 py-6">
                {NavLinks.map((link) => (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setCurrentLink(link.label)}
                      className={`${currentLink === link.label ? 'pl-10 text-white' : 'pl-6 text-[#F1DEDE99]'} z-20 text-[32px] transition-all duration-300`}
                    >
                      {link.label}
                    </button>

                    <AnimatePresence>
                      {currentLink === link.label && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          aria-hidden
                          className="absolute left-0 top-0 z-10 translate-y-[-18%] whitespace-nowrap text-[64px] leading-none text-white/5"
                        >
                          {link.label}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
