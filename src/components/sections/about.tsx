import { Code2, Globe, Server, Users } from "lucide-react";

const highlights = [
  {
    icon: Server,
    label: "API Engineering",
    description:
      "Designing and deploying robust APIs serving millions of requests across Asia Pacific operations.",
  },
  {
    icon: Code2,
    label: "Full-Stack Development",
    description:
      "Building end-to-end solutions with React, Next.js, Spring Boot, and modern cloud infrastructure.",
  },
  {
    icon: Globe,
    label: "Scalable Systems",
    description:
      "Engineering exam lockdown and remote proctoring applications ensuring security at scale.",
  },
  {
    icon: Users,
    label: "Cross-Functional Collaboration",
    description:
      "Working with diverse stakeholders to translate complex requirements into shipped products.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About Me
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Engineering Excellence, Delivered
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I&apos;m a software engineer who thrives at the intersection of
            complex problem-solving and product impact. From building
            mission-critical exam security applications at Inspera to deploying
            APIs that power HSBC&apos;s Asia Pacific operations, I bring a
            relentless focus on reliability, performance, and user experience. My
            background spans the full stack&mdash;React, Next.js, Spring Boot,
            Docker, Kubernetes&mdash;and I&apos;m driven by the challenge of
            turning ambitious requirements into software people can depend on.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-border hover:bg-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <item.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-semibold">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
