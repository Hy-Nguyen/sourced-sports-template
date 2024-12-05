import SeachIcon from '@/public/svg/SeachIcon';

export default function SearchBar() {
  return (
    <div className="container absolute -top-24 left-0 right-0 z-20 flex w-full flex-col gap-2 rounded-lg bg-[#F2F2F2] p-4">
      <label htmlFor="hero-search" className="text-[14px] font-semibold">
        Search by Artist, Team, or Event
      </label>
      <div className="flex items-center gap-4">
        <div className="flex grow items-center gap-2 rounded-md bg-[#E0E0E0] px-2">
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
        <button className="rounded-md bg-main px-8 py-2 text-base font-bold text-[#F2F2F2]">Search</button>
      </div>
    </div>
  );
}
