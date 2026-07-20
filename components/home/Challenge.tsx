import React from "react";
import { Reveal } from "../Reveal";
import Image from "next/image";

const Challenge = () => {
  const stats = [
  {
    v: "65%",
    l: "of Africa's land is affected by degradation",
  },
  {
    v: "500M+",
    l: "people depend on Africa's dryland ecosystems",
  },
  {
    v: "24B",
    l: "tonnes of fertile soil are lost to erosion globally each year",
  },
  {
    v: "100ha",
    l: "our restoration target by 2036",
  },
];
  return (
    <section className="relative py-32 md:py-44 bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0">
          <Image
            src="/aerial-regeneration.jpg"
            alt="Dryland landscape"
            fill
            priority
            className="object-cover"
          />

          {/* <div className="absolute inset-0 bg-black/20" /> */}
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/70 to-ink" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <Reveal>
            <div>
              <p className="text-sand/80 text-xs tracking-[0.3em] uppercase mb-6">
                Why It Matters
              </p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-balance">
                Healthy soils are the foundation of food, livelihoods, and climate resilience.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
           <p className="text-cream/80 text-lg md:text-right leading-relaxed max-w-xl lg:justify-self-end">
  Dryland soils sustain millions of people, yet they face growing pressure
  from land degradation, climate change, and unsustainable land use. By
  restoring soil health through science, farmer empowerment, and
  agroecological practices, we can strengthen ecosystems, improve food
  security, and build resilient communities for generations to come.
</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 rounded-3xl overflow-hidden border border-cream/10">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 100} className="bg-ink">
              <div className="p-8 md:p-10">
                <p className="font-display text-5xl md:text-6xl text-sand mb-4">
                  {s.v}
                </p>
                <p className="text-cream/70 text-md leading-relaxed">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;
