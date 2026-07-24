import {
  Leaf,
  Trees,
  Bug,
  Beef,
  Tractor,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "../Reveal";

const solutions = [
  {
    icon: Leaf,
    title: "Organic Fertilizer",
    description:
      "Rich in natural nutrients that improve soil fertility, strengthen crop growth, and support long-term soil health.",
  },
  {
    icon: Trees,
    title: "Biochar Soil Amendment",
    description:
      "Carbon-rich biochar that enhances water retention, improves nutrient availability, and restores degraded soils.",
  },
  {
    icon: Bug,
    title: "Frass Fertilizer",
    description:
      "An insect-based organic fertilizer packed with nutrients and beneficial microbes that stimulate healthy plant growth.",
  },
  {
    icon: Beef,
    title: "Animal Manure",
    description:
      "Well-decomposed manure that enriches soil organic matter, improves soil structure, and supports microbial life.",
  },
  {
    icon: Tractor,
    title: "Farmyard Manure",
    description:
      "A balanced organic amendment that restores soil fertility, improves moisture retention, and increases productivity.",
  },
];

const benefits = [
  "Improves Soil Fertility",
  "Increases Water Retention",
  "Healthier Root Development",
  "Boosts Crop Productivity",
  "Restores Soil Biology",
  "Reduces Chemical Inputs",
  "Supports Climate Resilience",
  "Long-term Soil Health",
];

export default function ServiceBlock() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-earth">
              Our Agroecological Solutions
            </p>

            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
              Nature-based solutions for
              <span className="text-forest"> healthier soils.</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Our agroecological solutions combine regenerative agriculture,
              soil science, and locally available organic inputs to restore
              degraded soils, improve productivity, and build resilient farming
              systems across Africa's drylands.
            </p>
          </div>
        </Reveal>

        {/* Solution Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <Reveal key={solution.title} delay={index * 100}>
                <div className="group rounded-[2rem] border border-border bg-cream p-8 transition-all duration-500 hover:-translate-y-2 hover:border-forest/20 hover:shadow-[0_25px_60px_rgba(15,90,23,0.08)]">

                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-all duration-500 group-hover:bg-forest group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <h3 className="font-display text-2xl">
                    {solution.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Benefits */}

        <Reveal delay={500}>
          <div className="mt-24 rounded-[2.5rem] bg-forest p-10 md:p-14 text-cream">

            <div className="mb-10 max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-sand">
                Outcomes
              </p>

              <h3 className="font-display text-4xl">
                Why farmers choose these solutions.
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-sand shrink-0" />

                  <span className="text-sm leading-6">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}