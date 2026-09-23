"use client";

import React from "react";
import { motion } from "motion/react";
import { Star, Globe, Award, TrendingUp } from "lucide-react";

export default function MarqueeTrustTicker() {
  const items = [
    { icon: Star, text: "100 verified 5 star reviews" },
    { icon: Globe, text: "Clients in 30 countries" },
    { icon: Award, text: "Decade of experience" },
    { icon: TrendingUp, text: "Mission-critical AI systems" },
  ];

  return (
    <div className="w-full bg-[#111111] text-white py-4 sm:py-5 border-y border-white/10 overflow-hidden select-none">
      <div className="flex w-max">
        {/* Loop 1 */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12"
        >
          {[...items, ...items, ...items, ...items].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#82FFCD]" />
                <span className="text-[13px] sm:text-[14px] font-sans font-medium tracking-tight text-zinc-200 whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
