import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
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

const mono = JetBrains_Mono({
  variable: "--font-mono",
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
  title: "Andre Figueira | Software Engineer",
  description:
    "Software engineer building digital experiences that matter. Clean code, great UX, products that solve real problems.",
  keywords: [
    "software engineer",
    "developer",
    "react",
    "typescript",
    "next.js",
    "full stack",
  ],
  authors: [{ name: "Andre Figueira" }],
  openGraph: {
    title: "Andre Figueira | Software Engineer",
    description:
      "Software engineer building digital experiences that matter.",
    url: "https://andrefigueira.me",
    siteName: "Andre Figueira",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andre Figueira | Software Engineer",
    description:
      "Software engineer building digital experiences that matter.",
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
