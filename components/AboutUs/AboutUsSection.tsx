import { motion } from 'framer-motion';

export default function AboutUsSection() {
  return (
    <section id="about-us" className="flex w-screen flex-col items-center justify-center pb-12">
      <div className="container relative flex flex-col items-start justify-center gap-4 py-12">
        <div className="about-us-blur" aria-hidden />
        <div className="about-us-2-blur" aria-hidden />
        <h1 className="text-[18px] font-light text-highlight-2 lg:text-[24px]">About Us</h1>
        <h2 className="text-[32px] font-medium text-gray lg:max-w-[70%] lg:text-[48px]">
          At Sourced Tickets, we know what it&apos;s like to be in your shoes
        </h2>
        <div className="flex w-full items-center justify-center">
          <img src="/img/AboutUs.png" alt="About Us" />
        </div>
        <article className="flex flex-col items-center justify-center gap-6 text-base font-normal text-gray/60 lg:gap-10 lg:text-[24px]">
          <p>
            Because we&apos;ve been there. As passionate fans of concerts, sports, and live entertainment, we&apos;ve
            experienced the thrill of finding the perfect tickets and the frustration of hidden fees, complicated
            processes, and unreliable platforms. That&apos;s why we set out to create something better.
          </p>
          <p>
            Sourced Tickets was born from a simple idea: to build a marketplace that puts fans first. We believe
            everyone deserves access to affordable, authentic tickets without the hassle. From the very beginning, our
            mission has been clear—make it easy for you to experience more while spending less.
          </p>
          <p>
            Every feature on our platform is designed with you in mind. Whether it&apos;s transparent pricing,
            user-friendly navigation, or our commitment to verified tickets, we prioritize your peace of mind.
            We&apos;re not just a ticket seller; we&apos;re your trusted partner in creating unforgettable memories
          </p>
          <p>
            When you choose Sourced Tickets, you&apos;re choosing a team that truly cares. We&apos;re here to help you
            find the best seats, save money, and enjoy every moment worry-free. Because at the end of the day, it&apos;s
            not just about tickets—it&apos;s about the experiences that bring us together
          </p>
        </article>
      </div>
      <div className="logo-fade flex h-full w-full rotate-[-3deg] select-none flex-col items-center space-x-[12px] overflow-x-hidden px-2 py-3 md:py-2">
        <motion.div
          initial={{ x: 0 }}
          animate={{
            translateX: `calc(-25% - 16px)`,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex w-fit flex-nowrap gap-10 text-[48px] font-extrabold text-black *:whitespace-nowrap lg:text-[64px]"
        >
          <span className="">Welcome to Sourced Tickets. Let&apos;s make your next event unforgettable.</span>
          <span aria-hidden>Welcome to Sourced Tickets. Let&apos;s make your next event unforgettable.</span>
          <span aria-hidden>Welcome to Sourced Tickets. Let&apos;s make your next event unforgettable.</span>
          <span aria-hidden>Welcome to Sourced Tickets. Let&apos;s make your next event unforgettable.</span>
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{
            translateX: `calc(25% + 16px)`,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex w-fit flex-nowrap gap-10 text-[48px] font-extrabold text-black *:whitespace-nowrap lg:text-[64px]"
        >
          <span className="">Welcome to Sourced Tickets. Let&apos;s make your next event unforgettable.</span>
          <span aria-hidden>Welcome to Sourced Tickets. Let&apos;s make your next event unforgettable.</span>
          <span aria-hidden>Welcome to Sourced Tickets. Let&apos;s make your next event unforgettable.</span>
          <span aria-hidden>Welcome to Sourced Tickets. Let&apos;s make your next event unforgettable.</span>
        </motion.div>
      </div>
    </section>
  );
}
