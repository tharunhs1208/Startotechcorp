"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarqueeTrustTicker from "@/components/MarqueeTrustTicker";
import Breadcrumbs from "@/components/Breadcrumbs";

function LongArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="72"
      height="14"
      viewBox="0 0 72 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 inline-block ${className}`}
    >
      <path
        d="M0 7H68M68 7L60 1.5M68 7L60 12.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ServiceCapability {
  id: string;
  name: string;
  dotColor: string;
  tagline: string;
  image: string;
  pills: string[];
}

const CAPABILITIES: ServiceCapability[] = [
  {
    id: "web-development",
    name: "Web Development",
    dotColor: "bg-[#D7BFFF]",
    tagline: "High-performance web applications engineered with Next.js, React, and modular TypeScript architectures.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    pills: ["Next.js App Router", "React Architecture", "Full-Stack APIs", "Tailwind CSS", "Edge Caching"],
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    dotColor: "bg-[#D7BFFF]",
    tagline: "User-centric digital interfaces, comprehensive Figma token systems, and intuitive customer journey blueprints.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    pills: ["UX & UI Design", "Figma Design Systems", "Interactive Prototyping", "User Research", "Conversion-Focused Design"],
  },
  {
    id: "ai-machine-learning",
    name: "AI & Machine Learning",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Intelligent neural voice agents, sub-280ms conversational pipelines, and enterprise LLM automation workflows.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    pills: ["Voice AI Agents", "LLM Fine-Tuning", "Enterprise RAG", "Neural Audio Pipelines", "Autonomous SDRs"],
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Multi-region edge infrastructure, automated CI/CD deployment pipelines, and high-availability architectures.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    pills: ["AWS & Edge CDN", "Docker & Kubernetes", "Terraform IaC", "99.99% SLAs", "Zero-Downtime Deploys"],
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Native and cross-platform mobile apps powered by React Native and Flutter with native performance and offline sync.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    pills: ["React Native", "iOS & Android", "Offline Persistence", "Push Notifications", "Biometric Auth"],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Identity",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Zero-trust architecture, biometric protection, and automated enterprise compliance auditing.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    pills: ["Zero-Trust Auth", "Penetration Testing", "Data Encryption", "SOC 2 Readiness", "Vulnerability Audits"],
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Strategic tech consulting to modernize legacy operations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    pills: ["Legacy Modernization", "Process Automation", "Enterprise Architecture", "API Webhooks", "Data Migration"],
  },
];

const CLIENT_LOGOS = [
  { name: "Hard Rock Cafe", font: "font-serif tracking-tight" },
  { name: "ISTOBAL", font: "font-mono font-bold tracking-widest" },
  { name: "LEONARDO Hotels", font: "font-sans font-semibold tracking-wider" },
  { name: "HITACHI", font: "font-sans font-black tracking-widest" },
  { name: "Haines Watts", font: "font-serif italic font-medium" },
  { name: "VISLINK", font: "font-mono font-extrabold tracking-widest" },
  { name: "APPLIED NUTRITION", font: "font-sans font-extrabold tracking-tight" },
];

const TESTIMONIALS = [
  {
    quote: "Absolutely fantastic team to work with!",
    author: "Atem Eyong",
    company: "Hard Rock Cafe",
  },
  {
    quote: "The quality was excellent, and communication throughout was clear and professional. I highly recommend Stratotech.",
    author: "Abbie Booth",
    company: "Istobal",
  },
  {
    quote: "We've worked with Stratotech for years. Their engineering and AI expertise has consistently driven exceptional results.",
    author: "Adrian Lambert",
    company: "Blackbird",
  },
  {
    quote: "We're thrilled with the SEO audit and implementations! It's exciting to see our targeted keywords making their way to page one.",
    author: "Chris Cheadle",
    company: "Northern Dough Co",
  },
  {
    quote: "Exceptional design and engineering execution. Delivered our multi-platform digital launch with zero downtime.",
    author: "Elena Rostova",
    company: "Vanguard Tech",
  },
  {
    quote: "A true strategic partner who understands high-conversion UX and modern digital architecture.",
    author: "Samantha Reed",
    company: "Aura Capital",
  },
];

