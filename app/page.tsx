"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";
import VideoLayer from "@/components/cinematic/VideoLayer";
import Counter from "@/components/cinematic/Counter";
import CTASection from "@/components/cinematic/CTASection";

/* ============================================================================
   SECTIONS
============================================================================ */
const WHAT_WE_DO = [
  { title: "Digital Products", video: "/videos/startone.mp4" },
  { title: "Web Development", video: "/videos/socan.mp4" },
  { title: "UI/UX", video: "/videos/hero-pinterest.mp4" },
  { title: "AI & Automation", video: "/videos/zobay.mp4" },
  { title: "Cloud & Technology", video: "/videos/baseone.mp4" },
];

const INDUSTRY_ITEMS = [
  { name: "Real Estate", video: "/videos/startone.mp4" },
  { name: "Healthcare", video: "/videos/validsoft.mp4" },
  { name: "FinTech", video: "/videos/baseone.mp4" },
  { name: "Education", video: "/videos/zobay.mp4" },
  { name: "E-commerce", video: "/videos/socan.mp4" },
];

const PROCESS_STEPS = [
  { title: "Discover", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" },
  { title: "Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop" },
  { title: "Build", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop" },
  { title: "Launch", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" },
];

/* ============================================================================
   HERO
============================================================================ */
function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <VideoLayer src="/videos/hero-pinterest.mp4" overlay="scrim-center" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20">
        <Reveal delay={0.15}>
          <div className="eyebrow mb-8">FortuneTech — Digital Product Studio</div>
        </Reveal>
        <Reveal delay={0.3}>
          <h1 className="display-xl text-[15vw] sm:text-[10vw] lg:text-[7.5vw]">
            We Build
            <br />
            <span className="text-[#b7ff4a]">What&apos;s Next.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.55}>
          <p className="mt-8 text-sm sm:text-base text-white/60 tracking-wide">
            Digital products. Intelligent systems. Real results.
          </p>
        </Reveal>
        <Reveal delay={0.7}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="btn-pill btn-light">
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-pill btn-ghost">
              Start a Project
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
  );
}

