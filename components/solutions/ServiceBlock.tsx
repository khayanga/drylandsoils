// import Image, { StaticImageData } from "next/image";
// import Link from "next/link";
// import { ArrowRight, LucideIcon } from "lucide-react";

// export type Service = {
//   id: string;
//   icon: LucideIcon;
//   title: string;
//   tagline: string;
//   body: string;
//   points: string[];
//   image: StaticImageData;
//   caseTitle: string;
//   caseLocation: string;
//   caseBody: string;
//   metric: {
//     v: string;
//     l: string;
//   };
// };

// interface ServiceBlockProps {
//   service: Service;
//   index: number;
// }

// export default function ServiceBlock({
//   service,
//   index,
// }: ServiceBlockProps) {
//   const Icon = service.icon;
//   const flip = index % 2 === 1;

//   return (
//     <section
//       id={service.id}
//       className="scroll-mt-24 py-24 md:py-32"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-10">
//         <div
//           className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
//             flip ? "lg:[&>*:first-child]:order-2" : ""
//           }`}
//         >
//           {/* Image */}
//           <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
//             <Image
//               src={service.image}
//               alt={service.title}
//               fill
//               className="object-cover"
//             />

//             <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

//             <div className="absolute bottom-8 left-8 right-8 text-white">
//               <p className="mb-3 text-xs uppercase tracking-[0.28em] opacity-80">
//                 {service.caseLocation}
//               </p>

//               <h3 className="font-display text-2xl leading-snug">
//                 {service.caseTitle}
//               </h3>
//             </div>
//           </div>

//           {/* Content */}
//           <div>
//             <div className="mb-8 flex items-center gap-4">
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest">
//                 <Icon className="h-6 w-6" strokeWidth={1.5} />
//               </div>

//               <p className="text-xs uppercase tracking-[0.3em] text-earth">
//                 {String(index + 1).padStart(2, "0")} · Solution
//               </p>
//             </div>

//             <h2 className="mb-4 font-display text-[clamp(2rem,3.5vw,3.25rem)] leading-tight">
//               {service.title}
//             </h2>

//             <p className="mb-6 font-display text-lg italic text-earth">
//               {service.tagline}
//             </p>

//             <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
//               {service.body}
//             </p>

//             <ul className="mb-10 space-y-3">
//               {service.points.map((point) => (
//                 <li
//                   key={point}
//                   className="flex items-start gap-3"
//                 >
//                   <span className="mt-2 h-1.5 w-1.5 rounded-full bg-forest" />
//                   {point}
//                 </li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap items-center gap-8">
//               <div>
//                 <p className="font-display text-4xl text-forest">
//                   {service.metric.v}
//                 </p>

//                 <p className="mt-1 text-sm text-muted-foreground">
//                   {service.metric.l}
//                 </p>
//               </div>

//               <Link
//                 href="/about#contact"
//                 className="inline-flex items-center gap-2 border-b border-forest/40 pb-1 text-sm text-forest transition hover:border-forest"
//               >
//                 Request this service
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>

//             <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
//               <span className="font-medium text-foreground">
//                 Case in brief ·{" "}
//               </span>
//               {service.caseBody}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Reveal } from "../Reveal";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  body: string;
  points: string[];
  image: StaticImageData;
  caseTitle: string;
  caseLocation: string;
  caseBody: string;
  metric: {
    v: string;
    l: string;
  };
};

interface ServiceBlockProps {
  service: Service;
  index: number;
}

export default function ServiceBlock({
  service,
  index,
}: ServiceBlockProps) {
  const Icon = service.icon;
  const flip = index % 2 === 1;

  return (
    <section
      id={service.id}
      className="scroll-mt-24 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div
          className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-24 ${
            flip ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/80">
                {service.caseLocation}
              </p>

              <h3 className="max-w-sm font-display text-2xl leading-snug">
                {service.caseTitle}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.35em] text-earth">
                {String(index + 1).padStart(2, "0")} · Strategic Pillar
              </p>
            </div>

            <h2 className="mb-5 font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] text-balance">
              {service.title}
            </h2>

            <p className="mb-6 font-display text-xl italic text-earth">
              {service.tagline}
            </p>

            <p className="mb-8 max-w-xl text-lg leading-8 text-muted-foreground">
              {service.body}
            </p>

            <ul className="mb-10 space-y-4">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-forest shrink-0" />
                  <span className="leading-7 text-foreground/90">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-10">
              <div>
                <p className="font-display text-5xl text-forest">
                  {service.metric.v}
                </p>

                <p className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">
                  {service.metric.l}
                </p>
              </div>

              <Link
                href="/about#contact"
                className="group inline-flex items-center gap-2 border-b border-forest/30 pb-1 text-sm font-medium text-forest transition hover:border-forest"
              >
                Partner With Us

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-md leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Impact Story ·{" "}
                </span>

                {service.caseBody}
              </p>
            </div>
          </div>
        </div>

        </Reveal>
        
      </div>
    </section>
  );
}