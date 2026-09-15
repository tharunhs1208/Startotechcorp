"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ShieldCheck } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight mb-4">
            Terms &amp; Conditions
          </h1>

          <p className="text-xs text-slate-500 font-mono mb-12">
            Last Updated: March 15, 2026 • Version 3.1
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the StartoTech website, software services, APIs, and client portals, you agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a company, you represent that you have the authority to bind such entity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">2. Intellectual Property Rights</h2>
              <p>
                All custom software code, designs, and deliverables created under client Master Services Agreements (MSAs) belong exclusively to the client upon receipt of final settlement. StartoTech retains all rights to its pre-existing proprietary libraries, developer frameworks, and core foundation platforms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">3. Service Level Agreements (SLAs) &amp; Availability</h2>
              <p>
                Enterprise engagements include contractually enforced 99.99% uptime guarantees and scheduled maintenance windows. Emergency incident response times and remedies for unplanned downtime are governed by the specific signed Statement of Work (SOW).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">4. Confidentiality &amp; Non-Disclosure</h2>
              <p>
                Both parties agree to protect and maintain the strict confidentiality of all proprietary codebases, trade secrets, business plans, and financial terms shared during technical discovery or sprint execution.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-950 mb-3">5. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of Bengaluru, Karnataka, India, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
