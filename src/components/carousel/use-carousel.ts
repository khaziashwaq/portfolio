"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export const SECTIONS = [
  "philosophy",
  "ascent",
  "challenges",
  "contact",
  "personal",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export function useCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lockRef = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      if (lockRef.current) return;
      if (index < 0 || index >= SECTIONS.length) return;
      lockRef.current = true;
      setActiveIndex(index);
      setTimeout(() => {
        lockRef.current = false;
      }, 600);
    },
    []
  );

  const goToSection = useCallback(
    (id: SectionId) => {
      const index = SECTIONS.indexOf(id);
      if (index !== -1) goTo(index);
    },
    [goTo]
  );

  const next = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return { activeIndex, goTo, goToSection, next, prev };
}