const FAQS = [
  {
    question: "What do branding services include?",
    answer:
      "Our branding services include brand strategy, market positioning audits, visual identity systems, typography & color systems, tone of voice guidelines, logo systems, and complete multi-channel brand rulebooks.",
  },
  {
    question: "Will my branding work across digital platforms?",
    answer:
      "Yes. We design digital-first brand systems engineered for websites, mobile apps, social media channels, high-resolution video streaming, and printed marketing collateral.",
  },
  {
    question: "Do branding projects include messaging and copywriting?",
    answer:
      "Yes. Comprehensive verbal identity, taglines, core narrative pillars, and tone-of-voice playbooks are included in our brand strategy engagements.",
  },
  {
    question: "How long does a branding project take?",
    answer:
      "A standard comprehensive branding project typically takes 4 to 8 weeks depending on scope, research depth, stakeholder sprints, and collateral requirements.",
  },
  {
    question: "What's the difference between branding and logo design?",
    answer:
      "Logo design forms just a part of branding. A strong brand includes great logos as well as a distinct tone of voice and eye-catching colour palettes. Branding helps shape how your audiences understand and remember your business.",
  },
  {
    question: "Do you offer rebranding for established businesses?",
    answer:
      "Yes, absolutely. Established businesses may feel their current identity is out of sync with new services or markets. We specialise in modernizing heritage brands without losing equity.",
  },
];

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState<string>("web-design"); // default opened as in video
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#231F20] antialiased selection:bg-[#82FFCD] selection:text-black">
      {/* ── 1. NAVBAR (Blurred with Hover Dropdown & Arrows) ── */}
      <Navbar />

      <main className="pt-28 sm:pt-36 lg:pt-40">
        {/* Brand Logo at the starting */}
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 mb-4 sm:mb-6">
          <Link
            href="/"
            className="inline-block font-display text-2xl sm:text-3xl font-black tracking-[-0.04em] text-[#111111] hover:opacity-85 transition-opacity"
          >
            STRATOTECH
          </Link>
        </div>

        {/* ── 2. HERO: "What We Do" ── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 pb-14 sm:pb-20 border-b border-black/[0.08]">
          <div className="flex items-center justify-between gap-4 mb-6">
            <Breadcrumbs items={[{ label: "Services" }]} />
            <span className="px-4 py-1.5 rounded-full bg-[#82FFCD] text-black text-xs font-semibold shadow-xs">
              Senior specialists
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            <div className="lg:col-span-8">
              <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-display font-extrabold text-black tracking-tight leading-none mb-4">
                What We Do
              </h1>

              <p className="text-[15px] sm:text-[17px] text-[#444444] font-normal leading-relaxed max-w-2xl mt-4">
                From custom full-stack web engineering and conversational AI voice agents to cloud infrastructure and design systems, we build resilient, high-performance software tailored for modern enterprises.
              </p>
            </div>

            {/* Top Right Contact info */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="text-right text-xs font-medium text-black">
                <a href="mailto:contact@stratotechcorp.in" className="hover:underline font-semibold block">
                  contact@stratotechcorp.in
                </a>
                <span className="font-mono text-[#555] block">
                  Bengaluru · Global AI Engineering
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. EXPANDABLE CAPABILITIES LIST (Exact Screenshot 2026-09-23 104328.png) ── */}
        <section className="max-w-[1380px] mx-auto px-5 sm:px-8 py-10 sm:py-16 divide-y divide-black/[0.08]">
          {CAPABILITIES.map((cap) => {
            const isExpanded = expandedId === cap.id;
            return (
              <div
                key={cap.id}
                onClick={() => setExpandedId(isExpanded ? "" : cap.id)}
                onMouseEnter={() => setExpandedId(cap.id)}
                className="py-8 sm:py-12 transition-all cursor-pointer group"
              >
                {isExpanded ? (
                  /* ── EXPANDED ROW (Exact Screenshot 2026-09-23 104328.png) ── */
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 animate-fadeIn">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 flex-1">
                      {/* Left Portrait Image */}
                      <div className="w-[130px] sm:w-[160px] aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200 shrink-0 border border-black/10 shadow-sm">
                        <img
                          src={cap.image}
                          alt={cap.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Middle: Title + Bullets joined by • */}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2.5">
                          <h2 className="text-3xl sm:text-5xl font-display font-bold text-black tracking-tight">
                            {cap.name}
                          </h2>
                          <span className="w-3.5 h-3.5 rounded-full bg-[#D7BFFF] shrink-0 inline-block" />
                        </div>

                        <p className="text-base sm:text-lg text-[#231F20] font-normal leading-relaxed">
                          {cap.pills.join(" • ")}
                        </p>
                      </div>
                    </div>

                    {/* Right: More Info Link to Service Details Page */}
                    <div className="shrink-0 flex items-center justify-end">
                      <Link
                        href={`/services/${cap.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold text-black hover:opacity-75 transition-all group/btn py-2"
                      >
                        <span className="whitespace-nowrap">More Info</span>
                        <LongArrow className="transition-transform duration-300 group-hover/btn:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* ── COLLAPSED ROW (Exact Screenshot 2026-09-23 104328.png) ── */
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-black tracking-tight group-hover:text-black transition-colors">
                          {cap.name}
                        </h2>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#D7BFFF] shrink-0 inline-block" />
                      </div>

                      <p className="text-[15px] sm:text-[17px] text-[#555555] font-normal max-w-2xl leading-relaxed">
                        {cap.tagline}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center justify-end">
                      <LongArrow className="text-black transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* ── 4. CLIENT LOGO MARQUEE BAR ── */}
        <section className="w-full bg-white py-12 border-t border-b border-black/[0.08] overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 flex items-center justify-around gap-8 flex-wrap opacity-75">
            {CLIENT_LOGOS.map((logo, idx) => (
              <span key={idx} className={`text-base sm:text-lg text-black ${logo.font}`}>
                {logo.name}
              </span>
            ))}
          </div>
        </section>

        {/* ── 5. MANIFESTO QUOTE WITH HIGHLIGHTED PURPLE & MINT CAPSULES ── */}
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-20 sm:py-32 text-center">
          <p className="text-2xl sm:text-4xl lg:text-[44px] font-display font-medium text-black leading-[1.3] tracking-tight">
            Our team is made up of{" "}
            <span className="bg-[#D7BFFF] text-black px-3.5 py-0.5 rounded-full font-semibold">
              bold creatives
            </span>
            , sharp strategists, and{" "}
            <span className="bg-[#D7BFFF] text-black px-3.5 py-0.5 rounded-full font-semibold">
              technical pros
            </span>{" "}
            who care deeply about what they do. No egos, no fluff – just hard work, smart thinking, and a{" "}
            <span className="bg-[#D7BFFF] text-black px-3.5 py-0.5 rounded-full font-semibold">
              genuine commitment
            </span>{" "}
            to our{" "}
            <span className="bg-[#D7BFFF] text-black px-3.5 py-0.5 rounded-full font-semibold">
              clients' success
            </span>
            .
          </p>
        </section>

        {/* ── 6. "OUR LATEST WORK" BLACK MASONRY SECTION WITH EMBEDDED TESTIMONIAL ── */}
        <section className="w-full bg-black text-white py-20 sm:py-28">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8">
            
            {/* Asymmetrical 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Latakoo + Vislink + Embedded Testimonial Slider */}
              <div className="lg:col-span-6 space-y-8">
                {/* Latakoo Card */}
                <div className="group relative rounded-3xl overflow-hidden bg-zinc-950 aspect-[4/3] border border-white/10 shadow-lg flex flex-col justify-end p-6 sm:p-9">
                  <img
                    src="/images/products/zobay_custom.jpg"
                    alt="Latakoo"
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">Latakoo</h3>
                    <p className="text-xs font-mono text-zinc-300 mb-4">View work ────→</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Branding", "Web Design", "SEO", "PPC"].map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono text-white">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vislink Card with Editorial Narrative */}
                <div className="group relative rounded-3xl overflow-hidden bg-zinc-950 aspect-[4/3] border border-white/10 shadow-lg flex flex-col justify-end p-6 sm:p-9">
                  <img
                    src="/images/products/meetingx_pinterest.jpg"
                    alt="Vislink"
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">Schedular</h3>
                    <p className="text-xs font-mono text-zinc-300 mb-3">View work ────→</p>
                    <p className="text-xs text-zinc-300 line-clamp-2 mb-4 leading-relaxed">
                      Schedular is our enterprise intelligent calendar orchestration platform eliminating calendar conflicts across global enterprise teams.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["AI Scheduling", "Web App", "Calendar Sync", "Enterprise"].map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono text-white">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Embedded Testimonial Slider Card */}
                <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
                  <blockquote className="text-xl sm:text-2xl font-display font-medium text-white leading-snug">
                    "{TESTIMONIALS[testimonialIndex].quote}"
                  </blockquote>
                  <div className="text-sm font-semibold text-white">
                    {TESTIMONIALS[testimonialIndex].author}{" "}
                    <span className="font-normal text-zinc-400">· {TESTIMONIALS[testimonialIndex].company}</span>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={handlePrevTestimonial}
                      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-xs"
                    >
                      ←
                    </button>
                    <span className="text-xs font-mono text-zinc-400">
                      {testimonialIndex + 1} / {TESTIMONIALS.length}
                    </span>
                    <button
                      onClick={handleNextTestimonial}
                      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-xs"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Block + WR Partners + Office Insight */}
              <div className="lg:col-span-6 space-y-8">
                {/* Top Section Intro */}
                <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#82FFCD]" />
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Our latest work</h2>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Whether you're part of a multi-national company, an independent business venture or something in between, we would love to hear from you and together we can earn the trust of your future business prospects.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#82FFCD] hover:underline pt-2 font-bold"
                  >
                    <span>View all work</span>
                    <span>────→</span>
                  </Link>
                </div>

                {/* WR Partners Card */}
                <div className="group relative rounded-3xl overflow-hidden bg-zinc-950 aspect-[4/3] border border-white/10 shadow-lg flex flex-col justify-end p-6 sm:p-9">
                  <img
                    src="/images/products/salesx_custom.jpg"
                    alt="WR Partners"
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">WR Partners</h3>
                    <p className="text-xs font-mono text-zinc-300 mb-4">View work ────→</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Branding", "Web Design", "SEO", "PPC", "Video"].map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono text-white">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Office Insight Card */}
                <div className="group relative rounded-3xl overflow-hidden bg-zinc-950 aspect-[4/3] border border-white/10 shadow-lg flex flex-col justify-end p-6 sm:p-9">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                    alt="Office Insight"
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">Office Insight</h3>
                    <p className="text-xs font-mono text-zinc-300 mb-4">View work ────→</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Web Design", "SEO", "PPC"].map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono text-white">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ── 7. KINETIC TICKER RIBBON (100M+ in revenue • Clients in 30 countries • Decades of experience) ── */}
        <MarqueeTrustTicker />

        {/* ── 8. FREQUENTLY ASKED QUESTIONS ACCORDION ── */}
        <section className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#555]">Send us a brief and we'll talk</span>
              <Link
                href="/contact"
                className="px-4 py-1.5 rounded-full bg-[#82FFCD] text-black text-xs font-semibold shadow-xs"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black tracking-tight">
                Frequently asked questions
              </h2>
              <span className="w-3 h-3 rounded-full bg-black shrink-0" />
            </div>
          </div>

          <div className="divide-y divide-black/[0.08] border-t border-b border-black/[0.08]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                  >
                    <span className={`text-lg sm:text-xl font-display font-semibold transition-colors ${
                      isOpen ? "text-black underline underline-offset-4" : "text-[#222222] group-hover:text-black"
                    }`}>
                      {faq.question}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-[#82FFCD] flex items-center justify-center text-black font-bold text-sm shrink-0 shadow-2xs transition-transform duration-300">
                      {isOpen ? "↑" : "↓"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-4 pr-12 text-[14px] sm:text-[15px] text-[#555555] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* ── 9. FOOTER ── */}
      <Footer />
    </div>
  );
}
