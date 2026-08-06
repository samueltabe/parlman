import Image from "next/image";
import { site } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
          <div>
            <Image
              src="/images/logo1.jpg"
              alt={`${site.title} logo`}
              width={72}
              height={72}
              className="h-16 w-16 object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:col-span-3">
            <div>
              <h3 className="text-xs uppercase tracking-[0.22em] text-bronze">
                Get in touch
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 block break-all text-sm text-paper transition-colors hover:text-bronze-light"
              >
                {site.email}
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.22em] text-bronze">
                Locations
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-mist/75">
                {site.locations.map((loc) => (
                  <li key={loc}>{loc}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.22em] text-bronze">
                Connect
              </h3>
              <ul className="mt-4 space-y-1">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-mist/75 transition-colors hover:text-bronze-light"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mist/75 transition-colors hover:text-bronze-light"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mist/75 transition-colors hover:text-bronze-light"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bronze-rule mt-16 w-full opacity-40" />
        <div className="mt-5 flex flex-col items-center gap-3 text-center text-xs text-mist/45 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Reclaiming Respect. All rights reserved.</p>
          <span>developed by <a href="https://samtabe.org" target="_blank" rel="noopener noreferrer">Samuel Tabe</a></span>
        </div>
      </div>
    </footer>
  );
}
