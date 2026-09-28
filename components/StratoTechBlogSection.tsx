"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface ArticleItem {
  title: string;
  date: string;
  image: string;
  pills: string[];
  href: string;
}

const ARTICLES: ArticleItem[] = [
  {
    title: "What A1S proves about long-term SEO and autonomous discovery",
    date: "May · 2026",
    pills: ["Web Design", "SEO", "PPC"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    href: "/blog",
  },
  {
    title: "SalesX Autonomous Voice SDR: High-velocity lead qualification & instant calendar booking",
    date: "May · 2026",
    pills: ["Voice SDR", "AI Engine", "Salesforce"],
    image: "/images/products/salesx_custom.jpg",
    href: "/products/salesx",
  },
  {
    title: "MeetingX v2.0 Spatial Canvas: Infinite collaborative canvas & live neural transcriptions",
    date: "Apr · 2026",
    pills: ["WebRTC v2", "AI Canvas", "Design"],
    image: "/images/products/meetingx_pinterest.jpg",
    href: "/products/meetingx",
  },
  {
    title: "Zobay Multilingual Edge Speech: 42 global languages with zero cloud latency",
    date: "Apr · 2026",
    pills: ["Edge AI", "Neural Audio", "VoIP"],
    image: "/images/products/zobay_custom.jpg",
    href: "/projects/zobay-voice-ai",
  },
  {
    title: "BaseOne Real-Time Settlement Engine: Sub-second multi-currency ledger clearing",
    date: "Mar · 2026",
    pills: ["Fintech 2.0", "ISO 20022", "Security"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    href: "/blog",
  },
  {
    title: "StartOne Enterprise AI Hub: Deterministic workflow automation & compliance auditing",
    date: "Feb · 2026",
    pills: ["Enterprise OS", "SOC 2", "Cloud"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    href: "/blog",
  },
];

const LongArrow = () => (
  <svg width="34" height="6" viewBox="0 0 37 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M36.2762 2.59777C36.4019 2.47207 36.4019 2.26828 36.2762 2.14259L34.2279 0.0942678C34.1022 -0.0314274 33.8984 -0.0314274 33.7727 0.0942678C33.647 0.219963 33.647 0.423755 33.7727 0.54945L35.5934 2.37018L33.7727 4.19091C33.647 4.3166 33.647 4.52039 33.7727 4.64609C33.8984 4.77178 34.1022 4.77178 34.2279 4.64609L36.2762 2.59777ZM0 2.37018V2.69204H36.0486V2.37018V2.04832H0V2.37018Z" fill="currentColor"/>
  </svg>
);

export default function StratoTechBlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Calculate closest card to center
    const containerCenter = scrollLeft + clientWidth / 2;
    const cards = container.querySelectorAll<HTMLElement>("[data-card]");
    let closestIdx = 0;
    let closestDist = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards.length) return;

    let targetIdx = direction === "right" ? activeIndex + 1 : activeIndex - 1;
    targetIdx = Math.max(0, Math.min(targetIdx, cards.length - 1));

    const targetCard = cards[targetIdx];
    if (targetCard) {
      const targetLeft = targetCard.offsetLeft - (container.clientWidth - targetCard.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
      setActiveIndex(targetIdx);
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-[#000000] text-white overflow-hidden relative">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        
        {/* Header (Exact Match to Video: White Dot, Bold Headline, Long Arrow Link) */}
        <div className="space-y-3 pb-8 sm:pb-12">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-white" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-white leading-tight">
              What&apos;s happening?
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-semibold text-[#82FFCD] hover:text-white inline-flex items-center gap-2 transition-colors group"
            >
              <span>View all articles</span>
              <LongArrow />
            </Link>

            {/* Desktop Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous article"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  canScrollLeft
                    ? "bg-[#82FFCD] text-black hover:bg-white active:scale-95 shadow-xs"
                    : "bg-white/10 text-white/40 cursor-not-allowed opacity-50"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6072 12.5096C6.37874 12.7381 6.37874 13.1085 6.6072 13.3369L10.3302 17.0599C10.5587 17.2884 10.9291 17.2884 11.1575 17.0599C11.386 16.8315 11.386 16.4611 11.1575 16.2326L7.8482 12.9233L11.1575 9.61396C11.386 9.38549 11.386 9.01509 11.1575 8.78662C10.9291 8.55816 10.5587 8.55816 10.3302 8.78662L6.6072 12.5096ZM19.8911 12.9233L19.8911 12.3383L7.02087 12.3383L7.02087 12.9233L7.02087 13.5083L19.8911 13.5083L19.8911 12.9233Z" fill="black"/>
                </svg>
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next article"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  canScrollRight
                    ? "bg-[#82FFCD] text-black hover:bg-white active:scale-95 shadow-xs"
                    : "bg-white/10 text-white/40 cursor-not-allowed opacity-50"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.134 13.2838C19.3625 13.0554 19.3625 12.6849 19.134 12.4565L15.411 8.73349C15.1826 8.50503 14.8122 8.50503 14.5837 8.73349C14.3552 8.96196 14.3552 9.33236 14.5837 9.56083L17.893 12.8701L14.5837 16.1795C14.3552 16.4079 14.3552 16.7783 14.5837 17.0068C14.8122 17.2353 15.1826 17.2353 15.411 17.0068L19.134 13.2838ZM5.8501 12.8701V13.4552H18.7203V12.8701V12.2851H5.8501V12.8701Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── SMOOTH HORIZONTAL TOUCH-SCROLLING TRACK ── */}
        <div className="relative">
          {/* Mobile Floating Edge Arrow (As shown in video) */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous article"
              className="sm:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#82FFCD] text-black flex items-center justify-center shadow-lg active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6072 12.5096C6.37874 12.7381 6.37874 13.1085 6.6072 13.3369L10.3302 17.0599C10.5587 17.2884 10.9291 17.2884 11.1575 17.0599C11.386 16.8315 11.386 16.4611 11.1575 16.2326L7.8482 12.9233L11.1575 9.61396C11.386 9.38549 11.386 9.01509 11.1575 8.78662C10.9291 8.55816 10.5587 8.55816 10.3302 8.78662L6.6072 12.5096ZM19.8911 12.9233L19.8911 12.3383L7.02087 12.3383L7.02087 12.9233L7.02087 13.5083L19.8911 13.5083L19.8911 12.9233Z" fill="black"/>
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => handleScroll("right")}
              aria-label="Next article"
              className="sm:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#82FFCD] text-black flex items-center justify-center shadow-lg active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.134 13.2838C19.3625 13.0554 19.3625 12.6849 19.134 12.4565L15.411 8.73349C15.1826 8.50503 14.8122 8.50503 14.5837 8.73349C14.3552 8.96196 14.3552 9.33236 14.5837 9.56083L17.893 12.8701L14.5837 16.1795C14.3552 16.4079 14.3552 16.7783 14.5837 17.0068C14.8122 17.2353 15.1826 17.2353 15.411 17.0068L19.134 13.2838ZM5.8501 12.8701V13.4552H18.7203V12.8701V12.2851H5.8501V12.8701Z" fill="black"/>
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pt-2 pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {ARTICLES.map((art) => (
              <div
                key={art.title}
                data-card="true"
                className="shrink-0 w-[84vw] max-w-[340px] sm:w-[380px] md:w-[400px] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <Link
                  href={art.href}
                  className="group block relative rounded-[28px] sm:rounded-[34px] overflow-hidden bg-zinc-900 border border-white/10 aspect-[4/3] sm:aspect-[16/12] p-6 sm:p-7 flex flex-col justify-between h-full transition-transform duration-500 hover:scale-[1.01]"
                >
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 400px, 420px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out -z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 -z-0" />

                  {/* Top: Date Stamp */}
                  <div className="relative z-10 text-xs sm:text-sm font-sans font-medium text-white/80">
                    {art.date}
                  </div>

                  {/* Bottom: Title & Read Link */}
                  <div className="relative z-10 space-y-3.5 sm:space-y-4">
                    <div>
                      <h3 className="font-display font-medium text-xl sm:text-2xl text-white group-hover:text-[#82FFCD] transition-colors leading-snug line-clamp-2">
                        {art.title}
                      </h3>
                      <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm font-semibold text-white group-hover:text-[#82FFCD] transition-colors">
                        <span>Read article</span>
                        <LongArrow />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE & TABLET PAGINATION DOTS ── */}
        <div className="flex items-center justify-center gap-2 pt-6 lg:hidden">
          {ARTICLES.map((_, i) => (
            <button
              key={i}
              aria-label={`Scroll to article ${i + 1}`}
              onClick={() => {
                if (!scrollRef.current) return;
                const container = scrollRef.current;
                const cards = container.querySelectorAll<HTMLElement>("[data-card]");
                const card = cards[i];
                if (card) {
                  const targetLeft = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
                  container.scrollTo({
                    left: Math.max(0, targetLeft),
                    behavior: "smooth",
                  });
                  setActiveIndex(i);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-[#82FFCD]" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
