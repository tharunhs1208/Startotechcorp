"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import StartProjectButton from "@/components/StartProjectButton";

interface FloatingServiceCard {
  id: string;
  name: string;
  slug: string;
  category: string;
  imageSrc: string;
  positionClass: string;
  yAnim: number[];
  rotateAnim: number[];
  duration: number;
  delay: number;
}

const FLOATING_SERVICES: FloatingServiceCard[] = [
  // 1. Top Left: Web Development
  {
    id: "web-dev",
    name: "Web Development",
    slug: "web-development",
    category: "Next.js · TypeScript · Fullstack",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    positionClass: "top-[96px] sm:top-[104px] lg:top-[6%] left-[2%] sm:left-[2%] lg:left-[4%] xl:left-[6%]",
    yAnim: [-8, 8, -8],
    rotateAnim: [-2, 2, -2],
    duration: 5.2,
    delay: 0,
  },
  // 2. Top Right: UI/UX Design
  {
    id: "ui-ux",
    name: "UI/UX Design",
    slug: "ui-ux-design",
    category: "Figma Tokens · Design Systems",
    imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    positionClass: "top-[96px] sm:top-[104px] lg:top-[6%] right-[2%] sm:right-[2%] lg:right-[4%] xl:right-[6%]",
    yAnim: [9, -9, 9],
    rotateAnim: [2, -2, 2],
    duration: 6.0,
    delay: 0.4,
  },
  // 3. Mid Left: AI & Machine Learning (Flanking left side of CTA buttons)
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    slug: "ai-machine-learning",
    category: "Neural Audio · LLMs · RAG",
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    positionClass: "top-[64%] sm:top-[60%] lg:top-[50%] -translate-y-1/2 -left-6 min-[390px]:-left-4 sm:left-[1%] lg:left-[2.5%] xl:left-[4%]",
    yAnim: [-10, 10, -10],
    rotateAnim: [1.5, -1.5, 1.5],
    duration: 4.8,
    delay: 0.8,
  },
  // 4. Mid Right: Mobile Development (Flanking right side of CTA buttons)
  {
    id: "mobile-dev",
    name: "Mobile Development",
    slug: "mobile-development",
    category: "iOS · Android · React Native",
    imageSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
    positionClass: "top-[64%] sm:top-[60%] lg:top-[50%] -translate-y-1/2 -right-6 min-[390px]:-right-4 sm:right-[1%] lg:right-[2.5%] xl:right-[4%]",
    yAnim: [8, -8, 8],
    rotateAnim: [-2, 2, -2],
    duration: 5.6,
    delay: 0.6,
  },
  // 5. Bottom Left: Cloud Solutions
  {
    id: "cloud",
    name: "Cloud Solutions",
    slug: "cloud-solutions",
    category: "AWS · Kubernetes · Terraform",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    positionClass: "bottom-[2%] sm:bottom-[3%] lg:bottom-[5%] left-[2%] sm:left-[2.5%] lg:left-[4%] xl:left-[6%]",
    yAnim: [-7, 7, -7],
    rotateAnim: [-1.5, 1.5, -1.5],
    duration: 5.0,
    delay: 0.2,
  },
  // 6. Bottom Right: Digital Transformation
  {
    id: "digital-trans",
    name: "Digital Transformation",
    slug: "digital-transformation",
    category: "Enterprise Systems · Workflows",
    imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
    positionClass: "bottom-[2%] sm:bottom-[3%] lg:bottom-[5%] right-[2%] sm:right-[2.5%] lg:right-[4%] xl:right-[6%]",
    yAnim: [7, -7, 7],
    rotateAnim: [1.5, -1.5, 1.5],
    duration: 4.6,
    delay: 0.9,
  },
];

