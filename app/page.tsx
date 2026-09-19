"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechBadge from "@/components/TechBadge";
import TextMaskReveal from "@/components/TextMaskReveal";
import ScrollCardTransition from "@/components/ScrollCardTransition";
import StartProjectButton from "@/components/StartProjectButton";

import ProductCard, { ProductData } from "@/components/ProductCard";

const USER_FEEDBACKS = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "VP of Product, Apex Digital",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop",
    quote: "StratoTech delivered our enterprise platform 3 weeks ahead of schedule. Flawless execution.",
  },
  {
    id: 2,
    name: "Sarah Lin",
    role: "Head of Engineering, HyperScale",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&auto=format&fit=crop",
    quote: "Sub-280ms voice AI pipeline transformed our entire customer sales conversion velocity.",
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Founder & CTO, Synthex",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
    quote: "Uncompromising engineering quality and exceptional interface design craftsmanship.",
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Product Director, Vertex Labs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop",
    quote: "The cleanest architecture and scalable foundation we've ever inherited from an agency partner.",
  },
  {
    id: 5,
    name: "David Sterling",
    role: "Co-Founder, Omnia Health",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop",
    quote: "Turned our complex HIPAA compliance workflow into an effortless, intuitive daily experience.",
  },
  {
    id: 6,
    name: "Rachel Kim",
    role: "Head of Design, Orbit FinTech",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop",
    quote: "Pixel-perfect implementation of our design system with absolutely zero visual regression.",
  },
  {
    id: 7,
    name: "Julian Thorne",
    role: "VP Operations, BaseOne Logistics",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=120&auto=format&fit=crop",
    quote: "Reduced our operational team overhead by 40% within the first month of deployment.",
  },
  {
    id: 8,
    name: "Ananya Patel",
    role: "Engineering Lead, Nexus Cloud",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=120&auto=format&fit=crop",
    quote: "99.99% uptime under high-load stress testing. Outstanding cloud infrastructure design.",
  },
  {
    id: 9,
    name: "Thomas Becker",
    role: "Managing Director, Kinetix Media",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120&auto=format&fit=crop",
    quote: "Their team thinks like business owners first and software engineers second.",
  },
];

const FEATURED_PRODUCTS: ProductData[] = [
  {
    number: "01",
    id: "salesx",
    name: "SalesX",
    category: "Sales · Platform",
    year: "2026",
    metricBadge: "⚡ 3.4x Faster Follow-up",
    description: "A high-velocity digital sales platform engineered to automate pipeline triaging, lead qualification, and multi-channel customer follow-ups.",
    highlights: [
      "Real-time pipeline routing and automated lead triage in <500ms.",
      "Predictive conversion score engine with custom cadence triggers.",
      "Bi-directional synchronization with Salesforce, HubSpot, and custom DBs.",
    ],
    capabilities: [
      { title: "Lead Intelligence", desc: "Automated scoring and enrichment in <500ms" },
      { title: "Pipeline Automation", desc: "Trigger multi-touch cadences dynamically" },
      { title: "Bi-directional Sync", desc: "Real-time sync with Salesforce & HubSpot" },
      { title: "Deal Velocity Insights", desc: "Live bottleneck detection across deal stages" },
    ],
    techStack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker"],
    architecture: "Event-driven edge architecture running on low-latency microservices with sub-50ms Redis caching and transactional PostgreSQL replication.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/products/salesx",
    linkLabel: "View SalesX Details",
    layout: "text-left-visual-right",
  },
  {
    number: "02",
    id: "zobay",
    name: "Zobay Voice AI",
    category: "Sales · Voice",
    year: "2026",
    metricBadge: "🎙️ <280ms Turn-Taking Latency",
    description: "A full-duplex voice AI platform engineered for natural, low-latency sales conversations, instantaneous qualification, and meeting bookings.",
    highlights: [
      "Sub-280ms full-duplex voice-to-voice neural pipeline.",
      "Interruption-aware speech synthesis with conversational tone nuance.",
      "Automated structured call notes and immediate calendar bookings.",
    ],
    capabilities: [
      { title: "Sub-280ms Loop", desc: "Full-duplex speech recognition & synthesis" },
      { title: "Interruption Aware", desc: "Natural back-and-forth conversational fluidity" },
      { title: "Contextual Memory", desc: "Maintains multi-turn context throughout calls" },
      { title: "Instant Summaries", desc: "Structured CRM record extraction on hang-up" },
    ],
    techStack: ["WebRTC", "Python", "PyTorch", "Next.js", "FastAPI", "Docker"],
    architecture: "Custom WebRTC media server pipeline streaming audio to deep acoustic neural models with optimized GPU kernel inference.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/projects/zobay-voice-ai",
    linkLabel: "View Zobay Demo",
    layout: "visual-left-text-right",
  },
  {
    number: "03",
    id: "meetingx",
    name: "MeetingX",
    category: "Communication · Platform",
    year: "2026",
    metricBadge: "🌐 99.99% Mesh Uptime",
    description: "A next-generation collaboration and real-time meeting platform engineered for crystal-clear video streaming and automated AI transcription summaries.",
    highlights: [
      "Adaptive SFU video routing optimized for low-bandwidth environments.",
      "Live speaker-differentiated transcription and automated action items.",
      "End-to-end encrypted rooms with granular role access controls.",
    ],
    capabilities: [
      { title: "Adaptive Bitrate", desc: "4K video streaming with selective forwarding unit" },
      { title: "Live Transcriptions", desc: "Speaker-differentiated speech-to-text in real time" },
      { title: "Interactive Canvas", desc: "Multiplayer whiteboarding with zero input lag" },
      { title: "Action Item Sync", desc: "Auto-extract tasks and push to Jira and Notion" },
    ],
    techStack: ["WebRTC", "Next.js", "TypeScript", "Node.js", "Redis", "AWS"],
    architecture: "Global distributed SFU mesh topology with WebAssembly audio processing and WebSocket state synchronization.",
    mediaType: "image",
    mediaSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    linkHref: "/products/meetingx",
    linkLabel: "View MeetingX Details",
    layout: "text-left-visual-right",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "We start with the business problem, users, requirements, and what needs to work better.",
  },
  {
    number: "02",
    title: "Design",
    description: "We turn requirements into clear interfaces, workflows, and practical product experiences.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop the product, connect the required systems, and bring the experience to life.",
  },
  {
    number: "04",
    title: "Improve",
    description: "We test, refine, and improve the product as the business evolves.",
  },
];

