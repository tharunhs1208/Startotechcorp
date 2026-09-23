"use client";

import React from "react";
import { motion } from "motion/react";

const PARTNERS = [
  "HITACHI",
  "HARD ROCK CAFE",
  "BLACKBIRD",
  "LATAKOO",
  "VISLINK",
  "ISTOBAL",
  "APEX GLOBAL",
  "VANGUARD",
  "MERIDIAN",
  "BASEONE",
];

export default function LogoPartnersTicker() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 border-y border-black/[0.08] overflow-hidden">
      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          className="flex items-center gap-12 sm:gap-18 shrink-0 pr-12 sm:pr-18"
        >
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div
              key={idx}
              className="font-display text-[15px] sm:text-[17px] font-extrabold tracking-[0.18em] text-[#111111]/70 hover:text-black transition-colors shrink-0 uppercase"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
