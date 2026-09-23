"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceItem } from "@/data/siteData";

const SERVICE_IMAGES: Record<string, string> = {
  "web-development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  "ui-ux-design": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  "mobile-development": "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
  "ai-machine-learning": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
  "cloud-solutions": "/images/products/cloud_solutions.jpg",
  "digital-transformation": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  "cybersecurity": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
};

interface ServicesScrollRailProps {
  services: ServiceItem[];
}

export default function ServicesScrollRail({ services }: ServicesScrollRailProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const checkScrollBounds = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollBounds();
    container.addEventListener("scroll", checkScrollBounds, { passive: true });
    window.addEventListener("resize", checkScrollBounds);

    return () => {
      container.removeEventListener("scroll", checkScrollBounds);
      window.removeEventListener("resize", checkScrollBounds);
    };
  }, [checkScrollBounds]);

  const scrollByDirection = useCallback((direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.clientWidth || 360;
    const scrollAmount = (cardWidth + 24) * (direction === "left" ? -1 : 1);

    // If reaching end, loop back to beginning
    if (direction === "right" && container.scrollLeft >= container.scrollWidth - container.clientWidth - 20) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  // ── Auto-scroll every 5 seconds ──
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      scrollByDirection("right");
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging, scrollByDirection]);

  // Drag-to-scroll
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
    const walk = (x - startX) * 1.3;
    container.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative">
      {/* Scroll Navigation Header Controls */}
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          onClick={() => scrollByDirection("left")}
          disabled={!canScrollLeft}
          aria-label="Previous service"
          className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
            canScrollLeft
              ? "border-black/15 text-[#1d1d1f] hover:bg-black/5 hover:border-black/40"
              : "border-black/5 text-black/20 cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scrollByDirection("right")}
          disabled={!canScrollRight}
          aria-label="Next service"
          className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
            canScrollRight
              ? "border-black/15 text-[#1d1d1f] hover:bg-black/5 hover:border-black/40"
              : "border-black/5 text-black/20 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Horizontal Scroll Rail */}
      <div className="relative -mx-5 sm:-mx-8 px-5 sm:px-8">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex items-stretch gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-2 px-1 ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service) => {
            const imageSrc =
              service.image ||
              SERVICE_IMAGES[service.slug] ||
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";

            return (
              <article
                key={service.slug}
                className="snap-start w-[85vw] sm:w-[360px] md:w-[390px] shrink-0 bg-white border border-black/[0.08] hover:border-black rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-350 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between group"
              >
                <div>
                  {/* Clean Image */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="block aspect-[16/10] overflow-hidden bg-zinc-100 relative"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSrc}
                      alt={service.title}
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </Link>

                  {/* Simple Clean Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-display font-semibold text-[#000000] tracking-tight mb-2.5 group-hover:text-black transition-colors">
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </h3>
                    <p className="text-[14px] text-[#555555] leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Minimal Footer Link */}
                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#000000] hover:text-[#555555] transition-colors group/arrow"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/arrow:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