const SELECTED_WORK_ITEMS = [
  {
    number: "01",
    discipline: "Product Design",
    productName: "SalesX",
    description: "Interfaces and workflows designed around sales activities, lead management, and business operations.",
    linkHref: "/projects",
  },
  {
    number: "02",
    discipline: "Product Development",
    productName: "Zobay",
    description: "A digital experience designed around voice-led sales communication and customer conversations.",
    linkHref: "/projects/zobay-voice-ai",
  },
  {
    number: "03",
    discipline: "Web & Real-time Development",
    productName: "MeetingX",
    description: "A meeting and collaboration experience focused on simple online communication.",
    linkHref: "/projects",
  },
];

const HERO_TECH_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop",
    alt: "Technology & Product Engineering",
  },
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
    alt: "Silicon Architecture & Microprocessors",
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
    alt: "Distributed Cloud Datacenter & Infrastructure",
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop",
    alt: "Global Network Mesh & Satellite Intelligence",
  },
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2400&auto=format&fit=crop",
    alt: "Cybersecurity & Cryptographic Architecture",
  },
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2400&auto=format&fit=crop",
    alt: "Neural Code & Advanced Software Engineering",
  },
];

export default function HomePage() {
  const [activeFeedbackIndex, setActiveFeedbackIndex] = useState(0);
  const [activeHeroImageIndex, setActiveHeroImageIndex] = useState(0);

  // 5-second automatic image rotation with zero timers/indicators
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setActiveHeroImageIndex((prev) => (prev + 1) % HERO_TECH_IMAGES.length);
    }, 5000);
    return () => clearInterval(heroTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeedbackIndex((prev) => (prev + 1) % USER_FEEDBACKS.length);
    }, 5800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-0 pb-10 sm:pb-14">
        {/* ── 1. HERO SECTION (Full-Bleed Edge-to-Edge Tech Hero) ──── */}
        <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-end px-5 sm:px-10 lg:px-14 pb-10 sm:pb-16 m-0 overflow-hidden">
          {/* Background Tech Engineering Images with 5s Smooth Crossfade (No Timers / UI) */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-black">
            <AnimatePresence mode="sync">
              <motion.img
                key={HERO_TECH_IMAGES[activeHeroImageIndex].url}
                src={HERO_TECH_IMAGES[activeHeroImageIndex].url}
                alt={HERO_TECH_IMAGES[activeHeroImageIndex].alt}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88]"
              />
            </AnimatePresence>
            {/* Neutral Dark Cinematic Gradient Overlays (Zero Green Tint) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent sm:w-[75%] lg:w-[62%] z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-[1]" />
          </div>

          {/* Inner Content Layout - Flush Left (No mx-auto centering) */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
            {/* Left Column: Heading, Subtitle, CTA */}
            <div className="max-w-2xl text-left">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-4xl sm:text-6xl lg:text-[72px] font-display font-medium tracking-tight text-white leading-[1.02] m-0 p-0 text-left"
              >
                Strategic Clarity<br />Sustainable Growth.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="text-sm sm:text-base text-white/90 font-normal leading-relaxed mt-4 mb-6 sm:mb-8 max-w-lg text-left"
              >
                We help businesses refine strategy, strengthen operations, scale with confidence through data-driven consulting and practical execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="flex items-center gap-4 text-left"
              >
                <StartProjectButton
                  variant="light"
                  size="md"
                  text="Book a Call"
                  href="/contact"
                />
              </motion.div>
            </div>

            {/* Right Column: Dynamic Step-by-Step User Feedback Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="shrink-0 self-start lg:self-end w-full sm:w-[340px] max-w-full"
            >
              <div className="relative min-h-[170px] sm:min-h-[180px] flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={USER_FEEDBACKS[activeFeedbackIndex].id}
                    initial={{ opacity: 0, y: 32, scale: 0.97, filter: "blur(6px)" }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: 1.15,
                        ease: [0.22, 1, 0.36, 1], // Gentle, gradual easeOut
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -28,
                      scale: 0.97,
                      filter: "blur(6px)",
                      transition: {
                        duration: 0.85,
                        ease: [0.4, 0, 0.2, 1], // Soft fadeOut
                      },
                    }}
                    className="bg-black/55 backdrop-blur-xl border border-white/20 text-white rounded-2xl p-5 sm:p-6 shadow-2xl"
                  >
                    {/* Top rating */}
                    <div className="flex items-center pb-3 mb-3 border-b border-white/10 text-[11px] font-mono">
                      <div className="flex items-center gap-1 text-amber-400">
                        {"★★★★★"}
                        <span className="text-white/80 ml-1">5.0</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-[13px] sm:text-[14px] text-white/95 font-normal leading-relaxed italic mb-4">
                      &ldquo;{USER_FEEDBACKS[activeFeedbackIndex].quote}&rdquo;
                    </p>

                    {/* Reviewer Details */}
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={USER_FEEDBACKS[activeFeedbackIndex].avatar}
                        alt={USER_FEEDBACKS[activeFeedbackIndex].name}
                        className="w-8 h-8 rounded-full border border-white/40 object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[12px] font-medium text-white block truncate leading-tight">
                          {USER_FEEDBACKS[activeFeedbackIndex].name}
                        </span>
                        <span className="text-[10px] font-mono text-white/70 block truncate mt-0.5">
                          {USER_FEEDBACKS[activeFeedbackIndex].role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. WHAT WE BUILD (Scroll Transition Card) ─────────────── */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-10">
          <ScrollCardTransition>
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-7 sm:p-12 lg:p-14 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-black/[0.08]">
                <div className="lg:col-span-5">
                  <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
                    WHAT WE BUILD
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#1d1d1f] leading-snug">
                    Built for the way modern teams actually work.
                  </h2>
                </div>
                <div className="lg:col-span-7 flex items-center">
                  <p className="text-base sm:text-xl text-[#6e6e73] font-normal leading-relaxed">
                    From high-velocity sales workflows to real-time communication platforms, we turn business requirements into simple, useful digital products that scale.
                  </p>
                </div>
              </div>

              {/* Technology Badges Bar */}
              <div className="pt-6 flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] mr-2">
                  Core Stack:
                </span>
                {["Next.js", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "WebRTC", "Figma"].map((tech, i) => (
                  <TechBadge key={i} name={tech} />
                ))}
              </div>
            </div>
          </ScrollCardTransition>
        </section>

        {/* ── 3. FEATURED PRODUCTS ───────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 mb-8 sm:mb-16 border-b border-black/[0.08]">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-2 font-semibold">
                OUR PRODUCTS
              </span>
              <TextMaskReveal
                text="Products built around real business needs."
                as="h2"
                once={false}
                className="text-3xl sm:text-4xl lg:text-[42px] font-display font-medium text-[#1d1d1f] tracking-tight leading-[1.12]"
              />
            </div>
            <Link
              href="/products"
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] inline-flex items-center gap-1.5 transition-colors group/link pb-1"
            >
              <span>View all products</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>

          <div className="space-y-10 sm:space-y-16">
            {FEATURED_PRODUCTS.map((prod) => (
              <ScrollCardTransition key={prod.id}>
                <ProductCard product={prod} />
              </ScrollCardTransition>
            ))}
          </div>
        </section>

        {/* ── 4. HOW WE WORK (Numbered Editorial Process) ─────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 mb-6 sm:mb-10 border-b border-black/[0.08]">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                OUR PROCESS
              </span>
              <TextMaskReveal
                text="From an idea to a working product."
                as="h2"
                once={false}
                className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight"
              />
            </div>
            <p className="text-[14px] text-[#6e6e73] max-w-md leading-relaxed font-normal">
              We combine product thinking, design, and engineering to turn business requirements into useful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white border border-black/[0.08] p-6 sm:p-7 flex flex-col justify-between h-full min-h-[220px] sm:min-h-[240px] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:border-black/25 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-default">
                  {/* Top Animated Progress Accent Bar */}
                  <div className="absolute top-0 left-0 h-[2.5px] w-0 bg-gradient-to-r from-[#1d1d1f] to-[#6e6e73] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                  <div>
                    {/* Step Number & Indicator Dot */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-[12px] font-mono font-semibold px-2.5 py-1 rounded-full bg-black/[0.04] text-[#1d1d1f] group-hover:bg-[#1d1d1f] group-hover:text-white transition-all duration-300">
                        {step.number}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-black/[0.12] group-hover:bg-[#1d1d1f] group-hover:scale-125 transition-all duration-300" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-display font-medium text-[#1d1d1f] mb-2.5 group-hover:translate-x-0.5 transition-transform duration-300">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[13px] text-[#6e6e73] leading-relaxed font-normal group-hover:text-[#1d1d1f] transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Phase Label & Interactive Slide Arrow */}
                  <div className="pt-4 mt-4 border-t border-black/[0.05] flex items-center justify-between text-[11px] font-mono text-[#86868b] group-hover:text-[#1d1d1f] transition-colors">
                    <span>Phase 0{idx + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#1d1d1f]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 5. SELECTED WORK ───────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 mb-6 sm:mb-12 border-b border-black/[0.08]">
            <div>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-1 font-semibold">
                SELECTED WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#1d1d1f] tracking-tight">
                The work behind the products.
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] inline-flex items-center gap-1 transition-colors"
            >
              <span>View all work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-black/[0.08]">
            {SELECTED_WORK_ITEMS.map((item) => (
              <div
                key={item.number}
                className="py-5 sm:py-8 group flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 transition-colors"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-[#6e6e73] mb-2 uppercase tracking-wider">
                    <span>{item.number}</span>
                    <span>—</span>
                    <span className="font-semibold text-[#1d1d1f]">{item.discipline}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#1d1d1f] mb-2 group-hover:text-[#0071e3] transition-colors">
                    <Link href={item.linkHref}>{item.productName}</Link>
                  </h3>

                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center">
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors"
                  >
                    <span>View work</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. ABOUT STATEMENT ─────────────────────────────────────── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-28">
          <div className="max-w-3xl pb-10 sm:pb-20 border-b border-black/[0.08]">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 sm:mb-4 font-semibold">
              ABOUT
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#1d1d1f] leading-[1.1] mb-4 sm:mb-6">
              Technology should solve a problem before it tries to impress.
            </h2>
            <p className="text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              We build practical digital products around real business requirements — combining product thinking, design, and engineering to create experiences that people can actually use.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors group"
            >
              <span>About us</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* ── 7. FINAL CTA ─── */}
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-28 pb-10 sm:pb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <TextMaskReveal
                text="Have something worth building?"
                as="h3"
                once={false}
                className="text-3xl sm:text-5xl lg:text-[54px] font-display font-medium tracking-tight text-[#1d1d1f] leading-tight mb-3 sm:mb-4"
              />
              <p className="text-[15px] sm:text-[17px] text-[#6e6e73] max-w-xl font-normal leading-relaxed">
                Tell us what you&apos;re working on. We&apos;ll figure out what to build next.
              </p>
            </div>
            <div className="shrink-0">
              <StartProjectButton size="lg" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}