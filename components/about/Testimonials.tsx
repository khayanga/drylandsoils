import Image, { StaticImageData } from "next/image";



type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: StaticImageData|string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't come with answers. They came with questions, and left with a plan we wrote together.",
    name: "Amina Lokorio",
    role: "Farmer & Cooperative Chair, Turkana",
    image: "/hero-dryland.jpg",
  },
  {
    quote:
      "For the first time, we have a soil map our ministry can actually build policy on.",
    name: "Dr. Kwame Osei",
    role: "Director, Ghana Soil Research Institute",
    image: "/farmer-soil.jpg",
  },
  {
    quote:
      "The training changed how our village thinks about the ground beneath its feet.",
    name: "Ibrahim Sawadogo",
    role: "Village Elder, Ouahigouya",
    image: "/training.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand/40 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-earth">
            Voices
          </p>

          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-balance">
            What the movement sounds like.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col rounded-3xl border border-border/60 bg-cream p-8"
            >
              <blockquote className="flex-1 font-display text-xl leading-snug text-foreground">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.name}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}