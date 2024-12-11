import Fire from '@/public/svg/Footer/Fire';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const footerLinks = [
    {
      name: 'Terms of Service',
      href: '/',
      popular: true,
    },
    {
      name: 'Privacy Policy',
      href: '/',
      popular: false,
    },
    {
      name: 'Cookie Policy',
      href: '/',
      popular: false,
    },
  ];
  return (
    <footer className="flex w-full flex-col gap-6 bg-main py-12">
      <div className="container flex flex-col items-start justify-center gap-4">
        <h1 className="text-[36px] font-medium text-white lg:text-[40px]">
          Do you have
          <br />
          any questions?
        </h1>
        <article className="flex w-full flex-col items-start justify-between lg:flex-row lg:items-center">
          <h3 className="text-[14px] font-normal text-[#E6E6E6] lg:text-base">Feel free to send us your questions</h3>
          <h3 className="flex flex-row items-center justify-center gap-2 text-[14px] font-normal text-[#E6E6E6] lg:text-base">
            <span className="text-[24px] font-bold text-highlight-2">/</span>
            Thank you for choosing Sourced Tickets
          </h3>
        </article>
        <button className="w-full rounded-md bg-highlight-2 px-6 py-2 text-[12px] font-semibold lg:w-fit">
          Join Now
        </button>
        <hr className="mt-10 w-full border-t-[1px] border-t-[#E6E6E6]" />
      </div>

      {/* Disclaimer */}
      <div className="container flex w-full flex-col items-start justify-start">
        <article className="flex flex-row items-center justify-center gap-2">
          <h3 className="text-[14px] font-normal text-white/50">Disclaimer</h3>
          <button
            className="text-white/50 transition-all duration-300 hover:text-highlight-2"
            onClick={() => setShowDisclaimer(!showDisclaimer)}
          >
            {showDisclaimer ? '-' : '+'}
          </button>
        </article>
        <AnimatePresence>
          {showDisclaimer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-[14px] font-normal text-white/50">
                This website is not affiliated with any event organizers or venues. All ticket sales are final and
                non-refundable. Sourced Tickets is not responsible for any issues arising from the purchase or use of
                tickets.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Links and Contact */}
      <div className="container flex flex-col items-start justify-between gap-10">
        {/* Links */}
        <div className="flex flex-col items-start justify-center gap-2 pt-10 lg:flex-row lg:items-center">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-row items-center justify-center gap-2 text-[14px] font-normal text-[#E6E6E6] transition-all duration-300 hover:text-highlight-2 lg:text-[16px]"
            >
              {link.name} {link.popular && <Fire />}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex w-full flex-row items-center justify-end">
          {/* Copyright */}
          <article className="flex flex-col items-end justify-end gap-2">
            <h3 className="text-right text-[10px] font-medium text-white/50">SOURCED TICKETS</h3>
            <p className="text-right text-[10px] font-normal text-white/50">
              &copy; {new Date().getFullYear()} Sourced Tickets. <br /> All rights reserved.
            </p>
          </article>
        </div>
      </div>
    </footer>
  );
}
