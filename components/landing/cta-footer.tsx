import Link from "next/link";
import { InstallCommand } from "@/components/landing/install-command";

export function CTAFooter() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-bg-primary via-brand-bg-secondary to-brand-bg-primary" />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card 1 — Try thirdeye */}
        <div className="flex flex-col items-center rounded-2xl border border-brand-bg-tertiary bg-brand-bg-secondary p-8 text-center">
          <h3 className="text-2xl font-bold text-brand-text-primary">
            Try thirdeye
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
            Install in 60 seconds. Start tracing your next session.
          </p>
          <div className="mt-6 flex w-full justify-center">
            <InstallCommand size="sm" />
          </div>
          <Link
            href="/docs/getting-started"
            className="mt-6 rounded-lg bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent-primary/25 transition-all hover:shadow-brand-accent-primary/40 hover:brightness-110"
          >
            Get Started
          </Link>
        </div>

        {/* Card 2 — Pair with workbench */}
        <div className="flex flex-col items-center rounded-2xl border border-brand-bg-tertiary bg-brand-bg-secondary p-8 text-center">
          <h3 className="text-2xl font-bold text-brand-text-primary">
            Pair with workbench
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
            Dispatch parallel agents and watch the trail unfold.
          </p>
          <a
            href="https://wbcli.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-brand-accent-secondary/40 px-6 py-3 text-sm font-semibold text-brand-accent-tertiary transition-colors hover:bg-brand-accent-secondary/10 hover:border-brand-accent-secondary"
          >
            Visit wbcli.com
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
