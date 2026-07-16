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
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-balance">
          Every restoration begins with a conversation.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/85">
          Tell us about your land, your community, or your policy. We'll answer
          with a plan that starts where you are.
        </p>

        <Link
          href="/about#contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-4 text-sm font-medium text-forest transition-colors hover:bg-sand"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}