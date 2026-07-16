import { Eye, Compass } from "lucide-react";
import { Reveal } from "../Reveal";

const content = [
  {
    label: "Vision",
    icon: Eye,
    heading:
      "A continent where every hectare of dryland is alive with soil, seed, and community.",
    description:
      "We envision thriving landscapes where healthy soils restore ecosystems, strengthen livelihoods, and secure Africa's food future.",
  },
  {
    label: "Mission",
    icon: Compass,
    heading:
      "To give dryland soils the voice they deserve through science, advocacy, and farmer-led restoration.",
    description:
      "We connect research, policy, and local knowledge to regenerate degraded landscapes and create measurable environmental and social impact.",
  },
];

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-sand/30 to-cream py-32">
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-earth">
            Our Purpose
          </p>

          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] text-balance">
            Guided by a vision.
            {/* <br />
            Driven by a mission. */}
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Everything we do begins beneath the surface with healthier soils,
            stronger communities, and a more resilient Africa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {content.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-4xl border border-border/60 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-forest/20 hover:shadow-[0_30px_80px_-30px_rgba(22,61,48,.18)]"
              >
                {/* Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-forest via-olive to-earth scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                {/* Background Glow */}
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-forest/5 blur-3xl transition-all duration-500 group-hover:bg-forest/10" />

                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-all duration-500 group-hover:scale-110 group-hover:bg-forest group-hover:text-cream">
                  <Icon strokeWidth={1.5} className="h-8 w-8" />
                </div>

                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-earth">
                  {item.label}
                </p>

                <h3 className="font-display text-2xl leading-tight text-balance">
                  {item.heading}
                </h3>

                <p className="mt-6 leading-relaxed text-lg text-muted-foreground">
                  {item.description}
                </p>

                {/* Decorative line */}
                <div className="mt-10 h-px w-20 bg-earth/30 transition-all duration-500 group-hover:w-36 group-hover:bg-forest" />
              </div>
            );
          })}
        </div>
      </div>

      </Reveal>
      
    </section>
  );
}