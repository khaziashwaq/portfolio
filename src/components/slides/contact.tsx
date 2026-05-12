"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Slide } from "@/components/carousel";

const ease = [0.25, 0.1, 0.25, 1] as const;

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ashwaq-khazi/" },
  { label: "GitHub", href: "https://github.com/khaziashwaq" },
  { label: "Email", href: "mailto:ashwaqkhazi1729@gmail.com" },
  { label: "Twitter / X", href: "https://x.com/" },
];

export function ContactSlide() {
  return (
    <Slide id="contact">
      <div className="flex min-h-full w-full items-center px-6 sm:px-16 lg:px-24 py-16 sm:py-0">
        <div className="mx-auto w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground/50">
              04 — Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl max-w-lg">
              Interested in building ambitious things together?
            </h2>
            <p className="mt-4 text-base text-muted-foreground/60 max-w-md leading-relaxed">
              I&apos;m always open to discussing new opportunities, engineering
              challenges, or ways to contribute to your team.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium transition-all duration-200 hover:bg-white/[0.03] hover:border-foreground/10"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
