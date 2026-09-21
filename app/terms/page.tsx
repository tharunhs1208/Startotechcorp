import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const TERMS_SECTIONS = [
  {
    num: "01",
    title: "Introduction",
    desc: "These Terms of Service govern your use of the StratoTechCorp website and engineering services. By accessing our platform or engaging our services, you agree to these terms in full.",
  },
  {
    num: "02",
    title: "Services",
    desc: "StratoTechCorp provides bespoke software engineering, UI/UX design, product consulting, and artificial intelligence integration services as outlined in individual Statements of Work (SOW).",
  },
  {
    num: "03",
    title: "User Responsibilities",
    desc: "Clients and website visitors agree to provide accurate information and refrain from unauthorized vulnerability probing, reverse engineering, or disruptive network operations.",
  },
  {
    num: "04",
    title: "Intellectual Property",
    desc: "All client deliverables, custom software builds, and proprietary assets created under agreed contracts transfer to the client upon receipt of full payment, unless specified otherwise.",
  },
  {
    num: "05",
    title: "Payments",
    desc: "Payment schedules, retainer fees, and milestone invoices are governed by the applicable Master Services Agreement (MSA) and executed project proposals.",
  },
  {
    num: "06",
    title: "Limitation of Liability",
    desc: "StratoTechCorp shall not be liable for indirect, incidental, or consequential damages resulting from third-party outages or force majeure events beyond reasonable technical control.",
  },
  {
    num: "07",
    title: "Contact",
    desc: "For questions regarding these terms, please contact legal@stratotechcorp.in.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-12 sm:pb-20">
        <section className="max-w-[1240px] mx-auto px-5 sm:px-8 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Breadcrumbs items={[{ label: "Terms of Service" }]} />

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider text-[#6e6e73] hover:text-[#1d1d1f] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="max-w-3xl">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#6e6e73] uppercase block mb-3 font-semibold">
              LEGAL &amp; COMPLIANCE
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#1d1d1f] mb-4">
              Terms of Service
            </h1>
            <p className="text-[14px] text-[#86868b] font-mono">
              Last updated: September 2026
            </p>
          </div>
        </section>

        <section className="max-w-[1024px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="divide-y divide-black/[0.08]">
            {TERMS_SECTIONS.map((sec) => (
              <div key={sec.num} className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-4 flex items-center gap-3">
                  <span className="font-mono text-[12px] text-[#86868b]">{sec.num}</span>
                  <h2 className="font-display text-lg sm:text-xl font-medium text-[#1d1d1f]">
                    {sec.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed font-normal">
                    {sec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
