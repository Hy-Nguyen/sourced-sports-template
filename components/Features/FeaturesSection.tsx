import BestPrice from '@/public/svg/AboutUs/BestPrice';
import Secure from '@/public/svg/AboutUs/Secure';
import TrophyFilled from '@/public/svg/AboutUs/TrophyFilled';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { FeatureCard } from '../WhyUs/AboutUsCards';
export const cards = [
  {
    icon: <TrophyFilled size={64} />,
    label: '100% Buy Satisfaction',
    text: 'Our number one priority is to make your ticket buying experience easy and hassle-free, saving you time and money.',
  },
  {
    icon: <BestPrice backdrop={false} />,
    label: 'Lowest Fees Guaranteed',
    text: "Discover the industry's lowest fees at Sourced Tickets, where saving you money is our top priority.",
  },
  {
    icon: <Secure />,
    label: 'Safe and Secure Transactions',
    text: 'No need to worry about scams. We guarantee 100% authentic ticket sales transactions.',
  },
];
export default function FeaturesSection() {
  const [currentCard, setCurrentCard] = useState(0);

  function handleSlide(direction: 'left' | 'right') {
    if (direction === 'left') {
      if (currentCard === 0) return;
      setCurrentCard(currentCard - 1);
    } else {
      if (currentCard === cards.length - 2) return;
      setCurrentCard(currentCard + 1);
    }
  }

  let transform = `translateX(-${currentCard * 25}%)`;
  return (
    <section id="features" className="flex flex-col items-center justify-center overflow-clip bg-main py-24 text-white">
      <div className="container relative flex flex-col gap-4">
        <div className="features-blur" />
        <h2 className="text-[24px] font-light text-highlight-2">Features</h2>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[48px]">We&apos;re simply unmatched</h1>
          <div className="flex flex-row items-center gap-2">
            <button
              onClick={() => handleSlide('left')}
              disabled={currentCard === 0}
              className="rounded-sm border border-white/30 bg-[#1A0E30] text-white transition-colors duration-300 hover:text-highlight-2 disabled:text-white/50"
            >
              <ChevronLeft size={30} stroke="currentColor" />
            </button>
            <button
              onClick={() => handleSlide('right')}
              disabled={currentCard === cards.length - 2}
              className="rounded-sm border border-white/30 bg-[#1A0E30] text-white transition-colors duration-300 hover:text-highlight-2 disabled:text-white/50"
            >
              <ChevronRight size={30} stroke="currentColor" />
            </button>
          </div>
        </div>
        <div
          className="flex flex-row flex-nowrap gap-4 py-8 transition-transform duration-300 ease-in-out"
          style={{ transform }}
        >
          {cards.map((card) => (
            <FeatureCard key={card.label} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