/* ============================================================================
   COMPANY INTRO (video side-by-side + scrub text reveal)
============================================================================ */
function CompanyIntro() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelector(".intro-line-1"),
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 75%", end: "center 45%", scrub: 1 },
        }
      );
      gsap.fromTo(
        el.querySelector(".intro-line-2"),
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 55%", end: "bottom 45%", scrub: 1 },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-32 lg:py-44">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:grid-cols-2 items-center gap-16 px-6 sm:px-10 lg:px-20">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-[3/4]">
          <VideoLayer src="/videos/startone.mp4" overlay="scrim-bottom" />
        </div>
        <div>
          <div className="eyebrow mb-8">Who We Are</div>
          <p className="intro-line-1 display-lg text-[9vw] sm:text-[5.5vw] lg:text-[4vw] text-[#f2f2ec]">
            A team of builders turning
            <span className="text-outline"> ambitious ideas </span>
            into products people love.
          </p>
          <p className="intro-line-2 mt-10 max-w-md text-sm text-white/50 leading-relaxed">
            We design, engineer, and ship digital experiences for companies that
            refuse to settle for ordinary.
          </p>
          <Link
            href="/about"
            className="group mt-12 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:text-[#b7ff4a]"
          >
            Our Story
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   WHAT WE DO — hover item swaps background video
============================================================================ */
function WhatWeDo() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#050505] py-40">
      <div className="absolute inset-0 pointer-events-none">
        {WHAT_WE_DO.map((item, i) => (
          <video
            key={item.video}
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`video-layer transition-opacity duration-700 ${
              i === active ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[#050505]/55" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <Reveal>
          <div className="eyebrow mb-16">What We Do</div>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20 pb-10">
        <Reveal>
          <p className="display-lg mb-10 text-lg sm:text-2xl text-white/40">
            Select a capability
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
        {WHAT_WE_DO.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05} y={24}>
            <div
              className="reveal-row group cursor-pointer py-8 lg:py-10"
              onMouseEnter={() => setActive(i)}
            >
              <Link
                href={
                  item.title === "AI & Automation"
                    ? "/services/ai-machine-learning"
                    : item.title === "Web Development"
                    ? "/services/web-development"
                    : item.title === "UI/UX"
                    ? "/services/ui-ux-design"
                    : item.title === "Cloud & Technology"
                    ? "/services/cloud-solutions"
                    : "/services"
                }
                className="row-title display-lg flex items-center justify-between gap-6 text-5xl sm:text-7xl lg:text-8xl text-white/35"
              >
                <span>{item.title}</span>
                <span className="flex items-center gap-3 text-base font-medium uppercase tracking-widest text-[#b7ff4a] opacity-0 transition-opacity duration-300 group-hover:opacity-100 shrink-0">
                  See more
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================================
   FEATURED PROJECTS — full-bleed video blocks (no dead space)
============================================================================ */
const FEATURED = [
  {
    href: "/projects/startone-enterprise-os",
    video: "/videos/startone.mp4",
    label: "Enterprise OS",
    title: "StartOne",
    tagline: "The all-in-one execution layer for modern companies.",
  },
  {
    href: "/projects/zobay-voice-ai",
    video: "/videos/zobay.mp4",
    label: "Autonomous Voice AI",
    title: "Zobay",
    tagline: "Sub-280ms conversational phone agents with human emotion.",
  },
];

function FeaturedProject() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <Reveal>
          <div className="eyebrow mb-14">Featured Projects</div>
        </Reveal>

        <div className="space-y-8">
          {FEATURED.map((project, i) => (
            <Reveal key={project.title} y={64}>
              <Link
                href={project.href}
                className="group block relative min-h-[55vh] sm:min-h-[70vh] overflow-hidden rounded-2xl"
              >
                {/* Media fills the entire block — no black gaps */}
                <VideoLayer
                  src={project.video}
                  overlay="scrim-bottom"
                  className="transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />

                <div className="relative z-10 flex min-h-[55vh] sm:min-h-[70vh] flex-col justify-end p-8 sm:p-14">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
                    {project.label}
                  </div>
                  <h3 className="display-xl text-5xl sm:text-7xl lg:text-8xl text-[#f2f2ec]">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed">
                    {project.tagline}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#b7ff4a]">
                    View Product
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>

                <span className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10 font-mono text-xs text-white/40">
                  0{i + 1} / 02
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   OUR PROCESS — pinned scroll animation
============================================================================ */
function OurProcess() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const steps = el.querySelectorAll(".process-word");
    const bgs = el.querySelectorAll(".process-bg");
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
      steps.forEach((step, i) => {
        const bg = bgs[i];
        tl.fromTo(step, { opacity: 0, scale: 1.15 }, { opacity: 1, scale: 1, duration: 1 });
        if (bg) {
          tl.fromTo(bg, { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.2 }, "<");
        }
        if (i < steps.length - 1) {
          tl.to(step, { opacity: 0, scale: 0.9, duration: 0.8 }, "+=0.4");
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
      {/* Section heading — fills the black space after the last featured project */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20">
        <span className="eyebrow text-[#b7ff4a]/70">Our Process</span>
      </div>
      {/* Step background photos */}
      <div className="absolute inset-0">
        {PROCESS_STEPS.map((step) => (
          <img
            key={step.title}
            src={step.image}
            alt=""
            className="process-bg absolute inset-0 h-full w-full object-cover opacity-0"
          />
        ))}
        <div className="absolute inset-0 bg-[#050505]/65" />
      </div>

      {PROCESS_STEPS.map((step, i) => (
        <div
          key={step.title}
          className="process-word absolute inset-0 flex items-center justify-center"
        >
          <h2 className="display-xl text-[18vw] sm:text-[12vw] text-[#f2f2ec]">
            {step.title}
            <span className="ml-4 align-top text-[4vw] text-[#b7ff4a]">
              0{i + 1}
            </span>
          </h2>
        </div>
      ))}
    </section>
  );
}

/* ============================================================================
   INDUSTRIES — hover swaps background
============================================================================ */
function IndustriesHorizontal() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0 pointer-events-none">
        {INDUSTRY_ITEMS.map((item, i) => (
          <video
            key={item.video}
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`video-layer transition-opacity duration-700 ${
              i === active ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[#050505]/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <Reveal>
          <div className="eyebrow mb-6">Industries</div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="display-lg mb-16 text-3xl sm:text-4xl text-white">
            Technology for
            <span className="text-outline"> every industry.</span>
          </p>
        </Reveal>

        <div className="space-y-2">
          {INDUSTRY_ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05} y={24}>
              <div
                className="reveal-row group cursor-pointer py-7"
                onMouseEnter={() => setActive(i)}
              >
                <Link
                  href="/industries"
                  className="row-title display-lg flex items-center justify-between text-4xl sm:text-6xl lg:text-7xl text-white/35"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-8 h-8 sm:w-12 sm:h-12 text-white/20 group-hover:text-[#b7ff4a] transition-colors shrink-0" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/industries"
            className="mt-16 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:text-[#b7ff4a] transition-colors"
          >
            Explore All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================================
   COMPANY NUMBERS
============================================================================ */
function CompanyNumbers() {
  return (
    <section className="relative overflow-hidden py-40">
      <VideoLayer src="/videos/legalx.mp4" overlay="scrim" />
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <Reveal>
          <div className="eyebrow mb-6">By The Numbers</div>
        </Reveal>
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 md:grid-cols-3 gap-14 px-6 sm:px-10 lg:px-20 pt-10">
        <Reveal delay={0.1}>
          <Counter value={50} suffix="+" label="Projects Delivered" />
        </Reveal>
        <Reveal delay={0.2}>
          <Counter value={20} suffix="+" label="Happy Clients" />
        </Reveal>
        <Reveal delay={0.3}>
          <Counter value={10} suffix="+" label="Technologies" />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================================
   PAGE
============================================================================ */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />
      <Hero />
      <CompanyIntro />
      <WhatWeDo />
      <FeaturedProject />
      <OurProcess />
      <IndustriesHorizontal />
      <CompanyNumbers />
      <CTASection
        title="Have an Idea?"
        actionLabel="Let's Build It"
        href="/contact"
        video="/videos/baseone.mp4"
      />
      <Footer />
    </main>
  );
}