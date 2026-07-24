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
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6  py-16 lg:px-12">
        <div className="flex flex-1 items-center pt-32 pb-16">
          <div className="max-w-4xl">
            <p className="mb-6 animate-rise text-sm uppercase tracking-[0.28em] text-cream/80">
              Healthy Soils · Resilient Farms · Better future
            </p>

            <h1
              className="animate-rise font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] text-balance"
              style={{ animationDelay: "150ms" }}
            >
          The Potenitial of {" "}
              
              Dryland Soils.
            </h1>

            <p
              className="mt-8 max-w-xl animate-rise text-lg font-light leading-relaxed text-cream/85 md:text-xl"
              style={{ animationDelay: "350ms" }}
            >
              The Voice of Dryland Soils is a soil-centred agricultural social enterprise that integrates story-telling, regenerative agriculture training, climate-smart agricultural consultancy, and evidence-based soil health science to restore and strengthen dryland ecosystems and beyond. 
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-rise"
              style={{ animationDelay: "500ms" }}
            >
              <Link
                href="/sevices"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-md font-medium text-forest transition-colors hover:bg-sand"
              >
                Explore our services

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services#contact"
                className="inline-flex items-center gap-2 border rounded-full border-cream/40  px-7 py-4 text-md text-cream/90 transition-all hover:border-cream hover:text-cream"
              >
                Join the movement
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}