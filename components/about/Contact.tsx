// import Image from "next/image";
// import {
//   ArrowRight,
//   FlaskConical,
//   GraduationCap,
//   Handshake,
//   Mail,
//   MapPin,
//   Phone,
// } from "lucide-react";

// const actions = [
//   {
//     icon: Handshake,
//     title: "Partner With Us",
//     description:
//       "For NGOs, governments, and philanthropies ready to invest in soil restoration.",
//   },
//   {
//     icon: FlaskConical,
//     title: "Book Soil Testing",
//     description:
//       "Accredited laboratory and mobile diagnostics for farms and institutions.",
//   },
//   {
//     icon: GraduationCap,
//     title: "Request Training",
//     description:
//       "Bring our farmer field schools to your cooperative or community.",
//   },
// ];

// export default function ContactSection() {
//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden bg-forest py-32 text-cream"
//     >
//       {/* Background */}
//       <Image
//         src="/soil-hands.jpg"
//         alt="Healthy soil"
//         fill
//         className="object-cover opacity-20"
//       />

//       <div className="absolute inset-0 bg-linear-to-b from-forest/30 to-forest" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
//         {/* Heading */}
//         <div className="mb-16 max-w-3xl">
//           <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sand">
//             Contact Us
//           </p>

//           <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight">
//             Let's restore the future together.
//           </h2>

//           <p className="mt-6 max-w-2xl text-lg text-cream/80">
//             Whether you're a farmer, policymaker, researcher, donor or
//             development partner, we'd love to hear from you.
//           </p>
//         </div>

//         <div className="grid gap-16 lg:grid-cols-2">
//           {/* Left Side */}
//           <div className="space-y-6">
//             {actions.map((action) => {
//               const Icon = action.icon;

//               return (
//                 <div
//                   key={action.title}
//                   className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
//                 >
//                   <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-forest">
//                     <Icon className="h-5 w-5" />
//                   </div>

//                   <h3 className="mb-2 font-display text-2xl">
//                     {action.title}
//                   </h3>

//                   <p className="text-cream/75">
//                     {action.description}
//                   </p>
//                 </div>
//               );
//             })}

//             <div className="space-y-5 pt-8">
//               <div className="flex items-center gap-3">
//                 <Mail className="h-5 w-5 text-sand" />
//                 <a href="mailto:hello@voiceofdrylandsoils.org">
//                   hello@voiceofdrylandsoils.org
//                 </a>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Phone className="h-5 w-5 text-sand" />
//                 +254 20 000 0000
//               </div>

//               <div className="flex items-start gap-3">
//                 <MapPin className="mt-1 h-5 w-5 text-sand" />
//                 Karen Office Park, Nairobi, Kenya
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="rounded-3xl bg-cream p-8 text-foreground shadow-2xl">
//             <h3 className="mb-8 font-display text-3xl">
//               Send us a message
//             </h3>

//             <form className="space-y-6">
//               <div>
//                 <label className="mb-2 block text-sm font-medium">
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-forest"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-forest"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium">
//                   Subject
//                 </label>

//                 <input
//                   type="text"
//                   className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-forest"
//                   placeholder="How can we help?"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-medium">
//                   Message
//                 </label>

//                 <textarea
//                   rows={6}
//                   className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-forest"
//                   placeholder="Tell us about your project..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-cream transition hover:bg-earth"
//               >
//                 Send Message
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
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

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-forest py-32 md:py-40 text-cream"
    >
      {/* Background */}
      <Image
        src="/soil-hands.jpg"
        alt=""
        fill
        priority={false}
        className="object-cover opacity-15"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-forest/70 to-forest" /> */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-5 uppercase tracking-[0.35em] text-sand text-xs">
            Let's Work Together
          </p>

          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02]">
            Together we can regenerate
            <span className="block text-sand">
              Africa's dryland future.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            Whether you're an investor, government, NGO, researcher or
            community leader, we'd love to explore how we can create lasting
            impact together.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}

          <div className="space-y-5">
            {actions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:border-sand/40"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-forest transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 font-display text-2xl">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-cream/75">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Form */}

          <div className="rounded-[2rem] border border-white/10 bg-white/95 p-8 md:p-10 text-foreground shadow-[0_30px_80px_rgba(0,0,0,.25)]">
            <h3 className="font-display text-3xl">
              Start the conversation
            </h3>

            <p className="mt-3 mb-8 text-muted-foreground">
              Tell us a little about your organisation or project.
            </p>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                />
              </div>

              <input
                type="text"
                placeholder="Organisation"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
              />

              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20">
                <option>I'm interested in...</option>
                <option>Partnership</option>
                <option>Investment</option>
                <option>Soil Testing</option>
                <option>Training</option>
                <option>Research</option>
                <option>Other</option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-cream transition-all hover:gap-3 hover:bg-earth"
              >
                Send Message
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}