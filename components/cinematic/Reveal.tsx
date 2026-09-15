"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  start?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 48,
  duration = 1,
  start = "top 85%",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already within or above the viewport
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight * 0.95;

    if (inViewport) {
      gsap.fromTo(
        el,
        { opacity: 0, y: Math.min(y, 24) },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
      return;
    }

    gsap.set(el, { opacity: 0, y });
    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        once,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y, duration, start, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}