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
    { label: "+ SalesX", href: "/products/salesx" },
    { label: "+ MeetingX", href: "/products/meetingx" },
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

const MOBILE_NAV_ITEMS = [
  { label: "Services", href: "/services", key: "services" },
  { label: "Work", href: "/projects", key: "work" },
  { label: "Products", href: "/products", key: "products" },
  { label: "Industries", href: "/industries", key: "industries" },
  { label: "About", href: "/about", key: "about" },
  { label: "Careers", href: "/careers", key: "careers" },
  { label: "Blog", href: "/blog", key: "blog" },
  { label: "FAQ", href: "/faq", key: "faq" },
];

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isServicesActive = pathname.startsWith("/services");
  const isWorkActive = pathname.startsWith("/projects") || pathname.startsWith("/work");
  const isAboutActive = pathname.startsWith("/about") || pathname.startsWith("/careers") || pathname.startsWith("/faq") || pathname.startsWith("/products") || pathname.startsWith("/industries");
  const isBlogActive = pathname.startsWith("/blog");
  const isContactActive = pathname.startsWith("/contact");

  const handleMouseEnter = (tabId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredTab(tabId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 150);
  };

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
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

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { id: "services", label: "Services", href: "/services", active: isServicesActive },
    { id: "work", label: "Work", href: "/projects", active: isWorkActive },
    { id: "about", label: "About", href: "/about", active: isAboutActive },
    { id: "blog", label: "Blog", href: "/blog", active: isBlogActive },
  ];

  return (
    <>
      {/* ── FULL-SCREEN WHITE MOBILE MENU (SILKY SMOOTH CIRCULAR IRIS REVEAL) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              clipPath: "circle(0px at calc(100% - 38px) 36px)",
              opacity: 0.6,
            }}
            animate={{
              clipPath: "circle(150% at calc(100% - 38px) 36px)",
              opacity: 1,
            }}
            exit={{
              clipPath: "circle(0px at calc(100% - 38px) 36px)",
              opacity: 0.6,
            }}
            transition={{
              duration: 0.75, // Smooth, graceful timing
              ease: [0.22, 1, 0.36, 1], // Silky smooth Apple/Refokus deceleration curve
            }}
            className="fixed inset-0 z-[9999] bg-white flex flex-col justify-between overflow-y-auto md:hidden"
          >
            {/* Top Fixed-Style Navbar Header Inside Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="w-full pt-3 sm:pt-6 px-4 sm:px-8"
            >
              <div className="w-full flex items-center justify-between px-4 py-2 rounded-full border border-black/[0.08] bg-[rgba(233,233,233,0.6)] backdrop-blur-2xl">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-sm font-extrabold tracking-[-0.03em] text-[#111111]"
                >
                  STRATOTECH
                </Link>

                <div className="flex items-center gap-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-1.5 rounded-full bg-[#82FFCD] text-black font-semibold text-xs hover:bg-black hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close navigation menu"
                    className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-85 transition-opacity cursor-pointer active:scale-95"
                  >
                    <X className="w-4 h-4 text-[#82FFCD]" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Menu Items (Smooth Staggered Iris Pop & Slide) */}
            <div className="flex-1 px-6 pt-6 pb-8 flex flex-col justify-between">
              <nav className="flex flex-col space-y-5 font-display">
                {/* 1. Services */}
                <div className="space-y-2.5 overflow-hidden">
                  <motion.div
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between"
                  >
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl font-medium tracking-tight text-black hover:text-zinc-700"
                    >
                      Services
                    </Link>
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-[#82FFCD] flex items-center justify-center text-black text-sm font-bold active:scale-95 transition-transform"
                    >
                      →
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.45, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="pl-1 flex flex-col space-y-2 text-sm text-[#444444] font-sans"
                  >
                    <Link href="/services/web-development" onClick={() => setMobileMenuOpen(false)}>→ Web Development</Link>
                    <Link href="/services/ui-ux-design" onClick={() => setMobileMenuOpen(false)}>→ UI/UX Design</Link>
                    <Link href="/services/ai-machine-learning" onClick={() => setMobileMenuOpen(false)}>→ AI &amp; Machine Learning</Link>
                    <Link href="/services/cloud-solutions" onClick={() => setMobileMenuOpen(false)}>→ Cloud Solutions</Link>
                    <Link href="/services/mobile-development" onClick={() => setMobileMenuOpen(false)}>→ Mobile Apps</Link>
                  </motion.div>
                </div>

                {/* 2. Work */}
                <div className="overflow-hidden pt-1">
                  <motion.div
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.55, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between"
                  >
                    <Link
                      href="/projects"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl font-medium tracking-tight text-black hover:text-zinc-700"
                    >
                      Work
                    </Link>
                    <Link
                      href="/projects"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-[#82FFCD] flex items-center justify-center text-black text-sm font-bold active:scale-95 transition-transform"
                    >
                      →
                    </Link>
                  </motion.div>
                </div>

                {/* 3. About */}
                <div className="space-y-2.5 pt-1 overflow-hidden">
                  <motion.div
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.55, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between"
                  >
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl font-medium tracking-tight text-black hover:text-zinc-700"
                    >
                      About
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-[#82FFCD] flex items-center justify-center text-black text-sm font-bold active:scale-95 transition-transform"
                    >
                      →
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.45, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="pl-1 flex flex-col space-y-2 text-sm text-[#444444] font-sans"
                  >
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)}>→ About Us</Link>
                    <Link href="/careers" onClick={() => setMobileMenuOpen(false)}>→ Careers</Link>
                    <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>→ FAQ</Link>
                  </motion.div>
                </div>

                {/* 4. Blog */}
                <div className="overflow-hidden pt-1">
                  <motion.div
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.55, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between"
                  >
                    <Link
                      href="/blog"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl font-medium tracking-tight text-black hover:text-zinc-700"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-[#82FFCD] flex items-center justify-center text-black text-sm font-bold active:scale-95 transition-transform"
                    >
                      →
                    </Link>
                  </motion.div>
                </div>

                {/* 5. Contact */}
                <div className="overflow-hidden pt-1">
                  <motion.div
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl font-medium tracking-tight text-black hover:text-zinc-700"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-[#82FFCD] flex items-center justify-center text-black text-sm font-bold active:scale-95 transition-transform"
                    >
                      →
                    </Link>
                  </motion.div>
                </div>
              </nav>

              {/* Bottom Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
                className="pt-6 border-t border-black/[0.08] space-y-1 font-sans text-sm text-[#111111]"
              >
                <a href="mailto:tharun.hs@stratotechcorp.in" className="font-semibold block hover:text-[#82FFCD] transition-colors">
                  tharun.hs@stratotechcorp.in
                </a>
                <p className="text-zinc-500">+91 98765 43210</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DESKTOP & MOBILE FIXED HEADER (CONSTANT) ── */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full pt-3 sm:pt-6 pointer-events-none">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-8 flex items-center justify-center relative">
          
          {/* ── MOBILE FIXED PILL NAVBAR ── */}
          <div className="md:hidden w-full pointer-events-auto flex items-center justify-between px-4 py-2 rounded-full transition-all duration-300 border border-black/[0.08] bg-[rgba(233,233,233,0.6)] backdrop-blur-2xl">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-sm font-extrabold tracking-[-0.03em] text-[#111111]"
            >
              STRATOTECH
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-1.5 rounded-full bg-[#82FFCD] text-black font-semibold text-xs hover:bg-black hover:text-white transition-colors"
              >
                Contact
              </Link>
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle navigation menu"
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-85 transition-opacity cursor-pointer active:scale-95 relative overflow-hidden"
              >
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="1.77778" fill="#82FFCD" />
                  <rect y="7.11108" width="16" height="1.77778" fill="#82FFCD" />
                  <rect y="3.55542" width="8" height="1.77778" fill="#82FFCD" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── DESKTOP CONSTANT PILL NAVBAR (FIXED STABLE WIDTH & SMOOTH HOVER) ── */}
          <div
            className="hidden md:flex flex-col items-center pointer-events-auto relative"
            onMouseLeave={handleMouseLeave}
          >
            <nav
              aria-label="Main Navigation"
              className="flex items-center rounded-full p-1.5 gap-1 transition-all duration-300 border border-black/[0.08] bg-[rgba(233,233,233,0.6)] backdrop-blur-2xl shadow-xs"
            >
              {navLinks.map((item) => {
                const isHovered = hoveredTab === item.id;
                const showArrow = item.active || isHovered;
                const arrowChar = item.active ? "←" : "→";
                const hasSubMenu = !!SUB_MENUS[item.id];

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                  >
                    <Link
                      href={item.href}
                      className={`relative inline-flex items-center justify-between w-[114px] h-[38px] px-3.5 rounded-full text-[14px] font-medium transition-colors duration-200 select-none ${
                        item.active ? "text-black font-semibold" : "text-[#222222] hover:text-black"
                      }`}
                    >
                      {/* Animated Sliding Pill Highlight */}
                      {(item.active || isHovered) && (
                        <motion.div
                          layoutId="desktopNavHoverPill"
                          className={`absolute inset-0 rounded-full ${
                            item.active
                              ? "bg-white border border-black/[0.06] shadow-xs"
                              : "bg-white/80 shadow-xs"
                          }`}
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}

                      <span className="relative z-10">{item.label}</span>

                      <span className="relative z-10 w-5 h-5 flex items-center justify-center shrink-0">
                        <AnimatePresence>
                          {showArrow && (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ type: "spring", stiffness: 500, damping: 28 }}
                              className="w-5 h-5 rounded-full bg-[#82FFCD] text-black flex items-center justify-center text-[11px] font-bold shadow-xs"
                            >
                              {arrowChar}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </Link>

                    {/* Desktop Dropdown Menu Directly Below THIS Tab */}
                    <AnimatePresence>
                      {isHovered && hasSubMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          onMouseEnter={() => {
                            if (timeoutRef.current) clearTimeout(timeoutRef.current);
                          }}
                          className="absolute top-full left-0 mt-2 w-72 bg-[rgba(233,233,233,0.95)] backdrop-blur-3xl rounded-xl p-2.5 border border-black/[0.08] shadow-xl z-50 flex flex-col gap-1"
                        >
                          {SUB_MENUS[item.id].map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setHoveredTab(null)}
                              className="group flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px] font-medium text-[#222] hover:bg-white hover:text-black hover:shadow-xs transition-all duration-200"
                            >
                              <span className="group-hover:translate-x-1 transition-transform duration-200">{subItem.label}</span>
                              <span className="w-5 h-5 rounded-full bg-[#82FFCD]/0 group-hover:bg-[#82FFCD] text-black flex items-center justify-center text-xs font-bold transition-all duration-200 group-hover:translate-x-0.5">
                                →
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Contact Pill Button (Fixed Width) */}
              <Link
                href="/contact"
                onMouseEnter={() => handleMouseEnter("contact")}
                className={`relative ml-0.5 w-[114px] h-[38px] px-3.5 rounded-full transition-colors duration-200 shrink-0 inline-flex items-center justify-between font-semibold text-[14px] select-none ${
                  isContactActive
                    ? "bg-black text-white shadow-sm"
                    : hoveredTab === "contact"
                    ? "bg-black text-white shadow-sm"
                    : "bg-black/[0.07] text-black hover:bg-black hover:text-white"
                }`}
              >
                <span className="relative z-10">Contact</span>
                <span className="relative z-10 w-5 h-5 flex items-center justify-center shrink-0">
                  <AnimatePresence>
                    {(isContactActive || hoveredTab === "contact") && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 28 }}
                        className="w-5 h-5 rounded-full bg-[#82FFCD] text-black flex items-center justify-center text-[11px] font-bold shadow-xs"
                      >
                        {isContactActive ? "←" : "→"}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </Link>
            </nav>
          </div>

        </div>
      </header>
    </>
  );
}