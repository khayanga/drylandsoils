// const values = [
//   {
//     title: "Rigour",
//     description:
//       "We measure everything twice. If we cannot prove it, we do not claim it.",
//   },
//   {
//     title: "Reverence",
//     description:
//       "Soil is a living inheritance. We treat it—and those who tend it—accordingly.",
//   },
//   {
//     title: "Partnership",
//     description:
//       "Nothing we do is done alone. Farmers, elders, and scientists design side by side.",
//   },
//   {
//     title: "Patience",
//     description:
//       "Restoration moves at the pace of seasons. We refuse to shortcut what nature will not.",
//   },
//   {
//     title: "Transparency",
//     description:
//       "Our data, our methods, and our failures are open. Trust is built in daylight.",
//   },
//   {
//     title: "Hope",
//     description:
//       "We work because we believe the land wants to come back. It always has.",
//   },
// ];

// export default function Values() {
//   return (
//     <section className="bg-cream py-32 md:py-40">
//       <div className="mx-auto max-w-7xl px-6 lg:px-10">
//         {/* Section Heading */}
//         <div className="mb-16 max-w-3xl">
//           <p className="mb-6 text-xs uppercase tracking-[0.3em] text-earth">
//             Core Values
//           </p>

//           <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-balance">
//             The principles beneath the practice.
//           </h2>
//         </div>

//         {/* Values Grid */}
//         <div className="grid overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3 gap-px">
//           {values.map((value, index) => (
//             <div
//               key={value.title}
//               className="h-full bg-cream p-10 transition-colors duration-300 hover:bg-sand/20"
//             >
//               <p className="mb-4 font-display text-sm text-earth">
//                 {String(index + 1).padStart(2, "0")}
//               </p>

//               <h3 className="mb-3 font-display text-2xl">
//                 {value.title}
//               </h3>

//               <p className="leading-relaxed text-muted-foreground">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  FlaskConical,
  HeartHandshake,
  Users,
  Sprout,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: FlaskConical,
    title: "Rigour",
    description:
      "Every recommendation is grounded in evidence, measured in the field, and verified through science.",
  },
  {
    icon: HeartHandshake,
    title: "Reverence",
    description:
      "We honour the land, the people who steward it, and the generations that will inherit it.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "Real restoration happens together. Farmers, scientists, governments and communities lead side by side.",
  },
  {
    icon: Sprout,
    title: "Patience",
    description:
      "Nature works in seasons, not deadlines. We invest in change that lasts beyond a project cycle.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Our methods, impact, and lessons remain open because trust is earned through accountability.",
  },
  {
    icon: Sparkles,
    title: "Hope",
    description:
      "Every restored hectare proves that degraded landscapes can become thriving ecosystems once again.",
  },
];

export default function Values() {
  return (
    <section className="relative overflow-hidden bg-sand/50 py-32">
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-forest/5 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-earth/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-earth">
            Our Values
          </p>

          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
            The principles
            <br />
            beneath every decision.
          </h2>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Our values guide how we restore landscapes, build partnerships,
            and create lasting impact across Africa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-[28px] bg-white p-10 shadow-sm ring-1 ring-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-forest/20"
              >
                {/* Accent */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-linear-to-r from-forest via-olive to-earth transition-transform duration-500 group-hover:scale-x-100" />

                {/* Number */}
                <span className="text-sm font-medium tracking-[0.3em] text-earth/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-all duration-500 group-hover:scale-110 group-hover:bg-forest group-hover:text-cream">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mt-8 font-display text-3xl">
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-lg text-muted-foreground">
                  {value.description}
                </p>

                {/* Decorative line */}
                <div className="mt-10 h-px w-16 bg-earth/30 transition-all duration-500 group-hover:w-32 group-hover:bg-forest" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}