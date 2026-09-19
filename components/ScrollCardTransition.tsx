"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";

interface ScrollCardTransitionProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "article" | "li" | "section";
  disabled?: boolean;
}

/**
 * GLOBAL CARD SCROLL TRANSITION SYSTEM
 * 
 * Symmetrical bi-directional scroll physics:
 * When entering from bottom (Next card):
 *   opacity: 0.45, scale: 0.985, translateY: 16px
 * When centered in viewport (Active card):
 *   opacity: 1.0, scale: 1.0, translateY: 0px
 * When leaving toward top (Previous card):
 *   opacity: 0.70, scale: 0.985, translateY: -16px
 * 
 * Works identically and symmetrically when scrolling DOWN and UP in reverse.
 * Never locks or hijacks the scroll. Respects prefers-reduced-motion.
 */
export default function ScrollCardTransition({
  children,
  className = "",
  index = 0,
  as = "div",
  disabled = false,
}: ScrollCardTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track position relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out scroll position with gentle spring for continuous feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.2,
    restDelta: 0.001,
  });

  // Symmetrical bi-directional transformations
  // Progress 0.0: Entering at bottom (Next)
  // Progress 0.20 - 0.80: Active in viewport center
  // Progress 1.0: Exiting at top (Previous)
  const rawOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0.45, 1, 1, 0.7]
  );

  const rawScale = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0.985, 1, 1, 0.985]
  );

  const rawY = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [16, 0, 0, -16]
  );

  if (shouldReduceMotion || disabled) {
    const Tag = as as keyof React.JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      ref={containerRef}
      style={{
        opacity: rawOpacity,
        scale: rawScale,
        y: rawY,
      }}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {children}
    </MotionComponent>
  );
}
