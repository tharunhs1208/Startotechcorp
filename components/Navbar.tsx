"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

interface SubmenuColumn {
  sectionTitle: string;
  links: {
    label: string;
    href: string;
    badge?: string;
    isPrimary?: boolean;
  }[];
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  primaryLinks?: { label: string; href: string; badge?: string }[];
  columns?: SubmenuColumn[];
  featuredCard?: {
    tag: string;
    title: string;
    desc: string;
    href: string;
  };
}

const APPLE_NAV_ITEMS: NavItem[] = [
  {
    id: "work",
    label: "Work",
    href: "/projects",
    primaryLinks: [
      { label: "Explore All Work", href: "/projects" },
      { label: "Zobay Voice AI", href: "/projects/zobay-voice-ai", badge: "Sub-280ms" },
      { label: "MeetingX Collaboration", href: "/contact?subject=MeetingX", badge: "WebRTC" },
      { label: "StartOne Enterprise OS", href: "/projects/startone-enterprise-os" },
      { label: "BaseOne Treasury Settlement", href: "/projects/baseone-treasury-settlement" },
      { label: "LegalX Contract Sentinel", href: "/projects/legalx-contract-sentinel" },
    ],
    columns: [
      {
        sectionTitle: "By Industry",
        links: [
          { label: "AI & Autonomous Systems", href: "/projects" },
          { label: "Fintech & High-Frequency Ledgers", href: "/projects" },
          { label: "Telehealth & Medical Systems", href: "/projects" },
          { label: "Enterprise SaaS & Workspaces", href: "/projects" },
          { label: "Media & Audio Distribution", href: "/projects" },
        ],
      },
      {
        sectionTitle: "Engineering Standards",
        links: [
          { label: "Zero-Downtime Releases", href: "/about" },
          { label: "SOC-2 Type II Verification", href: "/about" },
          { label: "Sub-Second Edge Latency", href: "/services/web-development" },
          { label: "Client Testimonials", href: "/projects" },
        ],
      },
    ],
    featuredCard: {
      tag: "Case Study Spotlight",
      title: "Zobay Conversational Voice",
      desc: "Sub-280ms streaming speech AI with direct acoustic spectrogram reasoning.",
      href: "/projects/zobay-voice-ai",
    },
  },
  {
    id: "products",
    label: "Products",
    href: "/archive",
    primaryLinks: [
      { label: "All Shipped Products", href: "/archive" },
      { label: "SalesX", href: "/archive", badge: "Sales · 2026" },
      { label: "Zobay Voice", href: "/projects/zobay-voice-ai", badge: "Sales · 2026" },
      { label: "MeetingX", href: "/archive", badge: "Comm · 2026" },
      { label: "StartOne Core", href: "/projects/startone-enterprise-os", badge: "Ops · 2026" },
      { label: "BaseOne Ledger", href: "/projects/baseone-treasury-settlement" },
    ],
    columns: [
      {
        sectionTitle: "By Department",
        links: [
          { label: "Sales & Lead Conversion", href: "/archive" },
          { label: "Team Communication", href: "/archive" },
          { label: "Operational Workspaces", href: "/archive" },
          { label: "Accounts & Finance", href: "/archive" },
          { label: "Security & Core Tech", href: "/archive" },
        ],
      },
      {
        sectionTitle: "Developer Toolkits",
        links: [
          { label: "Open Source Toolkits", href: "/archive" },
          { label: "Next.js SaaS Starter Kit", href: "/archive" },
          { label: "Figma Design Token Engine", href: "/archive" },
          { label: "Architecture Decision Records", href: "/archive" },
        ],
      },
    ],
    featuredCard: {
      tag: "Latest Product Release",
      title: "SalesX Platform v3.0",
      desc: "Centralized lead management, sales workflows, and automated communication.",
      href: "/archive",
    },
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    primaryLinks: [
      { label: "All Capabilities", href: "/services" },
      { label: "Product Engineering", href: "/services/web-development" },
      { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
      { label: "UI/UX Design Systems", href: "/services/ui-ux-design" },
      { label: "Mobile App Development", href: "/services/mobile-apps" },
      { label: "Cloud & DevOps", href: "/services/cloud-solutions" },
      { label: "Cybersecurity & Identity", href: "/services/cybersecurity" },
    ],
    columns: [
      {
        sectionTitle: "Engagement Models",
        links: [
          { label: "Dedicated Product Squads", href: "/contact" },
          { label: "Fixed-Scope Sprint MVP", href: "/contact" },
          { label: "Fractional CTO & Architecture", href: "/about" },
          { label: "24/7 Enterprise SLA Support", href: "/services" },
        ],
      },
      {
        sectionTitle: "Core Technologies",
        links: [
          { label: "Next.js & TypeScript", href: "/services/web-development" },
          { label: "PyTorch & Real-time WebSockets", href: "/services/ai-machine-learning" },
          { label: "React Native & Flutter", href: "/services/mobile-apps" },
          { label: "PostgreSQL & AWS Infrastructure", href: "/services/cloud-solutions" },
        ],
      },
    ],
    featuredCard: {
      tag: "Sprint Engagement",
      title: "Rapid 4-Week MVP Sprints",
      desc: "Turn complex product scopes into fully functional production releases with daily transparency.",
      href: "/contact",
    },
  },
  {
    id: "archive",
    label: "Archive",
    href: "/archive",
    primaryLinks: [
      { label: "Complete Product Catalog", href: "/archive" },
      { label: "2026 Releases", href: "/archive" },
      { label: "2025 Releases", href: "/archive" },
      { label: "2024 Releases", href: "/archive" },
    ],
    columns: [
      {
        sectionTitle: "Architecture Decisions",
        links: [
          { label: "ADR-014: Next.js App Router Architecture", href: "/archive" },
          { label: "ADR-009: WebSocket State Reconciliation", href: "/archive" },
          { label: "ADR-006: Automated Figma Token Pipeline", href: "/archive" },
          { label: "ADR-003: Multi-Tenant PostgreSQL RLS", href: "/archive" },
        ],
      },
      {
        sectionTitle: "R&D Experiments",
        links: [
          { label: "Sub-280ms Audio Pipeline", href: "/archive" },
          { label: "High-Frequency Atomic Settlement", href: "/archive" },
          { label: "Air-Gapped Tool Calling Sandbox", href: "/archive" },
          { label: "Spatial Glass Shaders", href: "/archive" },
        ],
      },
    ],
    featuredCard: {
      tag: "Open Documentation",
      title: "Architecture Decision Records",
      desc: "Detailed technical logs documenting why specific stacks and patterns were chosen.",
      href: "/archive",
    },
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    primaryLinks: [
      { label: "Our Story & Philosophy", href: "/about" },
      { label: "Leadership & Team", href: "/about" },
      { label: "Working Principles", href: "/about" },
      { label: "Careers & Open Roles", href: "/careers", badge: "Hiring" },
      { label: "Studio Blog & Insights", href: "/blog" },
      { label: "Frequently Asked Questions", href: "/faq" },
    ],
    columns: [
      {
        sectionTitle: "Office Locations",
        links: [
          { label: "Bengaluru Studio (HQ)", href: "/contact" },
          { label: "Global Distributed Teams", href: "/about" },
          { label: "Schedule Studio Visit", href: "/contact" },
        ],
      },
      {
        sectionTitle: "Trust & Governance",
        links: [
          { label: "ISO 27001 Security Standard", href: "/privacy-policy" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    ],
    featuredCard: {
      tag: "Studio Culture",
      title: "Engineering With Craft",
      desc: "A multidisciplinary studio building durable, human-centered software.",
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

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  }, [pathname]);

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

  const activeItemData = APPLE_NAV_ITEMS.find((item) => item.id === activeMenu);

  return (
    <>
      {/* ── EXACT APPLE GLOBAL NAV BAR (44px Height, 20px Blur, 12px SF Pro Text) ── */}
      <header
        onMouseLeave={handleMouseLeave}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          height: "44px",
          backgroundColor: activeMenu || isScrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        }}
      >
        <div
          className="mx-auto h-full flex items-center justify-between"
          style={{ maxWidth: "1024px", padding: "0 22px" }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 font-display text-[14px] font-bold tracking-tight text-[#1d1d1f] hover:opacity-70 transition-opacity shrink-0"
            style={{ letterSpacing: "-0.01em" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#1d1d1f]" />
            <span>StratoTech</span>
          </Link>

          {/* Center Navigation Items (Apple 12px Font Spec) */}
          <nav className="hidden md:flex items-center h-full gap-7 lg:gap-9 text-[12px] text-[#1d1d1f]">
            {APPLE_NAV_ITEMS.map((item) => {
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
                    className="h-full flex items-center px-1 transition-opacity duration-200 cursor-pointer"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
                      fontSize: "12px",
                      fontWeight: activeMenu === item.id || isActive ? 500 : 400,
                      letterSpacing: "-0.01em",
                      color: "#1d1d1f",
                      opacity: activeMenu === item.id ? 1 : 0.8,
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action: AI Assistant + Start a Project */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-ai-assistant"))}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-black/[0.08] hover:border-black/20 bg-black/[0.02] text-[11px] font-medium text-zinc-700 hover:text-zinc-950 transition-all cursor-pointer"
              title="Ask us (⌘J)"
            >
              <MessageSquare className="w-3 h-3 text-zinc-700" />
              <span>Ask us</span>
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-[12px] font-medium text-[#0071e3] hover:underline underline-offset-2 transition-all"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                letterSpacing: "-0.01em",
              }}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1 text-[#1d1d1f] hover:opacity-70 transition-opacity cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* ── EXACT APPLE FULL-WIDTH SUBMENU FLYOUT PANE ───────────── */}
        <div
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
          className={`hidden md:block absolute top-full left-0 right-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] origin-top overflow-hidden ${
            activeMenu
              ? "opacity-100 max-h-[580px] pointer-events-auto shadow-2xl"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "saturate(180%) blur(20px)",
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          {activeItemData && (
            <div
              className="mx-auto pt-10 pb-14"
              style={{ maxWidth: "1024px", paddingLeft: "22px", paddingRight: "22px" }}
            >
              <div className="grid grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Column 1: Primary Large Heading Links (Apple Signature Submenu Style) */}
                <div className="col-span-4 space-y-3">
                  <div
                    className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider mb-3"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Explore {activeItemData.label}
                  </div>
                  <ul className="space-y-2">
                    {activeItemData.primaryLinks?.map((pLink, pIdx) => (
                      <li key={pIdx}>
                        <Link
                          href={pLink.href}
                          onClick={() => setActiveMenu(null)}
                          className="group inline-flex items-center gap-2 text-[20px] font-semibold tracking-tight text-[#1d1d1f] hover:text-[#0071e3] transition-colors leading-tight"
                          style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                            letterSpacing: "0.005em",
                          }}
                        >
                          <span>{pLink.label}</span>
                          {pLink.badge && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/[0.05] text-[#1d1d1f] font-normal">
                              {pLink.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2 & 3: Secondary Categorized Sublinks */}
                <div className="col-span-5 grid grid-cols-2 gap-6 pl-4">
                  {activeItemData.columns?.map((col, cIdx) => (
                    <div key={cIdx} className="space-y-3">
                      <h4
                        className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] font-semibold"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {col.sectionTitle}
                      </h4>
                      <ul className="space-y-2">
                        {col.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <Link
                              href={link.href}
                              onClick={() => setActiveMenu(null)}
                              className="text-[12px] text-[#1d1d1f] hover:text-[#0071e3] transition-colors block leading-relaxed"
                              style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Column 4: Editorial Showcase / Quick Card */}
                {activeItemData.featuredCard && (
                  <div className="col-span-3 border-l border-black/[0.06] pl-6 flex flex-col justify-between self-stretch">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#0071e3] font-semibold block mb-1.5">
                        {activeItemData.featuredCard.tag}
                      </span>
                      <h4 className="text-[15px] font-semibold text-[#1d1d1f] leading-snug mb-1.5">
                        {activeItemData.featuredCard.title}
                      </h4>
                      <p className="text-[12px] text-[#6e6e73] leading-normal font-normal">
                        {activeItemData.featuredCard.desc}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={activeItemData.featuredCard.href}
                        onClick={() => setActiveMenu(null)}
                        className="inline-flex items-center gap-1 text-[12px] font-medium text-[#0071e3] hover:underline underline-offset-2"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ── EXACT APPLE CURTAIN (Page Dimming Overlay) ─────────────── */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:block hidden ${
          activeMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.48)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        onClick={() => setActiveMenu(null)}
      />

      {/* ── APPLE MOBILE FULLSCREEN OVERLAY ─────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-white pt-14 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          style={{ animation: "fadeIn 0.25s ease-out forwards" }}
        >
          <div className="space-y-2 pt-4">
            {APPLE_NAV_ITEMS.map((item) => {
              const isExpanded = mobileExpandedSection === item.id;

              return (
                <div key={item.id} className="border-b border-black/[0.06] pb-2">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[22px] font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                      style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        letterSpacing: "0.005em",
                      }}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setMobileExpandedSection(isExpanded ? null : item.id)}
                      className="p-2 text-[#86868b] hover:text-[#1d1d1f] cursor-pointer"
                      aria-label={`Expand ${item.label} sub-items`}
                    >
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? "rotate-90 text-[#0071e3]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Sub-items */}
                  {isExpanded && (
                    <div className="mt-2 pl-2 space-y-3 pb-3">
                      {item.primaryLinks?.map((pLink, pIdx) => (
                        <div key={pIdx}>
                          <Link
                            href={pLink.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[14px] text-[#1d1d1f] hover:text-[#0071e3] flex items-center justify-between py-1"
                          >
                            <span>{pLink.label}</span>
                            {pLink.badge && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/[0.05] text-[#1d1d1f]">
                                {pLink.badge}
                              </span>
                            )}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-black/[0.08] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-ai-assistant"));
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-black/[0.12] bg-white text-zinc-900 text-[14px] font-medium shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-zinc-700" />
              <span>Ask us</span>
            </button>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0071e3] text-white text-[14px] font-medium shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}