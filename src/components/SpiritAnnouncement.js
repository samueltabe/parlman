import Image from "next/image";
import { reclaimingSpirit } from "../data/content";

export default function SpiritAnnouncement() {
  const paragraphs = reclaimingSpirit.writeup.split("\n\n");

  return (
    <section
      id="spirit"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div className="absolute inset-0 texture-grain opacity-40" />
      <div
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-bronze/10 blur-3xl"
        style={{ animation: "soft-pulse 8s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-bronze/10 blur-3xl"
        style={{ animation: "soft-pulse 10s ease-in-out infinite 1s" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-bronze">
            Save the Date
          </p>
          <div className="bronze-rule mx-auto mt-5 w-40" />
          <h2 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] text-paper">
            {reclaimingSpirit.title}
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-bronze-light">
            {reclaimingSpirit.series}
          </p>
          <p className="mx-auto mt-5 max-w-2xl font-display text-xl italic text-mist/80 md:text-2xl">
            {reclaimingSpirit.subtitle}
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal delay-1 relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 border border-bronze/25" />
            <Image
              src={reclaimingSpirit.cover}
              alt={`${reclaimingSpirit.title} virtual launch announcement`}
              width={900}
              height={1200}
              className="relative z-10 w-full object-cover shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            />
          </div>

          <div className="reveal delay-2">
            <div className="border border-bronze/30 bg-ink-soft/80 p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.24em] text-bronze">
                {reclaimingSpirit.launchLabel}
              </p>
              <h3 className="mt-4 font-display text-3xl text-paper md:text-4xl">
                {reclaimingSpirit.launchDate}
              </h3>
              <p className="mt-2 text-lg text-bronze-light">
                {reclaimingSpirit.launchTime}
              </p>
              <div className="bronze-rule my-6 w-full" />
              <p className="text-mist/80">{reclaimingSpirit.guests}</p>
              <p className="mt-3 text-sm text-slate">{reclaimingSpirit.foreword}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:Emanuel@reclaimingrespect.org?subject=Reclaiming%20the%20Spirit%20—%20Launch%20Invitation`}
                  className="bg-bronze px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bronze-light"
                >
                  Request Invitation
                </a>
                <span className="inline-flex items-center border border-bronze/40 px-6 py-3 text-xs uppercase tracking-[0.18em] text-bronze-light">
                  {reclaimingSpirit.release}
                </span>
              </div>
              <p className="mt-5 text-sm italic text-mist/55">
                {reclaimingSpirit.invitation}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <Image
                src={reclaimingSpirit.medallion}
                alt="Reclaiming the Spirit medallion"
                width={88}
                height={88}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-bronze">
                  Coming October 2026
                </p>
                <p className="mt-1 font-display text-xl text-paper">
                  Volume II of the Reclaiming Series
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal delay-3 mx-auto mt-20 max-w-4xl">
          <h3 className="font-display text-2xl text-bronze-light md:text-3xl">
            About the memoir
          </h3>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-mist/80 md:text-lg">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Image
              src={reclaimingSpirit.publisherLogo}
              alt={reclaimingSpirit.publisher}
              width={180}
              height={80}
              className="h-14 w-auto object-contain"
            />
            <p className="text-xs uppercase tracking-[0.22em] text-mist/50">
              {reclaimingSpirit.publisher}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
