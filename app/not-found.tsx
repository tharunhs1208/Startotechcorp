"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import VideoLayer from "@/components/cinematic/VideoLayer";
import Reveal from "@/components/cinematic/Reveal";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] text-[#f2f2ec]">
      {/* Full-screen video background */}
      <VideoLayer src="/videos/hero-pinterest.mp4" overlay="scrim" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6">
        {/* Giant outline 404 */}
        <Reveal delay={0.1} y={60}>
          <div className="display-xl text-7xl sm:text-9xl md:text-[18vw] text-outline leading-none select-none">
            404
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.3} y={40}>
          <h1 className="display-xl text-3xl sm:text-5xl lg:text-6xl mt-4 leading-tight break-words">
            YOU&apos;VE ENTERED
            <br />
            <span className="text-[#b7ff4a]">UNCHARTED</span>
            <br />
            TERRITORY.
          </h1>
        </Reveal>

        {/* Sub-copy */}
        <Reveal delay={0.45} y={20}>
          <p className="mt-4 sm:mt-6 text-white/50 text-xs sm:text-base max-w-sm leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
            you back on track.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.6} y={20}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-pill btn-accent-c inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go Home
            </Link>
            <Link href="/projects" className="btn-pill btn-ghost">
              Explore Products
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
