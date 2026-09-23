"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface WorkProject {
  id: string;
  name: string;
  image: string;
  pills: string[];
  href: string;
}

const LEFT_PROJECTS: WorkProject[] = [
  {
    id: "salesx",
    name: "SalesX",
    image: "/images/products/salesx_custom.jpg",
    pills: ["UI/UX Design", "Web Development", "AI Engine", "CRM"],
    href: "/products/salesx",
  },
  {
    id: "zobay-voice",
    name: "Zobay Voice",
    image: "/images/products/zobay_custom.jpg",
    pills: ["Voice AI", "Neural Audio", "WebRTC", "Cloud & DevOps"],
    href: "/projects/zobay-voice-ai",
  },
];

const RIGHT_PROJECTS: WorkProject[] = [
  {
    id: "stratocalendar",
    name: "StratoCalendar",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
    pills: ["UI/UX Design", "Web Development", "Cloud & DevOps"],
    href: "/products",
  },
  {
    id: "meetingx",
    name: "MeetingX",
    image: "/images/products/meetingx_pinterest.jpg",
    pills: ["WebRTC", "AI Summary", "Web Development"],
    href: "/products/meetingx",
  },
];

const REVIEWS = [
  {
    quote: "“Absolutely fantastic team to work with!”",
    author: "Atem Eyong",
    company: "Hard Rock Cafe",
  },
  {
    quote: "“SalesX transformed our pipeline. Response times dropped to under 4 minutes!”",
    author: "Marcus Vance",
    company: "Apex Global Software",
  },
  {
    quote: "“Zobay Voice AI handles thousands of inbound calls with sub-280ms human latency.”",
    author: "Adrian Lambert",
    company: "Blackbird",
  },
  {
    quote: "“MeetingX provides crisp video with automatic AI action summaries for our team.”",
    author: "Sarah Lin",
    company: "Nordic Media Labs",
  },
  {
    quote: "“If you are looking for a superb, competent, and fast creative partner, this is it.”",
    author: "Joe Weagraff",
    company: "Hitachi",
  },
  {
    quote: "“Consistently delivered on every SLA promise. Our revenue grew 400% in 18 months.”",
    author: "Mike Jackson",
    company: "Modern Garden Rooms",
  },
];

