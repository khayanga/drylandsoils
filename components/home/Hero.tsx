import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";




export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-cream">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-dryland.jpg"
          alt="African dryland at golden hour with hands cupping healthy soil"
          fill
          priority
          className="object-cover animate-slow-zoom"
        />

        <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/40 to-ink/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6  py-16 lg:px-10">
        <div className="flex flex-1 items-center pt-32 pb-16">
          <div className="max-w-4xl">
            <p className="mb-6 animate-rise text-sm uppercase tracking-[0.28em] text-cream/80">
              Africa · Regenerative Agriculture · Soil Science
            </p>

            <h1
              className="animate-rise font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] text-balance"
              style={{ animationDelay: "150ms" }}
            >
              Giving Dryland Soils{" "}
              <p className="text-sand/95">the Voice</p>{" "}
              They Deserve.
            </h1>

            <p
              className="mt-8 max-w-xl animate-rise text-lg font-light leading-relaxed text-cream/85 md:text-xl"
              style={{ animationDelay: "350ms" }}
            >
              We are Africa&apos;s leading movement for dryland soil restoration 
              uniting farmers, scientists, and policymakers to regenerate the
              land that feeds a continent.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-rise"
              style={{ animationDelay: "500ms" }}
            >
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-md font-medium text-forest transition-colors hover:bg-sand"
              >
                Explore our solutions

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about#contact"
                className="inline-flex items-center gap-2 border rounded-full border-cream/40  px-7 py-4 text-md text-cream/90 transition-all hover:border-cream hover:text-cream"
              >
                Join the movement
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="flex items-end justify-between gap-6 pb-10 text-xs uppercase tracking-[0.24em] text-cream/75">
          <span>Est. 2019 · Nairobi · Sahel · Horn of Africa</span>

          <span className="hidden md:inline">
            Scroll ↓
          </span>
        </div> */}
      </div>
    </section>
  );
}