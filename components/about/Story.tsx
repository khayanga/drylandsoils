export default function Story() {
  return (
    <section className="relative overflow-hidden bg-cream py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="mb-6 text-sm  font-bold uppercase tracking-[0.35em] text-earth">
              Our Story
            </p>

            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] text-balance">
              Every movement begins
              <br />
              with a question.
            </h2>

            {/* <div className="mt-10 rounded-3xl border border-earth/20 bg-sand/20 p-8">
              <p className="font-display text-2xl italic text-forest">
                "Who speaks for the soil?"
              </p>
            </div> */}
          </div>

          {/* Right */}
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              The Voice of Dryland Soils was founded on a simple belief:
              restoring healthy soil is the first step toward restoring food
              security, resilient communities, and thriving ecosystems across
              Africa.
            </p>

            <p>
              We unite science, regenerative agriculture, policy, and community
              leadership to transform degraded landscapes into productive,
              climate-resilient ecosystems that create lasting social,
              environmental, and economic impact.
            </p>

            <blockquote className="border-l-4 text-forest border-earth pl-6 font-display text-3xl italic leading-snug ">
              Healthy soil. Resilient communities. A stronger Africa.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}