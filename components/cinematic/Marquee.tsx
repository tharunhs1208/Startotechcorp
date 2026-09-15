"use client";

import React from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden border-y border-white/10 py-5 ${className}`}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 text-2xl md:text-3xl font-medium uppercase tracking-tight text-white/30"
          >
            {item}
            <span className="text-[#b7ff4a]/60 text-xl">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}