"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import ScrollCardTransition from "./ScrollCardTransition";

interface ScrollMaskTextProps {
  children?: string;
  text?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  dimOpacity?: number;
}

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
  dimOpacity: number;
}

function Word({ children, range, progress, dimOpacity }: WordProps) {
  const opacity = useTransform(progress, range, [dimOpacity, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgba(29, 29, 31, 0.22)", "rgba(29, 29, 31, 1)"]
  );
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0">
      <motion.span
        style={{ opacity, color, y }}
        className="inline-block transition-colors duration-100 will-change-[transform,opacity,color]"
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * PixFort signature Scroll Mask Reveal Text component:
 * Progressively illuminates words from dimmed neutral to deep black as the user scrolls through the viewport.
 */
export function ScrollMaskText({
  children,
  text,
  className = "",
  as: Component = "p",
  dimOpacity = 0.2,
}: ScrollMaskTextProps) {
  const content = text || children || "";
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.88", "end 0.38"],
  });

  const words = content.split(" ");

  return (
    <Component ref={containerRef} className={className}>
      <span className="inline-flex flex-wrap items-baseline">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              range={[start, end]}
              progress={scrollYProgress}
              dimOpacity={dimOpacity}
            >
              {word}
            </Word>
          );
        })}
      </span>
    </Component>
  );
}

interface ScrollMaskImageProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PixFort signature Scroll Mask Image/Card Reveal:
 * Smoothly expands clip-path, scales smoothly from 0.94 to 1.0, and fades into full clarity on scroll.
 */
export function ScrollMaskImage({
  children,
  className = "",
}: ScrollMaskImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "end 0.5"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.6, 0.95, 1]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    ["36px", "24px"]
  );

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale,
        opacity,
        borderRadius,
      }}
      className={`overflow-hidden will-change-[transform,opacity] ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface ScrollMaskCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

/**
 * Scroll Mask Reveal Card for lists and grids (disciplines, team, principles)
 * Fully aligned with the global bi-directional card scroll transition system.
 */
export function ScrollMaskCard({
  children,
  className = "",
  index = 0,
}: ScrollMaskCardProps) {
  return (
    <ScrollCardTransition index={index} className={className}>
      {children}
    </ScrollCardTransition>
  );
}

export default ScrollMaskText;
