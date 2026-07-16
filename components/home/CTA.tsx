import Image from 'next/image'
import React from 'react'
import { Reveal } from '../Reveal'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
     <section className="relative py-32 md:py-52 bg-forest text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <Image src="/soil-hands.jpg" alt=""
         width={1920}
         height={1080}
         className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-linear-to-b from-forest/70 via-forest/85 to-forest" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-sand/90 text-sm tracking-[0.32em] uppercase mb-10">Our 2030 Pledge</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] text-balance">
            Regenerate <em className=" text-sand">1,000 hectares</em> of degraded dryland soil by 2030.
          </h2>
        </Reveal>
        <Reveal delay={280}>
          <p className="mt-10 text-cream/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Join the movement as a partner, a farmer, or a funder and help
            write the next chapter of Africa's soil story.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/about#contact"
              className="inline-flex items-center gap-2 bg-cream text-forest px-7 py-4 rounded-full text-sm font-medium hover:bg-sand transition-colors"
            >
              Partner with us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 border border-cream/40 text-cream px-7 py-4 rounded-full text-sm hover:bg-cream/10 transition-colors"
            >
              Explore solutions
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CTA