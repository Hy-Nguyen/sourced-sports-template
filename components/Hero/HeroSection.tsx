export default function HeroSection() {
  return (
    <section id="hero" className="hero-section flex min-h-[75dvh] w-screen flex-col items-start justify-center lg:p-24">
      <div className="container relative flex h-full w-full flex-col gap-10 p-0">
        <article className="max-w-[65%]">
          <h1 className="text-[64px] font-black leading-tight text-white">
            Experience <span className="text-highlight-2"> more.</span>
          </h1>
          <h1 className="text-[64px] font-black leading-tight text-white">
            Spend <span className="text-highlight-2"> less</span> with Sourced Tickets.
          </h1>
        </article>
        <article className="max-w-[55%]">
          <p className="text-white/60">
            Find tickets for the hottest concerts and live events. Browse upcoming shows, select your seats, and secure
            your spot at unforgettable performances. Stay tuned—more events are coming soon!
          </p>
        </article>
        <div className="flex gap-4 text-white">
          <button className="rounded-md border border-white bg-main px-4 py-2">Login</button>
          <button className="bg-highlight-2 rounded-md px-4 py-2">Join Now</button>
        </div>
        <div className="hero-blur" aria-hidden />
      </div>
    </section>
  );
}
