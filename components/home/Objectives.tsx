import { Reveal } from "../Reveal";

const objectives = [
  {
    number: "01",
    title: "Soil Advocacy & Policy Influence",
    description:
      "We document and share stories that showcase the potential of dryland soils, inspire sustainable farming, and contribute to soil-centred advocacy and policy dialogue across dryland regions.",
  },
  {
    number: "02",
    title: "Farmer Empowerment",
    description:
      "Through education, capacity building, technical advisory, and climate-smart agriculture training, we equip farmers with the knowledge and skills needed for resilient and profitable dryland farming.",
  },
  {
    number: "03",
    title: "Soil Restoration",
    description:
      "We conduct soil testing, identify soil health gaps, and provide tailored agroecological and regenerative solutions that restore degraded soils and strengthen farming systems for future generations.",
  },
];

export default function Objectives() {
  return (
    <section className="relative overflow-hidden bg-white py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-4xl">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-earth">
              Our Objectives
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(2.75rem,5vw,5rem)] leading-[1.02] text-balance">
              Restoring the land.
              <br />
              <span className="text-forest">
                Empowering the people.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 h-px w-32 bg-linear-to-r from-forest via-earth to-transparent" />
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {objectives.map((objective, index) => (
            <Reveal key={objective.number} delay={index * 120}>
              <div className="group relative overflow-hidden rounded-4xl border border-border/70 bg-linear-to-b from-white to-sand/20 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-forest/20 hover:shadow-[0_30px_70px_rgba(15,90,23,0.12)]">

                {/* Large Number */}
                <span className="absolute right-6 top-4 font-display text-7xl text-forest/5 transition-all duration-500 group-hover:text-forest/8">
                  {objective.number}
                </span>

                {/* Accent */}
                <div className="mb-8 h-1 w-12 rounded-full bg-earth transition-all duration-500 group-hover:w-24 group-hover:bg-forest" />

                <h3 className="font-display text-3xl leading-tight transition-colors duration-300 group-hover:text-forest">
                  {objective.title}
                </h3>

                <p className="mt-6 leading-8 text-muted-foreground">
                  {objective.description}
                </p>

                {/* Bottom Divider */}
                <div className="mt-10 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border transition-colors group-hover:bg-forest/30" />
                  <span className="text-xs uppercase tracking-[0.25em] text-earth">
                    Goal
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}