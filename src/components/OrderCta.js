import Image from "next/image";
import { site } from "../data/content";

export default function OrderCta() {
  return (
    <section id="order" className="relative overflow-hidden bg-mist">
      <div className="absolute inset-0">
        <Image
          src="/images/book.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mist via-mist/95 to-mist/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
        <div className="reveal max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-bronze-deep">
            Available now
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.05] text-ink">
            Don&apos;t hesitate to get your copy now.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate md:text-lg">
            Begin the journey with{" "}
            <em className="text-ink">Reclaiming Respect</em> — and watch for{" "}
            <em className="text-ink">Reclaiming the Spirit</em>, arriving
            October 2026.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.barnesNoble}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-ink-soft"
            >
              Barnes & Noble
            </a>
            <a
              href={site.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink/30 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-bronze hover:text-bronze-deep"
            >
              Amazon
            </a>
            <a
              href="#spirit"
              className="border border-bronze/50 bg-bronze/10 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-bronze-deep transition-colors hover:bg-bronze hover:text-ink"
            >
              New Book · Oct 2026
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
