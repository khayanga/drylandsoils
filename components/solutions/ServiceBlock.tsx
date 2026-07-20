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
  offerings: string[];
  image: StaticImageData;
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
    <section id={service.id} className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div
            className={`grid items-center gap-16 lg:grid-cols-2 lg:gap-24 ${
              flip ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div className="group relative aspect-4/5 overflow-hidden rounded-4xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-forest via-earth to-sand" />

              <div className="absolute bottom-8 left-8">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-5 py-3 backdrop-blur-md">
                  <Icon className="h-5 w-5 text-white" />

                  <span className="text-xs uppercase tracking-[0.3em] text-white">
                    Voice of Dryland Soils
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-earth">
                {String(index + 1).padStart(2, "0")} · Service
              </p>

              <h2 className="font-display text-[clamp(2.4rem,4vw,4rem)] leading-[1.05] text-balance">
                {service.title}
              </h2>

              <p className="mt-5 font-display text-xl italic text-earth">
                {service.tagline}
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
                {service.body}
              </p>

              {/* Offerings */}
              <div className="mt-12 rounded-3xl border border-border bg-white p-8">
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-forest">
                  What We Offer
                </h4>

                <ul className="space-y-5">
                  {service.offerings.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-forest" />

                      <span className="leading-7 text-foreground/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approach */}
              <div className="mt-10 border-l-2 border-earth/30 pl-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-earth">
                  Our Approach
                </p>

                <p className="mt-4 leading-8 text-muted-foreground">
                  Every intervention is grounded in scientific evidence,
                  practical farmer experience, and regenerative principles,
                  ensuring solutions that are locally relevant, environmentally
                  sustainable, and economically viable.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12">
                <Link
                  href="/solutions#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-earth"
                >
                  Request This Service

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}