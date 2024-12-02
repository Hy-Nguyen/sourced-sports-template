'use client';

import AboutUsSection from '@/components/AboutUs/AboutUsSection';
import HeroSection from '@/components/Hero/HeroSection';
import SeachIcon from '@/public/svg/SeachIcon';

export default function Home() {
  return (
    <div className="flex w-screen max-w-[100dvw] flex-col">
      <HeroSection />
      <AboutUsSection />
    </div>
  );
}
