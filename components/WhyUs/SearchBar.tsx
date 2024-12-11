import SeachIcon from '@/public/svg/SeachIcon';
import { useRouter } from 'next/navigation';
export default function SearchBar() {
  const router = useRouter();
  return (
    <div className="container absolute -top-20 left-0 right-0 z-20 flex w-[90%] flex-col gap-2 rounded-lg bg-[#F2F2F2] p-4 shadow-lg lg:-top-24 lg:w-full lg:max-w-[900px] xl:max-w-[1440px]">
      <label htmlFor="hero-search" className="text-[14px] font-semibold">
        Search by Artist, Team, or Event
      </label>
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
        <div className="flex w-full grow items-center gap-2 rounded-md bg-[#E0E0E0] px-2 lg:w-fit">
          <label htmlFor="hero-search" className="w-fit">
            <SeachIcon />
          </label>
          <input
            type="text"
            id="hero-search"
            placeholder="sample search"
            className="w-full rounded-md bg-inherit p-2 focus:outline-none"
          />
        </div>
        <button
          onClick={() => router.push('/search')}
          className="w-full rounded-md bg-main px-8 py-2 text-base font-bold text-[#F2F2F2] lg:w-fit"
        >
          Search
        </button>
      </div>
    </div>
  );
}
