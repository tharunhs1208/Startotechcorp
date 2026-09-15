"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";
import VideoLayer from "@/components/cinematic/VideoLayer";
import { PROJECTS_DATA } from "@/data/siteData";
import { ScrollTrigger } from "@/lib/gsap";

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filters = ["All", "Web", "Mobile", "AI", "Cloud", "UI/UX"];

  const filtered =
    active === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === active);

  useEffect(() => {
    // Refresh ScrollTrigger so layout dimensions and footer position snap accurately to card count
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [active, filtered.length]);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <VideoLayer src="/videos/baseone.mp4" overlay="scrim-center" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-20">
          <Reveal delay={0.1}>
            <div className="eyebrow mb-6 sm:mb-8">Selected Work</div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="display-xl text-4xl sm:text-6xl md:text-7xl lg:text-[7.5vw] leading-none break-words">
              WORK THAT
              <br />
              <span className="text-outline">SPEAKS FOR</span>
              <br />
              ITSELF.
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-6 sm:mt-8 text-white/40 text-xs sm:text-sm tracking-widest uppercase">
              {PROJECTS_DATA.length} Case Studies · Real Results · Global Clients
            </p>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────────────── */}
      <section className="border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center py-6 sm:py-8 md:py-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
                  active === f
                    ? "bg-[#b7ff4a] text-[#050505] border-[#b7ff4a]"
                    : "border-white/20 text-white/50 hover:border-white/60 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT SHOWCASE ─────────────────────────────────────────── */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-white/30 text-xl tracking-widest uppercase">
            No projects in this category yet.
          </div>
        ) : (
          filtered.map((proj, i) => (
            <Reveal key={`${active}-${proj.slug}`} y={48}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-white/10 py-12 lg:py-16">
                {/* ── Media side ── */}
                <div
                  className={`relative aspect-video lg:aspect-[4/3] overflow-hidden ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {proj.video ? (
                    <VideoLayer src={proj.video} overlay="scrim-bottom" />
                  ) : (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Category badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#050505]/70 backdrop-blur border border-white/15 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      {proj.category}
                    </span>
                  </div>

                  {/* Metrics strip */}
                  {proj.results && proj.results.length > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 z-10 flex divide-x divide-white/10 bg-[#050505]/70 backdrop-blur-sm">
                      {proj.results.slice(0, 3).map((r) => (
                        <div
                          key={r.label}
                          className="flex-1 text-center py-3 sm:py-4 px-1.5 sm:px-2"
                        >
                          <div className="text-[#b7ff4a] text-sm sm:text-lg font-black leading-none">
                            {r.metric}
                          </div>
                          <div className="text-white/40 text-[9px] sm:text-[10px] mt-1 uppercase tracking-wider">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ── Text side ── */}
                <div
                  className={`flex flex-col justify-center px-4 sm:px-8 lg:px-14 py-8 lg:py-10 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="eyebrow mb-3 sm:mb-4">
                    Project {String(i + 1).padStart(2, "0")}
                  </div>

                  <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl leading-none mb-4 break-words">
                    {proj.title}
                  </h2>

                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-md">
                    {proj.tagline}
                  </p>

                  {/* Industry label */}
                  <p className="text-[#b7ff4a] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] mb-4 sm:mb-6">
                    {proj.industry}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
                    {proj.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 sm:px-3 py-1 rounded-full border border-white/15 text-[10px] sm:text-[11px] text-white/50 uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#b7ff4a] hover:text-white transition-colors w-fit"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))
        )}
      </section>

      {/* ── FINAL CTA BANNER ─────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-16 md:py-20 text-center px-4 sm:px-6">
        <Reveal>
          <p className="display-xl text-3xl sm:text-5xl lg:text-6xl leading-none text-white/20 break-words">
            YOUR PROJECT
          </p>
          <p className="display-xl text-3xl sm:text-5xl lg:text-6xl leading-none break-words">
            COULD BE HERE.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-white/40 text-xs sm:text-sm mt-6 mb-10 max-w-md mx-auto leading-relaxed">
            Ready to build something that actually moves the needle? Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 btn-pill btn-accent-c"
          >
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
