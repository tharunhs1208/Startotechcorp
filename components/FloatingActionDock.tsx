"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles, Zap, PhoneCall } from "lucide-react";

interface FloatingActionDockProps {
  onOpenDemo?: (productName?: string) => void;
}

export default function FloatingActionDock({ onOpenDemo }: FloatingActionDockProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-1.5 rounded-full bg-white/95 border border-slate-200/90 backdrop-blur-xl shadow-2xl text-slate-900"
        >
          {/* Quick Demo CTA */}
          {onOpenDemo && (
            <button
              onClick={() => onOpenDemo("Floating Dock")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all cursor-pointer shadow-md"
            >
              <Zap className="w-3.5 h-3.5 fill-[#9fe870] text-[#9fe870]" />
              <span>Book Live Demo</span>
            </button>
          )}

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer border border-slate-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
