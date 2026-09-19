"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import TextMaskReveal from "@/components/TextMaskReveal";
import {
  ScrollMaskText,
  ScrollMaskImage,
  ScrollMaskCard,
} from "@/components/ScrollMaskReveal";
import { TEAM_MEMBERS } from "@/data/siteData";

const DISCIPLINES = [
  {
    number: "01",
    title: "Product Engineering",
    description: "We write clean, modular, scalable TypeScript and Rust backends with automated test suites and high-throughput databases.",
  },
  {
    number: "02",
    title: "Design Systems & Craft",
    description: "We design complete Figma variable token systems and intuitive user interfaces that bridge the gap between design and production code.",
  },
  {
    number: "03",
    title: "Intelligent Systems",
    description: "We build sub-300ms neural voice pipelines, deterministic agentic tools, and private enterprise retrieval-augmented generation systems.",
  },
  {
    number: "04",
    title: "Cloud & Reliability",
    description: "We deploy secure, multi-region edge infrastructure with automated CI/CD pipelines, ISO 27001 readiness, and 99.99% uptime SLAs.",
  },
];

const WORKING_PRINCIPLES = [
  {
    title: "Less design. Better design.",
    desc: "We avoid unnecessary decorative noise. Every layout decision, typographic scale, and interaction exists to solve a real user and business need.",
  },
  {
    title: "Direct engineering collaboration.",
    desc: "You work directly with senior architects and product designers who write code and ship features daily. No bureaucratic layers.",
  },
  {
    title: "Speed with structural rigor.",
    desc: "We ship functional production increments every two weeks, pairing rapid sprint velocity with clean architectural boundaries.",
  },
  {
    title: "Durable software.",
    desc: "We engineer software meant to last years in production without accumulating tech debt or fragile dependencies.",
  },
];

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const firstChild = scrollRef.current.children[0] as HTMLElement | undefined;
    const itemWidth = firstChild ? firstChild.offsetWidth + 20 : clientWidth;
    const currentIdx = Math.round(scrollLeft / itemWidth);
    setActiveIdx(Math.min(Math.max(currentIdx, 0), TEAM_MEMBERS.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScrollState();
    el.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);
    return () => {
      el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToMember = (idx: number) => {
    if (!scrollRef.current) return;
    const target = scrollRef.current.children[idx] as HTMLElement | undefined;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-10 sm:pb-16">
        {/* ── 1. EDITORIAL HERO (Scroll Mask Reveal) ────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24 border-b border-black/[0.08]">
          <div className="max-w-4xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-4 font-semibold">
              ABOUT US
            </span>
            <TextMaskReveal
              text="We build digital products around the way businesses actually work."
              as="h1"
              once={false}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-[-0.03em] text-[#1d1d1f] leading-[1.08] mb-8"
            />
            <ScrollMaskText
              text="StratoTech is a product engineering studio based in Bengaluru. We partner with founders, growing teams, and enterprises to design, architect, and ship high-performance software."
              as="p"
              dimOpacity={0.25}
              className="text-lg sm:text-2xl text-[#1d1d1f] font-normal leading-relaxed max-w-3xl"
            />
          </div>

          {/* Featured Studio Image with Scroll Mask Expansion */}
          <div className="mt-12 sm:mt-16">
            <ScrollMaskImage className="aspect-[21/9] sm:aspect-[2.4/1] bg-[#e5e5ea] border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                alt="StratoTech Engineering Studio"
                className="w-full h-full object-cover"
              />
            </ScrollMaskImage>
          </div>
        </section>

        {/* ── 2. WHAT WE DO & PHILOSOPHY (PixFort Scroll Mask Text Dim-to-Reveal) ── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-20 sm:pb-28 border-b border-black/[0.08]">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-3 font-semibold">
                OUR PHILOSOPHY
              </span>
              <TextMaskReveal
                text="Engineering with clarity and restraint."
                as="h2"
                once={false}
                className="text-2xl sm:text-4xl font-display font-medium text-[#1d1d1f] leading-snug tracking-tight"
              />
            </div>
            <div className="lg:col-span-7 space-y-8">
              <ScrollMaskText
                text="Modern software often suffers from excessive complexity, bloated dependencies, and over-designed interfaces. We take the opposite approach: building clean, focused tools that solve specific operational problems."
                as="p"
                dimOpacity={0.18}
                className="text-lg sm:text-2xl text-[#1d1d1f] font-normal leading-relaxed"
              />
              <ScrollMaskText
                text="Whether developing an internal sales platform like SalesX, an AI voice tool like Zobay, or an operational execution layer like StartOne, our goal is always the same: make complex workflows simple, reliable, and fast."
                as="p"
                dimOpacity={0.18}
                className="text-lg sm:text-2xl text-[#1d1d1f] font-normal leading-relaxed"
              />
            </div>
          </div>
        </section>

        {/* ── 3. DISCIPLINES (Scroll Mask Cards) ────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                PRACTICE AREAS
              </span>
              <TextMaskReveal
                text="What We Build"
                as="h2"
                once={false}
                className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight"
              />
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm font-normal">
              Core technical disciplines applied across our client and internal products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-14 border-b border-black/[0.08]">
            {DISCIPLINES.map((d, idx) => (
              <ScrollMaskCard key={d.number} index={idx} className="border-t border-black/[0.08] pt-6 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-mono text-[#6e6e73] block mb-2">{d.number}</span>
                  <h3 className="text-xl font-display font-medium text-[#1d1d1f] mb-3">{d.title}</h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed font-normal">{d.description}</p>
                </div>
              </ScrollMaskCard>
            ))}
          </div>

          {/* Technology Stack Grid */}
          <div className="pt-10 pb-20 border-b border-black/[0.08]">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-4 font-semibold">
              ENGINEERING STACK &amp; TOOLING
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[
                "TypeScript",
                "Next.js",
                "React",
                "Node.js",
                "Python",
                "PostgreSQL",
                "Prisma",
                "Supabase",
                "Docker",
                "Kubernetes",
                "AWS",
                "WebRTC",
                "Redis",
                "Tailwind CSS",
                "Figma",
                "PyTorch",
                "OpenAI",
                "GraphQL"
              ].map((tech, i) => (
                <TechBadge key={i} name={tech} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. WORKING PRINCIPLES (Scroll Mask Cards) ─────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                STANDARDS
              </span>
              <TextMaskReveal
                text="How We Work"
                as="h2"
                once={false}
                className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight"
              />
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-sm font-normal">
              The foundational principles guiding every sprint and architectural choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-20 border-b border-black/[0.08]">
            {WORKING_PRINCIPLES.map((p, idx) => (
              <ScrollMaskCard key={idx} index={idx} className="border-t border-black/[0.08] pt-6">
                <h3 className="text-xl sm:text-2xl font-display font-medium text-[#1d1d1f] mb-3">{p.title}</h3>
                <ScrollMaskText
                  text={p.desc}
                  as="p"
                  dimOpacity={0.25}
                  className="text-[15px] sm:text-[16px] text-[#1d1d1f] leading-relaxed font-normal"
                />
              </ScrollMaskCard>
            ))}
          </div>
        </section>

        {/* ── 5. TEAM DIRECTORY (Scroll Mask Reveals + Swipeable) ───────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-12 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                LEADERSHIP &amp; ENGINEERING
              </span>
              <TextMaskReveal
                text="Team"
                as="h2"
                once={false}
                className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight"
              />
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <p className="text-[13px] sm:text-[14px] text-[#6e6e73] max-w-sm font-normal">
                Engineers, designers, and systems architects based out of Bengaluru.
              </p>
              {/* Swipe Arrow Controls visible on mobile and tablet */}
              <div className="flex lg:hidden items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous team member"
                  className={`p-2 rounded-full border transition-colors cursor-pointer ${
                    canScrollLeft
                      ? "border-black/20 text-[#1d1d1f] hover:bg-black/[0.05] active:scale-95"
                      : "border-black/[0.08] text-[#86868b] opacity-40 cursor-not-allowed"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next team member"
                  className={`p-2 rounded-full border transition-colors cursor-pointer ${
                    canScrollRight
                      ? "border-black/20 text-[#1d1d1f] hover:bg-black/[0.05] active:scale-95"
                      : "border-black/[0.08] text-[#86868b] opacity-40 cursor-not-allowed"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Swipe Container on Mobile & Tablet / Grid on Desktop */}
          <div
            ref={scrollRef}
            className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar gap-5 sm:gap-6 lg:gap-8 pb-4 lg:pb-0"
          >
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollMaskCard
                key={idx}
                index={idx}
                className="w-[82vw] max-w-[310px] sm:w-[320px] md:w-[340px] shrink-0 snap-start flex-none lg:w-auto lg:shrink lg:snap-align-none border-t border-black/[0.08] pt-6"
              >
                <ScrollMaskImage className="aspect-[4/3] rounded-xl overflow-hidden bg-[#e5e5ea] mb-4 border border-black/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </ScrollMaskImage>
                <h3 className="text-lg font-display font-medium text-[#1d1d1f]">{member.name}</h3>
                <p className="text-[12px] font-mono text-[#6e6e73] uppercase mb-2 font-medium">{member.role}</p>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed line-clamp-3 font-normal">{member.bio}</p>
              </ScrollMaskCard>
            ))}
          </div>

          {/* Swipe Pagination Dots on Mobile & Tablet */}
          <div className="flex lg:hidden justify-center items-center gap-2 mt-3">
            {TEAM_MEMBERS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToMember(idx)}
                aria-label={`Go to team member ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIdx === idx
                    ? "w-6 bg-[#1d1d1f]"
                    : "w-1.5 bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>
        </section>

        {/* ── 6. CLOSING STORYTELLING CTA ──────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-20 sm:pt-32">
          <div className="border-t border-black/[0.08] pt-14 sm:pt-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <TextMaskReveal
                text="Ready to build software that solves real operational problems?"
                as="h2"
                once={false}
                className="text-2xl sm:text-4xl lg:text-[44px] font-display font-medium tracking-tight text-[#1d1d1f] leading-tight mb-4"
              />
              <p className="text-[15px] sm:text-[17px] text-[#6e6e73] font-normal leading-relaxed">
                Reach out directly to our engineering and design leads.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1d1d1f] text-white hover:bg-black text-[14px] font-medium transition-all shadow-xs group"
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
