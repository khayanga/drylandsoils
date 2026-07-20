import { Reveal } from "../Reveal";

const pillars = [
  {
    number: "01",
    title: "Advocacy & Storytelling",
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
export default function Intro() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-earth">
                Who We Are
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(2.3rem,5vw,4.8rem)] leading-[1.05]  md:max-w-lg text-balance">
                Dryland soils are not only hungry
                <span className="text-forest"> but thirsty.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <p className="max-w-xl md:text-right text-base leading-8 text-muted-foreground md:text-lg">
                The Voice of Dryland Soils is a soil-centred agricultural social
                enterprise dedicated to restoring and strengthening dryland
                ecosystems through storytelling, regenerative agriculture,
                climate-smart solutions, soil science, and farmer empowerment.
                We believe healthy soils are the foundation of resilient
                communities, sustainable food systems, and a better future.
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
