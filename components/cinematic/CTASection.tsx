"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import VideoLayer from "./VideoLayer";

interface CTASectionProps {
  title?: string;
  actionLabel?: string;
  href?: string;
  video?: string;
  poster?: string;
}

export default function CTASection({
  title = "HAVE AN IDEA?",
  actionLabel = "LET'S BUILD IT",
  href = "/contact",
  video = "/videos/baseone.mp4",
  poster,
}: CTASectionProps = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelector(".cta-letters"),
        { yPercent: 40, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <VideoLayer src={video} poster={poster} overlay="scrim" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 pb-24">
        <h2 className="cta-letters display-xl text-[15vw] sm:text-[10vw] lg:text-[7.5vw] leading-[0.95]">
          {title}
        </h2>
        <Link
          href={href}
          className="group mt-12 inline-flex items-center gap-4 text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-[#f2f2ec] transition-colors hover:text-[#b7ff4a]"
        >
          {actionLabel}
          <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 transition-all group-hover:border-[#b7ff4a] group-hover:bg-[#b7ff4a] group-hover:text-black">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </Link>
      </div>
    </section>
  );
}