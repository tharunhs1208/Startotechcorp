"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarqueeTrustTicker from "@/components/MarqueeTrustTicker";
import ServiceConsultationCard from "@/components/ServiceConsultationCard";
import Breadcrumbs from "@/components/Breadcrumbs";

function LongArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="72"
      height="14"
      viewBox="0 0 72 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 inline-block w-10 sm:w-14 md:w-[72px] h-auto ${className}`}
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

function ServicesScrollHighlightPill({
  children,
  range,
  scrollYProgress,
  color = "#D7BFFF",
}: {
  children: React.ReactNode;
  range: [number, number];
  scrollYProgress: MotionValue<number>;
  color?: string;
}) {
  const bgOpacity = useTransform(
    scrollYProgress,
    [Math.max(0, range[0] - 0.08), range[0], range[1], Math.min(1, range[1] + 0.12)],
    [0.1, 1, 1, 0.6]
  );
  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, range[0] - 0.08), range[0], range[1]],
    [0.94, 1.05, 1]
  );
  const textY = useTransform(
    scrollYProgress,
    [Math.max(0, range[0] - 0.08), range[0]],
    [2, 0]
  );

  return (
    <span className="relative inline-block mx-1 my-0.5 align-middle">
      <motion.span
        style={{
          backgroundColor: color,
          opacity: bgOpacity,
          scale: scale,
        }}
        className="absolute inset-0 rounded-full -z-0 transition-shadow duration-300"
      />
      <motion.span
        style={{ y: textY }}
        className="relative z-10 px-3.5 py-0.5 text-black font-semibold inline-block whitespace-nowrap"
      >
        {children}
      </motion.span>
    </span>
  );
}

function ServicesManifesto() {
  const manifestoRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: manifestoRef,
    offset: ["start 80%", "end 30%"],
  });

  return (
    <section ref={manifestoRef} className="max-w-[1200px] mx-auto px-5 sm:px-8 py-20 sm:py-32 text-center">
      <p className="text-2xl sm:text-4xl lg:text-[44px] font-display font-medium text-black leading-[1.35] tracking-tight">
        Our team is made up of{" "}
        <ServicesScrollHighlightPill
          range={[0.08, 0.28]}
          scrollYProgress={scrollYProgress}
          color="#D7BFFF"
        >
          bold creatives,
        </ServicesScrollHighlightPill>{" "}
        sharp strategists, and{" "}
        <ServicesScrollHighlightPill
          range={[0.26, 0.48]}
          scrollYProgress={scrollYProgress}
          color="#D7BFFF"
        >
          technical pros
        </ServicesScrollHighlightPill>{" "}
        who care deeply about what they do. No egos, no fluff – just hard work, smart thinking, and a{" "}
        <ServicesScrollHighlightPill
          range={[0.46, 0.68]}
          scrollYProgress={scrollYProgress}
          color="#D7BFFF"
        >
          genuine commitment
        </ServicesScrollHighlightPill>{" "}
        to our{" "}
        <ServicesScrollHighlightPill
          range={[0.66, 0.88]}
          scrollYProgress={scrollYProgress}
          color="#D7BFFF"
        >
          clients&apos; success
        </ServicesScrollHighlightPill>
        .
      </p>
    </section>
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
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    pills: ["Next.js App Router", "React Architecture", "Full-Stack APIs", "Tailwind CSS", "Edge Caching"],
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    dotColor: "bg-[#D7BFFF]",
    tagline: "User-centric digital interfaces, comprehensive Figma token systems, and intuitive customer journey blueprints.",
    image: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?q=80&w=600&auto=format&fit=crop",
    pills: ["UX & UI Design", "Figma Design Systems", "Interactive Prototyping", "User Research", "Conversion-Focused Design"],
  },
  {
    id: "ai-machine-learning",
    name: "AI & Machine Learning",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Intelligent neural voice agents, sub-280ms conversational pipelines, and enterprise LLM automation workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    pills: ["Voice AI Agents", "LLM Fine-Tuning", "Enterprise RAG", "Neural Audio Pipelines", "Autonomous SDRs"],
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Multi-region edge infrastructure, automated CI/CD deployment pipelines, and high-availability architectures.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    pills: ["AWS & Edge CDN", "Docker & Kubernetes", "Terraform IaC", "99.99% SLAs", "Zero-Downtime Deploys"],
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Native and cross-platform mobile apps powered by React Native and Flutter with native performance and offline sync.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
    pills: ["React Native", "iOS & Android", "Offline Persistence", "Push Notifications", "Biometric Auth"],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Identity",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Zero-trust architecture, biometric protection, and automated enterprise compliance auditing.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    pills: ["Zero-Trust Auth", "Penetration Testing", "Data Encryption", "SOC 2 Readiness", "Vulnerability Audits"],
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    dotColor: "bg-[#D7BFFF]",
    tagline: "Strategic tech consulting to modernize legacy operations.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
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
  const [expandedId, setExpandedId] = useState<string>("web-development"); // default opened
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
                <a href="mailto:tharun.hs@stratotechcorp.in" className="hover:underline font-semibold block">
                  tharun.hs@stratotechcorp.in
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
                className="py-8 sm:py-12 transition-all cursor-pointer group relative"
              >
                {isExpanded ? (
                  /* ── EXPANDED ROW (Exact Screenshot 2026-09-23 104328.png) ── */
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 animate-fadeIn">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 flex-1">
                      {/* Left Topic Preview Image (Hidden on Mobile & Tablet RWD, Prominent on Desktop) */}
                      <div className="hidden lg:block relative w-[240px] xl:w-[300px] aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-200 shrink-0 border border-black/10 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                          src={cap.image}
                          alt={cap.name}
                          fill
                          sizes="(min-width: 1280px) 300px, 240px"
                          className="object-cover"
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

        {/* ── 5. MANIFESTO QUOTE WITH HIGHLIGHTED PURPLE CAPSULES ── */}
        <ServicesManifesto />

        {/* ── 6. KINETIC TICKER RIBBON ── */}
        <MarqueeTrustTicker />

        {/* ── 7. CONSULTATION & TESTIMONIAL CARD (Screenshot 2026-09-28 122416.png) ── */}
        <ServiceConsultationCard />

        {/* ── 8. FREQUENTLY ASKED QUESTIONS ACCORDION ── */}
        <section className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-black/[0.08]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#555]">Send us a brief and we&apos;ll talk</span>
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
