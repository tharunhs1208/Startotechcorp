"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";
import VideoLayer from "@/components/cinematic/VideoLayer";
import CTASection from "@/components/cinematic/CTASection";
import { SERVICES_DATA } from "@/data/siteData";

const videoMap: Record<string, string> = {
  "web-development": "/videos/startone.mp4",
  "ui-ux-design": "/videos/validsoft.mp4",
  "mobile-development": "/videos/socan.mp4",
  "ai-machine-learning": "/videos/zobay.mp4",
  "cloud-solutions": "/videos/baseone.mp4",
  "digital-strategy": "/videos/legalx.mp4",
};

function ServiceProcess() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".process-card");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
      cards.forEach((card, i) => {
        const pos = i * 2.2; // 1 in + 0.4 hold + 0.8 out per step
        tl.fromTo(
          card,
          { opacity: 0, y: 90, scale: 1.04 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          pos
        );
        if (i < cards.length - 1) {
          tl.to(card, { opacity: 0, y: -90, scale: 0.96, duration: 0.8 }, pos + 1.4);
        }
        tl.call(() => setActive(i), [], pos);
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      title: "DISCOVER",
      tagline: "Scope & Strategy",
      desc: "We dig into your business goals, users, and constraints through stakeholder interviews and a technical feasibility audit — so we build the right thing before we build the thing right.",
      points: ["Stakeholder Interviews", "Requirements Matrix", "Feasibility Audit"],
    },
    {
      title: "DESIGN",
      tagline: "UI/UX & Tokens",
      desc: "Figma design systems, interactive clickable prototypes, and usability testing funnels turn the architecture into an experience your users will actually enjoy.",
      points: ["Design Tokens", "High-Fi Prototypes", "WCAG 2.1 Auditing"],
    },
    {
      title: "DEVELOP",
      tagline: "Agile Development",
      desc: "Agile two-week sprints ship clean, modular TypeScript code with automated CI/CD pipelines — you see working software from the first sprint onward.",
      points: ["Next.js & Cloud APIs", "Automated CI/CD", "Two-Week Sprints"],
    },
    {
      title: "TEST",
      tagline: "QA & Hardening",
      desc: "Rigorous QA, load testing, and penetration security audits make sure the product is fast, stable, and safe before a single user touches it.",
      points: ["Security Audits", "Device Farm Testing", "Core Web Vitals"],
    },
    {
      title: "LAUNCH",
      tagline: "Zero-Downtime Live",
      desc: "Zero-downtime production cutover with edge CDN telemetry and 24/7 SLA support — going live is a non-event, not a nail-biter.",
      points: ["Global CDN Cutover", "Telemetry Monitoring", "24/7 Enterprise SLA"],
    },
  ];

  const stepImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-[#050505]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b7ff4a]/40 to-transparent" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20">
        <span className="eyebrow text-[#b7ff4a]/70">Our Process</span>
      </div>

      <div className="relative z-10 mx-auto grid h-full w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-6 pt-20 pb-14 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 lg:px-20">
        {/* LEFT — step names + active tagline, highlighted as you scroll */}
        <div className="hidden flex-col justify-center gap-5 lg:flex xl:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-baseline gap-4">
              <span
                className={`font-mono text-sm tabular-nums transition-colors duration-500 ${
                  active === i ? "text-[#b7ff4a]" : "text-white/25"
                }`}
              >
                0{i + 1}
              </span>
              <div>
                <span
                  className={`display-lg block text-3xl font-black uppercase leading-none tracking-tight transition-all duration-500 xl:text-4xl ${
                    active === i ? "translate-x-2 text-[#f2f2ec]" : "text-white/20"
                  }`}
                >
                  {step.title}
                </span>
                <span
                  className={`mt-1 block text-xs font-mono uppercase tracking-widest transition-all duration-500 ${
                    active === i ? "translate-x-2 text-[#b7ff4a]/80 opacity-100" : "opacity-0"
                  }`}
                >
                  {step.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — cards come in as you scroll */}
        <div className="relative h-[64vh] w-full lg:h-[74vh]">
          {steps.map((step, i) => (
            <div key={step.title} className="process-card absolute inset-0 opacity-0">
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={stepImages[i]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#050505]/60" />
                <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10 xl:p-12">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#b7ff4a]/80">
                      0{i + 1} / 05
                    </span>
                    <span className="hidden text-right font-mono text-xs uppercase tracking-[0.25em] text-white/50 sm:block">
                      {step.tagline}
                    </span>
                  </div>
                  <div>
                    <h2 className="display-xl text-4xl font-black uppercase leading-none tracking-tight text-[#f2f2ec] sm:text-5xl xl:text-6xl">
                      {step.title}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 xl:text-base">
                      {step.desc}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {step.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/70 backdrop-blur-sm"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile step indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 lg:hidden">
        <span className="font-mono text-xs uppercase tracking-widest text-[#b7ff4a]/80">
          {steps[active].title} — 0{active + 1}/05 · {steps[active].tagline}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

export default function ServicesPage() {
  const [active, setActive] = useState(0);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <VideoLayer src="/videos/zobay.mp4" overlay="scrim-center" />
        <div className="relative z-10 w-full max-w-[1600px] px-6 sm:px-10 lg:px-20 pt-28 pb-24">
          <Reveal delay={0.1}>
            <div className="eyebrow mb-6 text-[#b7ff4a]/80">Our Capabilities</div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="display-xl text-[14vw] sm:text-[9vw] lg:text-[7vw] font-black uppercase leading-none tracking-tight">
              WE TURN IDEAS<br />
              <span className="text-outline">INTO DIGITAL</span><br />
              PRODUCTS.
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-10 max-w-xl text-base sm:text-lg text-[#f2f2ec]/60 leading-relaxed">
              End-to-end engineering, design, and strategy — from first pixel to production and beyond.
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-pill btn-accent-c">Start a Project</Link>
              <Link href="#services-list" className="btn-pill btn-ghost">Explore Services</Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#f2f2ec]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#f2f2ec] to-transparent" />
        </div>
      </section>

      {/* ── INTERACTIVE SERVICES LIST ──────────────────────────────── */}
      <section id="services-list" className="relative overflow-hidden bg-[#050505] py-40">
        <div className="absolute inset-0 pointer-events-none">
          {SERVICES_DATA.map((s, i) => {
            const src = videoMap[s.slug] ?? "/videos/startone.mp4";
            return (
              <video key={s.slug} src={src} autoPlay muted loop playsInline
                className={`video-layer transition-opacity duration-700 ${i === active ? "opacity-40" : "opacity-0"}`}
              />
            );
          })}
          <div className="absolute inset-0 bg-[#050505]/55" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <Reveal>
            <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-8">
              <div>
                <div className="eyebrow mb-4 text-[#b7ff4a]/80">What We Do</div>
                <p className="text-[#f2f2ec]/40 text-sm max-w-sm leading-relaxed">
                  Hover each service to preview the work. Click to explore in depth.
                </p>
              </div>
              <span className="hidden lg:block text-[#f2f2ec]/20 font-mono text-xs uppercase tracking-widest">
                {SERVICES_DATA.length} Specializations
              </span>
            </div>
          </Reveal>

          {SERVICES_DATA.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05} y={24}>
              <div className="reveal-row group cursor-pointer py-8 lg:py-10" onMouseEnter={() => setActive(i)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="row-title flex items-center justify-between gap-6 text-5xl sm:text-7xl lg:text-8xl text-white/35 font-black uppercase leading-none tracking-tight"
                >
                  <span className="flex items-center gap-6 sm:gap-10">
                    <span className="text-[#b7ff4a] text-xl sm:text-2xl font-mono font-normal tabular-nums shrink-0">0{i + 1}</span>
                    <span>{service.title}</span>
                  </span>
                  <span className="flex items-center gap-4 shrink-0">
                    <span className="hidden lg:block text-sm font-normal font-mono text-transparent group-hover:text-[#b7ff4a]/80 transition-colors duration-500 max-w-[200px] text-right leading-snug tracking-normal normal-case">
                      {service.tagline}
                    </span>
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 text-[#b7ff4a] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <ServiceProcess />

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTASection
        title="What Are You Building?"
        actionLabel="Start a Project"
        href="/contact"
        video="/videos/hero-pinterest.mp4"
      />

      <Footer />
    </main>
  );
}
