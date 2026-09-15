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
  title: "Fortune Tech — WE BUILD WHAT'S NEXT.",
  description: "Digital products. Intelligent systems. Real results.",
  keywords: [
    "Fortune Tech",
    "Digital Products",
    "Web Development",
    "UI/UX Design",
    "AI & Automation",
    "Cloud & Technology",
  ],
  authors: [{ name: "Fortune Tech" }],
  openGraph: {
    title: "Fortune Tech — WE BUILD WHAT'S NEXT.",
    description: "Digital products. Intelligent systems. Real results.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-[#050505] text-[#f2f2ec] antialiased font-sans selection:bg-[#b7ff4a] selection:text-[#050505]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}