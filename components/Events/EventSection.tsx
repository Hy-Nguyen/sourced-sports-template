import { useState } from 'react';
import SportsView from './EventViews/SportsView';
import ArtistView from './EventViews/ArtistView';
import ShowsView from './EventViews/ShowsView';
import { AnimatePresence } from 'framer-motion';

export default function EventSection() {
  const [currentView, setCurrentView] = useState<'sports' | 'artists' | 'shows'>('sports');

  function renderView() {
    switch (currentView) {
      case 'sports':
        return <SportsView />;
      case 'artists':
        return <ArtistView />;
      case 'shows':
        return <ShowsView />;
    }
  }
  return (
    <section id="events" className="pb -24 flex flex-col items-center justify-center bg-main text-white">
      <div className="container flex flex-col items-center justify-center gap-4">
        <article id="event-header" className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-[24px] font-light text-highlight-2">Events</h2>
          <h1 className="text-[48px] font-bold">See what&apos;s trending</h1>
        </article>

        {/* View Tabs */}
        <div id="view-tabs" className="flex flex-row items-center justify-center gap-36">
          <button
            className={`${currentView === 'sports' ? 'text-white' : 'text-white/30'} text-[20px] font-bold transition-colors duration-300 hover:text-white/60`}
            onClick={() => setCurrentView('sports')}
          >
            SPORTS
          </button>
          <button
            className={`${currentView === 'artists' ? 'text-white' : 'text-white/30'} text-[20px] font-bold transition-colors duration-300 hover:text-white/60`}
            onClick={() => setCurrentView('artists')}
          >
            ARTISTS
          </button>
          <button
            className={`${currentView === 'shows' ? 'text-white' : 'text-white/30'} text-[20px] font-bold transition-colors duration-300 hover:text-white/60`}
            onClick={() => setCurrentView('shows')}
          >
            SHOWS
          </button>
        </div>

        <AnimatePresence>{renderView()}</AnimatePresence>
      </div>
    </section>
  );
}
