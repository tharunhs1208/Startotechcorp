"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f2f2ec]">
      <Navbar />

      {/* ── HEADER ── */}
      <div className="mx-auto max-w-4xl px-6 sm:px-10 pt-44 pb-4">
        <Reveal delay={0.1}>
          <div className="eyebrow mb-6">Legal</div>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="display-xl text-6xl sm:text-8xl leading-none mb-6">
            TERMS &amp;
            <br />
            <span className="text-outline">CONDITIONS.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="text-white/30 text-xs font-mono mb-16 border-t border-white/10 pt-6">
            Last updated: March 15, 2026 &nbsp;·&nbsp; Version 3.1
          </div>
        </Reveal>
      </div>

      {/* ── BODY ── */}
      <div className="mx-auto max-w-4xl px-6 sm:px-10 pb-32">
        <div className="space-y-14 text-white/70 text-sm sm:text-base leading-relaxed">

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">01</span>
                Agreement to Terms
              </h2>
              <p>
                By accessing or using the FortuneTech Corp website, software services, APIs, and
                client portals, you agree to be bound by these Terms and Conditions. If you are
                entering into this agreement on behalf of a company or other legal entity, you
                represent that you have the authority to bind such entity to these terms.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">02</span>
                Intellectual Property Rights
              </h2>
              <p>
                All custom software code, designs, and deliverables created under client Master
                Services Agreements (MSAs) belong exclusively to the client upon receipt of final
                payment. FortuneTech Corp retains all rights to its pre-existing proprietary
                libraries, developer frameworks, internal tooling, and core foundation platforms
                used in the delivery of services.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">03</span>
                Service Level Agreements (SLAs) &amp; Availability
              </h2>
              <p>
                Enterprise engagements include contractually enforced 99.99% uptime guarantees and
                scheduled maintenance windows communicated at least 48 hours in advance. Emergency
                incident response times and remedies for unplanned downtime are governed by the
                specific signed Statement of Work (SOW) for each engagement.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">04</span>
                Confidentiality &amp; Non-Disclosure
              </h2>
              <p>
                Both parties agree to protect and maintain the strict confidentiality of all
                proprietary codebases, trade secrets, business plans, and financial terms shared
                during technical discovery or sprint execution. This obligation survives the
                termination of any engagement for a period of five (5) years.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">05</span>
                Payment Terms
              </h2>
              <p>
                All invoices are issued at the commencement of each sprint or milestone phase.
                Payment is due within 14 calendar days of invoice date. Late payments accrue
                interest at 1.5% per month. FortuneTech Corp reserves the right to suspend active
                development on any engagement with outstanding balances exceeding 30 days past due.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">06</span>
                Limitation of Liability
              </h2>
              <p>
                FortuneTech Corp shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or related to your use of our
                services. Our total liability for any claim arising under these Terms shall not
                exceed the total fees paid by you in the three months preceding the event giving
                rise to the claim.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">07</span>
                Termination
              </h2>
              <p>
                Either party may terminate an active engagement by providing 30 days&apos; written
                notice. Upon termination, the client is responsible for payment of all completed
                milestones and work-in-progress at a pro-rated daily rate. FortuneTech Corp will
                deliver all completed work product and transfer all relevant credentials within 10
                business days of termination.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">08</span>
                Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of
                Bengaluru, Karnataka, India, without regard to its conflict of law provisions. Any
                disputes arising under these Terms shall be subject to the exclusive jurisdiction of
                courts located in Bengaluru.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">09</span>
                Contact
              </h2>
              <p>
                For questions regarding these Terms &amp; Conditions, please contact our legal team
                at{" "}
                <a
                  href="mailto:legal@fortunetech.com"
                  className="text-[#b7ff4a] hover:text-white transition-colors underline underline-offset-4"
                >
                  legal@fortunetech.com
                </a>
                .
              </p>
            </section>
          </Reveal>

        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-white/10 pt-10 flex flex-wrap gap-6 text-white/30 text-xs font-mono">
          <span>© 2026 FortuneTech Corp</span>
          <a href="/privacy-policy" className="hover:text-[#b7ff4a] transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-[#b7ff4a]">
            Terms &amp; Conditions
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
