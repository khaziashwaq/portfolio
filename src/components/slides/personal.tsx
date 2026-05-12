"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Slide } from "@/components/carousel";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Book {
  title: string;
  author: string;
  rating: string;
  userRating: number;
  cover: string;
  link: string;
  dateAdded: string;
}

interface BooksData {
  currentlyReading: Book[];
  read: Book[];
  toRead: Book[];
}

function Stars({ count }: { count: number }) {
  return (
    <span className="text-[10px] text-amber-400/60">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <motion.a
      href={book.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-[100px] transition-colors duration-200"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.3, ease }}
    >
      <div className="relative w-[100px] h-[140px] overflow-hidden rounded-md bg-white/[0.03] shadow-md shadow-black/20 group-hover:shadow-lg group-hover:shadow-black/30 transition-shadow duration-200">
        {book.cover ? (
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover"
            sizes="100px"
            unoptimized
          />
        ) : (
          <div className="flex h-full items-center justify-center p-2">
            <p className="text-[9px] text-muted-foreground/30 text-center leading-tight">
              {book.title}
            </p>
          </div>
        )}
      </div>
      <div className="mt-1.5 w-[100px]">
        <p className="text-xs font-medium leading-snug line-clamp-2 group-hover:text-foreground/90 transition-colors">
          {book.title}
        </p>
        <p className="text-[10px] text-muted-foreground/40 mt-0.5 truncate">
          {book.author}
        </p>
      </div>
    </motion.a>
  );
}

function Shelf({ label, books }: { label: string; books: Book[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [books]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -220 : 220, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground/30">
          {label}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-muted-foreground/20">
            {books.length}
          </span>
          {(canScrollLeft || canScrollRight) && (
            <div className="flex gap-1">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="h-4 w-4 flex items-center justify-center rounded text-[9px] text-muted-foreground/30 hover:text-muted-foreground/60 disabled:opacity-20 transition-colors"
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="h-4 w-4 flex items-center justify-center rounded text-[9px] text-muted-foreground/30 hover:text-muted-foreground/60 disabled:opacity-20 transition-colors"
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-thin"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onWheel={(e) => {
          // Allow horizontal scroll with mouse wheel inside shelf without triggering carousel navigation
          if (Math.abs(e.deltaX) > 0 || scrollRef.current) {
            e.stopPropagation();
            if (scrollRef.current && e.deltaY !== 0) {
              scrollRef.current.scrollLeft += e.deltaY;
            }
          }
        }}
      >
        {books.map((book, i) => (
          <BookCard key={book.title} book={book} index={i} />
        ))}
      </div>
    </div>
  );
}

function ReadingLibrary() {
  const [books, setBooks] = useState<BooksData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-muted-foreground/60" />
      </div>
    );
  }

  if (!books) {
    return (
      <p className="text-xs text-muted-foreground/30 text-center py-4">
        Could not load library
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {books.currentlyReading.length > 0 && (
        <Shelf label="📖 Currently Reading" books={books.currentlyReading} />
      )}
      {books.read.length > 0 && <Shelf label="✓ Read" books={books.read} />}
      {books.toRead.length > 0 && (
        <Shelf label="→ Up Next" books={books.toRead} />
      )}
    </div>
  );
}

export function PersonalSlide() {
  return (
    <Slide id="personal" className="bg-[#0e0e10]">
      {/* Notebook grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      {/* Left margin line */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-[88px] w-px bg-red-400/[0.06] hidden sm:block"
        aria-hidden="true"
      />

      <div className="relative flex min-h-full w-full flex-col items-center justify-start sm:justify-center px-4 sm:px-16 lg:px-24 py-16 sm:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground/50">
              05 — Personal
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Off the Clock
            </h2>
          </motion.div>

          <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            {/* 1. Library — spans full height */}
            <motion.div
              className="rounded-lg border border-border bg-card/60 p-4 sm:p-5 backdrop-blur-sm sm:row-span-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground/30">
                  📚 Library
                </p>
                <a
                  href="https://www.goodreads.com/user/show/162685763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-muted-foreground/20 hover:text-muted-foreground/40 transition-colors"
                >
                  goodreads →
                </a>
              </div>
              <ReadingLibrary />
            </motion.div>

            {/* 2. Currently Learning */}
            <motion.div
              className="rounded-lg border border-border bg-card/60 p-5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease }}
            >
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground/30 mb-3">
                🧠 Currently Learning
              </p>
              <div className="rounded-md border border-border bg-white/[0.01] p-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-7 w-7 shrink-0 rounded bg-red-500/10 flex items-center justify-center">
                    <span className="text-[10px]">▶</span>
                  </div>
                  <div>
                    <p className="text-base font-medium">
                      System Design Architecture
                    </p>
                    <p className="text-xs text-muted-foreground/50 mt-0.5">
                      ByteByteGo
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground/60 leading-relaxed">
                      Distributed systems patterns, load balancing, database
                      sharding, and microservices at scale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {[
                  "Distributed Systems",
                  "Load Balancing",
                  "Sharding",
                  "Microservices",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground/50 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 3. Hobbies */}
            <motion.div
              className="rounded-lg border border-border bg-card/60 p-5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease }}
            >
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground/30 mb-3">
                ⚡ Hobbies
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3 rounded-md border border-border bg-white/[0.01] p-2.5">
                  <span className="text-base">🥊</span>
                  <div>
                    <p className="text-sm font-medium">MMA</p>
                    <p className="text-xs text-muted-foreground/60 mt-0.5 leading-relaxed">
                      I follow the UFC closely and have recently started doing
                      bag work and shadow boxing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-md border border-border bg-white/[0.01] p-2.5">
                  <span className="text-base">🧗</span>
                  <div>
                    <p className="text-sm font-medium">Bouldering</p>
                    <p className="text-xs text-muted-foreground/60 mt-0.5 leading-relaxed">
                      I'm an intermediate climber and I enjoy cracking the beta.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-md border border-border bg-white/[0.01] p-2.5">
                  <span className="text-base">🎹</span>
                  <div>
                    <p className="text-sm font-medium">Keyboard</p>
                    <p className="text-xs text-muted-foreground/60 mt-0.5 leading-relaxed">
                      Self-taught keyboard player. Currently learning fur elise
                      by beethoven. I find it relaxing and a nice break from
                      screen time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-md border border-border bg-white/[0.01] p-2.5">
                  <span className="text-base">🏋️</span>
                  <div>
                    <p className="text-sm font-medium">Gym</p>
                    <p className="text-xs text-muted-foreground/60 mt-0.5 leading-relaxed">
                      I lift 5 days a week following a Push, Pull, Legs, Arms, Chest &amp; Back split.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
