import Inventory from '@/public/svg/AboutUs/Inventory';
import SearchBar from './SearchBar';
import AboutUsCards from './AboutUsCards';
import VerifiedTickets from '@/public/svg/AboutUs/VerifiedTickets';
import BestPrice from '@/public/svg/AboutUs/BestPrice';
import HiddenFees from '@/public/svg/AboutUs/HiddenFees';
import Trophy from '@/public/svg/AboutUs/Trophy';

export const cards = [
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
export default function WhyUsSection() {
  return (
    <section
      id="about-us"
      className="relative flex min-h-[50dvh] w-full flex-col items-center justify-start bg-white py-24 pb-0 text-black lg:pb-24"
    >
      <div className="">
        <SearchBar />
      </div>
      {/* About Us Body */}
      <div className="container relative flex flex-col items-center justify-center gap-4">
        <article className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-[20px] font-light leading-none text-highlight-2 lg:text-[24px]">Why Us</h2>
          <h1 className="text-center text-[30px] font-medium leading-none lg:text-left lg:text-[48px]">
            Discover the difference
          </h1>
          <p className="text-center text-sm font-semibold text-gray/60 lg:w-[60%] lg:text-base">
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
        <div className="about-us-blur bottom-0 right-0 z-0" />
        <div className="about-us-blur left-0 top-0 z-0" />
      </div>
    </section>
  );
}
