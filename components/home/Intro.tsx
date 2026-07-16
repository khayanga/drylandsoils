

import { Reveal } from "../Reveal";

const pillars = [
  {
    number: "01",
    title: "Rooted in Science",
    description:
      "Every recommendation begins in the lab and ends in the field. We publish, measure, and defend what works.",
  },
  {
    number: "02",
    title: "Led by Farmers",
    description:
      "The people who steward the drylands are the true experts. Every programme is designed alongside them—not for them.",
  },
  {
    number: "03",
    title: "Built for Scale",
    description:
      "From a single hectare to national policy, we create restoration systems that endure across generations.",
  },
];

export default function Intro() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-earth">
                The Brand
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(2.3rem,5vw,4.8rem)] leading-[1.05] text-balance">
                Beneath every harvest is a
                <span className="text-forest"> story of soil.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <p className="max-w-xl md:text-right text-base leading-8 text-muted-foreground md:text-lg">
                We believe healthy soils are the foundation of resilient
                communities. Through science, advocacy, and farmer-led
                innovation, we restore landscapes while strengthening the
                people who depend on them.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={index * 120}>
              <div className="group h-full rounded-3xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-forest/30 hover:shadow-xl">
                <span className="text-sm font-semibold tracking-[0.3em] text-earth">
                  {pillar.number}
                </span>

                <h3 className="mt-6 font-display text-3xl text-foreground transition-colors group-hover:text-forest">
                  {pillar.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}