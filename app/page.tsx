'use client';

import WhyUsSection from '@/components/WhyUs/WhyUsSection';
import AboutUsSection from '@/components/AboutUs/AboutUsSection';
import EventSection from '@/components/Events/EventSection';
import FeaturesSection from '@/components/Features/FeaturesSection';
import HeroSection from '@/components/Hero/HeroSection';

export default function Home() {
  return (
    <div className="flex max-w-[100dvw] flex-col bg-white">
      <HeroSection />
      <WhyUsSection />
      <div className="features-clip -mb-[0.5px] h-[100px] bg-main" aria-hidden />
      <EventSection />
      <FeaturesSection />
      <AboutUsSection />
    </div>
  );
}
