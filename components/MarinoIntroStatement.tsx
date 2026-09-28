"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

interface ScrollHighlightProps {
  children: React.ReactNode;
  range: [number, number];
  scrollYProgress: MotionValue<number>;
  color?: string;
}

function ScrollHighlightPill({
  children,
  range,
  scrollYProgress,
  color = "#D7BFFF",
}: ScrollHighlightProps) {
  // Smooth scroll up/down bidirectional interpolation
  const bgOpacity = useTransform(
    scrollYProgress,
    [Math.max(0, range[0] - 0.08), range[0], range[1], Math.min(1, range[1] + 0.12)],
    [0.1, 1, 1, 0.6]
  );
  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, range[0] - 0.08), range[0], range[1]],
    [0.94, 1.05, 1]
  );
  const textY = useTransform(
    scrollYProgress,
    [Math.max(0, range[0] - 0.08), range[0]],
    [2, 0]
  );

  return (
    <span className="relative inline-block mx-1 my-0.5 align-middle">
      <motion.span
        style={{
          backgroundColor: color,
          opacity: bgOpacity,
          scale: scale,
        }}
        className="absolute inset-0 rounded-full -z-0 transition-shadow duration-300"
      />
      <motion.span
        style={{ y: textY }}
        className="relative z-10 px-3.5 py-0.5 text-black font-semibold inline-block whitespace-nowrap"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function MarinoIntroStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"],
  });

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 sm:py-32 lg:py-36 bg-[#F3F3F3] relative overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        
        {/* Scroll-Driven Highlight Color Transitions */}
        <div className="space-y-10 sm:space-y-12 text-left">
          <p className="text-2xl sm:text-4xl lg:text-[42px] font-display font-medium text-[#111111] leading-[1.35] tracking-[-0.025em]">
            Our team is made up of{" "}
            <ScrollHighlightPill
              range={[0.05, 0.22]}
              scrollYProgress={scrollYProgress}
              color="#D7BFFF"
            >
              bold creatives,
            </ScrollHighlightPill>{" "}
            <ScrollHighlightPill
              range={[0.18, 0.35]}
              scrollYProgress={scrollYProgress}
              color="#82FFCD"
            >
              sharp strategists,
            </ScrollHighlightPill>{" "}
            and{" "}
            <ScrollHighlightPill
              range={[0.3, 0.48]}
              scrollYProgress={scrollYProgress}
              color="#D7BFFF"
            >
              technical pros
            </ScrollHighlightPill>{" "}
            who care deeply about what they do. No egos, no fluff – just hard work, smart thinking, and a{" "}
            <ScrollHighlightPill
              range={[0.45, 0.62]}
              scrollYProgress={scrollYProgress}
              color="#82FFCD"
            >
              genuine commitment
            </ScrollHighlightPill>{" "}
            to our{" "}
            <ScrollHighlightPill
              range={[0.58, 0.75]}
              scrollYProgress={scrollYProgress}
              color="#D7BFFF"
            >
              clients’ success.
            </ScrollHighlightPill>{" "}
            We treat every brand and budget like it’s our own,{" "}
            <ScrollHighlightPill
              range={[0.72, 0.9]}
              scrollYProgress={scrollYProgress}
              color="#82FFCD"
            >
              always deliver on promises,
            </ScrollHighlightPill>{" "}
            and never lock clients into contracts.
          </p>

          {/* Right Aligned About Us Button */}
          <div className="flex justify-end pt-2">
            <Link
              href="/about"
              className="inline-flex items-center px-7 py-3 rounded-full bg-black text-white hover:bg-[#82FFCD] hover:text-black font-semibold text-[13.5px] transition-all duration-300 shadow-xs"
            >
              <span>About Us</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
