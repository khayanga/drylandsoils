import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  GraduationCap,
  Handshake,
} from "lucide-react";

const actions = [
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Collaborate with us to restore Africa's drylands through scalable, evidence-based programmes.",
  },
  {
    icon: FlaskConical,
    title: "Research & Soil Diagnostics",
    description:
      "Access scientific soil testing, monitoring, and landscape intelligence.",
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    description:
      "Equip farmers, cooperatives and institutions with practical restoration skills.",
  },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-forest py-32 md:py-40 text-cream">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/soil-testing.jpg"
          alt="Healthy soil"
          fill
          className="object-cover opacity-75"
        />

        <div className="absolute inset-0 bg-linear-to-b from-forest/70 via-forest/85 to-forest" />

        {/* Decorative glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-sand">
            Work With Us
          </p>

          <h2 className="font-display text-[clamp(3rem,5vw,5rem)] leading-[0.95]">
            Let's restore
            <br />
            Africa's soils together.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-cream/80">
            We partner with governments, development agencies, NGOs,
            researchers, investors and farming communities to regenerate
            landscapes through science, innovation and practical action.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-sand/40 hover:bg-white/10 hover:shadow-[0_25px_70px_rgba(0,0,0,.18)]"
              >
                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-sand text-forest transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="font-display text-2xl leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 flex-1 leading-7 text-cream/75">
                    {item.description}
                  </p>
                </div>

                
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/about#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-sm font-medium text-forest transition-all duration-300 hover:-translate-y-1 hover:bg-sand"
          >
            Request a Consultation

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}