
"use client";

import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import Link from "next/link";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "Where in Africa do you work?",
    answer:
      "We operate across eleven countries across East Africa, the Horn and the Sahel. Every programme begins with local partnerships and community engagement.",
  },
  {
    question: "Who can request soil testing?",
    answer:
      "Farmers, cooperatives, NGOs, researchers, development partners and governments can all access our laboratory and mobile soil testing services.",
  },
  {
    question: "How is a training programme designed?",
    answer:
      "Every programme is co-created with local communities, combining scientific research with indigenous knowledge and practical field demonstrations.",
  },
  {
    question: "How do you measure impact?",
    answer:
      "We monitor soil health, biodiversity, carbon storage, water retention, crop productivity and community livelihoods using transparent, science-backed methodologies.",
  },
  {
    question: "How can my organisation partner?",
    answer:
      "We collaborate with governments, investors, NGOs, philanthropies and research institutions committed to restoring Africa's drylands.",
  },
  {
    question: "Do you accept donations?",
    answer:
      "Yes. Every contribution directly supports measurable restoration projects, farmer training and ecosystem regeneration.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-cream py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-earth/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-12 lg:px-10">

        {/* Left */}
        <div className="lg:col-span-4">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-earth">
            Frequently Asked Questions
          </p>

          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95]">
            Everything you
            <br />
            need to know.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Whether you're a farmer, policymaker, investor or development
            partner, here are answers to the questions we hear most often.
          </p>

          <Link
            href="/about#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm text-cream transition hover:bg-forest/90"
          >
            Contact our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Right */}
        <div className="space-y-5 lg:col-span-8">
          {faqItems.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="group rounded-3xl border border-border/60 bg-white transition-all duration-300 hover:border-forest/20 hover:shadow-lg"
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-8 p-8 text-left"
                >
                  <h3 className="font-display text-2xl transition-colors group-hover:text-forest">
                    {item.question}
                  </h3>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-forest text-cream rotate-180"
                        : "bg-forest/10 text-forest"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8">
                      <p className="max-w-2xl leading-8 text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom CTA */}

          <div className="rounded-3xl border border-dashed border-earth/30 bg-sand/20 p-8 text-center">
            <h3 className="font-display text-2xl">
              Still have a question?
            </h3>

            <p className="mt-4 text-muted-foreground">
              We'd love to hear from you and explore how we can work together.
            </p>

            <Link
              href="/about#contact"
              className="mt-6 inline-flex items-center gap-2 text-forest"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}