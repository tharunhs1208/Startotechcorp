"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";

export interface SequenceCardItem {
  id: string;
  number: string;
  title: string;
  category?: string;
  departmentLabel?: string;
  year?: string;
  description: string;
  beforeAfterSummary?: string;
  supportingLine?: string;
  linkHref: string;
  ctaLabel?: string;
  mediaSrc: string;
  tags?: string;
}

interface ScrollCardSequenceProps {
  items: SequenceCardItem[];
  sectionLabel?: string;
  sectionTitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export default function ScrollCardSequence({
  items,
  sectionLabel = "OUR PRODUCTS",
  sectionTitle = "Products built around real business needs.",
  viewAllHref = "/products",
  viewAllLabel = "View all products",
}: ScrollCardSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const lastProgressRef = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  // Track the scroll progress of the entire section naturally (no scroll-jacking)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Detect natural scroll direction
    if (latest > lastProgressRef.current) {
      setScrollDirection("down");
    } else if (latest < lastProgressRef.current) {
      setScrollDirection("up");
    }
    lastProgressRef.current = latest;

    // Calculate active item index smoothly across the sequence
    const count = items.length;
    if (count <= 1) return;

    // Split progress range evenly with smooth padding
    const segment = 1 / count;
    const index = Math.min(Math.floor(latest / segment), count - 1);
    if (index !== activeIndex && index >= 0 && index < count) {
      setActiveIndex(index);
    }
  });

  const activeItem = items[activeIndex] || items[0];

  // If user prefers reduced motion, render clean stacked cards without transforms
  if (shouldReduceMotion) {
    return (
      <div className="space-y-12">
        {items.map((item) => (
          <article
            key={item.id}
            className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">
              <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] mb-4 uppercase">
                    <span className="font-semibold text-[#111]">{item.number}</span>
                    <span>·</span>
                    <span>{item.departmentLabel || item.category || "Product"}</span>
                    <span>·</span>
                    <span>{item.year || "2026"}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#111] mb-3">
                    <Link href={item.linkHref}>{item.title}</Link>
                  </h3>
                  <p className="text-[15px] text-zinc-700 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link href={item.linkHref} className="text-[14px] font-medium text-[#111] underline">
                    {item.ctaLabel || "View project"} →
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 bg-zinc-100 min-h-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.mediaSrc} alt={item.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  }

  // Calculate container height on desktop based on item count for natural scrolling pace
  // 3 items = ~260vh total scroll height so each item has a dedicated comfortable scroll window
  const containerHeight = `${Math.max(items.length * 85, 180)}vh`;

  return (
    <div className="relative">
      {/* ── DESKTOP SCROLL-DRIVEN SYNCHRONIZED STAGE (Sticky Viewport) ── */}
      <div
        ref={containerRef}
        style={{ height: containerHeight }}
        className="hidden lg:block relative"
      >
        <div className="sticky top-20 h-[calc(100vh-110px)] min-h-[520px] max-h-[720px] flex flex-col justify-between">
          {/* Main Synchronized Editorial Card Grid */}
          <div className="flex-1 flex items-center">
            <div className="w-full grid grid-cols-12 gap-10 items-stretch bg-white border border-black/[0.08] rounded-xl overflow-hidden shadow-xs hover:border-black/25 transition-colors duration-300">
              
              {/* Left Column: Synchronized Heading & Content */}
              <div className="col-span-6 p-9 xl:p-12 flex flex-col justify-between">
                <div>
                  {/* Step Sequence Indicator & Item Number */}
                  <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-black/[0.06]">
                    <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] uppercase tracking-wider">
                      <span className="font-semibold text-[#111]">{activeItem.number}</span>
                      <span>·</span>
                      <span>{activeItem.departmentLabel || activeItem.category || "Platform"}</span>
                      <span>·</span>
                      <span>{activeItem.year || "2026"}</span>
                    </div>

                    {/* Progress Dots Navigation */}
                    <div className="flex items-center gap-1.5">
                      {items.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            activeIndex === i
                              ? "w-6 bg-[#111]"
                              : "w-1.5 bg-black/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Synchronized Title & Description Transition */}
                  <div className="relative min-h-[220px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeItem.id}
                        initial={{
                          opacity: 0.4,
                          y: scrollDirection === "down" ? 12 : -12,
                          scale: 0.99,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0.4,
                          y: scrollDirection === "down" ? -12 : 12,
                          scale: 0.99,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="space-y-4"
                      >
                        <h3 className="text-3xl xl:text-4xl font-sans font-semibold text-[#111111] tracking-[-0.03em] leading-tight">
                          <Link href={activeItem.linkHref} className="hover:text-black transition-colors">
                            {activeItem.title}
                          </Link>
                        </h3>

                        <p className="text-[16px] text-zinc-700 leading-relaxed font-normal">
                          {activeItem.description}
                        </p>

                        {(activeItem.beforeAfterSummary || activeItem.supportingLine) && (
                          <div className="pt-4 border-t border-black/[0.06] space-y-1.5 text-[14px]">
                            {activeItem.beforeAfterSummary && (
                              <p className="text-zinc-800 leading-snug">
                                {activeItem.beforeAfterSummary}
                              </p>
                            )}
                            {activeItem.supportingLine && (
                              <p className="text-zinc-600 leading-snug">
                                {activeItem.supportingLine}
                              </p>
                            )}
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                  <Link
                    href={activeItem.linkHref}
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-[#111111] hover:text-black group transition-colors"
                  >
                    <span>{activeItem.ctaLabel || "Explore product"}</span>
                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                  </Link>

                  <span className="text-[12px] font-mono text-[#86868b]">
                    0{activeIndex + 1} of 0{items.length}
                  </span>
                </div>
              </div>

              {/* Right Column: Synchronized Visual Showcase Stage */}
              <div className="col-span-6 bg-zinc-100 border-l border-black/[0.06] relative overflow-hidden flex items-stretch">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{
                      opacity: 0.4,
                      y: scrollDirection === "down" ? 14 : -14,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0.4,
                      y: scrollDirection === "down" ? -14 : 14,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full h-full relative group/img overflow-hidden"
                  >
                    <Link href={activeItem.linkHref} className="block w-full h-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={activeItem.mediaSrc}
                        alt={activeItem.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.03]"
                      />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE / TABLET TOUCH SEQUENCE (Natural vertical scroll sequence) ── */}
      <div className="lg:hidden space-y-8">
        {items.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0.5, y: 12, scale: 0.98 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            }}
            viewport={{ once: false, margin: "-40px" }}
            className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] bg-zinc-100 overflow-hidden border-b border-black/[0.06]">
                <Link href={item.linkHref} className="block w-full h-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.mediaSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </Link>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] mb-3 uppercase tracking-wider">
                  <span className="font-semibold text-[#111]">{item.number}</span>
                  <span>·</span>
                  <span>{item.departmentLabel || item.category || "Platform"}</span>
                  <span>·</span>
                  <span>{item.year || "2026"}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#111111] tracking-[-0.02em] leading-tight mb-2.5">
                  <Link href={item.linkHref} className="hover:text-black transition-colors">
                    {item.title}
                  </Link>
                </h3>

                <p className="text-[14px] text-zinc-600 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                {(item.beforeAfterSummary || item.supportingLine) && (
                  <div className="pt-3 border-t border-black/[0.06] space-y-1 text-[13px] text-zinc-700">
                    {item.beforeAfterSummary && <p>{item.beforeAfterSummary}</p>}
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-black/[0.06] flex items-center justify-between">
              <Link
                href={item.linkHref}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#111111] hover:text-black group/cta transition-colors"
              >
                <span>{item.ctaLabel || "View project"}</span>
                <span className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1">→</span>
              </Link>
              <span className="text-[11px] font-mono text-[#86868b]">
                0{idx + 1} / 0{items.length}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
