import Image from "next/image";
import { author } from "../data/content";

export default function Author() {
  return (
    <section id="author" className="bg-mist text-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div className="reveal order-2 lg:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-bronze-deep">
            About the Author
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.0rem,5vw,3rem)] leading-[1.05]">
            {author.name}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate md:text-base">
            {author.roles}
          </p>
          <div className="bronze-rule my-8 w-28" />
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            {author.bio}
          </p>
        </div>

        <div className="reveal delay-2 order-1 relative lg:order-2">
          <div className="absolute -bottom-4 -right-4 hidden h-full w-full border border-bronze/40 md:block" />
          <Image
            src={author.image}
            alt={author.name}
            width={900}
            height={1100}
            className="relative z-10 aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
