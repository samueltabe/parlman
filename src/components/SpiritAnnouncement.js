"use client";

import { useState } from "react";
import Image from "next/image";
import { reclaimingSpirit } from "../data/content";

const INITIAL_PARAGRAPHS = 2;

export default function SpiritAnnouncement() {
  const paragraphs = reclaimingSpirit.writeup.split("\n\n");
  const hasMoreText = paragraphs.length > INITIAL_PARAGRAPHS;
  const [expanded, setExpanded] = useState(false);
  const visibleParagraphs = expanded
    ? paragraphs
    : paragraphs.slice(0, INITIAL_PARAGRAPHS);

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
        <div className="reveal mb-14 text-center md:mb-16">
          <div className="bronze-rule mx-auto w-40" />
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

        <div className="reveal delay-1 grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="mx-auto w-full max-w-[min(100%,20rem)] sm:max-w-[22rem] md:max-w-[24rem] lg:mx-0 lg:max-w-[26rem] xl:max-w-[28rem]">
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-3 border border-bronze/25 md:-inset-4" />
              <Image
                src="/images/newbook.png"
                alt={`${reclaimingSpirit.title} book cover`}
                width={720}
                height={960}
                className="relative z-10 w-full h-auto shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-display text-2xl text-bronze-light md:text-3xl">
              About the memoir
            </h3>
            <div className="mt-6 flex-1 space-y-5 text-base leading-relaxed text-mist/80 md:mt-8 md:space-y-6 md:text-lg">
              {visibleParagraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>

            {hasMoreText ? (
              <div className="mt-6 md:mt-8">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="border border-bronze/50 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-bronze-light transition-colors hover:border-bronze hover:bg-bronze/10 hover:text-paper"
                  aria-expanded={expanded}
                >
                  {expanded ? "Read less" : "Read more"}
                </button>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-bronze/20 pt-8 md:mt-10">
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

            <div className="mt-6 flex flex-wrap gap-3">
              {reclaimingSpirit.formats.map((format) => (
                <a
                  key={format.label}
                  href={format.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bronze px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-bronze-light"
                >
                  {format.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
