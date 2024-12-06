export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section flex min-h-[75dvh] w-screen max-w-[100dvw] flex-col items-start justify-center overflow-clip px-4 pt-[80px] lg:p-24"
    >
      <div className="container relative flex h-full w-full flex-col gap-6 p-0 lg:pb-10 xl:gap-10">
        <article className="lg:max-w-[65%]">
          <h1 className="text-center text-[32px] font-black leading-tight text-white lg:text-left lg:text-[64px]">
            Experience <span className="text-highlight-2"> more.</span>
          </h1>
          <h1 className="text-center text-[32px] font-black leading-tight text-white lg:text-left lg:text-[64px]">
            Spend <span className="text-highlight-2"> less</span> with Sourced Tickets.
          </h1>
        </article>
        <article className="text-center lg:max-w-[55%] lg:text-left">
          <p className="leading-loose text-white/60 lg:leading-normal">
            Find tickets for the hottest concerts and live events. Browse upcoming shows, select your seats, and secure
            your spot at unforgettable performances. Stay tuned—more events are coming soon!
          </p>
        </article>
        <div className="flex w-full items-center justify-center gap-4 text-white lg:w-fit">
          <button className="rounded-md border border-white bg-main px-4 py-2">Login</button>
          <button className="rounded-md bg-highlight-2 px-4 py-2">Join Now</button>
        </div>
        <div className="hero-blur" aria-hidden />
        <div className="-right-8 -mt-10 -translate-x-[15%] lg:absolute lg:top-10 lg:mt-0 lg:max-w-[45dvw] lg:translate-x-0 xl:-top-10">
          <img src="/img/hero-img.png" alt="Hero Image" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
