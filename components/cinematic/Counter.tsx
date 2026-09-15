"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function Counter({
  value,
  suffix = "+",
  label,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: value,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(obj.v)}${suffix}`;
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, suffix]);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span
        ref={ref}
        className="display-lg text-[13vw] sm:text-[7vw] lg:text-[5vw] text-[#f2f2ec]"
      >
        0{suffix}
      </span>
      <span className="text-xs uppercase tracking-[0.3em] text-[#8f8f88]">
        {label}
      </span>
    </div>
  );
}