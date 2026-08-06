"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, site } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-bronze/15 bg-ink"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="relative z-50 flex items-center gap-3"
          >
            <Image
              src="/images/logo1.jpg"
              alt={`${site.title} logo`}
              width={48}
              height={48}
              className="h-11 w-11 object-cover"
            />
            <span className="font-display text-lg tracking-wide text-paper md:text-xl">
              Reclaiming
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-mist/80 transition-colors hover:text-bronze-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#spirit"
              className="border border-bronze/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-bronze-light transition-colors hover:bg-bronze hover:text-ink"
            >
              October 2026
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-0.5 w-6 origin-center bg-paper transition-transform duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-paper transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 origin-center bg-paper transition-transform duration-300 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Outside header so blur/filter never traps this fixed panel */}
      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-6 px-6 pt-20">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-paper transition-colors hover:text-bronze sm:text-4xl"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#spirit"
            onClick={() => setOpen(false)}
            className="mt-4 border border-bronze/60 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-bronze-light transition-colors hover:bg-bronze hover:text-ink"
          >
            October 2026
          </a>
        </nav>
      </div>
    </>
  );
}
