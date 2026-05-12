"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Slide } from "@/components/carousel";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Challenge {
  number: string;
  title: string;
  objective: string;
  approach: string;
  outcome: string;
  stack: string[];
  decisions: string[];
  link?: string;
}

const challenges: Challenge[] = [
  {
    number: "01",
    title: "Glaze UI",
    objective:
      "Reduce friction of building accessible, type-safe React interfaces.",
    approach:
      "Composable component library on Radix UI primitives with full TypeScript generics and zero-config Tailwind integration.",
    outcome:
      "Open-source library enabling rapid accessible development with zero runtime CSS overhead.",
    stack: ["TypeScript", "React", "Tailwind CSS", "Radix UI"],
    decisions: [
      "Radix over custom primitives — accessibility by default",
      "TS generics for API — compile-time safety",
      "Zero-config Tailwind — no setup friction",
    ],
    link: "https://github.com/Rugz007/glaze-ui",
  },
];

const papers = [
  {
    title: "Reciprocal Rank Fusion Based Hybrid Dense–Sparse IR",
    venue: "CEUR Workshop Proceedings · 2025",
    link: "https://ceur-ws.org/Vol-4173/T3-7.pdf",
  },
];

export function ChallengesSlide() {
  return (
    <Slide id="challenges">
      <div className="flex min-h-full w-full items-start sm:items-center px-6 sm:px-16 lg:px-24 py-16 sm:py-0">
        <div className="mx-auto w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground/50">
              03 — Challenges
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Problems Solved
            </h2>
            <p className="mt-2 text-base text-muted-foreground/60">
              Every project is a completed challenge.
            </p>
          </motion.div>

          <div className="mt-10 space-y-4">
            {challenges.map((c, i) => (
              <motion.article
                key={c.number}
                className="rounded-lg border border-border overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border bg-white/[0.01] px-4 sm:px-5 py-3 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground/30">
                      Challenge {c.number}
                    </span>
                    <span className="h-3 w-px bg-border" />
                    <h3 className="text-base font-semibold">{c.title}</h3>
                  </div>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                    >
                      Source <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>

                <div className="p-4 sm:p-5 space-y-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/30 mb-1">
                      Objective
                    </p>
                    <p className="text-base text-foreground/90">{c.objective}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-md border border-border bg-white/[0.01] p-4">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/30 mb-1">
                        Approach
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.approach}
                      </p>
                    </div>
                    <div className="rounded-md border border-border bg-white/[0.01] p-4">
                      <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/30 mb-1">
                        Outcome
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.outcome}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/30 mb-2">
                      Key Decisions
                    </p>
                    <ul className="space-y-1">
                      {c.decisions.map((d, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-[6px] h-px w-2 shrink-0 bg-border" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {c.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground/50 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Published Research */}
          <motion.div
            className="mt-6 rounded-lg border border-border p-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4, ease }}
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/30 mb-3">
              Published Research
            </p>
            {papers.map((paper) => (
              <a
                key={paper.title}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between"
              >
                <div>
                  <p className="text-base font-medium leading-snug transition-colors group-hover:text-foreground/80">
                    {paper.title}
                  </p>
                  <p className="mt-1 text-xs font-mono text-muted-foreground/40">
                    {paper.venue}
                  </p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/30 shrink-0 ml-4 transition-colors group-hover:text-muted-foreground/60" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
