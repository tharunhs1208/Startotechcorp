"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

interface ScrollVideoShowcaseProps {
  onOpenDemo?: () => void;
}

export default function ScrollVideoShowcase({ onOpenDemo }: ScrollVideoShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into vertical scroll position for the pinned multi-viewport track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. TOP HEADING: As video comes in, heading goes UP and fades out
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12, 0.28], [1, 0.7, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.12, 0.28], [0, -50, -180]);
  const headerScale = useTransform(scrollYProgress, [0, 0.28], [1, 0.88]);

  // 2. VIDEO 3D TOP-CORNER EXPANSION TO FULLSCREEN & EXIT
  // Scale: starts compact (0.72) -> expands to 1.0 (fullscreen) -> shrinks out (0.76)
  const videoScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.68, 1],
    [0.72, 1, 1, 0.76]
  );

  // Border radius: starts rounded (36px) -> edge-to-edge square (0px) -> rounded (32px)
  const videoRadius = useTransform(
    scrollYProgress,
    [0, 0.35, 0.68, 1],
    ["36px", "0px", "0px", "32px"]
  );

  // 3D perspective tilt (emerging from top corner with dynamic 3D angle)
  const videoRotateX = useTransform(
    scrollYProgress,
    [0, 0.35, 0.68, 1],
    [16, 0, 0, -12]
  );
  const videoRotateY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.68, 1],
    [-6, 0, 0, 4]
  );
  const videoRotateZ = useTransform(
    scrollYProgress,
    [0, 0.35, 0.68, 1],
    [1.5, 0, 0, -1]
  );

  // Vertical movement: lifts up higher (-100) on exit to guarantee clear space above bottom badge
  const videoY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.68, 1],
    [70, 0, 0, -100]
  );

  // Width & height interpolation
  const videoWidth = useTransform(
    scrollYProgress,
    [0, 0.35, 0.68, 1],
    ["88vw", "100vw", "100vw", "86vw"]
  );
  const videoHeight = useTransform(
    scrollYProgress,
    [0, 0.35, 0.68, 1],
    ["56vh", "100vh", "100vh", "50vh"]
  );

  // Video glow transition
  const videoGlow = useTransform(
    scrollYProgress,
    [0, 0.35, 0.68, 1],
    [
      "0px 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(231,0,0,0.15)",
      "0px 0px 0px rgba(0,0,0,0)",
      "0px 0px 0px rgba(0,0,0,0)",
      "0px 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(231,0,0,0.12)"
    ]
  );

  // 3. BOTTOM SECTION: Fades in cleanly below the video with no overlap
  const bottomOpacity = useTransform(scrollYProgress, [0.74, 0.90, 1], [0, 1, 1]);
  const bottomY = useTransform(scrollYProgress, [0.74, 0.90, 1], [60, 0, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[220vh] bg-[#090a0f] z-20 p-0 m-0"
    >
      {/* Sticky pinned viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden [perspective:1400px] p-0 m-0">
        
        {/* 1. TOP HEADING - Goes UP and fades out as the video expands */}
        <motion.div
          style={{
            opacity: headerOpacity,
            y: headerY,
            scale: headerScale,
          }}
          className="absolute top-16 sm:top-20 md:top-24 left-0 right-0 z-30 px-4 sm:px-6 pointer-events-none text-center max-w-5xl mx-auto will-change-transform"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#e70000] mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> High Precision Execution
          </div>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-lg">
            All our enterprise systems{" "}
            <span className="inline-block px-3 py-0.5 rounded-full bg-[#e70000]/10 border border-[#e70000]/30 text-[#e70000] font-mono text-base sm:text-2xl md:text-3xl align-middle mx-1">
              PROVEN
            </span>{" "}
            are delivered with perfection.
          </h2>
        </motion.div>

        {/* 2. THE VIDEO - 100% CLEAN (Zero text inside) with 3D top-corner expansion to Fullscreen */}
        <motion.div
          style={{
            width: videoWidth,
            height: videoHeight,
            borderRadius: videoRadius,
            scale: videoScale,
            rotateX: videoRotateX,
            rotateY: videoRotateY,
            rotateZ: videoRotateZ,
            y: videoY,
            boxShadow: videoGlow,
            transformOrigin: "center top",
          }}
          className="relative overflow-hidden bg-black border border-white/10 will-change-transform z-10 flex items-center justify-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
          >
            <source
              src="https://redstone.software/video/video-banner4.mp4"
              type="video/mp4"
            />
          </video>

          {/* Minimal Subtle Edge Border */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-[inherit]" />
        </motion.div>

        {/* 3. BOTTOM SECTION - Placed down with clean margin, zero overlap with video */}
        <motion.div
          style={{
            opacity: bottomOpacity,
            y: bottomY,
          }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-30 px-4 sm:px-6 pointer-events-auto text-center max-w-4xl mx-auto will-change-transform"
        >
          <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-gray-400 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-2.5 inline-flex items-center gap-2 backdrop-blur-md shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#e70000] animate-pulse" />
            Autonomous Systems in Motion
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2.5 drop-shadow-md">
            We are <span className="text-[#e70000]">proud of every line</span> of code.
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-5 leading-relaxed drop-shadow">
            Sub-280ms voice latency, real-time fiscal orchestration, and automated legal compliance operating continuously.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/portfolio">
              <div className="redstone-btn text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-3.5 cursor-pointer shadow-lg shadow-[#e70000]/20">
                <span>Explore Projects</span>
                <div className="btn-icon-circle">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </Link>

            {onOpenDemo && (
              <button
                onClick={onOpenDemo}
                className="redstone-btn-secondary text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-3.5 cursor-pointer backdrop-blur-lg"
              >
                <span>Request Live Brief</span>
                <div className="btn-icon-circle">
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </div>
              </button>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
