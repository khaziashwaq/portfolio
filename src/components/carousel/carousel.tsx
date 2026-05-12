"use client";

import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode } from "react";
import { type SectionId } from "./use-carousel";

interface CarouselProps {
  activeIndex: number;
  children: ReactNode[];
}

export function Carousel({ activeIndex, children }: CarouselProps) {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

interface SlideProps {
  children: ReactNode;
  className?: string;
  id?: SectionId;
}

export function Slide({ children, className = "", id }: SlideProps) {
  return (
    <section
      id={id}
      className={`relative h-screen w-screen overflow-y-auto overflow-x-hidden pb-20 sm:pb-24 ${className}`}
    >
      {children}
    </section>
  );
}
