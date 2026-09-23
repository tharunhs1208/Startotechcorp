"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SubItem {
  label: string;
  href: string;
}

const SUB_MENUS: Record<string, SubItem[]> = {
  services: [
    { label: "+ Web Development", href: "/services/web-development" },
    { label: "+ UI/UX Design", href: "/services/ui-ux-design" },
    { label: "+ AI & Machine Learning", href: "/services/ai-machine-learning" },
    { label: "+ Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "+ Mobile Apps", href: "/services/mobile-development" },
    { label: "+ Cybersecurity", href: "/services/cybersecurity" },
    { label: "+ Digital Transformation", href: "/services/digital-transformation" },
  ],
  work: [
    { label: "+ All Projects", href: "/projects" },
    { label: "+ Zobay Voice AI", href: "/projects/zobay-voice-ai" },
    { label: "+ StartOne Enterprise OS", href: "/projects/startone-enterprise-os" },
    { label: "+ Nexus B2B Commerce", href: "/projects/nexus-b2b-marketplace" },
    { label: "+ Omni Headless Store", href: "/projects/omni-headless-ecommerce" },
  ],
  about: [
    { label: "+ About Studio", href: "/about" },
    { label: "+ Products", href: "/products" },
    { label: "+ Industries", href: "/industries" },
    { label: "+ Careers", href: "/careers" },
    { label: "+ FAQ", href: "/faq" },
  ],
  blog: [
    { label: "+ All Articles", href: "/blog" },
    { label: "+ Enterprise AI", href: "/blog/how-ai-is-changing-modern-businesses" },
    { label: "+ Design Systems", href: "/blog/building-scalable-design-systems-with-figma-and-nextjs" },
    { label: "+ Next.js Performance", href: "/blog/nextjs-turbopack-high-performance-web-apps" },
    { label: "+ Zero-Trust Cloud", href: "/blog/zero-trust-cloud-security-best-practices" },
  ],
};

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith("/services");
  const isWorkActive = pathname.startsWith("/projects") || pathname.startsWith("/work");
  const isAboutActive = pathname.startsWith("/about") || pathname.startsWith("/careers") || pathname.startsWith("/faq") || pathname.startsWith("/products") || pathname.startsWith("/industries");
  const isBlogActive = pathname.startsWith("/blog");
  const isContactActive = pathname.startsWith("/contact");

  // Track scroll position to trigger backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { id: "services", label: "Services", href: "/services", active: isServicesActive },
    { id: "work", label: "Work", href: "/projects", active: isWorkActive },
    { id: "about", label: "About", href: "/about", active: isAboutActive },
    { id: "blog", label: "Blog", href: "/blog", active: isBlogActive },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-4 sm:pt-6 pointer-events-none">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 flex items-center justify-end md:justify-center relative">
        {/* ── DESKTOP CONSTANT PILL NAVBAR (BLURS ON SCROLL) ── */}
        <nav
          aria-label="Main Navigation"
          className={`hidden md:flex items-center pointer-events-auto rounded-full p-2 gap-1.5 transition-all duration-300 border ${
            isScrolled
              ? "bg-white/70 backdrop-blur-2xl border-black/[0.08] shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
              : "bg-white/95 backdrop-blur-none border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          }`}
        >
          {navLinks.map((item) => {
            const isHovered = hoveredTab === item.id;
            const showArrow = item.active || isHovered;
            const arrowChar = item.active ? "←" : "→";

            return (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 select-none ${
                  item.active
                    ? "bg-white text-black font-semibold shadow-2xs"
                    : isHovered
                    ? "bg-black/[0.06] text-black font-semibold"
                    : "text-[#222222] hover:bg-black/[0.04]"
                }`}
              >
                <span>{item.label}</span>
                {showArrow && (
                  <span className="w-5 h-5 rounded-full bg-[#82FFCD] text-black flex items-center justify-center text-[11px] font-bold shrink-0 shadow-2xs">
                    {arrowChar}
                  </span>
                )}
              </Link>
            );
          })}

          {/* Contact Pill Button */}
          <Link
            href="/contact"
            onMouseEnter={() => setHoveredTab("contact")}
            onMouseLeave={() => setHoveredTab(null)}
            className={`ml-1 px-5 py-2.5 rounded-full transition-all duration-200 shadow-2xs shrink-0 inline-flex items-center justify-center gap-2 font-semibold text-[14px] select-none ${
              isContactActive
                ? "bg-black text-white shadow-xs"
                : "bg-black/[0.06] hover:bg-black text-black hover:text-white"
            }`}
          >
            <span>Contact</span>
            {(isContactActive || hoveredTab === "contact") && (
              <span className="w-5 h-5 rounded-full bg-[#82FFCD] text-black flex items-center justify-center text-[11px] font-bold shrink-0 shadow-2xs">
                {isContactActive ? "←" : "→"}
              </span>
            )}
          </Link>
        </nav>

        {/* ── MOBILE RIGHT BUTTONS (Contact + Mint Hamburger Toggle) ── */}
        <div className="md:hidden flex items-center gap-2 pointer-events-auto pt-1">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-[#82FFCD] text-black font-semibold text-xs shadow-xs"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-85 transition-opacity cursor-pointer shadow-xs"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#82FFCD]" />
            ) : (
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="1.77778" fill="#82FFCD" />
                <rect y="7.11108" width="16" height="1.77778" fill="#82FFCD" />
                <rect y="3.55542" width="8" height="1.77778" fill="#82FFCD" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed top-[72px] left-0 right-0 bg-[#F3F3F3] border-b border-black/[0.08] shadow-2xl p-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-display font-medium text-lg text-black">
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <div className="pl-4 flex flex-col space-y-2 text-sm text-[#555]">
              <Link href="/services/web-development" onClick={() => setMobileMenuOpen(false)}>→ Web Development</Link>
              <Link href="/services/ui-ux-design" onClick={() => setMobileMenuOpen(false)}>→ UI/UX Design</Link>
              <Link href="/services/ai-machine-learning" onClick={() => setMobileMenuOpen(false)}>→ AI &amp; Machine Learning</Link>
              <Link href="/services/cloud-solutions" onClick={() => setMobileMenuOpen(false)}>→ Cloud Solutions</Link>
              <Link href="/services/mobile-development" onClick={() => setMobileMenuOpen(false)}>→ Mobile Apps</Link>
              <Link href="/services/cybersecurity" onClick={() => setMobileMenuOpen(false)}>→ Cybersecurity</Link>
              <Link href="/services/digital-transformation" onClick={() => setMobileMenuOpen(false)}>→ Digital Transformation</Link>
            </div>
            <Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Work</Link>
            <Link href="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-3 rounded-full bg-black text-white text-center text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#82FFCD]" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}