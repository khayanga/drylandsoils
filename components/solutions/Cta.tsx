import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-forest py-32 text-cream md:py-40">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-70">
        <Image
          src="/soil-hands.jpg"
          alt="Hands holding healthy soil"
          fill
          className="object-cover"
          priority={false}
        />

        <div className="absolute inset-0 bg-linear-to-b from-forest/80 to-forest" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-sand">
          Work With Us
        </p>

        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
          Let's restore
          <br />
          Africa's soils together.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/85">
          From soil testing and farmer training to advocacy, research, and
          agroecological solutions, we partner with communities, organisations,
          governments, and development partners to regenerate dryland ecosystems
          and build resilient agricultural futures.
        </p>
        <Link
          href="/about#contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium text-forest transition-colors hover:bg-sand"
        >
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}
