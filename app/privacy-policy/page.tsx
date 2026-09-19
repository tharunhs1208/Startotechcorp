import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PRIVACY_SECTIONS = [
  {
    num: "01",
    title: "Information We Collect",
    desc: "We collect information you provide directly to us through contact inquiries, project scoping questionnaires, and career applications (e.g., name, work email, company, and project requirements). We also collect basic telemetry analytics to optimize site performance.",
  },
  {
    num: "02",
    title: "How We Use Information",
    desc: "We use the information we collect to communicate with prospective clients, deliver software engineering services, evaluate employment candidates, and continuously improve our digital products.",
  },
  {
    num: "03",
    title: "Data Security",
    desc: "We implement industry-standard encryption, strict access controls, and secure edge infrastructure to protect your personal and proprietary data from unauthorized access or disclosure.",
  },
  {
    num: "04",
    title: "Cookies",
    desc: "We use essential cookies and minimal session identifiers to maintain application state, improve response latency, and analyze anonymous traffic flows.",
  },
  {
    num: "05",
    title: "Third-Party Services",
    desc: "We may employ trusted third-party providers (e.g., cloud hosting, analytics, email delivery) that process information strictly on our behalf under compliant data processing agreements.",
  },
  {
    num: "06",
    title: "Your Rights",
    desc: "You have the right to request access to, correction of, or deletion of your personal data stored with StratoTechCorp at any time.",
  },
  {
    num: "07",
    title: "Contact",
    desc: "For any privacy-related inquiries, please contact our data governance team directly at privacy@stratotechcorp.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-[#0070f3] selection:text-white pb-10 sm:pb-16">
      <Navbar />

      <section className="pt-32 pb-16 sm:pb-24 border-b border-black/[0.08] bg-[#f8fafc]">
        <div className="page-container max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <span className="eyebrow text-[#0070f3] font-semibold block mb-4">Legal</span>
          <h1 className="display-xl text-4xl sm:text-6xl md:text-7xl text-zinc-900 uppercase">
            PRIVACY POLICY
          </h1>
          <p className="mt-4 font-mono text-xs text-zinc-500">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="page-container max-w-4xl space-y-12">
          {PRIVACY_SECTIONS.map((sec) => (
            <div key={sec.num} className="pb-10 border-b border-black/[0.06] last:border-b-0 last:pb-0">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-sm font-bold text-[#0070f3]">
                  {sec.num}
                </span>
                <h2 className="display-lg text-xl sm:text-2xl text-zinc-900 uppercase">
                  {sec.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pl-8">
                {sec.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
