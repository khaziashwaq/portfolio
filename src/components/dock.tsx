"use client";

import { motion } from "framer-motion";
import { SECTIONS, type SectionId } from "@/components/carousel";

const LABELS: Record<SectionId, string> = {
  philosophy: "Philosophy",
  ascent: "Ascent",
  challenges: "Challenges",
  contact: "Contact",
  personal: "Personal",
};

interface DockProps {
  activeIndex: number;
  onNavigate: (id: SectionId) => void;
}

export function Dock({ activeIndex, onNavigate }: DockProps) {
  return (
    <nav
      className="fixed bottom-4 sm:bottom-6 left-1/2 z-50 -translate-x-1/2"
      aria-label="Section navigation"
    >
      <div className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-white/[0.06] bg-white/[0.04] px-1.5 sm:px-2 py-1 sm:py-1.5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {SECTIONS.map((id, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className="relative rounded-full px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-medium transition-colors duration-200"
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-full bg-white/[0.08]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground/60 hover:text-muted-foreground"
                }`}
              >
                {LABELS[id]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="mt-2 flex items-center justify-center gap-1">
        {SECTIONS.map((_, index) => (
          <div
            key={index}
            className={`h-px transition-all duration-300 ${
              index === activeIndex
                ? "w-4 bg-foreground/40"
                : "w-2 bg-foreground/10"
            }`}
          />
        ))}
      </div>
    </nav>
  );
}
