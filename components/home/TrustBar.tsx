"use client";

import React from "react";
import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/data/siteData";

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 mb-8"
        >
          Trusted By High-Growth Startups &amp; Fortune 500 Enterprises
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {CLIENT_LOGOS.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-all flex items-center justify-center text-slate-700 hover:text-slate-900 font-bold text-sm tracking-tight shadow-sm"
            >
              {client.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
