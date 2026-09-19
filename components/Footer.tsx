import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fafafa] text-[#1d1d1f] border-t border-black/[0.08] text-[13px] block clear-both">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-6 sm:pt-10 pb-8 sm:pb-10">
        {/* Directory & Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-black/[0.06]">
          {/* Products Column */}
          <div className="space-y-2.5">
            <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#1d1d1f] font-semibold">
              Products
            </h4>
            <ul className="space-y-1.5 text-[#6e6e73]">
              <li><Link href="/products" className="hover:text-[#1d1d1f] transition-colors">SalesX</Link></li>
              <li><Link href="/projects/zobay-voice-ai" className="hover:text-[#1d1d1f] transition-colors">Zobay</Link></li>
              <li><Link href="/products" className="hover:text-[#1d1d1f] transition-colors">MeetingX</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-2.5">
            <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#1d1d1f] font-semibold">
              Company
            </h4>
            <ul className="space-y-1.5 text-[#6e6e73]">
              <li><Link href="/projects" className="hover:text-[#1d1d1f] transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-[#1d1d1f] transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#1d1d1f] transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-2.5">
            <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#1d1d1f] font-semibold">
              Contact
            </h4>
            <div className="space-y-1.5">
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#1d1d1f] font-medium hover:text-[#0071e3] transition-colors"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <p className="text-[#86868b] text-[12px] font-mono">Bengaluru, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#86868b] text-[12px] font-mono">
          <p>© 2026 StratoTechCorp. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#1d1d1f] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#1d1d1f] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}