"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";
import VideoLayer from "@/components/cinematic/VideoLayer";
import CTASection from "@/components/cinematic/CTASection";
import { JOBS_DATA } from "@/data/siteData";

/* ─── Culture gallery ─────────────────────────────────────────────────── */
const GALLERY = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
];

/* ─── Culture pillars: hover plays the matching video ─────────────────── */
const CULTURE = [
  { word: "WORK", video: "/videos/startone.mp4" },
  { word: "LEARN", video: "/videos/validsoft.mp4" },
  { word: "CREATE", video: "/videos/legalx.mp4" },
  { word: "GROW", video: "/videos/zobay.mp4" },
];

export default function CareersPage() {
  const [activeCulture, setActiveCulture] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <VideoLayer src="/videos/socan.mp4" overlay="scrim-center" />
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20">
          <Reveal delay={0.1}>
            <div className="eyebrow mb-8">Bengaluru · Hybrid · Remote-friendly</div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="display-xl text-[12vw] sm:text-[8vw] lg:text-[6.5vw] leading-none">
              BUILD YOUR
              <br />
              <span className="text-outline">FUTURE</span>{" "}
              <span className="text-[#b7ff4a]">WITH US.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="mt-8 text-sm sm:text-base text-white/50 tracking-wide max-w-lg">
              Engineers, designers, and problem solvers — building what&apos;s next.
            </p>
          </Reveal>
          <Reveal delay={0.65}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="#open-positions" className="btn-pill btn-accent-c">
                View Open Roles
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="btn-pill btn-ghost">
                Meet The Team
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/40">
          <svg width="18" height="30" viewBox="0 0 18 30" fill="none">
            <rect x="1" y="1" width="16" height="28" rx="8" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="9" r="2.5" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ── LIFE AT COMPANY (photo gallery) ──────────────────────────── */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
              <div>
                <div className="eyebrow mb-4 text-[#b7ff4a]/80">Life At FortuneTech</div>
                <h2 className="display-xl text-[10vw] sm:text-[6vw] lg:text-[4vw] leading-none">
                  MORE THAN<br />
                  <span className="text-outline">A WORKPLACE.</span>
                </h2>
              </div>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Small teams. Big ownership. Zero bureaucracy.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((photo, i) => (
              <Reveal key={photo} delay={i * 0.08} y={24}>
                <div
                  className={`group relative overflow-hidden rounded-2xl ${
                    i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] lg:mt-10"
                  }`}
                >
                  <img
                    src={photo}
                    alt={`FortuneTech culture ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURE (WORK / LEARN / CREATE / GROW) ───────────────────── */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {CULTURE.map((c, i) => (
            <video
              key={c.word}
              src={c.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className={`video-layer transition-opacity duration-700 ${
                activeCulture === i ? "opacity-30" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-[#050505]/50" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <Reveal>
            <div className="eyebrow mb-16 text-[#b7ff4a]/80">The Culture</div>
          </Reveal>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {CULTURE.map((c, i) => (
              <Reveal key={c.word} delay={i * 0.05} y={24}>
                <div
                  className="reveal-row group cursor-default py-10 lg:py-14"
                  onMouseEnter={() => setActiveCulture(i)}
                  onMouseLeave={() => setActiveCulture(null)}
                >
                  <span className="display-xl text-[16vw] sm:text-[10vw] lg:text-[7vw] leading-none text-white/30 transition-colors duration-500 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_rgba(242,242,236,0.9)]">
                    {c.word}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ───────────────────────────────────────────── */}
      <section id="open-positions" className="relative py-32 lg:py-44">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
              <div>
                <div className="eyebrow mb-4 text-[#b7ff4a]/80">Open Positions</div>
                <h2 className="display-xl text-[10vw] sm:text-[6vw] lg:text-[4vw] leading-none">
                  JOIN THE<br />
                  <span className="text-[#b7ff4a]">TEAM.</span>
                </h2>
              </div>
              <span className="hidden lg:block text-white/20 font-mono text-xs uppercase tracking-widest">
                {JOBS_DATA.length} Open Roles
              </span>
            </div>
          </Reveal>

          <div className="border-t border-white/10">
            {JOBS_DATA.map((job, i) => (
              <Reveal key={job.slug} delay={i * 0.05} y={24}>
                <Link
                  href={`/careers/${job.slug}`}
                  className="reveal-row group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 lg:py-10"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-[#b7ff4a] text-xl sm:text-2xl font-mono font-normal tabular-nums shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="display-lg text-3xl sm:text-5xl lg:text-6xl text-white/35 transition-colors duration-500 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_rgba(242,242,236,0.9)]">
                        {job.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/40">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location.split("(")[0].trim()}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {job.type} · {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center gap-4 shrink-0">
                    <span className="hidden lg:block text-sm font-mono text-white/0 group-hover:text-[#b7ff4a]/80 transition-colors duration-500 uppercase tracking-wider">
                      {job.department}
                    </span>
                    <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-[#b7ff4a] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERKS STRIP ──────────────────────────────────────────────── */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <div className="flex flex-wrap gap-3">
            {[
              "Equity Options",
              "Remote / Hybrid",
              "$2,000 Learning Stipend",
              "Full Health Cover",
              "Top-tier Hardware",
              "Annual Offsites",
            ].map((perk, i) => (
              <Reveal key={perk} delay={i * 0.04} y={16}>
                <span className="px-5 py-2.5 rounded-full border border-white/15 text-white/60 text-xs uppercase tracking-widest hover:border-[#b7ff4a]/50 hover:text-[#b7ff4a] transition-colors duration-300">
                  {perk}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTASection
        title="Come Build With Us."
        actionLabel="See Open Roles"
        href="#open-positions"
        video="/videos/baseone.mp4"
      />

      <Footer />
    </main>
  );
}
