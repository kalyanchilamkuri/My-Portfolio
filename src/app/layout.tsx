import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kalyan Chilamkuri — Software Engineer & Competitive Programmer",
  description: "Portfolio of Kalyan Chilamkuri, showcasing full-stack engineering experience, AI integrations, and algorithmic problem-solving achievements.",
  keywords: ["Kalyan Chilamkuri", "Software Engineer", "Competitive Programmer", "Sprinklr Intern", "React Developer", "Full Stack Engineer"],
  authors: [{ name: "Kalyan Chilamkuri" }],
  openGraph: {
    title: "Kalyan Chilamkuri | Software Engineer & Competitive Programmer",
    description: "Portfolio of Kalyan Chilamkuri, showcasing full-stack engineering experience, AI integrations, and algorithmic problem-solving achievements.",
    url: "https://kalyanchilamkuri.dev",
    siteName: "Kalyan Chilamkuri Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalyan Chilamkuri | Software Engineer & Competitive Programmer",
    description: "Portfolio of Kalyan Chilamkuri, showcasing full-stack engineering experience, AI integrations, and algorithmic problem-solving achievements.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-[#040508] text-[#f8fafc] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

