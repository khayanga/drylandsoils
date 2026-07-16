import { ArrowRight, MapPin } from "lucide-react";
import React from "react";
import { Reveal } from "../Reveal";
import Link from "next/link";
import Image from "next/image";

const Impact = () => {
  const items = [
    {
      img: "/farmer-soil.jpg",
      place: "Turkana, Kenya",
      title: "A grandmother's field, alive again.",
    },
    {
      img: "/soil-testing.jpg",
      place: "Tigray, Ethiopia",
      title: "The lab that changed a district.",
    },
    {
      img: "/training.jpg",
      place: "Sahel, Burkina Faso",
      title: "Elders and agronomists, one circle.",
    },
  ];
  return (
    <section className="py-32 md:py-44 bg-sand/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <p className="text-earth text-xs tracking-[0.3em] uppercase mb-6">
                From the Field
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] max-w-2xl text-balance">
                Stories carried by the wind and the harvest.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-forest border-b border-forest/40 hover:border-forest pb-1"
            >
              See our impact <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 120}>
              <article className="group">
                <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-muted mb-6">
                  <Image
                    src={it.img}
                    alt={it.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-center gap-2 text-cream/95 text-xs tracking-[0.2em] uppercase">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />{" "}
                    {it.place}
                  </div>
                </div>
                <h3 className="font-display text-2xl leading-snug">
                  {it.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
