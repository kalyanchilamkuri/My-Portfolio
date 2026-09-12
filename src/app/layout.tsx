import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile, links, SITE_URL } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jetbrains",
  display: "swap",
});

const description =
  "Kalyan Chilamkuri — Computer Science undergraduate at IIIT Lucknow (graduating 2027) building agentic AI systems, LLM integrations and backend microservices. Software Engineering Intern at Sprinklr, 1000+ competitive programming problems solved.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — Software Engineer`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Kalyan Chilamkuri",
    "Software Engineer",
    "Agentic AI",
    "Model Context Protocol",
    "Competitive Programming",
    "IIIT Lucknow",
    "Full Stack Developer",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — Software Engineer`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Engineer`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  email: profile.email,
  jobTitle: "Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Information Technology, Lucknow",
  },
  sameAs: [links.github, links.linkedin, links.leetcode, links.codeforces],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* Scroll reveals start hidden and are revealed by script; without JS
            they must not trap content in an invisible state. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
