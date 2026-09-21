import React from "react";
import Link from "next/link";

function FooterBrandLogo() {
  return (
    <div className="mt-14 sm:mt-18 pt-8 select-none flex items-center justify-center">
      <Link
        href="/"
        className="group inline-flex items-center justify-center gap-4 sm:gap-6 py-4 cursor-pointer select-none hover:opacity-85 transition-opacity"
      >
        {/* Scaled-Up 4-Dot Clover Icon (Constant, pristine luxury mark) */}
        <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 grid grid-cols-2 gap-1 sm:gap-1.5 items-center justify-center shrink-0">
          <span className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#111111]" />
          <span className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#111111]/80" />
          <span className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#111111]/80" />
          <span className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#111111]" />
        </div>

        {/* Scaled-Up Constant Luxury Typography */}
        <div className="flex items-center text-[10vw] sm:text-[8vw] lg:text-[6.5vw] font-display font-black tracking-[-0.04em] text-[#111111] leading-none">
          <span>StratoTech</span>
          <span className="w-2 h-2 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-full bg-[#111111] ml-2 sm:ml-4 inline-block self-center" />
        </div>
      </Link>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#fafafa] text-[#1d1d1f] border-t border-black/[0.08] text-[13px] block clear-both">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-10 sm:pb-12">
        {/* Main Grid: Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-black/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
              <span className="font-display text-base font-semibold tracking-tight text-[#111111]">
                StratoTechCorp
              </span>
            </div>
            <p className="text-[13px] text-[#6e6e73] leading-relaxed max-w-sm font-normal">
              Strategic technology consulting, product design systems, and resilient full-stack engineering studio based in Bengaluru.
            </p>
          </div>

          {/* Directory Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Products Column */}
            <div className="space-y-2.5">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#1d1d1f] font-semibold">
                Products
              </h4>
              <ul className="space-y-2 text-[#6e6e73]">
                <li><Link href="/products/salesx" className="hover:text-[#1d1d1f] transition-colors">SalesX Platform</Link></li>
                <li><Link href="/products/meetingx" className="hover:text-[#1d1d1f] transition-colors">MeetingX WebRTC</Link></li>
                <li><Link href="/projects/zobay-voice-ai" className="hover:text-[#1d1d1f] transition-colors">Zobay Voice AI</Link></li>
                <li><Link href="/products" className="hover:text-[#1d1d1f] transition-colors">All Products →</Link></li>
              </ul>
            </div>

            {/* Capabilities Column */}
            <div className="space-y-2.5">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#1d1d1f] font-semibold">
                Capabilities
              </h4>
              <ul className="space-y-2 text-[#6e6e73]">
                <li><Link href="/services" className="hover:text-[#1d1d1f] transition-colors">Engineering Services</Link></li>
                <li><Link href="/projects" className="hover:text-[#1d1d1f] transition-colors">Case Studies</Link></li>
                <li><Link href="/industries" className="hover:text-[#1d1d1f] transition-colors">Industries</Link></li>
                <li><Link href="/about" className="hover:text-[#1d1d1f] transition-colors">Studio &amp; Team</Link></li>
              </ul>
            </div>

            {/* Knowledge & Careers Column */}
            <div className="space-y-2.5 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#1d1d1f] font-semibold">
                Connect
              </h4>
              <ul className="space-y-2 text-[#6e6e73]">
                <li><Link href="/blog" className="hover:text-[#1d1d1f] transition-colors">Engineering Essays</Link></li>
                <li><Link href="/careers" className="hover:text-[#1d1d1f] transition-colors">Open Roles</Link></li>
                <li><Link href="/faq" className="hover:text-[#1d1d1f] transition-colors">Studio FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-[#1d1d1f] transition-colors font-medium text-[#1d1d1f]">Contact Team →</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Studio Location & Compliance Links */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#86868b] text-[12px] font-mono">
          <div className="flex items-center gap-3">
            <span>© 2026 StratoTechCorp.</span>
            <span>·</span>
            <span>Bengaluru, India</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#1d1d1f] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#1d1d1f] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* ── PURE MINIMALIST LUXURY BRAND LOGO (SCALED FOR FOOTER) ── */}
        <FooterBrandLogo />
      </div>
    </footer>
  );
}