"use client";

import { useState } from "react";
import Image from "next/image";
import { reclaimingRespect, site } from "../data/content";

export default function BookSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll
    ? reclaimingRespect.chapters
    : reclaimingRespect.chapters.slice(0, 6);

  return (
    <section id="book" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="reveal relative mx-auto max-w-sm">
            <div className="absolute inset-x-8 -bottom-6 top-8 bg-bronze/20 blur-2xl" />
            <Image
              src={reclaimingRespect.cover}
              alt={`${reclaimingRespect.title} book cover`}
              width={640}
              height={900}
              className="relative z-10 w-full drop-shadow-2xl"
            />
          </div>

          <div className="reveal delay-1">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-bronze-deep">
              About the Book
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05]">
              {reclaimingRespect.title},{" "}
              <span className="italic text-bronze-deep">
                {reclaimingRespect.subtitle}
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
              {reclaimingRespect.overview}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              {reclaimingRespect.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.barnesNoble}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-ink-soft"
              >
                Barnes & Noble
              </a>
              <a
                href={site.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink/25 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-bronze hover:text-bronze-deep"
              >
                Amazon
              </a>
            </div>
          </div>
        </div>

        <div className="reveal mt-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-bronze-deep">
                Inside the Book
              </p>
              <h3 className="mt-2 font-display text-3xl md:text-4xl">
                Chapters &amp; pillars of peace
              </h3>
            </div>
            <p className="text-sm text-slate">
              Seventeen chapters and an epilogue
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((chapter) => (
              <article
                key={chapter.num}
                className="group border border-ink/10 bg-paper/70 p-6 transition-colors hover:border-bronze/50"
              >
                <span className="font-display text-3xl text-bronze/70 transition-colors group-hover:text-bronze-deep">
                  {chapter.num}
                </span>
                <h4 className="mt-3 font-display text-xl leading-snug">
                  {chapter.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {chapter.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="border border-ink/20 px-7 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:border-bronze hover:text-bronze-deep"
            >
              {showAll ? "Show fewer chapters" : "Explore all chapters"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
