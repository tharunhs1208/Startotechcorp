"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMPANY_STATS } from "@/data/siteData";

export default function StatsSection() {
  return (
    <section className="py-16 bg-blue-600 text-white border-b border-blue-700 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1"
            >
              <div className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-blue-100 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
