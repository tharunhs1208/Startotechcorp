"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Smartphone,
  Cloud,
  Layout,
  Shield,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

/* ============================================================================
   DATA CONSTANTS
============================================================================ */
const FEATURED_PROJECTS = [
  {
    num: "01",
    title: "Zobay Voice AI",
    category: "AI & Voice",
    tagline: "Autonomous conversational phone agents with sub-280ms response latency and natural human emotion.",
    metrics: "+45% Conversion · 280ms Latency",
    href: "/projects/zobay-voice-ai",
    video: "/videos/zobay.mp4",
  },
  {
    num: "02",
    title: "MeetingX Collaboration",
    category: "Web & WebRTC",
    tagline: "Real-time ultra-low latency conferencing platform with interactive breakout canvases.",
    metrics: "120K+ Active Users · 99.99% Uptime",
    href: "/projects/meetingx-collaboration",
    video: "/videos/validsoft.mp4",
  },
  {
    num: "03",
    title: "VideoVault Streaming",
    category: "Cloud Platform",
    tagline: "High-throughput adaptive media streaming and encrypted video asset delivery pipeline.",
    metrics: "4.8x Faster Delivery · 10TB+ Streamed",
    href: "/projects/videovault-streaming",
    video: "/videos/socan.mp4",
  },
];

