"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Slide } from "@/components/carousel";

const ease = [0.25, 0.1, 0.25, 1] as const;

const pillars = [
  {
    number: "01",
    title: "PRAGMATISM",
    text: "I believe in pragmatic engineering: do it right, but also do it before the coffee gets cold.",
  },
  {
    number: "02",
    title: "DISTILLATION",
    text: "I believe engineering is about removing unnecessary complexity to reveal the core of a problem and its solution.",
  },
  {
    number: "03",
    title: "END USER CENTRICITY",
    text: "I care about reducing friction for user because frustration shouldn't be part of UX.",
  },
  {
    number: "04",
    title: "INTELLECTUAL HUMILITY",
    text: "I enjoy learning from people smarter than me and thankfully, the tech industry makes that very easy.",
  },
];

const nietzscheQuotes = [
  "He who has a why to live can bear almost any how.",
  "Without music, life would be a mistake.",
  "That which does not kill us makes us stronger.",
  "You must have chaos within you to give birth to a dancing star.",
  "The individual has always had to struggle to keep from being overwhelmed by the tribe.",
  "There are no facts, only interpretations.",
  "To live is to suffer, to survive is to find some meaning in the suffering.",
  "One must still have chaos in oneself to be able to give birth to a dancing star.",
  "The snake which cannot cast its skin has to die.",
  "In heaven, all the interesting people are missing.",
  "Whoever fights monsters should see to it that in the process he does not become a monster.",
  "When you gaze long into an abyss, the abyss also gazes into you.",
  "The higher we soar, the smaller we appear to those who cannot fly.",
  "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
  "Man is something that shall be overcome.",
];

function QuoteRotator() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % nietzscheQuotes.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <motion.div
      className="m-6 flex items-center cursor-pointer select-none"
      onClick={next}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5, ease }}
    >
      <div className="relative min-h-[24px] flex-1 min-w-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="text-sm italic text-muted-foreground/40 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
          >
            <p>&ldquo;{nietzscheQuotes[index]}&rdquo;</p>
            <p className="mt-1 text-xs not-italic font-mono text-muted-foreground/25">
              — Friedrich Nietzsche
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function PhilosophySlide() {
  return (
    <Slide id="philosophy">
      <div className="relative flex min-h-full w-full items-center justify-center px-4 sm:px-16 lg:px-24 py-0">
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative w-full max-w-5xl flex flex-col items-center text-center">
          {/* Header — centered */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground/50">
              01 — Philosophy
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ashwaq Khazi
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground px-2">
              I build software at Inspera. Previously, I worked on APIs powering
              operations at HSBC. I enjoy solving messy problems, designing
              systems, and using software to make things simpler and faster.
            </p>
            <QuoteRotator />
          </motion.div>

          {/* Card collage */}
          <motion.div
            className="relative mt-6 md:mt-10 origin-top scale-[0.5] sm:scale-[0.65] md:scale-100 mb-[-210px] sm:mb-[-147px] md:mb-0"
            style={{ width: 660, height: 420 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            {/* Left cards */}
            <motion.div
              className="absolute overflow-hidden rounded-xl border border-white/[0.06] bg-card/80 p-5 backdrop-blur-sm shadow-md shadow-black/15 flex flex-col gap-3"
              style={{ top: 0, left: 0, width: 210, height: 190 }}
              initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              whileHover={{
                scale: 1.06,
                rotate: -10,
                zIndex: 10,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 1.08, rotate: -10, zIndex: 10 }}
              transition={{ duration: 0.4, delay: 0.3, ease }}
            >
              <span className="text-sm font-mono text-accent-color/60">01</span>
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase">
                  {pillars[0].title}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted-foreground/70">
                  {pillars[0].text}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute overflow-hidden rounded-xl border border-white/[0.06] bg-card/80 p-5 backdrop-blur-sm shadow-md shadow-black/15 flex flex-col gap-3"
              style={{ top: 210, left: -10, width: 215, height: 195 }}
              initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 1.08, rotate: 0, zIndex: 10 }}
              transition={{ duration: 0.4, delay: 0.38, ease }}
            >
              <span className="text-sm font-mono text-accent-color/60">02</span>
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase">
                  {pillars[1].title}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted-foreground/70">
                  {pillars[1].text}
                </p>
              </div>
            </motion.div>

            {/* Right cards (behind photo) */}
            <motion.div
              className="absolute overflow-hidden rounded-xl border border-white/[0.06] bg-card/80 p-5 backdrop-blur-sm shadow-md shadow-black/15 flex flex-col gap-3"
              style={{ top: 0, left: 440, width: 210, height: 190 }}
              initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 4 }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 1.08, rotate: 2, zIndex: 10 }}
              transition={{ duration: 0.4, delay: 0.46, ease }}
            >
              <span className="text-sm font-mono text-accent-color/60">03</span>
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase">
                  {pillars[2].title}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted-foreground/70">
                  {pillars[2].text}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute overflow-hidden rounded-xl border border-white/[0.06] bg-card/80 p-5 backdrop-blur-sm shadow-md shadow-black/15 flex flex-col gap-3"
              style={{ top: 210, left: 450, width: 215, height: 195 }}
              initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -10.5 }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 1.08, rotate: -8, zIndex: 10 }}
              transition={{ duration: 0.4, delay: 0.54, ease }}
            >
              <span className="text-sm font-mono text-accent-color/60">04</span>
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase">
                  {pillars[3].title}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted-foreground/70">
                  {pillars[3].text}
                </p>
              </div>
            </motion.div>

            {/* Photo — center (in front of right cards) */}
            <motion.div
              className="absolute overflow-hidden"
              style={{ top: 10, left: 180, width: 300, height: 440 }}
              initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -0.5 }}
              whileHover={{
                scale: 1.04,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.25 },
              }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
            >
              <Image
                src="/me.svg"
                alt="Ashwaq Khazi"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
