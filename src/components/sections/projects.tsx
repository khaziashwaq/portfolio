import { Star, GitFork, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Glaze UI",
    description:
      "An open-source, customizable, TypeScript-based UI component library built with Tailwind CSS and Radix UI.",
    longDescription:
      "A developer-first component library designed for rapid prototyping and production-ready interfaces. Glaze UI provides a comprehensive set of accessible, composable primitives that integrate seamlessly into any React project — with full TypeScript support, theme customization, and zero-config Tailwind CSS styling out of the box.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Radix UI", "Open Source"],
    github: "https://github.com/Rugz007/glaze-ui",
    highlights: [
      "Fully typed component API with TypeScript generics",
      "Built on Radix UI primitives for WCAG-compliant accessibility",
      "Tailwind CSS-powered theming with zero runtime overhead",
    ],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Open Source
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Projects
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-border hover:bg-card sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs"
                    >
                      Open Source
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.longDescription}
                  </p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "gap-2 shrink-0"
                  )}
                >
                  <Star className="h-3.5 w-3.5" />
                  View on GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/50"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
