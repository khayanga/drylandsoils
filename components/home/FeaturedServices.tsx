import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Megaphone,
  Sprout,
} from "lucide-react";
import { Reveal } from "../Reveal";

const services = [
  {
    number: "01",
    icon: Megaphone,
    title: "Advocacy & Storytelling",
    description:
      "We document compelling stories of dryland transformation and use evidence-based narratives to advocate for the potential of dryland soils, influence soil-centred policies, and inspire sustainable investment in ASAL landscapes.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Farmer Training & Advisory",
    description:
      "We empower farmers through capacity building, climate-smart agriculture (CSA) training, regenerative farming practices, technical advisory, and practical knowledge that improves productivity and resilience.",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Soil Testing & Analysis",
    description:
      "Our soil testing services identify nutrient deficiencies, soil health gaps, and productivity constraints, providing farmers with comprehensive reports and practical recommendations for restoration.",
  },
  {
    number: "04",
    icon: Sprout,
    title: "Agroecological Solutions",
    description:
      "We design tailored soil restoration strategies using regenerative agriculture, agroecology, and organic soil management practices that rebuild healthy, productive, and climate-resilient landscapes.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#FAF8F5] to-[#F5F1EA]/40 py-28 md:py-40">
      {/* Decorative Premium Glow Background */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-forest/5 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-8xl px-6 xl:px-16">
        <div className="mb-24 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-earth/80">
                What We Do
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-light leading-[1.1] tracking-tight text-neutral-900">
                Restoring dryland soils through
                <span className="text-forest font-normal"> science</span>,
                <span className="text-forest font-normal"> knowledge</span>, and
                <span className="text-forest font-normal">
                  {" "}
                  community action
                </span>
                .
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <Reveal delay={220}>
              <p className="max-w-xl text-base md:text-right leading-relaxed text-muted-foreground/90 md:text-lg font-light lg:border-l lg:border-earth/15 lg:pl-8">
                Every healthy harvest begins beneath the surface. Through soil
                science, advocacy, farmer education, and agroecological
                innovation, we help communities regenerate degraded dryland
                ecosystems while building resilient and profitable farming
                systems.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 100}>
                <Link
                  href="/solutions"
                  className="group relative flex h-full flex-col justify-between rounded-4xl border border-stone-200/60 bg-white/60 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-forest/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(40,78,54,0.04)]"
                >
                  <div>
                    {/* Header: Number & Icon */}
                    <div className="mb-10 flex items-center justify-between">
                      <span className="font-mono text-sm tracking-widest text-stone-400 transition-colors duration-300 group-hover:text-earth">
                        {service.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-700 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-forest group-hover:text-cream">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-normal tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-forest">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Link Indicator */}
                  <div className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest/80 transition-colors group-hover:text-forest">
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={500}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-3 rounded-full border border-forest bg-forest px-10 py-4.5 text-sm font-medium text-cream shadow-sm transition-all duration-300 hover:bg-transparent hover:text-forest"
            >
              Explore All Solutions
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
