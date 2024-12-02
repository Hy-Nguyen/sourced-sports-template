import Inventory from '@/public/svg/AboutUs/Inventory';
import SearchBar from './SearchBar';
import AboutUsCards from './AboutUsCards';
import VerifiedTickets from '@/public/svg/AboutUs/VerifiedTickets';
import BestPrice from '@/public/svg/AboutUs/BestPrice';
import HiddenFees from '@/public/svg/AboutUs/HiddenFees';
import Trophy from '@/public/svg/AboutUs/Trophy';

export default function AboutUsSection() {
  const cards = [
    {
      icon: <VerifiedTickets />,
      label: 'Verified Tickets',
      text: 'Every ticket on Sourced Tickets is verified for authenticity, so you can buy',
    },
    {
      icon: <BestPrice />,
      label: 'Best Price Guarantee',
      text: 'We offer competitive pricing to give you the best deal on concert and sports tickets.',
    },
    {
      icon: <HiddenFees />,
      label: 'No Hidden Fees',
      text: 'The price you see is the price you pay—no surprises at checkout',
    },
    {
      icon: <Inventory />,
      label: 'Extensive Inventory',
      text: 'Choose from a wide variety of events, from local concerts to major league sports games',
    },
    {
      icon: <Trophy />,
      label: 'Easy to Use',
      text: 'Our website is designed to make finding and purchasing tickets simple and hassle-free.',
    },
  ];
  return (
    <section
      id="about-us"
      className="relative flex min-h-[50dvh] w-full flex-col items-center justify-start bg-white py-24 text-black"
    >
      <SearchBar />
      {/* About Us Body */}
      <div className="container relative flex flex-col items-center justify-center gap-4">
        <article className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-highlight-2 text-[24px] font-light leading-none">Why Us</h2>
          <h1 className="text-[48px] font-medium leading-none">Discover the difference</h1>
          <p className="text-gray/60 w-[60%] text-center font-semibold">
            Find tickets for the hottest concerts and live events. Browse upcoming shows, select your seats, and secure
            your spot at unforgettable performances. Stay tuned—more events are coming soon!
          </p>
        </article>
        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          {cards.map((card) => (
            <AboutUsCards key={card.label} {...card} />
          ))}
        </div>
        <button className="mt-6 rounded-lg bg-main px-8 py-2 font-medium text-white">Join Now</button>

        {/* blur */}
        <div className="about-us-blur bottom-0 right-0" />
        <div className="about-us-blur left-0 top-0" />
      </div>
    </section>
  );
}
