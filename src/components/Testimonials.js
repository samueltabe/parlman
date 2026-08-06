"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import testimonials from "../data/testimonials.json";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 7000);
    return () => clearInterval(timer);
  }, [total]);

  const go = (dir) => {
    setIndex((i) => (i + dir + total) % total);
  };

  return (
    <section id="voices" className="bg-ink-soft text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="reveal mb-14 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-bronze">
            Voices
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.0rem,5vw,3.0rem)] leading-[1.05]">
            What leaders are saying
          </h2>
        </div>

        <div className="reveal delay-1 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <blockquote className="max-w-4xl">
            <p className="font-display text-lg leading-snug text-paper md:text-xl md:leading-snug">
              “{current.quote}”
            </p>
            <footer className="mt-10 flex items-center gap-4">
              <Image
                src={current.image}
                alt={current.name}
                width={72}
                height={72}
                className="h-16 w-16 object-cover"
              />
              <div>
                <cite className="not-italic font-display text-xl text-bronze-light">
                  {current.name}
                </cite>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-mist/60">
                  {current.title}
                </p>
              </div>
            </footer>
          </blockquote>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="border border-paper/20 px-4 py-3 text-paper transition-colors hover:border-bronze hover:text-bronze"
            >
              ←
            </button>
            <span className="min-w-[4.5rem] text-center text-sm tabular-nums text-mist/50">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="border border-paper/20 px-4 py-3 text-paper transition-colors hover:border-bronze hover:text-bronze"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
