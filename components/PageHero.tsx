import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  image: StaticImageData | string;
  imageAlt: string;
}

export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-40 text-cream md:pb-32 md:pt-52">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-55 animate-slow-zoom"
        />

        <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/60 to-ink" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-6 animate-rise text-xs uppercase tracking-[0.3em] text-cream/80">
          {eyebrow}
        </p>

        <h1
          className="animate-rise font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] text-balance max-w-4xl"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>

        <p
          className="mt-8 max-w-2xl animate-rise text-lg font-light leading-relaxed text-cream/85 md:text-xl"
          style={{ animationDelay: "260ms" }}
        >
          {lede}
        </p>
      </div>
    </section>
  );
}