"use client";

import React, { use, useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";
import VideoLayer from "@/components/cinematic/VideoLayer";
import CTASection from "@/components/cinematic/CTASection";
import Marquee from "@/components/cinematic/Marquee";
import { SERVICES_DATA, PROJECTS_DATA } from "@/data/siteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = PROJECTS_DATA.slice(0, 2);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ─── GSAP: features list stagger ─────────────────────────────────────── */
  const featuresRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = featuresRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".feat-row"),
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%", toggleActions: "play none none none" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  /* ─── GSAP: benefits metrics counter reveal ────────────────────────────── */
  const benefitsRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = benefitsRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".benefit-card"),
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%", toggleActions: "play none none none" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO — full-screen video
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <VideoLayer
          src={service.video || "/videos/startone.mp4"}
          overlay="scrim-bottom"
        />
        <div className="relative z-10 w-full max-w-[1600px] px-4 sm:px-10 lg:px-20 pb-16 sm:pb-24 mx-auto">
          <Reveal delay={0.1}>
            <div className="eyebrow mb-4 text-[#b7ff4a]">
              Service — {service.title}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="display-xl text-4xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-[0.92] font-black uppercase tracking-tight break-words">
              {service.title.toUpperCase()}
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-4 sm:mt-6 text-white/60 max-w-xl text-xs sm:text-sm leading-relaxed">
              {service.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-pill btn-accent-c">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/projects" className="btn-pill btn-ghost">
                View Work
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 right-6 sm:right-10 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white rotate-90 origin-center translate-x-6">
            Scroll
          </span>
          <div className="h-8 sm:h-12 w-px bg-white/40" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. CHALLENGE & SOLUTION — dark side-by-side cards
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Problem */}
            <Reveal>
              <div className="h-full p-6 sm:p-10 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col">
                <div className="eyebrow mb-4 text-red-400">The Problem</div>
                <h3 className="display-lg text-xl sm:text-3xl mb-4 sm:mb-6 font-bold">
                  What Holds Companies Back
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed flex-1">
                  {service.challenge}
                </p>
                {/* decorative line accent */}
                <div className="mt-6 sm:mt-8 h-px w-16 bg-red-400/40" />
              </div>
            </Reveal>

            {/* Solution */}
            <Reveal delay={0.15}>
              <div className="h-full p-6 sm:p-10 rounded-2xl border border-[#b7ff4a]/20 bg-[#b7ff4a]/[0.03] flex flex-col">
                <div className="eyebrow mb-4 text-[#b7ff4a]">Our Solution</div>
                <h3 className="display-lg text-xl sm:text-3xl mb-4 sm:mb-6 font-bold">
                  How We Deliver Results
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed flex-1">
                  {service.solution}
                </p>
                <div className="mt-6 sm:mt-8 h-px w-16 bg-[#b7ff4a]/40" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. FEATURES — numbered vertical reveal rows
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-t border-white/10" ref={featuresRef}>
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <Reveal>
            <div className="eyebrow mb-4 text-white/50">What We Build</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl mb-10 sm:mb-16 font-black uppercase break-words">
              CAPABILITIES.
            </h2>
          </Reveal>

          <div className="divide-y divide-white/10">
            {service.features.map((feat, i) => (
              <div
                key={i}
                className="feat-row reveal-row py-6 sm:py-10 group cursor-default opacity-0"
              >
                <div className="flex items-start gap-4 sm:gap-8">
                  <span className="text-[#b7ff4a] font-mono text-base sm:text-lg shrink-0 mt-1 tabular-nums">
                    0{i + 1}
                  </span>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 sm:gap-4 items-start">
                    <div>
                      <h3 className="display-lg text-2xl sm:text-4xl lg:text-5xl text-white/60 group-hover:text-white transition-colors duration-300 mb-2 sm:mb-3 font-bold break-words">
                        {feat.title}
                      </h3>
                      <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-2xl">
                        {feat.desc}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-[#b7ff4a] transition-colors duration-300 mt-2 shrink-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. TECH STACK MARQUEE
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="my-4">
        <Marquee items={service.technologies} />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          5. PROCESS — vertical numbered list with connecting line
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <Reveal>
            <div className="eyebrow mb-4 text-white/50">How We Work</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl mb-10 sm:mb-16 font-black uppercase break-words">
              THE PROCESS.
            </h2>
          </Reveal>

          <div className="space-y-0">
            {service.process.map((step, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex gap-4 sm:gap-8 py-6 sm:py-10 border-t border-white/10 group">
                  {/* Step number */}
                  <span className="text-[#b7ff4a] font-mono text-base sm:text-xl shrink-0 w-8 sm:w-12 pt-1 tabular-nums">
                    {step.step}
                  </span>

                  {/* Content */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 items-start">
                    <h4 className="display-lg text-lg sm:text-2xl font-bold text-[#f2f2ec] group-hover:text-[#b7ff4a] transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. BENEFITS / RESULTS — full-width video bg with metrics
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 sm:py-32 overflow-hidden" ref={benefitsRef}>
        <VideoLayer src="/videos/legalx.mp4" overlay="scrim" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <Reveal>
            <div className="eyebrow mb-12 sm:mb-16 text-center text-white/50">
              Measurable Impact
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {service.benefits.map((b, i) => (
              <div
                key={i}
                className="benefit-card text-center opacity-0"
              >
                {/* Metric */}
                <div className="display-xl text-4xl sm:text-6xl lg:text-7xl text-[#b7ff4a] mb-2 leading-none font-black">
                  {b.metric}
                </div>
                {/* Label */}
                <div className="display-lg text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                  {b.label}
                </div>
                {/* Divider */}
                <div className="mx-auto mb-3 h-px w-12 bg-[#b7ff4a]/30" />
                {/* Description */}
                <p className="text-white/50 text-xs leading-relaxed max-w-[200px] mx-auto">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7. RELATED PROJECTS — two large dark cards
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <Reveal>
                <div className="eyebrow mb-3 text-white/50">Proof of Execution</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl font-black uppercase break-words">
                  RELATED WORK.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link
                href="/projects"
                className="btn-pill btn-ghost self-start sm:self-end"
              >
                All Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((proj, idx) => (
              <Reveal key={proj.slug} delay={idx * 0.12}>
                <Link
                  href={`/projects/${proj.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-72 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-70 group-hover:opacity-90"
                    />
                    {/* Industry badge */}
                    <div className="absolute top-4 left-4">
                      <span className="eyebrow px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-[10px] text-white/70">
                        {proj.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-8 flex items-end justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="display-lg text-lg sm:text-2xl font-bold text-[#f2f2ec] group-hover:text-[#b7ff4a] transition-colors duration-300 mb-2">
                        {proj.title}
                      </h4>
                      <p className="text-white/40 text-xs leading-relaxed line-clamp-2 max-w-sm">
                        {proj.overview}
                      </p>
                    </div>
                    <span className="shrink-0 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-white/10 group-hover:border-[#b7ff4a] group-hover:bg-[#b7ff4a] group-hover:text-black transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Results strip */}
                  <div className="px-5 sm:px-8 pb-5 sm:pb-6 flex flex-wrap gap-4">
                    {proj.results.slice(0, 3).map((r, ri) => (
                      <div key={ri} className="flex flex-col">
                        <span className="text-[#b7ff4a] font-mono text-xs sm:text-sm font-bold">
                          {r.metric}
                        </span>
                        <span className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-wider">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          8. FAQ — accordion with rotating Plus icon
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            {/* Left label */}
            <div>
              <Reveal>
                <div className="eyebrow mb-4 text-white/50">Quick Answers</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight break-words">
                  COMMON QUESTIONS.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 sm:mt-6 text-white/40 text-xs sm:text-sm leading-relaxed max-w-xs">
                  Everything you need to know about our {service.title}{" "}
                  practice.
                </p>
              </Reveal>
            </div>

            {/* Right accordion */}
            <div className="divide-y divide-white/10">
              {service.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full text-left py-6 sm:py-8 flex items-start gap-4 sm:gap-6 group"
                      aria-expanded={isOpen}
                    >
                      {/* Plus icon */}
                      <span
                        className={`shrink-0 mt-0.5 grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-[#b7ff4a] bg-[#b7ff4a] text-black rotate-45"
                            : "border-white/20 text-white/50 group-hover:border-white/50 rotate-0"
                        }`}
                        style={{ transition: "transform 0.3s ease, border-color 0.3s ease, background 0.3s ease" }}
                      >
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </span>

                      {/* Question & Answer */}
                      <div className="flex-1">
                        <h4
                          className={`text-sm sm:text-lg font-semibold transition-colors duration-300 ${
                            isOpen ? "text-[#b7ff4a]" : "text-[#f2f2ec] group-hover:text-white"
                          }`}
                        >
                          {faq.question}
                        </h4>

                        {/* Collapsible answer */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen ? "max-h-96 mt-3 sm:mt-4" : "max-h-0"
                          }`}
                        >
                          <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          9. CTA — full-screen cinematic close
          ═══════════════════════════════════════════════════════════════════ */}
      <CTASection
        title="Start Your Project."
        actionLabel="Let's Build It"
        href="/contact"
        video={service.video || "/videos/baseone.mp4"}
      />

      <Footer />
    </main>
  );
}
