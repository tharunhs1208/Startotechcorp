"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { JOBS_DATA } from "@/data/siteData";

const WHY_JOIN = [
  { num: "01", title: "Build Real Products", desc: "Ship software used by businesses worldwide daily, not temporary throwaway decks." },
  { num: "02", title: "Modern Tech Stack", desc: "Next.js, TypeScript, LLMs, Vector DBs, WebRTC, Edge CDNs, and clean microservices." },
  { num: "03", title: "Learn Every Day", desc: "Work closely with senior engineers, designers, and architects in a high-autonomy culture." },
  { num: "04", title: "Solve Hard Problems", desc: "Tackle sub-millisecond audio streams, multi-tenant SaaS scaling, and autonomous AI agents." },
];

const LIFE_PHOTOS = [
  {
    title: "Design Sprints",
    category: "Design",
    desc: "Rapid iterative prototyping, token architecture, and high-fidelity interaction design in Figma.",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Engineering Sync",
    category: "Engineering",
    desc: "Collaborative pair programming, sub-280ms neural audio benchmarks, and distributed microservices.",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Studio Workspace",
    category: "Workplace",
    desc: "Ergonomic, natural-light studio located in Shivajinagar, Bengaluru built for deep creative focus.",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Hackathons & R&D",
    category: "Innovation",
    desc: "Quarterly hackathons exploring generative AI models, WebRTC protocols, and edge compute algorithms.",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CareersPage() {
  const lifeSliderRef = useRef<HTMLDivElement>(null);
  const [lifeIndex, setLifeIndex] = useState(0);

  const jobSliderRef = useRef<HTMLDivElement>(null);
  const [jobIndex, setJobIndex] = useState(0);

  const handleLifeScroll = () => {
    if (!lifeSliderRef.current) return;
    const { scrollLeft, clientWidth } = lifeSliderRef.current;
    if (clientWidth <= 0) return;
    const cardWidth = lifeSliderRef.current.firstElementChild
      ? (lifeSliderRef.current.firstElementChild as HTMLElement).offsetWidth + 16
      : clientWidth * 0.8;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setLifeIndex(Math.min(LIFE_PHOTOS.length - 1, Math.max(0, newIndex)));
  };

  const scrollToLifePhoto = (index: number) => {
    if (!lifeSliderRef.current) return;
    const card = lifeSliderRef.current.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setLifeIndex(index);
    }
  };

  const handleJobScroll = () => {
    if (!jobSliderRef.current) return;
    const { scrollLeft, clientWidth } = jobSliderRef.current;
    if (clientWidth <= 0) return;
    const cardWidth = jobSliderRef.current.firstElementChild
      ? (jobSliderRef.current.firstElementChild as HTMLElement).offsetWidth + 16
      : clientWidth * 0.84;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setJobIndex(Math.min(JOBS_DATA.length - 1, Math.max(0, newIndex)));
  };

  const scrollToJobCard = (index: number) => {
    if (!jobSliderRef.current) return;
    const card = jobSliderRef.current.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setJobIndex(index);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 w-full max-w-full overflow-x-hidden pb-10 sm:pb-16">
      <Navbar />

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container text-center">
          <ScrollReveal delay={0.05} y={16}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] text-xs font-medium text-[#0070f3] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join Our Team</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} y={20}>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 max-w-3xl mx-auto">
              Build the future of digital products with us.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25} y={20}>
            <p className="mt-6 text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto font-light leading-relaxed">
              We are looking for exceptional engineers, designers, and problem solvers to build next-generation products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY STRATOTECHCORP ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                Culture
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                Why StratoTechCorp?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_JOIN.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 0.08} y={24}>
                <div className="p-8 rounded-2xl border border-black/[0.08] bg-white shadow-xs flex flex-col justify-between min-h-[220px] h-full">
                  <div>
                    <span className="font-mono text-sm font-bold text-[#0070f3]">
                      {item.num}
                    </span>
                    <h3 className="font-display text-lg font-bold text-zinc-900 mt-4 mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFE AT STRATOTECHCORP ──────────────────────────────────── */}
      <section className="py-12 sm:py-24 border-t border-black/[0.08] bg-[#f8fafc] overflow-hidden">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto mb-8 sm:mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                Studio
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                Life at StratoTechCorp
              </h2>
            </div>
          </ScrollReveal>

          {/* ── MOBILE HORIZONTAL SWIPE TRACK (< sm) ── */}
          <div className="block sm:hidden -mx-4">
            <div
              ref={lifeSliderRef}
              onScroll={handleLifeScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 px-4 pb-4 touch-pan-x"
            >
              {LIFE_PHOTOS.map((photo, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 w-[82vw] max-w-[310px] rounded-2xl border border-black/[0.08] bg-white overflow-hidden shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0070f3]">
                        {photo.category}
                      </span>

                      <h3 className="font-display text-lg font-bold text-zinc-900 mt-1.5 tracking-tight">
                        {photo.title}
                      </h3>

                      <p className="text-xs text-zinc-600 font-light mt-2 leading-relaxed line-clamp-3">
                        {photo.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-black/[0.05]">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-[#0070f3] transition-colors"
                    >
                      <span>Explore Studio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot Pagination for Mobile */}
            <div className="flex items-center justify-center gap-1.5 mt-2 px-4">
              {LIFE_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToLifePhoto(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    lifeIndex === i
                      ? "w-6 bg-[#0070f3]"
                      : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ── DESKTOP / TABLET GRID (>= sm) ── */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIFE_PHOTOS.map((photo, i) => (
              <ScrollReveal key={i} delay={i * 0.08} y={24}>
                <div className="rounded-2xl border border-black/[0.08] bg-white overflow-hidden hover:border-black/20 hover:shadow-sm transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-5 sm:p-6">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0070f3]">
                        {photo.category}
                      </span>

                      <h3 className="font-display text-lg font-bold text-zinc-900 mt-1.5 tracking-tight group-hover:text-[#0070f3] transition-colors">
                        {photo.title}
                      </h3>

                      <p className="text-xs text-zinc-600 font-light mt-2 leading-relaxed">
                        {photo.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-black/[0.05]">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 group-hover:text-[#0070f3] transition-colors"
                    >
                      <span>Explore Studio</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ──────────────────────────────────────────── */}
      <section className="py-12 sm:py-24 border-t border-black/[0.08] overflow-hidden">
        <div className="page-container">
          <ScrollReveal y={20}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-16 pb-4 sm:pb-6 border-b border-black/[0.08] gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-semibold">
                  Openings
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                  Available Positions
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-500 font-medium hidden sm:inline">
                {JOBS_DATA.length} Open Roles
              </span>
            </div>
          </ScrollReveal>

          {/* Mobile Indicator Header */}
          <div className="flex sm:hidden items-center justify-between mb-4 px-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-black/[0.08] bg-white text-[11px] font-mono font-semibold text-[#0070f3] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070f3] animate-pulse" />
              <span>Role 0{jobIndex + 1} of 0{JOBS_DATA.length}</span>
            </div>
            <span className="text-[11px] text-zinc-400 font-mono">Swipe →</span>
          </div>

          {/* ── MOBILE HORIZONTAL SWIPE TRACK (< sm) ── */}
          <div className="block sm:hidden -mx-4">
            <div
              ref={jobSliderRef}
              onScroll={handleJobScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 px-4 pb-4 touch-pan-x"
            >
              {JOBS_DATA.map((job) => (
                <div
                  key={job.slug}
                  className="snap-center shrink-0 w-[84vw] max-w-[320px] rounded-2xl border border-black/[0.08] bg-white p-5 shadow-md shadow-black/5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="bg-[#0070f3]/10 text-[#0070f3] text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="bg-zinc-100 text-zinc-600 text-[11px] font-mono px-2 py-0.5 rounded-full">
                        {job.experience}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-zinc-900 leading-snug">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-500">
                      <span>{job.location}</span>
                      <span>·</span>
                      <span>{job.type}</span>
                    </div>

                    <p className="text-xs text-zinc-600 font-light leading-relaxed line-clamp-3">
                      {job.about}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-black/[0.06]">
                    <Link
                      href={`/careers/${job.slug}`}
                      className="btn-pill btn-accent-c w-full justify-center !py-2.5 text-xs font-semibold inline-flex items-center gap-2 shadow-xs active:scale-95 touch-manipulation"
                    >
                      <span>View Role</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots for Mobile */}
            <div className="flex items-center justify-center gap-1.5 mt-2 px-4">
              {JOBS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToJobCard(idx)}
                  aria-label={`Go to role ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === jobIndex ? "w-6 bg-[#0070f3]" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ── DESKTOP / TABLET ROW LIST (>= sm) ── */}
          <div className="hidden sm:block divide-y divide-black/[0.08]">
            {JOBS_DATA.map((job, idx) => (
              <ScrollReveal key={job.slug} delay={idx * 0.06} y={20}>
                <div className="group py-6 sm:py-8 transition-colors last:pb-0">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 font-mono text-xs text-zinc-500">
                        <span>{job.department}</span>
                        <span>·</span>
                        <span>{job.location}</span>
                        <span>·</span>
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0070f3]">
                      <span>View Role</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL APPLICATION CTA ─────────────────────────────────── */}
      <section className="py-10 sm:py-16 border-t border-black/[0.08] bg-[#f8fafc]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-8 text-center">
          <ScrollReveal y={24}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Don&apos;t see your role?
            </h2>
            <p className="mt-4 text-sm text-zinc-600 font-light">
              We are always interested in meeting exceptional people. Send us your portfolio or GitHub profile.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] hover:bg-black text-white px-8 py-3.5 text-xs sm:text-sm font-medium transition-all shadow-xs active:scale-95"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
