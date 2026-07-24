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
      "We provide tailored soil restoration strategies using regenerative and agroecological solutions and organic soil management practices that restore degraded soils and improve farming systems in the dryland.",
  },
];

export default function FeaturedServices() {
  return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#F7F5F0] py-28 md:py-40">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-40 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-forest/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-earth">
              What We Do
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(2.75rem,5vw,4.8rem)] leading-[1.05] text-balance">
              Restoring dryland soils through
              <span className="text-forest"> science</span>,
              <span className="text-forest"> knowledge</span>,
              <br />
              and
              <span className="text-forest"> community action is our responsibility.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              Every service we deliver is designed to regenerate landscapes,
              strengthen farming communities, and create lasting environmental
              and economic impact across Africa's drylands.
            </p>
          </Reveal>
        </div>

        {/* Services */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 120}>
                <Link
                  href="/services"
                  className="group flex h-full flex-col justify-between rounded-[2rem] border border-border/70 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-forest/20 hover:shadow-[0_25px_60px_rgba(15,90,23,0.08)]"
                >
                  <div>
                    {/* Top */}
                    <div className="mb-10 flex items-center justify-between">
                      <span className="text-sm tracking-[0.35em] text-earth">
                        {service.number}
                      </span>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-all duration-500 group-hover:scale-110 group-hover:bg-forest group-hover:text-cream">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-3xl leading-tight transition-colors duration-300 group-hover:text-forest">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 text-base leading-8 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-12 flex items-center">
                    <div className="h-px flex-1 bg-border transition-all duration-300 group-hover:bg-forest/30" />

                    <div className="ml-6 inline-flex items-center gap-2 text-sm font-medium text-forest">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        {/* <Reveal delay={500}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-10 py-4 text-sm font-medium text-cream transition-all duration-300 hover:scale-[1.02] hover:bg-forest/90"
            >
              Explore All Solutions

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
