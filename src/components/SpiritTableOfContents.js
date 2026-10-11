"use client";

import { useState } from "react";
import Image from "next/image";
import { author, reclaimingSpirit } from "../data/content";

const INITIAL_VISIBLE = 8;

function entryBadge(entry) {
  if (entry.chapter != null) {
    return String(entry.chapter).padStart(2, "0");
  }
  return entry.page;
}

function entryTitle(entry) {
  if (entry.chapter != null) {
    return entry.title;
  }
  return entry.title;
}

function entryKind(entry) {
  if (entry.chapter != null) {
    return `Chapter ${entry.chapter}`;
  }
  if (entry.title === "Foreword" || entry.title === "A Consecration") {
    return "Front matter";
  }
  if (entry.title === "Epilogue") {
    return "Epilogue";
  }
  return "Back matter";
}

export default function SpiritTableOfContents() {
  const [showAll, setShowAll] = useState(false);
  const entries = reclaimingSpirit.tableOfContents;
  const hasMore = entries.length > INITIAL_VISIBLE;
  const visible = showAll ? entries : entries.slice(0, INITIAL_VISIBLE);

  return (
    <section
      id="spirit-contents"
      className="relative overflow-hidden bg-paper text-ink"
    >
      <div className="pointer-events-none absolute inset-0 texture-grain opacity-60" />
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-bronze/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-mist-deep/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-bronze-deep">
              {reclaimingSpirit.title}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08]">
              Table of Contents
            </h2>
            <blockquote className="mt-6 border-l-2 border-bronze/50 pl-5">
              <p className="font-display text-lg italic leading-relaxed text-ink-muted md:text-xl">
                &ldquo;{reclaimingSpirit.tableOfContentsQuote}&rdquo;
              </p>
              <footer className="mt-2 text-sm text-slate">
                — {author.name}
              </footer>
            </blockquote>
          </div>
          <p className="text-sm text-slate">
            Ten chapters, epilogue &amp; reference
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((entry) => (
            <article
              key={
                entry.chapter != null
                  ? `ch-${entry.chapter}`
                  : `fm-${entry.title}`
              }
              className="group flex h-full flex-col border border-ink/10 bg-mist/40 p-6 transition-colors hover:border-bronze/50 hover:bg-paper/90"
            >
              <span className="font-display text-3xl text-bronze/70 transition-colors group-hover:text-bronze-deep">
                {entryBadge(entry)}
              </span>
              <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-bronze-deep/80">
                {entryKind(entry)}
              </p>
              <h3 className="mt-3 flex-1 font-display text-xl leading-snug">
                {entryTitle(entry)}
              </h3>
              <p className="mt-4 text-sm tabular-nums text-slate">
                Page {entry.page}
              </p>
            </article>
          ))}
        </div>

        {hasMore ? (
          <div className="reveal mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="border border-ink/20 px-7 py-3 text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:border-bronze hover:text-bronze-deep"
            >
              {showAll ? "View less" : "View more"}
            </button>
          </div>
        ) : null}

      </div>
    </section>
  );
}
