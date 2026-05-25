"use client";

import { motion } from "framer-motion";
import { Slide } from "@/components/carousel";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Checkpoint {
  altitude: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
  tech: string[];
  lesson: string;
  current?: boolean;
}

const checkpoints: Checkpoint[] = [
  {
    altitude: "Base",
    company: "BitGlaze",
    role: "Frontend Developer Intern",
    period: "Jan 2023 – Apr 2023",
    achievements: [
      "Built a Next.js dashboard with interactive BI visualizations, helping teams make faster and more informed decisions.",
      "Improved frontend performance, responsiveness, and accessibility while collaborating closely with cross-functional teams.",
    ],
    tech: ["Next.js", "React", "Golang", "Chart.js"],
    lesson: "Data visualization and cross-functional product delivery.",
  },
  {
    altitude: "1000m",
    company: "HSBC",
    role: "Software Engineer",
    period: "Aug 2023 – May 2025",
    achievements: [
      "Built and deployed APIs for Asia Pacific operations, improving reliability, reducing errors, and supporting large-scale integrations.",
      "Developed APIs using Spring Boot, Docker, Kubernetes, and Jenkins, earning the Circle of Excellence award for high-performance delivery.",
    ],
    tech: ["Spring Boot", "Docker", "Kubernetes", "Jenkins"],
    lesson: "API governance at banking-grade scale.",
  },
  {
    altitude: "2200m",
    company: "Inspera (SA technologies inc.)",
    role: "Software Engineer",
    period: "Jun 2025 – Present",
    achievements: [
      "Built core features for the exam lockdown and remote proctoring platform, improving security and reliability.",
      "Developed authoring tools with React and Next.js while leading accessibility initiatives aligned with WCAG 2.2 AA.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Go", "Redux"],
    lesson: "Building accessible products at enterprise scale.",
    current: true,
  },
];

export function AscentSlide() {
  return (
    <Slide id="ascent">
      <div className="flex min-h-full w-full items-start sm:items-center px-6 sm:px-16 lg:px-24 py-16 sm:py-0">
        <div className="mx-auto w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground/50 mt-5">
              02 — Ascent
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-4xl">
              Progression
            </h2>
            <p className="mt-2 text-base text-muted-foreground/60">
              Every role is altitude gained.
            </p>
          </motion.div>

          {/* Next summit */}
          <motion.div
            className="mt-6 lg:mt-8 mb-1 flex items-center gap-3 pl-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-accent-color/70">
              Off to next summit
            </span>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-0">
            {[...checkpoints].reverse().map((cp, index) => (
              <motion.div
                key={cp.company}
                className="relative pl-7"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease }}
              >
                {/* Route line */}
                <div
                  className="absolute left-[5px] top-0 h-full w-px bg-border"
                  aria-hidden="true"
                />

                {/* Checkpoint dot */}
                <div className="absolute left-0 top-5" aria-hidden="true">
                  <div
                    className={`h-[11px] w-[11px] rounded-full border-2 ${
                      cp.current
                        ? "border-accent-color bg-accent-color/20"
                        : "border-border bg-background"
                    }`}
                  />
                </div>

                <div className="rounded-lg border border-border p-4 mb-3 transition-colors duration-200 hover:bg-white/[0.01]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-muted-foreground/30 tabular-nums">
                        {cp.altitude}
                      </span>
                      <h3 className="text-base font-semibold">{cp.company}</h3>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/40 tabular-nums whitespace-nowrap">
                      {cp.period}
                    </span>
                  </div>

                  <p className="mt-0.5 text-sm text-muted-foreground/60">
                    {cp.role}
                  </p>

                  <ul className="mt-3 space-y-1">
                    {cp.achievements.map((a, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-[6px] h-px w-2 shrink-0 bg-border" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3 text-xs text-muted-foreground/40 border-t border-border pt-2">
                    <span className="font-mono uppercase tracking-wider text-muted-foreground/25 mr-1.5">
                      Lesson
                    </span>
                    {cp.lesson}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1">
                    {cp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border px-1.5 py-0.5 text-[11px] text-muted-foreground/50 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
