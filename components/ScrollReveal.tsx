"use client";

import React from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  duration?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  y = 20,
  className = "",
  duration = 0.5,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`will-change-[opacity,transform] ${className}`}
    >
      {children}
    </motion.div>
  );
}
