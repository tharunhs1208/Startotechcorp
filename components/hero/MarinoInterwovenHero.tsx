"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

function MaskedHeading({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-flex flex-wrap sm:flex-nowrap gap-x-[0.22em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: delay + i * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function MarinoInterwovenHero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll-driven transitions when scrolling up and down
  const line1X = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const line2X = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const line3Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  useEffect(() => {
    [videoRef1, videoRef2, videoRef3].forEach((v) => {
      if (v.current) {
        v.current.play().catch(() => {});
      }
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="page-section anim-section background-gray hero-section relative w-full pt-28 sm:pt-36 lg:pt-40 pb-8 sm:pb-12 bg-[#F3F3F3] text-[#231F20] overflow-hidden"
    >
      {/* ── Wide Responsive Hero Container (max-w-[1380px]) ── */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 flex-1 flex flex-col justify-center"
      >
        
        {/* ── Brand Logo in Hero Section ── */}
        <div className="mb-4 sm:mb-6">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.04em] text-[#111111] hover:opacity-85 transition-opacity"
          >
            STRATOTECH
          </Link>
        </div>

        {/* ── MOBILE HERO HEADLINES (STAGGERED & INTERWOVEN) ── */}
        <div className="sm:hidden space-y-4 pt-1">
          {/* Line 1: Building */}
          <div className="flex items-center">
            <h1 className="text-[15vw] font-display font-semibold tracking-[-0.035em] text-[#231F20] leading-[1.05] relative z-10 [text-rendering:optimizeLegibility]">
              <MaskedHeading text="Building" delay={0.05} />
            </h1>
          </div>

          {/* Line 2: [Video 1] on LEFT + Brands on RIGHT */}
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="absolute -inset-1.5 rounded-2xl bg-[#82FFCD]/40 blur-md pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[110px] xs:w-[125px] aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-black/[0.08] shadow-xs shrink-0"
              >
                <video
                  ref={videoRef1}
                  src="/videos/baseone.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </div>

            <span className="text-[15vw] font-display font-semibold tracking-[-0.035em] text-[#231F20] leading-[1.05] relative z-10 [text-rendering:optimizeLegibility]">
              <MaskedHeading text="Brands" delay={0.15} />
            </span>
          </div>

          {/* Line 3: That Grow, */}
          <div className="flex items-center pt-0.5">
            <h2 className="text-[15vw] font-display font-semibold tracking-[-0.035em] text-[#231F20] leading-[1.05] relative z-10 [text-rendering:optimizeLegibility]">
              <MaskedHeading text="That Grow," delay={0.25} />
            </h2>
          </div>

          {/* Line 4: Scale, on LEFT + [Video 2] on RIGHT */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-[15vw] font-display font-semibold tracking-[-0.035em] text-[#231F20] leading-[1.05] relative z-10 [text-rendering:optimizeLegibility]">
              <MaskedHeading text="Scale," delay={0.35} />
            </span>

            <div className="relative shrink-0">
              <div className="absolute -inset-1.5 rounded-2xl bg-[#82FFCD]/40 blur-md pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[110px] xs:w-[125px] aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-black/[0.08] shadow-xs shrink-0"
              >
                <video
                  ref={videoRef2}
                  src="/videos/zobay.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </div>
          </div>

          {/* Line 5: & Lead */}
          <div className="flex items-center pt-0.5">
            <span className="text-[15vw] font-display font-semibold tracking-[-0.035em] text-[#231F20] leading-[1.05] relative z-10 [text-rendering:optimizeLegibility]">
              <MaskedHeading text="& Lead" delay={0.45} />
            </span>
          </div>

          {/* Editorial Narrative */}
          <div className="pt-2">
            <p className="text-[14px] text-[#231F20] font-normal leading-relaxed">
              <strong className="font-semibold text-black">Strategically architected, globally deployed</strong> – we engineer autonomous AI systems, intelligent software architectures, and high-performance digital platforms built to maximize enterprise value.
            </p>
          </div>

          {/* Line 6: [Video 3] Staggered / Indented under narrative */}
          <div className="pt-3 flex justify-center xs:justify-end pr-2">
            <div className="relative shrink-0">
              <div className="absolute -inset-1.5 rounded-2xl bg-[#82FFCD]/30 blur-md pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[130px] xs:w-[145px] aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-black/[0.08] shadow-xs shrink-0"
              >
                <video
                  ref={videoRef3}
                  src="/videos/startone.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </div>
          </div>

          {/* Line 7: Bottom Email & Phone */}
          <div className="pt-2 text-right text-xs sm:text-sm font-medium text-[#231F20] space-y-0.5">
            <a
              href="mailto:tharun.hs@stratotechcorp.in"
              className="block font-semibold text-black hover:underline"
            >
              tharun.hs@stratotechcorp.in
            </a>
            <p className="text-zinc-600">+91 98765 43210</p>
          </div>
        </div>

        {/* ── DESKTOP INTERWOVEN HEADLINES (EXACT SCREENSHOT 1 MARINO MATCH) ── */}
        <div className="hidden sm:block space-y-3 lg:space-y-4">
          
          {/* ── LINE 1: Building Brands + Video 1 ── */}
          <motion.div
            style={{ x: line1X }}
            className="flex items-center gap-4 lg:gap-7 flex-nowrap w-full will-change-transform"
          >
            <h1 className="text-[7.5vw] lg:text-[104px] xl:text-[124px] 2xl:text-[138px] font-display font-semibold tracking-[-0.04em] text-[#231F20] leading-[0.98] relative z-10 [text-rendering:optimizeLegibility] shrink-0 flex items-center">
              <MaskedHeading text="Building Brands" delay={0.05} />
            </h1>

            {/* Video 1 with Mint Glow */}
            <div className="relative shrink-0">
              <div className="absolute -inset-3 rounded-[32px] bg-[#82FFCD]/35 blur-xl pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.03 }}
                className="relative w-[150px] md:w-[190px] lg:w-[230px] xl:w-[250px] aspect-[16/10] rounded-[24px] overflow-hidden bg-black border border-black/[0.08] shadow-sm shrink-0 cursor-pointer"
              >
                <video
                  ref={videoRef1}
                  src="/videos/baseone.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </div>
          </motion.div>

          {/* ── LINE 2: Video 2 + That Grow, Scale, ── */}
          <motion.div
            style={{ x: line2X }}
            className="flex items-center gap-4 lg:gap-7 flex-nowrap w-full will-change-transform"
          >
            {/* Video 2 with Mint Glow */}
            <div className="relative shrink-0">
              <div className="absolute -inset-3 rounded-[32px] bg-[#82FFCD]/35 blur-xl pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.03 }}
                className="relative w-[150px] md:w-[190px] lg:w-[230px] xl:w-[250px] aspect-[16/10] rounded-[24px] overflow-hidden bg-black border border-black/[0.08] shadow-sm shrink-0 cursor-pointer"
              >
                <video
                  ref={videoRef2}
                  src="/videos/zobay.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </div>

            <h2 className="text-[7.5vw] lg:text-[104px] xl:text-[124px] 2xl:text-[138px] font-display font-semibold tracking-[-0.04em] text-[#231F20] leading-[0.98] relative z-10 [text-rendering:optimizeLegibility] shrink-0 flex items-center">
              <MaskedHeading text="That Grow, Scale," delay={0.25} />
            </h2>
          </motion.div>

          {/* ── LINE 3: & Lead + Narrative Paragraph ── */}
          <motion.div
            style={{ y: line3Y }}
            className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 pt-1 will-change-transform"
          >
            <div className="flex items-center">
              <span className="text-[7.5vw] lg:text-[104px] xl:text-[124px] 2xl:text-[138px] font-display font-semibold tracking-[-0.04em] text-[#231F20] leading-[0.98] relative z-10 [text-rendering:optimizeLegibility] shrink-0">
                <MaskedHeading text="& Lead" delay={0.35} />
              </span>
            </div>

            {/* Editorial Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-md lg:max-w-xl pl-2"
            >
              <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-[#231F20] font-normal leading-relaxed">
                <strong className="font-semibold text-black">Strategically architected, globally deployed</strong> – we engineer autonomous AI systems, intelligent software architectures, and high-performance digital platforms built to maximize enterprise value.
              </p>
            </motion.div>
          </motion.div>

          {/* ── LINE 4: Video 3 Positioned Under Narrative ── */}
          <motion.div
            style={{ y: line3Y }}
            className="flex justify-start pl-[20vw] lg:pl-[420px] xl:pl-[480px] pt-2"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-3 rounded-[32px] bg-[#82FFCD]/25 blur-xl pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.03 }}
                className="relative w-[150px] md:w-[190px] lg:w-[230px] xl:w-[250px] aspect-[16/10] rounded-[24px] overflow-hidden bg-black border border-black/[0.08] shadow-sm shrink-0 cursor-pointer"
              >
                <video
                  ref={videoRef3}
                  src="/videos/startone.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </div>
          </motion.div>

          {/* ── DESKTOP BOTTOM METADATA (EMAIL & PHONE ALIGNED RIGHT) ── */}
          <div className="w-full pt-6 sm:pt-10 flex items-center justify-end">
            <div className="flex items-center gap-6 text-[14px] font-medium text-black">
              <a
                href="mailto:tharun.hs@stratotechcorp.in"
                className="hover:underline transition-all text-black font-semibold"
              >
                tharun.hs@stratotechcorp.in
              </a>
              <span className="text-zinc-600 font-medium">+91 98765 43210</span>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
