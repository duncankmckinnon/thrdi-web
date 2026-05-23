import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const siteDescription =
  "Local-first observability for AI coding agents. Trace, search, tag, and evaluate every session from Claude Code, Cursor, Codex, Gemini, and Copilot — all on your filesystem.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thrdi.com"),
  title: {
    default: "thirdeye — Trace every agent session, locally",
    template: "%s — thirdeye",
  },
  description: siteDescription,
  applicationName: "thirdeye",
  keywords: [
    "thirdeye",
    "thrdi",
    "agent traces",
    "LLM observability",
    "local-first",
    "Claude Code traces",
    "Codex traces",
    "Gemini CLI traces",
    "Cursor traces",
    "Copilot traces",
    "LLM evals",
    "agent debugging",
  ],
  authors: [{ name: "Duncan McKinnon", url: "https://github.com/duncankmckinnon" }],
  creator: "Duncan McKinnon",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "thirdeye — Trace every agent session, locally",
    description: siteDescription,
    url: "https://thrdi.com",
    siteName: "thirdeye",
    type: "website",
    images: [
      {
        url: "/thrdi-banner.png",
        width: 1200,
        height: 630,
        alt: "thirdeye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "thirdeye — Trace every agent session, locally",
    description: siteDescription,
    images: ["/thrdi-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "thirdeye",
  alternateName: "thrdi",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Linux",
  description: siteDescription,
  url: "https://thrdi.com",
  downloadUrl: "https://pypi.org/project/thrdi/",
  softwareVersion: "latest",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Duncan McKinnon",
    url: "https://github.com/duncankmckinnon",
  },
  codeRepository: "https://github.com/duncankmckinnon/thirdeye",
  programmingLanguage: "Python",
  license: "https://opensource.org/licenses/MIT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-brand-bg-primary text-brand-text-primary font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
