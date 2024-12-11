import SearchHero from '@/components/searchPage/SearchHero';
import SearchResults from '@/components/searchPage/SearchResults';

export default function Search() {
  return (
    <section id="search" className="flex min-h-screen w-screen flex-col items-start justify-start pt-[60px] text-black">
      <SearchHero />
      <SearchResults />
    </section>
  );
}
