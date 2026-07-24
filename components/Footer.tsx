import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      {/* Top Accent */}
      <div className="h-0.5 w-full bg-linear-to-r from-forest via-leaf to-earth" />

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-forest/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-earth/10 blur-[140px]" />

        {/* Watermark */}
        <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-[0.06] lg:block">
          <Image
            src="/logo-2.png"
            alt=""
            width={500}
            height={500}
            className="h-105 w-auto"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 text-center lg:grid-cols-12 lg:gap-20 lg:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center lg:col-span-5 lg:items-start">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-2.png"
                alt="Voice of Dryland Soils"
                width={180}
                height={180}
                className="rounded-xl bg-sand p-2"
              />
            </Link>

            <p className="mt-8 max-w-md text-lg leading-8 text-cream/70">
              Restoring Africa's dryland soils through science, regenerative
              agriculture, advocacy, and farmer-led innovation.
            </p>

            {/* <div className="mt-10 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-sand">
              🌱 Healthy soils. Resilient communities.
            </div> */}
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center lg:col-span-3 lg:items-start">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-sand">
              Explore
            </p>

            <ul className="space-y-5">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Contact", "/services#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-cream/70 transition duration-300 hover:text-cream"
                  >
                    <span>{label}</span>

                    <ArrowRight className="h-3.5 w-3.5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center lg:col-span-4 lg:items-start">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-sand">
              Connect
            </p>

            <a
              href="mailto:voiceofdrylandsoils@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 transition-all duration-300 hover:border-sand/40 hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-sand" />
              <span>voiceofdrylandsoils@gmail.com</span>
            </a>

            <p className="mt-8 leading-7 text-cream/60">
               Kenya
              <br />
              Working across Africa's dryland landscapes.
            </p>

            <Link
              href="/services#contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3 text-sm transition-all duration-300 hover:bg-earth"
            >
              Start a Conversation

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-24 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center text-sm text-cream/50 md:flex-row md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} The Voice of Dryland Soils. All rights
            reserved.
          </p>

          <p className="text-sand">
            Healthy soils. Resilient farms. Better future.
          </p>
        </div>
      </div>
    </footer>
  );
}