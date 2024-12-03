import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function EventItem({
  label,
  img,
  index,
  category,
}: {
  label: string;
  img: string;
  index: number;
  category: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="group relative flex w-full flex-row items-center justify-between gap-10 border-b-2 border-white/10 px-6 py-10 transition-colors duration-300 hover:border-highlight-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-0 top-0 h-full w-full">
        <img
          src={img}
          alt={label}
          className="h-full w-full object-cover opacity-0 transition-all duration-300 group-hover:opacity-50 group-hover:blur-sm"
        />
      </div>
      <div className="absolute -right-10 top-10 aspect-video h-full w-auto rotate-[4deg] overflow-hidden rounded-md border border-white/60 opacity-0 transition-all duration-500 group-hover:right-28 group-hover:opacity-100">
        <img src={img} alt={label} className="h-full w-full object-cover" />
      </div>
      <article className="z-10 flex flex-row items-center gap-4">
        <h2 className="text-[20px] font-normal text-[#F6F6F6AB] transition-colors duration-300 group-hover:text-highlight-2">
          {category.toUpperCase()} <span className="text-highlight-2">#{index + 1}</span>
        </h2>
        <h1 className="text-[60px] font-normal transition-all duration-300 group-hover:translate-x-5 group-hover:font-bold group-hover:text-highlight-2">
          {label}
        </h1>
      </article>
      <a href="#" className="z-10 text-[#F6F6F6AB] group-hover:text-white relative">
        <span
          className={`absolute transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        >
          Visit
        </span>
        <span
          className={`absolute transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <ChevronRight />
        </span>
      </a>
    </div>
  );
}
