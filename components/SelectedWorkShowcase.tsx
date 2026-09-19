"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SelectedWorkItem {
  number: string;
  discipline: string;
  year: string;
  productName: string;
  description: string;
  mediaSrc: string;
  tags: string;
  linkHref: string;
}

interface SelectedWorkShowcaseProps {
  items: SelectedWorkItem[];
}

export default function SelectedWorkShowcase({ items }: SelectedWorkShowcaseProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Update active card index based on scroll position
  const updateScrollState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, clientWidth } = container;
    const cardWidth = container.firstElementChild?.clientWidth || clientWidth;
    const gap = 24; // gap between cards
    const currentIndex = Math.min(
      Math.max(0, Math.round(scrollLeft / (cardWidth + gap))),
      items.length - 1
    );
    setActiveIndex(currentIndex);
  }, [items.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScrollState]);

  // Scroll to a specific card index
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement;
    if (card) {
      const containerLeft = container.getBoundingClientRect().left;
      const cardLeft = card.getBoundingClientRect().left;
      const targetScroll = container.scrollLeft + (cardLeft - containerLeft);

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  // Mouse Drag to Scroll (Right to Left / Left to Right)
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftPos(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Horizontal Wheel Scroll Support: convert vertical mouse wheel to horizontal scroll inside the card rail
  const handleWheel = (e: React.WheelEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      return;
    }

    if (e.shiftKey) return;

    const isAtStart = container.scrollLeft <= 0;
    const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 5;

    if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
      container.scrollLeft += e.deltaY * 0.9;
    }
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 mb-8 border-b border-black/[0.08]">
        <div>
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
            The work behind the products.
          </h2>
        </div>

        <Link
          href="/projects"
          className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] inline-flex items-center gap-1.5 transition-colors group/link pb-1 self-start sm:self-auto"
        >
          <span>View all work</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* ── HORIZONTAL SCROLLING RAIL (Right to Left Scrolling) ── */}
      <div className="relative -mx-5 sm:-mx-8 px-5 sm:px-8">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onWheel={handleWheel}
          className={`flex items-stretch gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-4 px-1 ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <article
              key={item.number}
              className="snap-start w-[88vw] sm:w-[580px] lg:w-[680px] xl:w-[740px] shrink-0 bg-white border border-black/[0.08] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-black/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual Media Header (Zero badge overlays, clean and sleek) */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-zinc-100 overflow-hidden border-b border-black/[0.06]">
                <Link href={item.linkHref} className="block w-full h-full overflow-hidden group/img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.mediaSrc}
                    alt={item.productName}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-105"
                  />
                </Link>
              </div>

              {/* Content Bottom Area */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] mb-2.5 uppercase tracking-wider">
                    <span className="font-semibold text-[#111]">{item.number}</span>
                    <span>·</span>
                    <span>{item.discipline}</span>
                    <span>·</span>
                    <span>{item.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#111111] tracking-tight mb-3 hover:text-black transition-colors">
                    <Link href={item.linkHref}>{item.productName}</Link>
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-zinc-600 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>

                  <div className="text-[12px] font-mono text-[#86868b] pt-3 border-t border-black/[0.05]">
                    {item.tags}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-zinc-800 text-[13px] font-semibold transition-all group/btn shadow-xs"
                  >
                    <span>View case study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Interactive Navigation Dots & Progress */}
      <div className="mt-8 flex items-center justify-between text-[12px] font-mono text-[#86868b]">
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? "w-8 bg-black" : "w-2 bg-black/15 hover:bg-black/35"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span>
            0{activeIndex + 1} / 0{items.length}
          </span>
          <span className="hidden sm:inline text-zinc-400">·</span>
          <span className="hidden sm:inline">Drag or swipe to scroll</span>
        </div>
      </div>
    </section>
  );
}