function WorkCard({ project }: { project: WorkProject }) {
  return (
    <Link
      href={project.href}
      className="group block relative rounded-[28px] sm:rounded-[34px] overflow-hidden bg-zinc-900 border border-white/10 aspect-[4/3] sm:aspect-[16/12] w-full transition-transform duration-500 hover:scale-[1.01]"
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      {/* Bottom vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 space-y-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white">
            {project.name}
          </h3>
          <div className="flex items-center gap-2 pt-1 text-sm font-semibold text-white group-hover:text-[#82FFCD] transition-colors">
            <span>View work</span>
            <svg width="32" height="6" viewBox="0 0 37 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.2762 2.59777C36.4019 2.47207 36.4019 2.26828 36.2762 2.14259L34.2279 0.0942678C34.1022 -0.0314274 33.8984 -0.0314274 33.7727 0.0942678C33.647 0.219963 33.647 0.423755 33.7727 0.54945L35.5934 2.37018L33.7727 4.19091C33.647 4.3166 33.647 4.52039 33.7727 4.64609C33.8984 4.77178 34.1022 4.77178 34.2279 4.64609L36.2762 2.59777ZM0 2.37018V2.69204H36.0486V2.37018V2.04832H0V2.37018Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Term Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.pills.map((pill, i) => (
            <span
              key={i}
              className="px-3.5 py-1 rounded-full border border-white/30 text-[11px] font-sans text-white/90 hover:border-white transition-colors"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function MarinoSelectedWork() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const handleNextReview = () => {
    setReviewIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrevReview = () => {
    setReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-[#000000] text-white overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
        
        {/* ── 2-COLUMN ZIG-ZAG STAGGERED GRID (EXACT SCREENSHOT MATCH) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── LEFT COLUMN: SalesX (Card 1) -> Zobay Voice (Card 2) -> Feedback Ticker ── */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-12">
            
            {/* 1. SalesX Card */}
            <WorkCard project={LEFT_PROJECTS[0]} />

            {/* 2. Zobay Voice Card */}
            <WorkCard project={LEFT_PROJECTS[1]} />

            {/* 3. Feedback / Testimonial & Mint Arrows (Under Card 2) */}
            <div className="pt-4 sm:pt-6 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={reviewIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-white tracking-tight leading-snug">
                    {REVIEWS[reviewIndex].quote}
                  </blockquote>
                  <div className="text-sm sm:text-base">
                    <span className="text-[#82FFCD] font-bold">{REVIEWS[reviewIndex].author}:</span>{" "}
                    <strong className="text-white font-bold">{REVIEWS[reviewIndex].company}</strong>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls: ← 1/6 → */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handlePrevReview}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#82FFCD] hover:bg-white text-black flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                >
                  <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.6072 12.5096C6.37874 12.7381 6.37874 13.1085 6.6072 13.3369L10.3302 17.0599C10.5587 17.2884 10.9291 17.2884 11.1575 17.0599C11.386 16.8315 11.386 16.4611 11.1575 16.2326L7.8482 12.9233L11.1575 9.61396C11.386 9.38549 11.386 9.01509 11.1575 8.78662C10.9291 8.55816 10.5587 8.55816 10.3302 8.78662L6.6072 12.5096ZM19.8911 12.9233L19.8911 12.3383L7.02087 12.3383L7.02087 12.9233L7.02087 13.5083L19.8911 13.5083L19.8911 12.9233Z" fill="black"/>
                  </svg>
                </button>

                <span className="font-mono text-xs sm:text-sm text-white font-semibold px-1 select-none">
                  {reviewIndex + 1} / {REVIEWS.length}
                </span>

                <button
                  onClick={handleNextReview}
                  aria-label="Next testimonial"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#82FFCD] hover:bg-white text-black flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                >
                  <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.134 13.2838C19.3625 13.0554 19.3625 12.6849 19.134 12.4565L15.411 8.73349C15.1826 8.50503 14.8122 8.50503 14.5837 8.73349C14.3552 8.96196 14.3552 9.33236 14.5837 9.56083L17.893 12.8701L14.5837 16.1795C14.3552 16.4079 14.3552 16.7783 14.5837 17.0068C14.8122 17.2353 15.1826 17.2353 15.411 17.0068L19.134 13.2838ZM5.8501 12.8701V13.4552H18.7203V12.8701V12.2851H5.8501V12.8701Z" fill="black"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Header (Top) -> StratoCalendar (Card 3) -> MeetingX (Card 4) ── */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-12">
            
            {/* Header: Our latest work + Description + View all work */}
            <div className="space-y-4 pb-2 sm:pb-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-white" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-white">
                  Our latest work
                </h2>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-md">
                Stratotech engineers autonomous AI systems, intelligent software architectures, and high-performance digital products.
              </p>

              <div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-[#82FFCD] hover:text-white font-semibold text-sm transition-colors group"
                >
                  <span>View all work</span>
                  <svg width="34" height="6" viewBox="0 0 37 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.2762 2.59777C36.4019 2.47207 36.4019 2.26828 36.2762 2.14259L34.2279 0.0942678C34.1022 -0.0314274 33.8984 -0.0314274 33.7727 0.0942678C33.647 0.219963 33.647 0.423755 33.7727 0.54945L35.5934 2.37018L33.7727 4.19091C33.647 4.3166 33.647 4.52039 33.7727 4.64609C33.8984 4.77178 34.1022 4.77178 34.2279 4.64609L36.2762 2.59777ZM0 2.37018V2.69204H36.0486V2.37018V2.04832H0V2.37018Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* 3. StratoCalendar Card */}
            <WorkCard project={RIGHT_PROJECTS[0]} />

            {/* 4. MeetingX Card */}
            <WorkCard project={RIGHT_PROJECTS[1]} />

          </div>

        </div>

      </div>
    </section>
  );
}
