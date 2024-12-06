import { useState } from 'react';
import SportsView from './EventViews/SportsView';
import ArtistView from './EventViews/ArtistView';
import ShowsView from './EventViews/ShowsView';
import { AnimatePresence } from 'framer-motion';

export default function EventSection() {
  const [currentView, setCurrentView] = useState<'sports' | 'artists' | 'shows'>('sports');

  const views: { name: 'sports' | 'artists' | 'shows'; label: string }[] = [
    { name: 'sports', label: 'SPORTS' },
    { name: 'artists', label: 'ARTISTS' },
    { name: 'shows', label: 'SHOWS' },
  ];

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
    <section id="events" className="relative  flex flex-col items-center justify-center bg-main text-white">
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="events-blur absolute left-0 top-1/2" />
        <article id="event-header" className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-[20px] font-light text-highlight-2 lg:text-[24px]">Events</h2>
          <h1 className="text-[32px] font-bold lg:text-[48px]">See what&apos;s trending</h1>
        </article>

        {/* View Tabs */}
        <div id="view-tabs" className="flex flex-row items-center justify-center gap-6 lg:gap-36">
          {views.map((view) => (
            <button
              key={view.name}
              className={`${currentView === view.name ? 'text-white' : 'text-white/30'} text-base font-bold transition-colors duration-300 lg:text-[20px] lg:hover:text-white/60`}
              onClick={() => setCurrentView(view.name)}
            >
              {view.label}
            </button>
          ))}
        </div>

        <AnimatePresence>{renderView()}</AnimatePresence>
      </div>
    </section>
  );
}
