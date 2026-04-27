import { ArrowDown, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SketchCat } from "@/components/sketch-cat";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl w-full flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between animate-fade-in">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for opportunities
          </div>

          <h1
            id="hero-heading"
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
           <span className="text-primary">Ashwaq Khazi</span>
          </h1>

          <p className="mt-6 text-balance text-lg text-muted-foreground sm:text-xl">
            Software Engineer with expertise in full-stack development, API
            engineering, and high-performance web applications. Proven track record
            of shipping products that increase satisfaction and reduce errors at
            scale.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="https://www.linkedin.com/in/ashwaq-khazi/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "text-base gap-2")}
            >
              Get in Touch
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#experience"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-base gap-2"
              )}
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Sketch illustration */}
        <div className="flex-shrink-0 flex items-center justify-center pt-20 lg:pt-0">
          <SketchCat />
        </div>
      </div>
    </section>
  );
}
