import React from "react";
import Link from "next/link";

function FooterBrandLogo() {
  return (
    <div className="mt-14 sm:mt-18 pt-8 flex items-center justify-center">
      <Link
        href="/"
        className="group inline-flex items-center justify-center gap-4 sm:gap-6 py-4 cursor-pointer hover:opacity-85 transition-opacity"
      >
        {/* 4-Dot Clover Icon */}
        <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 grid grid-cols-2 gap-1 sm:gap-1.5 items-center justify-center shrink-0">
          <span className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#82FFCD]" />
          <span className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-white" />
          <span className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-white" />
          <span className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-[#82FFCD]" />
        </div>

        {/* Giant Watermark Typography */}
        <div className="flex items-center text-[10vw] sm:text-[8vw] lg:text-[6.5vw] font-display font-black tracking-[-0.04em] text-white leading-none">
          <span>StratoTech</span>
          <span className="w-2 h-2 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-full bg-[#82FFCD] ml-2 sm:ml-4 inline-block self-center" />
        </div>
      </Link>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0C0C0E] text-white border-t border-white/10 text-[13px] block clear-both">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        
        {/* Main Grid: Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#82FFCD]" />
              <span className="font-display text-base font-bold tracking-tight text-white">
                StratoTech
              </span>
            </div>
            <p className="text-[14px] text-zinc-400 leading-relaxed max-w-sm font-normal">
              StratoTech is a digital engineering and design studio helping brands grow with smart, results-focused <Link href="/services/ui-ux-design" className="text-white hover:underline">UI/UX Design</Link>, <Link href="/services/web-development" className="text-white hover:underline">Web Engineering</Link>, <Link href="/services/ai-machine-learning" className="text-white hover:underline">Voice AI</Link>, and <Link href="/products" className="text-white hover:underline">Software Platforms</Link>.
            </p>
            <div className="pt-2 space-y-1">
              <a
                href="mailto:tharun.hs@stratotechcorp.in"
                className="text-[14px] font-semibold text-[#82FFCD] hover:underline block"
              >
                tharun.hs@stratotechcorp.in
              </a>
              <span className="text-[12px] font-mono text-zinc-400 block">
                Bengaluru, India · 1 St Peter&apos;s Sq
              </span>
            </div>
          </div>

          {/* Directory Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Products Column */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#82FFCD] font-bold">
                Products
              </h4>
              <ul className="space-y-2 text-zinc-400">
                <li><Link href="/products/salesx" className="hover:text-white transition-colors">SalesX</Link></li>
                <li><Link href="/products/meetingx" className="hover:text-white transition-colors">MeetingX</Link></li>
                <li><Link href="/projects/zobay-voice-ai" className="hover:text-white transition-colors">Zobay AI</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors font-medium text-white">All Products →</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#82FFCD] font-bold">
                Services
              </h4>
              <ul className="space-y-2 text-zinc-400">
                <li><Link href="/services/ui-ux-design" className="hover:text-white transition-colors">Branding &amp; UI/UX</Link></li>
                <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Design</Link></li>
                <li><Link href="/services/ai-machine-learning" className="hover:text-white transition-colors">Voice AI</Link></li>
                <li><Link href="/services/cloud-solutions" className="hover:text-white transition-colors">Cloud &amp; DevOps</Link></li>
              </ul>
            </div>

            {/* Studio Column */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#82FFCD] font-bold">
                Studio
              </h4>
              <ul className="space-y-2 text-zinc-400">
                <li><Link href="/projects" className="hover:text-white transition-colors">Our Work</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#82FFCD] font-bold">
                Connect
              </h4>
              <ul className="space-y-2 text-zinc-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog Essays</Link></li>
                <li><Link href="/contact" className="hover:text-[#82FFCD] transition-colors font-medium text-white">Contact Studio →</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[12px] font-mono">
          <div className="flex items-center gap-3">
            <span>© 2026 StratoTech. All rights reserved.</span>
            <span>·</span>
            <span>Reg No. 11701108</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* Scaled Luxury Brand Mark */}
        <FooterBrandLogo />
      </div>
    </footer>
  );
}