import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream py-32 md:py-40"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left Glow */}
        <div className="absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-forest/5 blur-[130px]" />

        {/* Right Glow */}
        <div className="absolute -right-40 bottom-10 h-[30rem] w-[30rem] rounded-full bg-earth/5 blur-[120px]" />

        {/* Floating Circles */}
        <div className="absolute left-20 top-40 h-3 w-3 rounded-full bg-earth/20" />
        <div className="absolute right-32 top-60 h-5 w-5 rounded-full bg-forest/10" />
        <div className="absolute bottom-24 left-1/3 h-4 w-4 rounded-full bg-forest/10" />

        {/* Organic Rings */}
        <div className="absolute right-20 top-24 h-64 w-64 rounded-full border border-earth/10" />
        <div className="absolute right-32 top-36 h-40 w-40 rounded-full border border-earth/10" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-earth/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-earth shadow-sm">
            Let's Talk
          </span>

          <h2 className="mt-8 font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95]">
            Let's build healthier
            <span className="block text-forest">soils together.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            Whether you're exploring a partnership, requesting soil diagnostics,
            or looking to collaborate, we'd love to hear from you.
          </p>

          <div className="mx-auto mt-10 h-px w-20 bg-earth/30" />
        </div>

        {/* Contact Card */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-forest/10 via-transparent to-earth/10 blur-2xl" />

          <div className="relative rounded-[2.5rem] border border-white bg-white/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,.08)] backdrop-blur md:p-14">
            {/* Form Intro */}
            <div className="mb-10 border-b border-border pb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-earth">
                Contact Form
              </p>

              <h3 className="mt-3 font-display text-3xl text-ink">
                Start the Conversation
              </h3>

              <p className="mt-3 max-w-xl text-muted-foreground">
                Whether you're a farmer, researcher, development partner, or
                organization, we'd be delighted to discuss how we can work
                together. Complete the form below and we'll respond within 48
                hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition-all duration-300 focus:border-forest focus:ring-2 focus:ring-forest/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition-all duration-300 focus:border-forest focus:ring-2 focus:ring-forest/10"
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Organization
                  <span className="ml-1 font-normal text-muted-foreground">
                    (Optional)
                  </span>
                </label>

                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="Company or Institution"
                  className="w-full rounded-2xl border border-border px-5 py-4 outline-none transition-all duration-300 focus:border-forest focus:ring-2 focus:ring-forest/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project, partnership, research, or inquiry..."
                  className="w-full resize-none rounded-2xl border border-border px-5 py-4 outline-none transition-all duration-300 focus:border-forest focus:ring-2 focus:ring-forest/10"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-forest-dark"
              >
                Send Message
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}