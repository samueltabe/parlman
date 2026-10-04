import Image from "next/image";
import { site, reclaimingSpirit } from "../data/content";

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

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-bronze-deep">
            Available now
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.05] text-ink">
            Don&apos;t hesitate to get your copy now.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate md:text-lg">
            Begin the journey with{" "}
            <em className="text-ink">Reclaiming Respect</em> — and continue with{" "}
            <em className="text-ink">Reclaiming the Spirit</em>, now available
            on Amazon.
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
          </div>
        </div>

        <div className="reveal delay-1">
          <Image
            src={reclaimingSpirit.amazonBanner}
            alt={`${reclaimingSpirit.title} now available on Amazon in hardcover, paperback, and Kindle eBook`}
            width={1374}
            height={1145}
            className="w-full shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {reclaimingSpirit.formats.map((format) => (
              <a
                key={format.label}
                href={format.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink px-4 py-3.5 text-center text-xs font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-bronze hover:text-ink"
              >
                {format.label}
              </a>
            ))}
          </div>
          <p className="mt-3 text-center text-sm text-slate">
            Buy <em>{reclaimingSpirit.title}</em> on Amazon, or scan a QR code
            with your phone.
          </p>
        </div>
      </div>
    </section>
  );
}
