"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, Play, Volume2, VolumeX, Mic } from "lucide-react";

export interface ProductData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  badgeColor: string;
  accentGradient: string;
  glowClass: string;
  icon: "mic" | "grid" | "shield";
  features?: string[];
  metrics?: { label: string; value: string }[];
  tags?: string[];
  image?: string;
  video?: string;
}

interface ProductCardProps {
  product: ProductData;
  onOpenDemo: (productName: string) => void;
  onExpandDetails?: (product: ProductData) => void;
}

export default function ProductCard({ product, onOpenDemo, onExpandDetails }: ProductCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVoicePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (isPlayingVoice) {
        window.speechSynthesis.cancel();
        setIsPlayingVoice(false);
      } else {
        window.speechSynthesis.cancel();
        const sampleText =
          product.name === "Zobay"
            ? "Hello, this is Zobay voice AI operating with sub 280 millisecond turnaround and natural empathy."
            : product.name === "LegalX"
            ? "LegalX engine active. Analyzed Master Services Agreement with zero indemnification risk."
            : "StartOne Cloud OS live. Multi-tenant ledger and automated workflows synchronized.";

        const utterance = new SpeechSynthesisUtterance(sampleText);
        utterance.rate = 1.05;
        utterance.pitch = 1.0;
        utterance.onend = () => setIsPlayingVoice(false);
        utterance.onerror = () => setIsPlayingVoice(false);
        setIsPlayingVoice(true);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <div
      id={product.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenDemo(product.name)}
      className="group relative h-[440px] sm:h-[480px] w-full rounded-3xl overflow-hidden bg-black border border-white/10 hover:border-[#9fe870]/60 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(159,232,112,0.2)] flex flex-col justify-between cursor-pointer"
    >
      {/* 1. Full-Bleed Video Background that Plays on Cursor Hover */}
      {product.video && (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform opacity-75 group-hover:opacity-100"
        >
          <source src={product.video} type="video/mp4" />
        </video>
      )}

      {/* 2. Top Color Gradient Line */}
      <div className={`relative z-10 h-1.5 w-full bg-gradient-to-r ${product.accentGradient}`} />

      {/* 3. Ambient Dark Overlay & Top Gloss */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      {/* 4. Top Play Indicator Badge & Voice Demo Trigger */}
      <div className="relative z-10 p-6 flex items-center justify-between">
        <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-[#9fe870] group-hover:text-[#0e0f0c] group-hover:border-[#9fe870] transition-all duration-300 shadow-lg">
          {isHovered ? (
            <div className="flex items-center gap-0.5">
              <span className="w-0.5 h-3 bg-white group-hover:bg-[#0e0f0c] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-0.5 h-4 bg-white group-hover:bg-[#0e0f0c] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-0.5 h-2.5 bg-white group-hover:bg-[#0e0f0c] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          ) : (
            <Play className="w-4 h-4 fill-white group-hover:fill-[#0e0f0c] ml-0.5 opacity-90" />
          )}
        </div>

        {/* Live Audio Sample Preview Pill */}
        <button
          onClick={handleVoicePreview}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold transition-all backdrop-blur-md border cursor-pointer ${
            isPlayingVoice
              ? "bg-[#9fe870] text-[#0e0f0c] border-[#9fe870] animate-pulse"
              : "bg-black/60 text-gray-300 border-white/15 hover:bg-white/10 hover:text-white"
          }`}
          title="Play live AI voice preview"
        >
          {isPlayingVoice ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#9fe870]" />}
          <span>{isPlayingVoice ? "Stop Audio" : "Voice Sample"}</span>
        </button>
      </div>

      {/* 5. Minimal Sleek Glass Card Footer */}
      <div className="relative z-10 p-6 sm:p-8 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#9fe870] transition-colors">
          {product.name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 line-clamp-2 drop-shadow">
          {product.tagline}
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
            Deploy Architecture
          </span>

          <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#9fe870] border border-white/15 flex items-center justify-center text-white group-hover:text-[#0e0f0c] transition-all duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
