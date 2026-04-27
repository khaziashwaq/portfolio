"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar - always on top */}
      <header
        className={cn(
          "fixed top-0 z-50 w-full border-b border-border/40 backdrop-blur-md",
          mobileOpen ? "bg-background" : "bg-background/80 supports-[backdrop-filter]:bg-background/60"
        )}
        role="banner"
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="flex items-center gap-1"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Opening angle bracket */}
              <path d="M10 32L22 20V26L16 32L22 38V44L10 32Z" fill="#22d3ee" />
              {/* Closing angle bracket */}
              <path d="M54 32L42 44V38L48 32L42 26V20L54 32Z" fill="#22d3ee" />
              {/* AK text */}
              <text
                x="32"
                y="39"
                fontFamily="monospace"
                fontSize="16"
                fontWeight="800"
                fill="white"
                textAnchor="middle"
              >
                AK
              </text>
            </svg>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="flex items-center justify-center h-10 w-10 md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile nav overlay - separate from header so it can't cover the button */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-lg text-muted-foreground transition-colors hover:text-foreground py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
