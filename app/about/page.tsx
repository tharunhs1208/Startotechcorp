"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";
import VideoLayer from "@/components/cinematic/VideoLayer";
import CTASection from "@/components/cinematic/CTASection";

const TIMELINE = [
  { year: "2021", title: "Founded", desc: "A small team with big ambitions in Bengaluru" },
  { year: "2022", title: "First Products", desc: "Launched our first digital platforms" },
  { year: "2023", title: "Growing Team", desc: "Expanded to 15+ talented builders" },
  { year: "2024", title: "AI & Automation", desc: "Integrated intelligent systems" },
  { year: "2025", title: "Global Expansion", desc: "Serving clients worldwide" },
];

const TEAM = [
  { name: "Vikram Sethi", role: "CEO & Founder", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" },
  { name: "Aanya Sharma", role: "Head of Design", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop" },
  { name: "Rahul Verma", role: "Systems Architect", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
  { name: "Tharun Kumar", role: "Lead Engineer", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
];

/* ── PHILOSOPHY SECTION ───────────────────────────────────────────── */
const PHILOSOPHY_LINES = [
  { phrase: "Think bigger.", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1600&auto=format&fit=crop" },
  { phrase: "Build smarter.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop" },
  { phrase: "Move faster.", image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1600&auto=format&fit=crop" },
];

function Philosophy() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lines = el.querySelectorAll<HTMLElement>(".phil-line");
    const bgs = el.querySelectorAll<HTMLElement>(".phil-bg");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
      lines.forEach((line, i) => {
        const bg = bgs[i];
        tl.fromTo(line, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1 });
        if (bg) {
          tl.fromTo(bg, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.2 }, "<");
        }
        if (i < lines.length - 1) {
          tl.to(line, { opacity: 0, scale: 0.9, duration: 0.8 }, "+=0.5");
          if (bg) {
            tl.to(bg, { opacity: 0, duration: 0.8 }, "<");
          }
        }
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-[#050505]">
      {/* Base ambient image — visible behind the heading & between line transitions */}
      <img
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Line background photos */}
      <div className="absolute inset-0">
        {PHILOSOPHY_LINES.map((line) => (
          <img
            key={line.phrase}
            src={line.image}
            alt=""
            className="phil-bg absolute inset-0 h-full w-full object-cover opacity-0"
          />
        ))}
        <div className="absolute inset-0 bg-[#050505]/65" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        {PHILOSOPHY_LINES.map((line) => (
          <div key={line.phrase} className="phil-line absolute inset-0 flex items-center justify-center opacity-0">
            <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl text-center px-4 sm:px-6 break-words">
              {line.phrase}
            </h2>
          </div>
        ))}
      </div>
      <div className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 z-20">
        <span className="eyebrow text-white/40">Our Philosophy</span>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <VideoLayer src="/videos/validsoft.mp4" overlay="scrim-center" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-20">
          <Reveal delay={0.1}>
            <div className="eyebrow mb-6 sm:mb-8">Builders. Designers. Problem Solvers.</div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="display-xl text-4xl sm:text-6xl md:text-7xl lg:text-[6.5vw] leading-none break-words">
              WE ARE<br />
              <span className="text-outline">BUILDERS,</span><br />
              DESIGNERS &amp;<br />
              <span className="text-[#b7ff4a]">PROBLEM SOLVERS.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="mt-6 sm:mt-8 text-xs sm:text-base text-white/50 tracking-wide max-w-lg">
              A team turning ambitious ideas into products people love.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/40">
          <svg width="18" height="30" viewBox="0 0 18 30" fill="none">
            <rect x="1" y="1" width="16" height="28" rx="8" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="9" r="2.5" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ── OUR STORY (Video + Timeline) ─────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:py-44">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 px-4 sm:px-10 lg:px-20">
          {/* Video */}
          <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl">
            <VideoLayer src="/videos/socan.mp4" overlay="scrim-bottom" />
          </div>

          {/* Timeline */}
          <div>
            <Reveal>
              <div className="eyebrow mb-4">Our Story</div>
              <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl mb-8 sm:mb-12 break-words">
                FROM IDEA<br />TO <span className="text-[#b7ff4a]">REALITY.</span>
              </h2>
            </Reveal>
            <div className="space-y-6 sm:space-y-8">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div className="flex items-start gap-4 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8">
                    <span className="text-[#b7ff4a] font-mono text-xl sm:text-2xl font-black shrink-0 w-14 sm:w-16">{item.year}</span>
                    <div>
                      <h4 className="display-lg text-lg sm:text-xl text-[#f2f2ec] mb-1">{item.title}</h4>
                      <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY (Scroll-pinned) ────────────────────────────────── */}
      <Philosophy />

      {/* ── TEAM ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-32 lg:py-44">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-10 lg:px-20">
          <Reveal>
            <div className="eyebrow mb-4">The Team</div>
            <h2 className="display-xl text-3xl sm:text-5xl lg:text-6xl mb-10 sm:mb-16 break-words">
              PEOPLE WHO<br /><span className="text-outline">BUILD.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                  {/* Name slide up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="eyebrow text-[#b7ff4a] mb-1.5 sm:mb-2">{member.role}</div>
                    <h3 className="display-lg text-lg sm:text-xl text-[#f2f2ec]">{member.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURE VIDEO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <VideoLayer src="/videos/baseone.mp4" overlay="scrim" />
        <div className="relative z-10 text-center px-4 sm:px-6">
          <Reveal>
            <h2 className="display-xl text-4xl sm:text-7xl lg:text-[6vw] leading-none break-words">
              WE BUILD<br /><span className="text-[#b7ff4a]">DIFFERENT.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTASection
        title="Let's Build Something Different."
        actionLabel="Start a Project"
        href="/contact"
        video="/videos/hero-pinterest.mp4"
      />

      <Footer />
    </main>
  );
}