const SERVICES = [
  {
    num: "01",
    icon: Code2,
    title: "Product Engineering",
    slug: "web-development",
    desc: "Modern web platforms, SaaS architectures, and full-stack enterprise applications built with Next.js, React, and Node.js.",
    tech: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    num: "02",
    icon: Cpu,
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    desc: "Autonomous voice agents, custom LLM fine-tuning, retrieval systems, and predictive workflow automation.",
    tech: ["Python", "PyTorch", "OpenAI", "FastAPI"],
  },
  {
    num: "03",
    icon: Smartphone,
    title: "Mobile Development",
    slug: "mobile-apps",
    desc: "High-performance iOS and Android applications with native feel, fluid animations, and offline synchronization.",
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    num: "04",
    icon: Cloud,
    title: "Cloud & DevOps",
    slug: "cloud-solutions",
    desc: "Scalable AWS and edge infrastructure, automated CI/CD pipelines, container orchestration, and multi-region failover.",
    tech: ["AWS", "Docker", "Kubernetes", "PostgreSQL"],
  },
  {
    num: "05",
    icon: Layout,
    title: "UI/UX Design Systems",
    slug: "ui-ux-design",
    desc: "Clean, human-centered product interfaces, modular Figma design tokens, and interactive accessible prototypes.",
    tech: ["Figma", "Design Systems", "Prototyping", "Tailwind Tokens"],
  },
  {
    num: "06",
    icon: Shield,
    title: "Cybersecurity & Auth",
    slug: "cybersecurity",
    desc: "Enterprise SSO, biometric verification, penetration testing, compliance hardening, and end-to-end encryption.",
    tech: ["OAuth", "Vault", "Security", "Encryption"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover & Scope",
    desc: "We analyze your business objectives, target audience, and technical feasibility to establish an architectural roadmap.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    desc: "We build intuitive user flows, high-fidelity interactive prototypes, and unified design tokens in Figma.",
  },
  {
    step: "03",
    title: "Agile Engineering",
    desc: "Two-week sprints shipping clean, test-driven TypeScript code with automated pipelines and weekly client demos.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "Zero-downtime deployment, global edge CDN optimization, telemetry monitoring, and 24/7 ongoing SLA support.",
  },
];

const STATS = [
  { value: "8+", label: "Years of Engineering" },
  { value: "150+", label: "Projects Delivered" },
  { value: "99.8%", label: "Client Satisfaction" },
  { value: "25+", label: "Countries Served" },
];

/* ============================================================================
   PAGE COMPONENT
============================================================================ */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <Navbar />

      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0070f3]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <ScrollReveal delay={0.05} y={20}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/[0.08] bg-white text-xs font-semibold text-[#0070f3] mb-6 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Digital Product & AI Engineering Studio</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15} y={24}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.08]">
                  We build digital products that move businesses forward.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.25} y={20}>
                <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-600 max-w-xl leading-relaxed font-light">
                  StratoTechCorp designs, engineers, and scales world-class web applications, AI agents, cloud architectures, and digital experiences.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.35} y={20}>
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact"
                    className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-7 py-3.5 shadow-xs"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="btn-pill btn-ghost text-xs sm:text-sm font-semibold px-7 py-3.5 border-black/20 hover:border-black text-zinc-900"
                  >
                    <span>View Selected Work</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Video Column */}
            <div className="lg:col-span-5 w-full">
              <ScrollReveal delay={0.4} y={32}>
                <div className="relative rounded-2xl border border-black/[0.08] bg-white p-2 sm:p-3 shadow-xl shadow-black/5">
                  <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-zinc-950">
                    <video
                      src="/videos/hero-pinterest.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ────────────────────────────────────────────── */}
      <section className="py-12 border-y border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.08} y={16}>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-bold text-zinc-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 3. FEATURED WORK ────────────────────────────────────────── */}
      <section className="py-20 sm:py-32">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-black/[0.08] gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-medium">
                  Portfolio
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
                  Selected Work
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 hover:text-[#0070f3] transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {FEATURED_PROJECTS.map((proj, idx) => (
              <ScrollReveal key={proj.title} delay={idx * 0.1} y={32}>
                <div className="group rounded-2xl border border-black/[0.08] bg-white overflow-hidden hover:border-black/20 shadow-xs hover:shadow-md transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] bg-zinc-950 overflow-hidden">
                      <video
                        src={proj.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#0070f3] border border-black/10 font-semibold shadow-xs">
                        {proj.category}
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-xs text-zinc-400 font-semibold">
                          {proj.num}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 mt-2 group-hover:text-[#0070f3] transition-colors">
                          {proj.title}
                        </h3>
                        <p className="mt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                          {proj.tagline}
                        </p>
                        <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs font-mono text-[#0070f3] font-semibold">
                          {proj.metrics}
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-black/[0.08]">
                        <Link
                          href={proj.href}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-[#0070f3] transition-colors"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES & CAPABILITIES ──────────────────────────────── */}
      <section className="py-20 sm:py-32 bg-[#f8fafc] border-y border-black/[0.08]">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-medium">
                Capabilities
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
                Services Built for Scale
              </h2>
              <p className="mt-4 text-xs sm:text-base text-zinc-600 font-light">
                End-to-end product design, full-stack engineering, and AI automation tailored to modern digital enterprises.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((serv, i) => {
              const Icon = serv.icon;
              return (
                <ScrollReveal key={serv.slug} delay={i * 0.08} y={28}>
                  <Link
                    href={`/services/${serv.slug}`}
                    className="group p-8 rounded-2xl border border-black/[0.08] bg-white hover:border-[#0070f3]/50 hover:shadow-md transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-black/[0.04] border border-black/[0.06] flex items-center justify-center text-[#0070f3] mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-zinc-900 group-hover:text-[#0070f3] transition-colors">
                        {serv.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                        {serv.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-[#0070f3]">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. PROCESS / HOW WE WORK ─────────────────────────────────── */}
      <section className="py-20 sm:py-32">
        <div className="page-container">
          <ScrollReveal y={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-2 font-medium">
                Methodology
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
                How We Build
              </h2>
              <p className="mt-4 text-xs sm:text-base text-zinc-600 font-light">
                A transparent, agile workflow designed to ship high-impact digital products on time.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08} y={24}>
                <div className="p-8 rounded-2xl border border-black/[0.08] bg-white shadow-xs flex flex-col justify-between min-h-[220px] h-full">
                  <div>
                    <span className="font-mono text-sm font-bold text-[#0070f3]">
                      {step.step}
                    </span>
                    <h3 className="font-display text-lg font-bold text-zinc-900 mt-4 mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA BANNER ─────────────────────────────────────── */}
      <section className="py-20 pb-32">
        <div className="page-container">
          <ScrollReveal y={32}>
            <div className="relative rounded-3xl border border-black/[0.08] bg-gradient-to-b from-white to-[#f4f4f5] p-10 sm:p-16 text-center overflow-hidden shadow-lg shadow-black/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#0070f3]/10 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0070f3] block mb-3 font-semibold">
                  Let&apos;s Connect
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
                  Have a project in mind? Let&apos;s build it.
                </h2>
                <p className="mt-4 text-xs sm:text-base text-zinc-600 font-light leading-relaxed">
                  Whether you need an MVP from scratch or are looking to re-engineer an enterprise platform, we&apos;re ready to help you ship.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    href="/contact"
                    className="btn-pill btn-accent-c text-xs sm:text-sm font-semibold px-8 py-4 shadow-xs"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}