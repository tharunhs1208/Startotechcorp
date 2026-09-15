"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/cinematic/Reveal";

export default function PrivacyPolicyPage() {
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
            PRIVACY
            <br />
            <span className="text-outline">POLICY.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="text-white/30 text-xs font-mono mb-16 border-t border-white/10 pt-6">
            Last updated: March 15, 2026 &nbsp;·&nbsp; Version 4.2
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
                Information We Collect
              </h2>
              <p>
                FortuneTech Corp collects information necessary to provide, optimise, and secure our
                enterprise software development and AI engineering services. This includes contact
                details submitted through forms (name, corporate email, phone, organisation name)
                and technical telemetry (IP addresses, browser type, edge-node latency metrics).
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">02</span>
                How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect solely to:</p>
              <ul className="space-y-2 pl-4 border-l border-white/10">
                <li>Respond to project inquiries and schedule discovery sessions.</li>
                <li>Fulfil contractual engineering, maintenance, and SLA obligations.</li>
                <li>Monitor network performance, uptime telemetry, and prevent unauthorised intrusion.</li>
                <li>Comply with SOC-2 Type II, ISO 27001, HIPAA, and GDPR regulatory standards.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">03</span>
                Information Sharing
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information
                to outside parties. This does not include trusted third parties who assist us in
                operating our website or conducting our business, so long as those parties agree to
                keep this information confidential under binding agreements.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">04</span>
                Data Security &amp; Sovereignty
              </h2>
              <p>
                All customer data and project specifications are protected with Zero-Trust
                boundaries. We utilise AES-256 payload encryption at rest and TLS 1.3 in transit.
                Our client databases operate in dedicated private VPCs with strict role-based access
                control (RBAC). We guarantee 100% data sovereignty with zero retention on
                third-party AI training sets.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">05</span>
                Cookies &amp; Tracking
              </h2>
              <p>
                We only use essential session cookies required for core site functionality and
                anonymous performance monitoring. We do not sell, rent, or monetise your personal or
                business data to third-party ad networks. You may instruct your browser to refuse
                all cookies or to indicate when a cookie is being sent.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">06</span>
                Your Rights &amp; Data Deletion
              </h2>
              <p>
                Under GDPR, CCPA, and applicable global privacy laws, you have the right to
                request access to, rectification of, or permanent deletion of any personal data
                stored on our systems. To exercise these rights, submit a written request to our
                compliance team.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.1}>
            <section>
              <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="text-[#b7ff4a] font-mono text-sm">07</span>
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our security protocols, please
                reach out to our compliance team at{" "}
                <a
                  href="mailto:privacy@fortunetech.com"
                  className="text-[#b7ff4a] hover:text-white transition-colors underline underline-offset-4"
                >
                  privacy@fortunetech.com
                </a>
                .
              </p>
            </section>
          </Reveal>

        </div>

        {/* Divider */}
        <div className="mt-24 border-t border-white/10 pt-10 flex flex-wrap gap-6 text-white/30 text-xs font-mono">
          <span>© 2026 FortuneTech Corp</span>
          <a href="/terms" className="hover:text-[#b7ff4a] transition-colors">
            Terms &amp; Conditions
          </a>
          <a href="/privacy-policy" className="text-[#b7ff4a]">
            Privacy Policy
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
