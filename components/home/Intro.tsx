import { Reveal } from "../Reveal";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-32 md:py-40">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-forest/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-earth/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">

        <Reveal>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-earth">
            Who We Are
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[1.02] text-balance">
            Giving Africa's
            <span className="text-forest"> dryland soils </span>
            the voice they deserve.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-muted-foreground md:text-xl">
            The Voice of Dryland Soils is a soil-centred social enterprise
            restoring Africa's dryland ecosystems through storytelling,
            regenerative agriculture, climate-smart solutions, soil science,
            and farmer empowerment. We believe healthy soils are the foundation
            of resilient communities, sustainable food systems, and shared
            prosperity.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mx-auto mt-14 h-px w-28 bg-gradient-to-r from-transparent via-forest to-transparent" />
        </Reveal>

      </div>
    </section>
  );
}