export default function OrbitalHero() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-[860px] sm:min-h-[890px] lg:min-h-[920px] flex items-center justify-center pt-24 sm:pt-32 lg:pt-32 pb-20 sm:pb-28 bg-[#ffffff] text-[#111111] overflow-hidden selection:bg-black selection:text-white">
      {/* Background Soft Atmospheric Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] lg:w-[900px] h-[340px] sm:h-[500px] bg-gradient-to-tr from-blue-100/40 via-purple-100/30 to-pink-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ── CONTINUOUSLY FLOATING SERVICE IMAGE CARDS (All Screens: Mobile, Tablet & Desktop) ── */}
      <div className="absolute inset-0 max-w-[1500px] mx-auto pointer-events-none overflow-visible">
        {FLOATING_SERVICES.map((card) => {
          const isHovered = hoveredCardId === card.id;

          return (
            <motion.div
              key={card.id}
              initial={shouldReduceMotion ? {} : { y: 0, rotate: 0 }}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: card.yAnim,
                      rotate: card.rotateAnim,
                    }
              }
              transition={
                shouldReduceMotion
                  ? {}
                  : {
                      duration: card.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: card.delay,
                    }
              }
              className={`absolute ${card.positionClass} pointer-events-auto transition-all duration-300 ${
                isHovered ? "z-30" : "z-10"
              }`}
            >
              <Link
                href={`/services/${card.slug}`}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="group block relative w-[125px] min-[390px]:w-[145px] min-[430px]:w-[160px] sm:w-[185px] md:w-[210px] lg:w-[265px] xl:w-[295px] aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-black/[0.08] hover:border-black/50 shadow-[0_6px_20px_rgba(0,0,0,0.07)] sm:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.30)] active:scale-95 hover:-translate-y-2.5 sm:hover:-translate-y-3.5 hover:scale-[1.05] sm:hover:scale-[1.06] transition-all duration-300 ease-out"
              >
                {/* Fixed Image Visual (Optimized eager loading and async decoding) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.imageSrc}
                  alt={card.name}
                  draggable={false}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient Gradient Vignette (Revealed on Hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* ── CARD CONTENT OVERLAY (Hidden by default, revealed on hover) ── */}
                <div className="absolute inset-0 flex flex-col justify-end p-2.5 sm:p-4 lg:p-4.5 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
                  <div>
                    <div className="flex items-center justify-between gap-1 text-white mb-0.5">
                      <h4 className="text-[11.5px] min-[390px]:text-[12.5px] sm:text-[15px] xl:text-[16px] font-display font-semibold tracking-tight leading-tight drop-shadow-sm text-white">
                        {card.name}
                      </h4>
                      <div className="w-5 h-5 sm:w-6.5 sm:h-6.5 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                        <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" />
                      </div>
                    </div>

                    <p className="text-[10px] sm:text-[11.5px] font-mono text-white/80 line-clamp-1">
                      {card.category}
                    </p>
                  </div>
                </div>

                {/* Glow Border Overlay on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl sm:rounded-3xl pointer-events-none transition-colors duration-300" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ── CENTER HERO CONTENT ────────────────────────────────────────── */}
      <div className="max-w-[270px] min-[390px]:max-w-[310px] sm:max-w-[430px] md:max-w-[460px] lg:max-w-[760px] mx-auto px-2 sm:px-4 lg:px-8 text-center relative z-20 pointer-events-auto">

        {/* Innovative Studio Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.04 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] backdrop-blur-md mb-4 sm:mb-6 select-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] sm:text-[12px] font-mono font-medium text-[#111111] tracking-tight">
            StratoTech Studio · Accepting Q2 Enterprise Sprints
          </span>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-[27px] min-[390px]:text-[31px] sm:text-5xl lg:text-[68px] font-display font-medium tracking-[-0.035em] text-[#111111] leading-[1.08] mb-4 sm:mb-6"
        >
          Software designed around the way you work.
        </motion.h1>

        {/* Subtitle Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-[13.5px] min-[390px]:text-[14.5px] sm:text-lg lg:text-xl text-[#6e6e73] font-normal leading-relaxed mb-4 sm:mb-6 lg:mb-12 max-w-xl mx-auto"
        >
          We turn complex business requirements into simple, useful digital products, AI-native platforms, and scalable enterprise architectures.
        </motion.p>

        {/* Primary Action Row (Centered in the open gap between middle and bottom card pairs across mobile & tablet) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-3.5 w-full max-w-full mx-auto transform translate-y-24 min-[390px]:translate-y-28 sm:translate-y-10 md:translate-y-12 lg:translate-y-0 pt-2 lg:pt-1"
        >
          <div className="shrink-0">
            <StartProjectButton
              size="lg"
              text="Start a project"
              className="px-4.5 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-[16px] whitespace-nowrap"
            />
          </div>

          <Link
            href="/services"
            className="shrink-0 inline-flex items-center justify-center font-medium rounded-full px-4.5 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-[16px] gap-1.5 sm:gap-2 border border-black/[0.15] bg-white text-[#1d1d1f] hover:border-black hover:bg-[#f5f5f7] transition-all duration-300 shadow-xs group whitespace-nowrap"
          >
            <span>Explore all services</span>
            <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
