import Image from "next/image";
import aerialImg from "@/assets/images/aerial.jpg";

const stats = [
  {
    value: "312 ha",
    label: "Restored to date",
  },
  {
    value: "48",
    label: "Partner communities",
  },
  {
    value: "11",
    label: "Countries",
  },
  {
    value: "6,400",
    label: "Farmers trained",
  },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 text-cream md:py-44">
      {/* Background */}
      <div className="absolute inset-0 opacity-70">
        <Image
          src="/aerial-regeneration.jpg"
          alt="Aerial view of restored drylands"
          fill
          className="object-cover"
          priority={false}
        />

        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/70 to-ink" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 grid items-end  md:items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-sand/80">
              Impact Goals
            </p>

            <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-balance">
              Regenerate{" "}
              <p className=" text-sand">
                1,000 hectares
              </p>{" "}
              by 2030.
            </h2>
          </div>

          <p className="max-w-xl justify-self-end md:text-right text-lg leading-relaxed text-cream/80">
            Every hectare is measured, verified, and returned to the
            community that stewards it. Our progress is public because
            accountability is part of restoration.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 grid-cols-2 gap-px lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-ink p-8 transition-colors duration-300 hover:bg-forest/20 md:p-10"
            >
              <p className="mb-4 font-display text-5xl text-sand md:text-6xl">
                {stat.value}
              </p>

              <p className="text-md leading-relaxed text-cream/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}