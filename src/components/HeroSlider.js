"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/slider/01.png", position: "object-[center_18%]" },
  { src: "/images/slider/02.jpg", position: "object-[center_30%]" },
  { src: "/images/slider/020.jpg", position: "object-[center_25%]" },
  { src: "/images/slider/01.jpg", position: "object-[center_20%]" },
];

const INTERVAL_MS = 8000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === active;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-[2200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isActive ? "z-[2] opacity-100" : "z-[1] opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover ${slide.position} ${
                isActive ? "animate-kenburns-live" : "scale-105"
              }`}
              style={
                isActive
                  ? { animationDuration: `${INTERVAL_MS}ms` }
                  : undefined
              }
            />
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-ink/55 via-transparent to-ink/20" />
      <div className="pointer-events-none absolute inset-0 z-[3] texture-grain opacity-50" />

      <div className="absolute bottom-8 right-5 z-20 flex items-center gap-3 md:right-8 md:bottom-10">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`relative h-1.5 overflow-hidden transition-all duration-500 ${
              index === active
                ? "w-10 bg-bronze/30"
                : "w-1.5 bg-paper/35 hover:bg-paper/60"
            }`}
          >
            {index === active && (
              <span
                key={`progress-${active}-${paused}`}
                className={`absolute inset-y-0 left-0 bg-bronze ${
                  paused ? "w-full" : "animate-slide-progress"
                }`}
                style={
                  paused ? undefined : { animationDuration: `${INTERVAL_MS}ms` }
                }
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
