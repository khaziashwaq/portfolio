"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Philosophy" },
  { href: "#experience", label: "Ascent" },
  { href: "#projects", label: "Challenges" },
  { href: "#publications", label: "Research" },
  { href: "#testimonials", label: "Feedback" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
          mobileOpen && "bg-background border-border"
        )}
        role="banner"
      >
        <nav
          className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6"
          aria-label="Main navigation"
        >
          <a href="#hero" className="text-sm font-semibold tracking-tight">
            AK
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="flex items-center justify-center h-8 w-8 md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-12 z-40 bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <ul className="flex flex-col px-6 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground border-b border-border"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
