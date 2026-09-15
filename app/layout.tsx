import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StartoTech — Sovereign Autonomous Enterprise Infrastructure",
  description: "Architecting the autonomous enterprise with Zobay Voice AI, StartOne Cloud OS, LegalX Compliance Core, and BaseOne Treasury Settlement.",
  keywords: [
    "StartoTech",
    "Zobay Voice AI",
    "StartOne Enterprise OS",
    "LegalX Contract Intelligence",
    "BaseOne Treasury Settlement",
    "ValidSoft Voice Biometrics",
    "SOC-2 Type II",
    "Autonomous Enterprise Infrastructure"
  ],
  authors: [{ name: "StartoTech Engineering" }],
  openGraph: {
    title: "StartoTech — Sovereign Autonomous Enterprise Infrastructure",
    description: "Sub-280ms voice AI, multi-entity fiscal cloud OS, and machine-speed legal intelligence.",
    type: "website",
    locale: "en_US",
    siteName: "StartoTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "StartoTech — Autonomous Enterprise Infrastructure",
    description: "Sovereign machine-intelligent systems for global enterprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} light scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans selection:bg-[#9fe870] selection:text-[#0e0f0c]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
