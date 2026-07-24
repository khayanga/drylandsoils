import {
  TestTube2,
  Microscope,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "../Reveal";

const process = [
  {
    icon: TestTube2,
    title: "Soil Sampling",
    description:
      "Representative soil samples are collected using standardized field protocols to ensure reliable laboratory analysis.",
  },
  {
    icon: Microscope,
    title: "Laboratory Analysis",
    description:
      "Samples are analysed for soil fertility, pH, nutrient availability, texture, organic matter, and other key soil health indicators.",
  },
  {
    icon: FileText,
    title: "Recommendation Report",
    description:
      "Every client receives a practical report with tailored recommendations that improve soil health, productivity, and long-term sustainability.",
  },
];

const benefits = [
  "Scientific Analysis",
  "Reliable Soil Data",
  "Tailored Recommendations",
  "Improved Productivity",
];

export default function SoilDiagnostics() {
  return (
    <section className="bg-cream py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-earth">
              Soil Diagnostics
            </p>

            <h2 className="font-display text-[clamp(2.6rem,5vw,4.4rem)] leading-tight">
              Better soil data.
              <span className="text-forest"> Better farming decisions.</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              Every successful restoration programme begins with understanding
              the soil. Our diagnostics combine field sampling, laboratory
              analysis, and practical recommendations to help farmers restore
              productivity and improve long-term soil health.
            </p>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 120}>
                <div className="group rounded-[2rem] border border-border bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-forest/20 hover:shadow-[0_25px_60px_rgba(15,90,23,.08)]">

                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest group-hover:bg-forest group-hover:text-white transition-all">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <span className="text-xs uppercase tracking-[0.35em] text-earth">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-4 font-display text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        

      </div>
    </section>
  );
}