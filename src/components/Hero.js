import { site } from "../data/content";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] items-end overflow-hidden bg-ink text-paper"
    >
      <HeroSlider />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-24">
        
        <h1
          className="animate-fade-up font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.92] tracking-tight text-paper"
          style={{ animationDelay: "0.2s" }}
        >
          Reclaiming
          <br />
          <span className="italic text-bronze-light">Respect</span>
        </h1>
        <p
          className="animate-fade-up mt-7 max-w-xl text-base leading-relaxed text-mist/85 md:text-lg"
          style={{ animationDelay: "0.35s" }}
        >
          {site.tagline}
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#order"
            className="bg-bronze px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-bronze-light"
          >
            Order the Book
          </a>
          <a
            href="#spirit"
            className="border border-paper/35 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:border-bronze hover:text-bronze-light"
          >
            New Memoir · 2026
          </a>
        </div>
      </div>
    </section>
  );
}
