import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "An exceptional engineer who consistently delivers high-quality work. Their API designs are clean, well-documented, and built to last.",
    name: "Senior Engineering Manager",
    company: "HSBC",
  },
  {
    quote:
      "Played a critical role in shipping our exam lockdown features on time. Great at handling complex requirements and stakeholder communication.",
    name: "Product Lead",
    company: "Inspera",
  },
  {
    quote:
      "Brought our BI dashboard to life with beautiful, interactive visualizations. A quick learner who ramps up fast on any tech stack.",
    name: "Tech Lead",
    company: "BitGlaze",
  },
];

const companyLogos = [
  { name: "Inspera", abbr: "INS" },
  { name: "HSBC", abbr: "HSBC" },
  { name: "BitGlaze", abbr: "BG" },
];

export function SocialProof() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-muted/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted By
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What People Say
          </h2>
        </div>

        {/* Company logos */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {companyLogos.map((company) => (
            <div
              key={company.name}
              className="flex h-12 items-center justify-center rounded-lg border border-border/40 bg-card/30 px-6"
            >
              <span className="text-sm font-semibold tracking-wider text-muted-foreground">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-border hover:bg-card"
            >
              <Quote
                className="h-6 w-6 text-muted-foreground/30"
                aria-hidden="true"
              />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border/50 pt-4">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
