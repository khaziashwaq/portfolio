import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
  highlight?: string;
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Inspera (SA Tech)",
    role: "Software Engineer",
    period: "Jun 2025 – Present",
    current: true,
    bullets: [
      "Engineered and optimized critical features for the Inspera exam lockdown and remote proctoring application, enhancing security protocols to ensure a stable and uninterrupted experience for candidates during high-stakes assessments.",
      "Developed and maintained sophisticated authoring interfaces using React, Redux, and NextJS, significantly improving the content creation workflow for diverse users.",
      "Spearheaded the Web Accessibility initiative as team lead, driving a company-wide overhaul of Inspera's product suite to achieve full WCAG 2.2 AA compliance and align with the European Accessibility Act (EAA), ensuring all digital assessment tools meet stringent EU regulatory requirements ahead of the 2025 enforcement deadline.",
      "Collaborated with multiple stakeholders to manage complex, evolving requirements, consistently ensuring the timely delivery of product updates and platform enhancements that satisfy diverse institutional needs.",
    ],
    tech: ["React", "Redux", "Next.js", "TypeScript", "Go", "WCAG", "a11y"],
  },
  {
    company: "HSBC",
    role: "Software Engineer",
    period: "Aug 2023 – May 2025",
    bullets: [
      "Developed and deployed APIs for HSBC's Asia Pacific operations, ensuring seamless integration and functionality across diverse regions, resulting in a 20% increase in consumer satisfaction and a 15% decrease in operational errors.",
      "Utilized a robust tech stack comprising Spring Boot, Postman, Docker, Kubernetes, Jenkins, and Git to streamline the development, deployment, and maintenance of APIs.",
      "Actively supported consumers throughout the API lifecycle, resulting in a 30% reduction in time-to-market and a 25% improvement in API reliability metrics.",
    ],
    tech: [
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "Postman",
    ],
    highlight: "Circle of Excellence Award",
  },
  {
    company: "BitGlaze",
    role: "Frontend Developer Intern",
    period: "Jan 2023 – Apr 2023",
    bullets: [
      "Developed a dynamic dashboard utilizing NextJS to visualize key business intelligence (BI) data.",
      "Integrated various React chart libraries to create interactive visualizations including line graphs, bar charts, pie charts, and more, contributing to a 25% increase in the speed of decision-making processes.",
      "Collaborated with team members to develop and optimize backend systems using Golang, enhancing data processing efficiency and system scalability.",
      "Enabled a 20% increase in accessibility, allowing stakeholders to retrieve critical data seamlessly across devices.",
    ],
    tech: ["Next.js", "React", "Golang", "Chart.js"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Career
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Professional Experience
          </h2>
        </div>

        <div className="mt-16 space-y-0">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div
                  className="absolute left-[7px] top-3 h-full w-px bg-border"
                  aria-hidden="true"
                />
              )}
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-foreground bg-background"
                aria-hidden="true"
              >
                {exp.current && (
                  <>
                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="h-full w-full rounded-full bg-cyan-400" />
                  </>
                )}
              </div>

              <div className="group">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {exp.highlight && (
                  <div className="mt-3">
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                    >
                      🏆 {exp.highlight}
                    </Badge>
                  </div>
                )}

                <ul className="mt-4 space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/50"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {index < experiences.length - 1 && (
                <Separator className="mt-12 sm:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
