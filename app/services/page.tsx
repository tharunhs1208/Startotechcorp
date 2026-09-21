"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TextMaskReveal from "@/components/TextMaskReveal";
import { SERVICES_DATA, ServiceItem } from "@/data/siteData";

const SERVICE_IMAGES: Record<string, string> = {
  "web-development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  "ui-ux-design": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
  "mobile-development": "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  "ai-machine-learning": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  "cloud-solutions": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  "digital-transformation": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  "cybersecurity": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
};

/* =========================================================================
   DESKTOP: 3D STACKING DECK
   ========================================================================= */
function DesktopStackingServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const imageSrc =
    service.image ||
    SERVICE_IMAGES[service.slug] ||
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop";

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && service.video) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && service.video) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const topOffset = 110 + index * 28;

  return (
    <div
      style={{
        top: `${topOffset}px`,
        zIndex: index + 10,
      }}
      className="sticky w-full mb-16 will-change-transform"
    >
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative bg-[#ffffff] border border-black/[0.09] hover:border-black/35 rounded-[2.5rem] overflow-hidden transition-all duration-300 group shadow-none"
      >
        <div className="grid grid-cols-12 min-h-[420px] items-stretch">
          {/* Left Content Column */}
          <div className="col-span-7 p-10 lg:p-12 flex flex-col justify-between order-1">
            <div>
              <div className="flex items-center gap-2 text-[12px] font-mono text-[#86868b] mb-3 uppercase tracking-wider">
                <span className="font-semibold text-[#111111]">0{index + 1}</span>
                <span>·</span>
                <span>{service.tagline || "Engineering Practice"}</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-display font-medium text-[#111111] tracking-tight leading-[1.15] mb-4 group-hover:text-[#0071e3] transition-colors">
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </h2>

              <p className="text-[16px] text-[#6e6e73] font-normal leading-relaxed mb-8 max-w-xl">
                {service.shortDescription || service.fullDescription}
              </p>

              {/* Core Deliverables Grid */}
              <div className="pt-6 border-t border-black/[0.06] space-y-3 max-w-xl">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#1d1d1f] font-semibold block">
                  Core Engineering Deliverables
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.slice(0, 4).map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="border-l-2 border-black/[0.12] pl-3 py-0.5 text-[13px] text-[#6e6e73] leading-snug"
                    >
                      <span className="font-semibold text-[#1d1d1f] block mb-0.5">
                        {feat.title}
                      </span>
                      <span className="text-[12px] line-clamp-1">{feat.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies & Action Link */}
            <div className="mt-10 pt-6 flex items-center justify-between gap-4 border-t border-black/[0.06]">
              <div className="flex flex-wrap items-center gap-1.5">
                {service.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#f5f5f7] border border-black/[0.06] text-[11px] font-mono text-[#1d1d1f]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white hover:bg-black text-[13px] font-medium transition-all shrink-0 group/btn"
              >
                <span>Explore capability</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Visual Showcase Container */}
          <div className="col-span-5 bg-zinc-900 relative overflow-hidden min-h-[380px] order-2 border-l border-black/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                isHovered && service.video ? "opacity-0" : "opacity-100"
              }`}
            />

            {service.video && (
              <video
                ref={videoRef}
                src={service.video}
                muted
                loop
                playsInline
                preload="none"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
                }`}
              />
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

/* =========================================================================
   MOBILE & TABLET: TOUCH SWIPEABLE CARDS SLIDER (With 5s Auto-Scroll)
   ========================================================================= */
function MobileSwipeableServices({ services }: { services: ServiceItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToCard = useCallback((index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 20 : 320;
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  }, []);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild ? el.firstElementChild.clientWidth + 20 : 320;
    const currentIdx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, currentIdx), services.length - 1));
  }, [services.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Auto-scroll to next card every 5 seconds ──
  useEffect(() => {
    if (isUserInteracting) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIdx = (prev + 1) % services.length;
        scrollToCard(nextIdx);
        return nextIdx;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isUserInteracting, services.length, scrollToCard]);

  const handleUserInteractionStart = () => {
    setIsUserInteracting(true);
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
  };

  const handleUserInteractionEnd = () => {
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 4000);
  };

  return (
    <div className="w-full">
      {/* Swipe Header: Pagination Counter & Navigation Controls */}
      <div className="flex items-center justify-between gap-4 mb-5 px-1">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-mono font-semibold text-[#111111]">
            0{activeIndex + 1}
          </span>
          <span className="text-[12px] font-mono text-[#86868b]">/</span>
          <span className="text-[12px] font-mono text-[#86868b]">
            0{services.length}
          </span>
          <span className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-wider ml-2 hidden min-[360px]:inline">
            Swipe cards →
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToCard(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous card"
            className={`p-2 rounded-full border transition-all ${
              activeIndex === 0
                ? "border-black/5 text-black/20 cursor-not-allowed"
                : "border-black/15 text-[#111] hover:bg-black/5 active:scale-95"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToCard(activeIndex + 1)}
            disabled={activeIndex === services.length - 1}
            aria-label="Next card"
            className={`p-2 rounded-full border transition-all ${
              activeIndex === services.length - 1
                ? "border-black/5 text-black/20 cursor-not-allowed"
                : "border-black/15 text-[#111] hover:bg-black/5 active:scale-95"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Swipeable Horizontal Snap Container */}
      <div className="-mx-5 sm:-mx-8 px-5 sm:px-8">
        <div
          ref={containerRef}
          onTouchStart={handleUserInteractionStart}
          onTouchEnd={handleUserInteractionEnd}
          onMouseEnter={handleUserInteractionStart}
          onMouseLeave={handleUserInteractionEnd}
          className="flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-6 pt-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, idx) => {
            const imageSrc =
              service.image ||
              SERVICE_IMAGES[service.slug] ||
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";

            return (
              <article
                key={service.slug}
                className="snap-center w-[88vw] sm:w-[500px] md:w-[560px] shrink-0 bg-white border border-black/[0.09] rounded-3xl overflow-hidden flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Visual Header (Clean, no badges) */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="block aspect-[16/10] overflow-hidden bg-zinc-900 relative"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSrc}
                      alt={service.title}
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#86868b] mb-2 uppercase tracking-wider">
                      <span className="font-semibold text-[#111111]">0{idx + 1}</span>
                      <span>·</span>
                      <span>{service.tagline || "Practice"}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#111111] tracking-tight mb-2.5">
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </h3>

                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-relaxed mb-5 font-normal">
                      {service.shortDescription || service.fullDescription}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-4 border-t border-black/[0.06]">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="text-[13px] text-[#6e6e73] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/30 mt-1.5 shrink-0" />
                          <span>
                            <strong className="text-[#1d1d1f] font-medium">{feat.title}:</strong>{" "}
                            {feat.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#111111] text-white text-[13px] font-medium active:scale-[0.98] transition-transform"
                  >
                    <span>Explore capability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Touch Dot Indicators */}
      <div className="flex items-center justify-center gap-1.5 pt-2">
        {services.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => scrollToCard(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === dotIdx
                ? "w-6 bg-[#111111]"
                : "w-1.5 bg-black/15 hover:bg-black/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN SERVICES PAGE COMPONENT
   ========================================================================= */
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* ── 1. EDITORIAL HEADER ────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-14 sm:pb-20 border-b border-black/[0.08]">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Services" }]} />
          </div>

          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              SERVICES &amp; CAPABILITIES
            </span>
            <TextMaskReveal
              text="Engineering Capabilities"
              as="h1"
              once={false}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4"
            />
            <p className="mt-3 text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
              Full-stack software engineering, bespoke UI/UX design systems, and intelligent voice and data systems designed for durable production use.
            </p>
          </div>
        </section>

        {/* ── 2. SERVICES SHOWCASE (Desktop Stacking Deck vs Mobile/Tab Swiping Cards) ── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14">
          {/* Mobile & Tablet: Touch-friendly Swiping Cards */}
          <div className="lg:hidden">
            <MobileSwipeableServices services={SERVICES_DATA} />
          </div>

          {/* Desktop Only (>= 1024px): 3D Stacking Deck */}
          <div className="hidden lg:block relative pb-6">
            {SERVICES_DATA.map((service, idx) => (
              <DesktopStackingServiceCard
                key={service.slug}
                service={service}
                index={idx}
              />
            ))}
          </div>
        </section>

        {/* ── 3. HOW WE WORK (ANIMATED TRANSITION SECTION) ───────────── */}
        <HowWeWorkSection className="pt-4 sm:pt-8" />

        {/* ── 4. BOTTOM CTA ──────────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-4 sm:pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-medium tracking-tight text-[#1d1d1f]">
                Need dedicated engineering for your next release?
              </h3>
              <p className="mt-2 text-[15px] text-[#6e6e73] font-normal leading-relaxed">
                We partner with engineering and product leads on direct sprint delivery.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white hover:bg-black text-[14px] font-medium transition-colors group"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
