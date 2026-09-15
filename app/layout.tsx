import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StratoTechCorp — Digital Product Studio",
  description: "We build digital products that move businesses forward. AI, Software, Cloud & Design.",
  keywords: [
    "StratoTechCorp",
    "Digital Products",
    "Product Engineering",
    "AI & Machine Learning",
    "Web & Mobile",
    "Cloud Solutions",
    "UI/UX Design",
  ],
  authors: [{ name: "StratoTechCorp" }],
  openGraph: {
    title: "StratoTechCorp — WE BUILD DIGITAL PRODUCTS.",
    description: "We build digital products that move businesses forward. AI, Software, Cloud & Design.",
    type: "website",
    locale: "en_US",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#fafafa] text-zinc-900 antialiased font-sans selection:bg-[#0070f3] selection:text-white"
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}