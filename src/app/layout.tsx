import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "André Figueira | Researcher & Principal Engineer",
  description:
    "Independent researcher exploring informational ontology, consciousness, and the nature of reality. Principal Engineer with 20+ years building systems at scale. Founder of Polyxmedia.",
  keywords: [
    "informational substrate convergence",
    "informational ontology",
    "philosophy of mind",
    "hard problem of consciousness",
    "quantum information theory",
    "independent researcher",
    "principal engineer",
    "software engineer",
  ],
  authors: [{ name: "André Figueira" }],
  openGraph: {
    title: "André Figueira | Researcher & Principal Engineer",
    description:
      "Independent researcher exploring what reality is made of. Principal Engineer building systems at scale.",
    url: "https://andrefigueira.me",
    siteName: "André Figueira",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "André Figueira | Researcher & Principal Engineer",
    description:
      "Independent researcher exploring what reality is made of. Principal Engineer building systems at scale.",
    creator: "@andrefigueira",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${heading.variable} ${body.variable} ${mono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
