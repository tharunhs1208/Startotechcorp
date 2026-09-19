"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, Menu, X, ArrowUpRight } from "lucide-react";

interface SubLink {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

interface NavSection {
  id: string;
  label: string;
  href: string;
  heading: string;
  primaryLinks: SubLink[];
  featured?: {
    tag: string;
    title: string;
    description: string;
    href: string;
  };
}

const NAV_DROPDOWNS: NavSection[] = [
  {
    id: "work",
    label: "Work",
    href: "/projects",
    heading: "Selected Case Studies",
    primaryLinks: [
      {
        label: "All Case Studies",
        href: "/projects",
        description: "Explore all client engineering and product architecture work",
      },
      {
        label: "Zobay Voice AI",
        href: "/projects/zobay-voice-ai",
        badge: "Sub-280ms",
        description: "Low-latency acoustic turn-taking voice platform",
      },
      {
        label: "StartOne Enterprise OS",
        href: "/projects/startone-enterprise-os",
        badge: "Enterprise",
        description: "Operational management & resource scheduling hub",
      },
      {
        label: "BaseOne Settlement Ledger",
        href: "/projects/baseone-treasury-settlement",
        badge: "Fintech",
        description: "High-frequency multi-currency treasury engine",
      },
      {
        label: "LegalX Contract Sentinel",
        href: "/projects/legalx-contract-sentinel",
        badge: "AI Review",
        description: "Deterministic risk evaluation pipeline for enterprise MSAs",
      },
    ],
    featured: {
      tag: "Spotlight",
      title: "The Work Behind the Products",
      description: "End-to-end architecture, UI design tokens, and robust full-stack delivery.",
      href: "/projects",
    },
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
    heading: "Digital Products",
    primaryLinks: [
      {
        label: "All Products",
        href: "/products",
        description: "Software platforms designed for modern operational teams",
      },
      {
        label: "SalesX",
        href: "/products/salesx",
        badge: "Sales",
        description: "Pipeline acceleration and customer workflow tracking",
      },
      {
        label: "MeetingX",
        href: "/products/meetingx",
        badge: "Comm",
        description: "Collaborative meeting and real-time screen share tool",
      },
      {
        label: "Zobay Voice",
        href: "/projects/zobay-voice-ai",
        badge: "Voice AI",
        description: "AI-powered voice agent for sales and customer operations",
      },
      {
        label: "StartOne",
        href: "/projects/startone-enterprise-os",
        badge: "Operations",
        description: "Consolidated team execution and approvals hub",
      },
    ],
    featured: {
      tag: "Product Suite",
      title: "Built for Enterprise Velocity",
      description: "Modular web products with sub-second response times and SOC-2 readiness.",
      href: "/products",
    },
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    heading: "Engineering Capabilities",
    primaryLinks: [
      {
        label: "All Services",
        href: "/services",
        description: "Comprehensive software design and development capabilities",
      },
      {
        label: "Web Development",
        href: "/services/web-development",
        badge: "Next.js",
        description: "High-performance SSR, micro-frontends & custom APIs",
      },
      {
        label: "AI & Machine Learning",
        href: "/services/ai-machine-learning",
        badge: "Voice/LLM",
        description: "Neural voice pipelines, agent systems & enterprise RAG",
      },
      {
        label: "UI/UX Design Systems",
        href: "/services/ui-ux-design",
        badge: "Figma",
        description: "Accessible design systems with atomic tokens",
      },
      {
        label: "Mobile App Engineering",
        href: "/services/mobile-apps",
        badge: "iOS / Android",
        description: "Native-grade cross-platform mobile solutions",
      },
      {
        label: "Cloud & DevOps",
        href: "/services/cloud-solutions",
        badge: "AWS / Edge",
        description: "Multi-region deployments, automated CI/CD & 99.99% uptime",
      },
      {
        label: "Cybersecurity & Identity",
        href: "/services/cybersecurity",
        badge: "SecOps",
        description: "RBAC security, audit logging & penetration testing",
      },
    ],
    featured: {
      tag: "Sprint Delivery",
      title: "Dedicated Product Squads",
      description: "Work directly with senior architects and designers shipping code every two weeks.",
      href: "/services",
    },
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    heading: "Studio & Company",
    primaryLinks: [
      {
        label: "About Studio",
        href: "/about",
        description: "Philosophy, team directory, and working principles",
      },
      {
        label: "Careers & Open Roles",
        href: "/careers",
        badge: "Hiring",
        description: "Join our engineering and design teams in Bengaluru",
      },
      {
        label: "Studio Blog",
        href: "/blog",
        description: "Technical writing, design notes, and system architecture",
      },
      {
        label: "Frequently Asked Questions",
        href: "/faq",
        description: "Common questions regarding pricing, SLAs, and kickoff",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        description: "Data retention, GDPR compliance, and security standards",
      },
      {
        label: "Terms of Service",
        href: "/terms",
        description: "Contract terms, intellectual property, and warranties",
      },
    ],
    featured: {
      tag: "Studio Culture",
      title: "Engineering With Clarity",
      description: "Technology should solve a real operational problem before trying to impress.",
      href: "/about",
    },
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  }

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const activeSection = NAV_DROPDOWNS.find((item) => item.id === activeMenu);

  return (
    <>
      <header
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          activeMenu || isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            : "bg-white/90 backdrop-blur-md border-b border-black/[0.06]"
        }`}
      >
        <div className="max-w-[1240px] mx-auto h-[60px] px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo (Deflexai clover style) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-[16px] font-bold tracking-tight text-[#111111] hover:opacity-80 transition-opacity shrink-0"
          >
            <div className="w-5 h-5 grid grid-cols-2 gap-0.5 items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="w-2 h-2 rounded-full bg-black" />
            </div>
            <span>StratoTech</span>
          </Link>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center h-full gap-7 lg:gap-8 text-[13px]">
            {NAV_DROPDOWNS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  className="h-full flex items-center"
                >
                  <Link
                    href={item.href}
                    className={`h-full flex items-center px-1 transition-colors duration-200 cursor-pointer ${
                      activeMenu === item.id || isActive
                        ? "text-[#111111] font-semibold"
                        : "text-[#666666] hover:text-[#111111] font-medium"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action: Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 rounded-full bg-[#111111] text-white hover:bg-black text-[13px] font-semibold transition-all shadow-xs"
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 text-[#1d1d1f] hover:opacity-70 transition-opacity cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* ── DESKTOP FLYOUT SUBMENU PANE (ONLY LIVE PAGES) ─────────── */}
        <div
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
          className={`hidden md:block absolute top-full left-0 right-0 transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top overflow-hidden border-b border-black/[0.08] ${
            activeMenu
              ? "opacity-100 max-h-[520px] pointer-events-auto bg-white/98 backdrop-blur-2xl shadow-[0_20px_48px_rgba(0,0,0,0.08)]"
              : "opacity-0 max-h-0 pointer-events-none bg-white"
          }`}
        >
          {activeSection && (
            <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-8 lg:py-10">
              <div className="grid grid-cols-12 gap-8 items-start">
                {/* Available Subpages Grid */}
                <div className="col-span-8 space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block font-semibold">
                    {activeSection.heading}
                  </span>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {activeSection.primaryLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        onClick={() => setActiveMenu(null)}
                        className="group/item p-2.5 -mx-2.5 rounded-xl hover:bg-black/[0.03] transition-colors block"
                      >
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[14px] font-medium text-[#1d1d1f] group-hover/item:text-black transition-colors">
                            {link.label}
                          </span>
                        </div>
                        {link.description && (
                          <p className="text-[12px] text-[#6e6e73] line-clamp-1 font-normal">
                            {link.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Featured Section Spotlight */}
                {activeSection.featured && (
                  <div className="col-span-4 border-l border-black/[0.06] pl-8 flex flex-col justify-between self-stretch">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
                        {activeSection.featured.tag}
                      </span>
                      <h4 className="text-[16px] font-display font-medium text-[#1d1d1f] leading-snug mb-2">
                        {activeSection.featured.title}
                      </h4>
                      <p className="text-[13px] text-[#6e6e73] leading-relaxed font-normal">
                        {activeSection.featured.description}
                      </p>
                    </div>

                    <div className="pt-6">
                      <Link
                        href={activeSection.featured.href}
                        onClick={() => setActiveMenu(null)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1d1d1f] hover:text-black transition-colors group/link"
                      >
                        <span>Explore section</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Dimmed Curtain Overlay when Hovering */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:block hidden ${
          activeMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
        onClick={() => setActiveMenu(null)}
      />

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-20 pb-8 px-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4 pt-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6e6e73] block mb-2 font-semibold">
              NAVIGATION
            </span>

            <div className="space-y-2">
              {NAV_DROPDOWNS.map((item) => {
                const isExpanded = mobileExpandedSection === item.id;

                return (
                  <div key={item.id} className="border-b border-black/[0.06] pb-2">
                    <div className="flex items-center justify-between py-2">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[20px] font-display font-medium text-[#1d1d1f]"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setMobileExpandedSection(isExpanded ? null : item.id)}
                        className="p-2 text-[#86868b] hover:text-[#1d1d1f] cursor-pointer"
                        aria-label={`Expand ${item.label} submenu`}
                      >
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-90 text-[#1d1d1f]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="mt-1 pl-2 space-y-2.5 pb-2">
                        {item.primaryLinks.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] flex items-center justify-between py-1"
                          >
                            <span>{link.label}</span>
                            {link.badge && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/[0.05] text-[#1d1d1f]">
                                {link.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-black/[0.08] space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#1d1d1f] text-white hover:bg-black text-[14px] font-medium transition-all shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-[12px] font-mono text-[#86868b]">
              StratoTech · Bengaluru Studio
            </p>
          </div>
        </div>
      )}
    </>
  );
}