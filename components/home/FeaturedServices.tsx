// import { ArrowRight, BookOpen, FlaskConical, GraduationCap, Megaphone, Sprout } from 'lucide-react';
// import React from 'react'
// import { Reveal } from '../Reveal';
// import Link from 'next/link';

// const FeaturedServices = () => {
//      const services = [
//     { icon: Megaphone, t: "Advocacy", d: "Turning evidence into legislation across the continent." },
//     { icon: GraduationCap, t: "Farmer Training", d: "Field schools rooted in local wisdom and modern science." },
//     { icon: FlaskConical, t: "Soil Testing", d: "Accredited analysis that reveals what the land needs." },
//     { icon: Sprout, t: "Agroecological Solutions", d: "Restoration plans tailored to each landscape." },
//     { icon: BookOpen, t: "Research & Policy", d: "Peer-reviewed science that governments can act on." },
//   ];
//   return (
//       <section className="py-32 md:py-44 bg-cream">
//       <div className="mx-auto max-w-7xl px-6 lg:px-10">
//         <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
//           <div>
//             <Reveal><p className="text-earth text-xs tracking-[0.3em] uppercase mb-6">Featured Services</p></Reveal>
//             <Reveal delay={100}>
//               <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] max-w-2xl text-balance">
//                 Five disciplines. One living landscape.
//               </h2>
//             </Reveal>
//           </div>
//           <Reveal delay={200}>
//             <Link href="/solutions" className="inline-flex items-center gap-2 text-sm text-forest border-b border-forest/40 hover:border-forest pb-1">
//               See all solutions <ArrowRight className="w-4 h-4" />
//             </Link>
//           </Reveal>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((s, i) => (
//             <Reveal key={s.t} delay={i * 80}>
//               <Link
//                 href="/solutions"
//                 className="group block h-full bg-card rounded-3xl p-10 border border-border/60 hover:border-forest/40 hover:shadow-[0_20px_60px_-30px_rgba(30,40,20,0.35)] transition-all duration-500 hover:-translate-y-1"
//               >
//                 <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest flex items-center justify-center mb-8 group-hover:bg-forest group-hover:text-cream transition-colors">
//                   <s.icon className="w-5 h-5" strokeWidth={1.5} />
//                 </div>
//                 <h3 className="font-display text-2xl mb-3">{s.t}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{s.d}</p>
//               </Link>
//             </Reveal>
//           ))}
//           <Reveal delay={400}>
//             <Link
//               href="/about"
//               className="group h-full flex flex-col justify-between rounded-3xl p-10 bg-forest text-cream hover:bg-forest/90 transition-colors"
//             >
//               <p className="font-display text-2xl leading-snug">Ready to restore your land?</p>
//               <span className="mt-8 inline-flex items-center gap-2 text-sm">
//                 Request a consultation
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </span>
//             </Link>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FeaturedServices

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Megaphone,
  Sprout,
} from "lucide-react";
import { Reveal } from "../Reveal";

const services = [
  {
    number: "01",
    icon: Megaphone,
    title: "Advocacy",
    description:
      "Turning scientific evidence into legislation that protects Africa's dryland soils.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Farmer Training",
    description:
      "Farmer field schools rooted in indigenous knowledge and regenerative science.",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Soil Testing",
    description:
      "Accredited laboratory analysis and mobile diagnostics for informed restoration.",
  },
  {
    number: "04",
    icon: Sprout,
    title: "Agroecological Solutions",
    description:
      "Landscape restoration plans designed around climate, culture and crops.",
  },
  {
    number: "05",
    icon: BookOpen,
    title: "Research & Policy",
    description:
      "Evidence, policy briefs and open data that shape national decisions.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#F5F1EA]/40 py-28 md:py-40">
      {/* Decorative Premium Glow Background */}
      <div 
        className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-forest/5 to-transparent blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading Section */}
        <div className="mb-24 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-earth/80">
                Featured Services
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-light leading-[1.1] tracking-tight text-neutral-900">
                Solutions designed to{" "}
                <span className="font-normal  text-forest">restore land</span>,{" "}
                <span className="font-normal text-forest">strengthen communities</span>,{" "}
                and protect the future.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <Reveal delay={220}>
              <p className="max-w-xl text-base  md:text-right leading-relaxed text-muted-foreground/90 md:text-lg font-light lg:border-l lg:border-earth/15 lg:pl-8">
                We combine science, advocacy, and farmer-led innovation to
                regenerate dryland ecosystems across Africa. Every service is
                designed to create measurable, lasting impact.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 100}>
                <Link
                  href="/solutions"
                  className="group relative flex h-full flex-col justify-between rounded-[2rem] border border-stone-200/60 bg-white/60 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-forest/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(40,78,54,0.04)]"
                >
                  <div>
                    {/* Header: Number & Icon */}
                    <div className="mb-10 flex items-center justify-between">
                      <span className="font-mono text-sm tracking-widest text-stone-400 transition-colors duration-300 group-hover:text-earth">
                        {service.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-700 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-forest group-hover:text-cream">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-normal tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-forest">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Link Indicator */}
                  <div className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest/80 transition-colors group-hover:text-forest">
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={500}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-3 rounded-full border border-forest bg-forest px-10 py-4.5 text-sm font-medium text-cream shadow-sm transition-all duration-300 hover:bg-transparent hover:text-forest"
            >
              Explore All Solutions
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}