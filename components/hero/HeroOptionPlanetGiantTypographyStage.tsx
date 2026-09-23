"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";

interface HeroItem {
  id: string;
  type: "PRODUCT" | "SERVICE";
  name: string;
  category: string;
  number: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  giantWord: string;
  bgGradient: string;
  accent: string;
  ctaHref: string;
  image: string;
}

const HERO_ITEMS: HeroItem[] = [
  {
    id: "zobay",
    type: "PRODUCT",
    name: "Zobay Voice AI",
    category: "AUTONOMOUS TELEPHONY",
    number: "01",
    headline: "ZOBAY VOICE AI",
    headlineHighlight: "SPEECH INTELLIGENCE",
    description:
      "Sub-140ms acoustic turn-taking, fluid human emotional prosody, and natural interruption handling built for enterprise mission-critical queues.",
    giantWord: "ZOBAY",
    bgGradient: "from-[#181124] via-[#120d1c] to-[#0a0710]",
    accent: "#c084fc",
    ctaHref: "/projects/zobay-voice-ai",
    image: "/images/products/zobay_custom.jpg",
  },
  {
    id: "meetingx",
    type: "PRODUCT",
    name: "MeetingX Spatial",
    category: "SPATIAL WEBRTC",
    number: "02",
    headline: "MEETINGX",
    headlineHighlight: "SPATIAL CONFERENCING",
    description:
      "Ultra-low latency 4K spatial conferencing with real-time AI speech diarization, instant multi-language translation, and automated executive summary generation.",
    giantWord: "MEETINGX",
    bgGradient: "from-[#0a192f] via-[#071324] to-[#040a14]",
    accent: "#38bdf8",
    ctaHref: "/products/meetingx",
    image: "/images/products/meetingx_pinterest.jpg",
  },
  {
    id: "salesx",
    type: "PRODUCT",
    name: "SalesX CRM",
    category: "REVENUE ACCELERATION",
    number: "03",
    headline: "SALESX CRM",
    headlineHighlight: "PIPELINE VELOCITY",
    description:
      "Autonomous sales pipeline intelligence and revenue forecasting engine with multi-agent deal staging precision and automatic CRM synchronization.",
    giantWord: "SALESX",
    bgGradient: "from-[#081e17] via-[#051410] to-[#020b08]",
    accent: "#34d399",
    ctaHref: "/products/salesx",
    image: "/images/products/salesx_custom.jpg",
  },
  {
    id: "cloud-solutions",
    type: "SERVICE",
    name: "Cloud Solutions",
    category: "CLOUD INFRASTRUCTURE",
    number: "04",
    headline: "CLOUD SOLUTIONS",
    headlineHighlight: "INFINITE SCALABILITY",
    description:
      "Multi-region AWS, Azure, and GCP architecture, automated Kubernetes clusters, zero-downtime CI/CD deployments, and SOC-2 compliant FinOps optimization.",
    giantWord: "CLOUD",
    bgGradient: "from-[#0b172a] via-[#07101e] to-[#040810]",
    accent: "#60a5fa",
    ctaHref: "/services/cloud-solutions",
    image: "/images/products/cloud_solutions.jpg",
  },
  {
    id: "ai-machine-learning",
    type: "SERVICE",
    name: "AI & Machine Learning",
    category: "ENTERPRISE INTELLIGENCE",
    number: "05",
    headline: "AI & MACHINE LEARNING",
    headlineHighlight: "COGNITIVE PIPELINES",
    description:
      "Custom conversational LLM workflows, private air-gapped enterprise RAG pipelines, predictive analytics engines, and autonomous multi-agent task execution.",
    giantWord: "INTELLIGENCE",
    bgGradient: "from-[#1b0f24] via-[#120a1a] to-[#0a0510]",
    accent: "#e879f9",
    ctaHref: "/services/ai-machine-learning",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "web-development",
    type: "SERVICE",
    name: "Web & Digital Engineering",
    category: "SYSTEMS ARCHITECTURE",
    number: "06",
    headline: "WEB & DIGITAL ENGINEERING",
    headlineHighlight: "HIGH-THROUGHPUT SYSTEMS",
    description:
      "Enterprise web applications, reactive SaaS portals, micro-frontends, and robust distributed APIs engineered with Next.js, Node.js, and TypeScript.",
    giantWord: "ENGINEERING",
    bgGradient: "from-[#1a140d] via-[#120e09] to-[#0a0704]",
    accent: "#f59e0b",
    ctaHref: "/services/web-development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mobile-development",
    type: "SERVICE",
    name: "Mobile App Development",
    category: "NATIVE & HYBRID APPS",
    number: "07",
    headline: "MOBILE DEVELOPMENT",
    headlineHighlight: "NATIVE EXPERIENCE",
    description:
      "Intuitive iOS and Android apps powered by React Native and Flutter with offline-first local SQLite sync and 60 FPS performance.",
    giantWord: "MOBILE",
    bgGradient: "from-[#1c0f18] via-[#120a10] to-[#0a0508]",
    accent: "#f43f5e",
    ctaHref: "/services/mobile-development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ui-ux-design",
    type: "SERVICE",
    name: "UI/UX Design & Systems",
    category: "PRODUCT DESIGN",
    number: "08",
    headline: "UI/UX DESIGN",
    headlineHighlight: "DESIGN SYSTEMS",
    description:
      "Modular component libraries, atomic Figma token variables, interactive micro-animations, and accessible user journeys.",
    giantWord: "DESIGN",
    bgGradient: "from-[#111927] via-[#0b101a] to-[#06080d]",
    accent: "#38bdf8",
    ctaHref: "/services/ui-ux-design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cybersecurity",
    type: "SERVICE",
    name: "Cybersecurity & Identity",
    category: "ZERO-TRUST DEFENSE",
    number: "09",
    headline: "CYBERSECURITY & DEFENSE",
    headlineHighlight: "ZERO TRUST SECURITY",
    description:
      "Automated penetration testing, continuous SOC-2 audit logging, biometric voice defense, and AES-256 payload encryption.",
    giantWord: "SECURITY",
    bgGradient: "from-[#081e18] via-[#051410] to-[#020b08]",
    accent: "#10b981",
    ctaHref: "/services/cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "digital-transformation",
    type: "SERVICE",
    name: "Digital Transformation",
    category: "STRATEGIC ADVISORY",
    number: "10",
    headline: "DIGITAL TRANSFORMATION",
    headlineHighlight: "OPERATIONAL MATURITY",
    description:
      "Technical roadmap architecture, legacy monolith refactoring, enterprise ERP/CRM integration, and automated business workflows.",
    giantWord: "TRANSFORM",
    bgGradient: "from-[#1a170e] via-[#120f09] to-[#0a0804]",
    accent: "#eab308",
    ctaHref: "/services/digital-transformation",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HeroOptionPlanetGiantTypographyStage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % HERO_ITEMS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  const product = HERO_ITEMS[activeIndex];

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + HERO_ITEMS.length) % HERO_ITEMS.length);
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % HERO_ITEMS.length);
  };

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 140 : -140,
      y: dir > 0 ? 30 : -30,
      rotateY: dir > 0 ? 28 : -28,
      rotateZ: dir > 0 ? 4 : -4,
      scale: 0.84,
      opacity: 0,
      filter: "blur(14px)",
    }),
    center: {
      x: 0,
      y: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -140 : 140,
      y: dir > 0 ? -30 : 30,
      rotateY: dir > 0 ? -28 : 28,
      rotateZ: dir > 0 ? -4 : 4,
      scale: 0.84,
      opacity: 0,
      filter: "blur(14px)",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`relative w-full h-[100dvh] min-h-[640px] bg-gradient-to-b ${product.bgGradient} text-white overflow-hidden select-none flex flex-col justify-between pt-[68px] pb-6 sm:pb-8 px-6 sm:px-10 lg:px-16 transition-colors duration-1000 [contain:paint]`}
    >
      {/* ═════════════════════════════════════════════════════════
          GIANT BACKDROP CUTOUT WORD (ANIMATES EVERY 5 SECONDS)
          ═════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={product.giantWord}
            initial={{ opacity: 0, scale: 0.88, y: 25 }}
            animate={{ opacity: 0.12, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.06, y: -25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[140px] min-[440px]:text-[190px] sm:text-[260px] md:text-[340px] lg:text-[420px] font-sans font-black tracking-[-0.06em] text-white uppercase leading-none select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {product.giantWord}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── 2-COLUMN HERO STAGE: CONTENT + PRODUCT IMAGE ── */}
      <div className="relative z-10 w-full max-w-[1400px] flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ── LEFT COLUMN: HEADING & CONTENT ── */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
          {/* Metadata pill */}
          <div className="flex items-center gap-2 text-[11px] sm:text-[12px] font-mono text-white/60 uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-white tracking-widest">{product.type}</span>
            <span>·</span>
            <span className="font-bold text-white">{product.number}</span>
            <span>·</span>
            <span>{product.category}</span>
            <span>·</span>
            <span className="text-white/80 font-semibold">{product.name}</span>
          </div>

          {/* Heading with Fluid 5s Slide Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-[36px] min-[440px]:text-[42px] sm:text-[54px] lg:text-[60px] xl:text-[66px] font-sans font-black tracking-[-0.04em] text-white leading-[0.96] uppercase">
                {product.headline} <br />
                <span className="text-white/65">{product.headlineHighlight}</span>
              </h1>

              <p className="text-[14px] sm:text-[16px] text-zinc-300 font-sans font-normal leading-relaxed max-w-xl">
                {product.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Direct CTA Link & Quick Nav */}
          <div className="pt-2 flex items-center gap-4 flex-wrap">
            <Link
              href={product.ctaHref}
              className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-semibold text-[13px] sm:text-[14px] hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02]"
            >
              <span>Explore {product.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Quick Arrow Nav */}
            <div className="flex items-center gap-1.5 pl-1">
              <button
                onClick={prevSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white hover:text-black text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Offer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white hover:text-black text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Offer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: DISTINCT 3D SPATIAL CARD TRANSITION ── */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end [perspective:1400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={product.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full max-w-[480px] xl:max-w-[540px] max-h-[44vh] sm:max-h-[48vh] lg:max-h-[52vh] aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 bg-black/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl relative group transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Dynamic ambient color glow behind border */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-20 blur-xl transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: product.accent }}
              />

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-700 group-hover:scale-105 relative z-10"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15 pointer-events-none z-20" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
