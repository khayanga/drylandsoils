
import { Eye, Compass } from "lucide-react";
import { Reveal } from "../Reveal";

const content = [
  {
    label: "Vision",
    icon: Eye,
    // heading: "Healthy soils. Resilient farms. Better futures.",
    description:
      "To be a leading social enterprise for dryland soil soulutions and advocacy.",
  },
  {
    label: "Mission",
    icon: Compass,
    // heading: "Turning science into restoration.",
    description:
      "To regenerate hacters of degraded dryland soils while enabling farmers to produce sustainably and profitably through regenerative agriculture, CSA and Agroecology.",
  },
];

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-cream py-32 md:py-40">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-forest/5 blur-[120px]" />
        <div className="absolute right-0 bottom-10 h-112 w-md rounded-full bg-earth/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mx-auto mb-24 max-w-4xl text-center">
           <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-earth">
              Our Purpose
            </p>

            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] text-balance">
              Guided by a vision.
              {/* <br />
            Driven by a mission. */}
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Every healthy harvest begins with healthy soil. Through research,
              storytelling, regenerative agriculture, and farmer empowerment, we are
              restoring degraded landscapes and building resilient farming communities
              across Africa.
            </p>
        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">
          {content.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={index * 120}>
                <div className="group relative overflow-hidden rounded-4xl border border-border/60 bg-white/80 p-10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-forest/20 hover:shadow-[0_30px_80px_rgba(15,90,23,0.12)]">


                  <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-forest via-leaf to-earth scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100" />

                  {/* Icon */}

                  <div className="mb-8 flex h-18 w-18 items-center justify-center rounded-3xl bg-linear-to-br from-forest to-leaf text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon
                      strokeWidth={1.5}
                      className="h-8 w-8"
                    />
                  </div>

                  {/* <p className="mb-5 text-xs uppercase tracking-[0.35em] text-earth">
                    {item.label}
                  </p> */}

                  

                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-10 flex items-center gap-3">
                    <div className="h-px flex-1 bg-border transition-all duration-500 group-hover:bg-forest/30" />

                    <span className="text-xs uppercase tracking-[0.3em] text-earth">
                      {item.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}