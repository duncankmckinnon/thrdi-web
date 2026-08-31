import Link from "next/link";
import Image from "next/image";
import { InstallCommand } from "@/components/landing/install-command";
import { GitHubStars } from "@/components/landing/github-stars";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-0 pt-24 sm:pt-32 lg:px-8">
      <style>{`
        @keyframes heroLineIn {
          from { opacity: 0; transform: translateY(20px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .hero-line-1 { animation: heroLineIn 0.6s ease-out 0.1s both; }
        .hero-line-2 { animation: heroLineIn 0.6s ease-out 0.5s both; }
        .hero-line-3 { animation: heroLineIn 0.6s ease-out 0.9s both; }
        .hero-fade { animation: heroLineIn 0.6s ease-out 1.3s both; }
      `}</style>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-bg-primary via-brand-bg-primary to-brand-bg-secondary" />

      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="hero-line-1 block pb-2 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary bg-clip-text text-transparent">
            Trace all your agents
          </span>
          <span className="hero-line-2 block py-2">
            Use all your traces
          </span>
          <span className="hero-line-3 block pt-2 pb-4 bg-gradient-to-r from-brand-accent-secondary to-brand-accent-tertiary bg-clip-text text-transparent">
            Improve all your workflows
          </span>
        </h1>

        <div className="hero-fade mt-10">
          <Image
            src="/thrdi-logo-1.png"
            alt="thirdeye logo"
            width={1402}
            height={1122}
            className="mx-auto max-w-sm w-full h-auto"
            priority
          />
        </div>

        <p className="hero-fade mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-text-secondary sm:text-xl">
          Comprehensive observability and agent-oriented analytics for your local harness, with Pydantic Logfire integration
        </p>

        {/* Install command */}
        <div className="mt-10 flex items-center justify-center">
          <InstallCommand size="lg" />
        </div>

        {/* CTA buttons */}
        <div className="hero-fade mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/docs/getting-started"
            className="rounded-lg bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent-primary/25 transition-all hover:shadow-brand-accent-primary/40 hover:brightness-110"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/duncankmckinnon/thirdeye"
            className="rounded-lg border border-brand-bg-tertiary px-6 py-3 text-sm font-semibold text-brand-text-primary transition-colors hover:bg-brand-bg-secondary"
          >
            View on GitHub
          </Link>
          <a
            href="/downloads/thirdeye-skills.zip"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-brand-accent-secondary/40 px-6 py-3 text-sm font-semibold text-brand-accent-tertiary transition-colors hover:bg-brand-accent-secondary/10 hover:border-brand-accent-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Skills
          </a>
        </div>

        {/* GitHub stars counter — only renders when ≥ 25 stars */}
        <div className="mt-6 flex justify-center">
          <GitHubStars />
        </div>
      </div>
    </section>
  );
}
