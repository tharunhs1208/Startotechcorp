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
        
        {/* ── Brand Logo Placed in Hero Section ── */}
        <div className="mb-4 sm:mb-6">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.04em] text-[#111111] hover:opacity-85 transition-opacity"
          >
            STRATOTECH
          </Link>
        </div>

        {/* Interwoven Headline Lines (Large Impactful Marino Typography) */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-7">
          
          {/* ── LINE 1: Building Brands + Video 1 ── */}
          <motion.div
            style={{ x: line1X }}
            className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-wrap sm:flex-nowrap w-full will-change-transform"
          >
            <h1 className="text-[9.5vw] sm:text-[6vw] lg:text-[84px] xl:text-[96px] font-display font-bold tracking-[-0.035em] text-[#231F20] leading-[1.05] sm:leading-none shrink-0 flex items-center">
              <MaskedHeading text="Building Brands" delay={0.05} />
            </h1>

            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              className="relative w-[110px] sm:w-[150px] md:w-[190px] lg:w-[230px] aspect-[16/10] rounded-2xl sm:rounded-[24px] overflow-hidden bg-black border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.08)] shrink-0 cursor-pointer"
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
          </motion.div>

          {/* ── LINE 2: Video 2 + That Grow, Scale, ── */}
          <motion.div
            style={{ x: line2X }}
            className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-wrap sm:flex-nowrap w-full will-change-transform"
          >
            {/* Video 2 (With Mint Glow) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              className="relative w-[110px] sm:w-[150px] md:w-[190px] lg:w-[230px] aspect-[16/10] rounded-2xl sm:rounded-[24px] overflow-hidden bg-black border border-black/[0.08] shadow-[0_0_35px_rgba(130,255,205,0.45)] shrink-0 cursor-pointer"
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

            <h2 className="text-[9.5vw] sm:text-[6vw] lg:text-[84px] xl:text-[96px] font-display font-bold tracking-[-0.035em] text-[#231F20] leading-[1.05] sm:leading-none shrink-0 flex items-center">
              <MaskedHeading text="That Grow, Scale," delay={0.25} />
            </h2>
          </motion.div>

          {/* ── LINE 3: & Lead + Narrative ── */}
          <motion.div
            style={{ y: line3Y }}
            className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 pt-1 will-change-transform"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-[9.5vw] sm:text-[6vw] lg:text-[84px] xl:text-[96px] font-display font-bold tracking-[-0.035em] text-[#231F20] leading-none shrink-0">
                &amp;
              </span>
              
              <span className="text-[9.5vw] sm:text-[6vw] lg:text-[84px] xl:text-[96px] font-display font-bold tracking-[-0.035em] text-[#231F20] leading-none shrink-0">
                <MaskedHeading text="Lead" delay={0.35} />
              </span>
            </div>

            {/* Editorial Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-xl pl-1 sm:pl-2"
            >
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#231F20] font-normal leading-relaxed">
                <strong className="font-semibold text-black">Architected for exponential scale</strong> – we engineer autonomous AI systems, intelligent voice automation, and high-performance software platforms built to dominate modern industries.
              </p>
            </motion.div>
          </motion.div>

          {/* ── LINE 4: Video 3 Positioned Under Narrative ── */}
          <motion.div
            style={{ y: line3Y }}
            className="flex justify-start sm:pl-[14vw] lg:pl-[360px] pt-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              className="relative w-[110px] sm:w-[150px] md:w-[190px] lg:w-[230px] aspect-[16/10] rounded-2xl sm:rounded-[24px] overflow-hidden bg-black border border-black/[0.08] shadow-[0_0_35px_rgba(130,255,205,0.45)] shrink-0 cursor-pointer"
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
          </motion.div>

        </div>

        {/* ── BOTTOM METADATA ── */}
        <div className="w-full pt-8 sm:pt-10 flex items-center justify-end">
          <div className="flex items-center gap-4 sm:gap-6 text-[13px] sm:text-[14px] font-medium text-black">
            <a
              href="mailto:contact@stratotechcorp.in"
              className="hover:underline transition-all text-black font-semibold"
            >
              contact@stratotechcorp.in
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
