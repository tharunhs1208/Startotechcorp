import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ClientOverlays from "@/components/ClientOverlays";
import { OrganizationJsonLd } from "@/components/JsonLd";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
      className={`${montserrat.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <OrganizationJsonLd />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F3F3F3] text-[#000000] antialiased font-sans selection:bg-[#82FFCD] selection:text-black"
      >
        <ClientOverlays />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}