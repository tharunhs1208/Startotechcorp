import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ClientOverlays from "@/components/ClientOverlays";
import { OrganizationJsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://stratotechcorp.in"),
  title: {
    default: "StratoTechCorp — Strategic Clarity. Sustainable Growth.",
    template: "%s | StratoTechCorp",
  },
  description: "Strategic Clarity. Sustainable Growth. We help businesses refine strategy, strengthen operations, and scale with confidence through data-driven consulting and practical digital execution.",
  keywords: [
    "StratoTechCorp",
    "Digital Product Studio",
    "Product Engineering",
    "Voice AI Agents",
    "Enterprise Software",
    "Next.js Development",
    "Cloud Solutions",
    "UI/UX Design",
    "Bengaluru Tech Agency",
  ],
  authors: [{ name: "StratoTechCorp", url: "https://stratotechcorp.in" }],
  creator: "StratoTechCorp",
  publisher: "StratoTechCorp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "StratoTechCorp — Strategic Clarity. Sustainable Growth.",
    description: "We help businesses refine strategy, strengthen operations, and scale with confidence through data-driven consulting and practical digital execution.",
    url: "https://stratotechcorp.in",
    siteName: "StratoTechCorp",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StratoTechCorp — Strategic Clarity. Sustainable Growth.",
    description: "Strategic technology consulting & digital engineering studio.",
    creator: "@stratotechcorp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <OrganizationJsonLd />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-[#1d1d1f] antialiased font-sans selection:bg-[#1d1d1f] selection:text-white"
      >
        <ClientOverlays />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}