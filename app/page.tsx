'use client';

import AboutUsSection from '@/components/AboutUs/AboutUsSection';
import EventSection from '@/components/Events/EventSection';
import FeaturesSection from '@/components/Features/FeaturesSection';
import HeroSection from '@/components/Hero/HeroSection';

export default function Home() {
  return (
    <div className="flex w-screen max-w-[100dvw] flex-col">
      <HeroSection />
      <AboutUsSection />
      <div className="features-clip -mb-[0.5px] h-[100px] bg-main" aria-hidden />
      <FeaturesSection />
      <EventSection />
    </div>
  );
}
