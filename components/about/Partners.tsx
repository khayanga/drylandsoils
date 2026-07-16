const partners = [
  "African Union",
  "IFAD",
  "Rockefeller Foundation",
  "ICRAF",
  "FAO",
  "Rainforest Alliance",
  "Gates Foundation",
  "CGIAR",
];

export default function Partners() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-earth">
          In Partnership With
        </p>

        {/* Partners Grid */}
        <div className="grid overflow-hidden rounded-3xl border border-border bg-border grid-cols-2 gap-px md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-32 items-center justify-center bg-cream p-8 transition-colors duration-300 hover:bg-sand/20"
            >
              <p className="text-center font-display text-lg text-foreground/80">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}