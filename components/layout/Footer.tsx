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
        <h1 className="text-[40px] font-medium text-white">
          Do you have
          <br />
          any questions?
        </h1>
        <article className="flex w-full flex-row items-center justify-between">
          <h3 className="text-[16px] font-normal text-[#E6E6E6]">Feel free to send us your questions</h3>
          <h3 className="flex flex-row items-center justify-center gap-2">
            <span className="text-[24px] font-bold text-highlight-2">/</span>
            Thank you for choosing Sourced Tickets
          </h3>
        </article>
        <button className="w-fit rounded-md bg-highlight-2 px-6 py-2 text-[12px] font-semibold">Join Now</button>
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
        <div className="flex flex-row items-center justify-center gap-2 pt-10">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex flex-row items-center justify-center gap-2 text-[16px] font-normal text-[#E6E6E6] transition-all duration-300 hover:text-highlight-2"
            >
              {link.name} {link.popular && <Fire />}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-start justify-center gap-16">
            <article className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-[10px] font-medium text-white/50">Contact Us</h3>
              <h2 className="text-[14px] font-normal text-[#E6E6E6]">+123 456 7890</h2>
            </article>
            <article className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-[10px] font-medium text-white/50">Open Hours</h3>
              <h2 className="text-[14px] font-normal text-[#E6E6E6]">24/7</h2>
            </article>
            <article className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-[10px] font-medium text-white/50">Email</h3>
              <a href="mailto:info@sourcedtickets.com" className="text-[14px] font-normal text-[#E6E6E6]">
                info@sourcedtickets.com
              </a>
            </article>
          </div>

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
