"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface ScrollCardTransitionProps {
  children: React.ReactNode;
  className?: string;
  mediaParallax?: boolean;
}

export default function ScrollCardTransition({
  children,
  className = "",
}: ScrollCardTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the element's position relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the scroll progress with a gentle spring for buttery motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  // Bi-directional scale: slightly smaller when entering, 1.0 in center focus, slightly scales when leaving
  const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.93, 1, 1, 0.96]);

  // Bi-directional opacity: fades in on enter, full opacity in view, subtle fade on exit
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.35, 1, 1, 0.55]);

  // Bi-directional vertical translation (scroll parallax lift)
  const y = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [60, 0, 0, -40]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        scale,
        opacity,
        y,
      }}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {children}
    </motion.div>
  );
}
