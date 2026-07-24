import {
  Sprout,
  ClipboardList,
  Leaf,
  GraduationCap,
  BriefcaseBusiness,
  ChartColumnIncreasing,
} from "lucide-react";
import { Reveal } from "../Reveal";

const services = [
  {
    icon: Sprout,
    title: "Soil Health Assessment & Advisory",
    description:
      "Evaluate soil condition and identify practical restoration opportunities.",
  },
  {
    icon: ClipboardList,
    title: "Farm Planning & Management",
    description:
      "Support farmers with sustainable planning, crop selection, and farm management.",
  },
  {
    icon: Leaf,
    title: "Organic Soil Inputs Supply& Recommendations",
    description:
      "Supply and recommend regenerative soil amendments for healthier soils.",
  },
  {
    icon: GraduationCap,
    title: "Farmer Training & Capacity Building",
    description:
      "Hands-on capacity building in regenerative agriculture and climate-smart farming.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Project Development & Implementation",
    description:
      "Develop and implement agricultural and environmental restoration programmes.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Monitoring, Evaluation & Learning",
    description:
      "Measure outcomes through monitoring, evaluation, and learning frameworks.",
  },
];

export default function AgricultureConsultancy() {
  return (
    <section className="bg-white py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-earth">
              Agricultural services & Consultancy
            </p>

            <h2 className="font-display text-[clamp(2.5rem,5vw,4.4rem)] leading-tight">
              Practical expertise for
              <span className="text-forest"> resilient agriculture.</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Beyond soil restoration, we work alongside farmers, cooperatives,
              development partners, NGOs, and governments to design practical
              agricultural solutions that create lasting environmental and
              economic impact.
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 100}>
                <div className="group flex h-full flex-col rounded-4xl border border-border bg-cream p-8 transition-all duration-500 hover:-translate-y-2 hover:border-forest/20 hover:shadow-[0_25px_60px_rgba(15,90,23,.08)]">
                  {/* Icon */}
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-all duration-500 group-hover:scale-110 group-hover:bg-forest group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col">
                    <h3 className="font-display text-2xl leading-tight">
                      {service.title}
                    </h3>

                    <p className="mt-4 flex-1 leading-8 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  {/* <div className="mt-8 h-px w-16 bg-border transition-all duration-500 group-hover:w-full group-hover:bg-forest/40" /> */}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
