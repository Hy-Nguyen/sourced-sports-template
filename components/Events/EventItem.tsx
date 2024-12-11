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
      className="group relative flex min-h-fit w-full flex-col items-start justify-between gap-4 border-b-2 border-white/10 py-2 transition-colors duration-300 hover:border-highlight-2 lg:flex-row lg:items-center lg:px-6 lg:py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="left-0 top-0 hidden h-full w-full lg:absolute lg:block">
        <img
          src={img}
          alt={label}
          className="h-full w-full object-cover opacity-0 transition-all duration-300 group-hover:opacity-50 group-hover:blur-sm"
        />
      </div>
      <div className="-right-10 top-10 hidden aspect-video h-full w-auto rotate-[4deg] overflow-hidden rounded-md border border-white/60 opacity-0 transition-all duration-500 group-hover:right-28 group-hover:opacity-100 lg:absolute lg:block">
        <img src={img} alt={label} className="h-full w-full object-cover" />
      </div>
      <article className="z-10 flex w-full flex-col items-start gap-4 lg:w-auto lg:flex-row lg:items-center">
        <h2 className="text-base font-normal text-[#F6F6F6AB] transition-colors duration-300 group-hover:text-highlight-2 lg:text-[20px]">
          {category.toUpperCase()} <span className="text-highlight-2">#{index + 1}</span>
        </h2>
        <h1 className="text-4xl font-normal transition-all duration-300 group-hover:translate-x-5 group-hover:font-bold group-hover:text-highlight-2 lg:text-[56px]">
          {label}
        </h1>
      </article>
      <a href="#" className="relative z-10 text-[#F6F6F6AB] group-hover:text-white">
        <span
          className={`transition-opacity duration-300 lg:absolute ${isHovered ? 'opacity-100 lg:opacity-0' : 'opacity-100'}`}
        >
          Visit
        </span>
        <span
          className={`hidden transition-opacity duration-300 lg:absolute lg:block ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <ChevronRight />
        </span>
      </a>
    </div>
  );
}
