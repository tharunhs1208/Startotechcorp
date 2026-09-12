import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FortuneTechCorp — Next-Generation Enterprise Suite (Zobay, StartOne, LegalX)",
  description: "Architecting the intelligent enterprise with Zobay Voice AI, StartOne Enterprise OS, and LegalX Contract Intelligence.",
  keywords: ["FortuneTechCorp", "Zobay", "StartOne", "LegalX", "Voice AI", "Enterprise OS", "Legal Tech", "Autonomous Enterprise"],
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090a0f] text-gray-100 antialiased font-sans selection:bg-red-500/30 selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
