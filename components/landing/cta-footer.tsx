import Link from "next/link";
import { UIPreview } from "@/components/docs/ui-preview";

function Command({ children }: { children: string }) {
  return (
    <div className="mt-6 max-w-full overflow-x-auto rounded-lg border border-brand-bg-tertiary bg-brand-bg-primary px-4 py-2.5 text-left font-mono text-sm">
      <span className="text-brand-text-muted">$ </span>
      <span className="whitespace-nowrap text-brand-text-primary">{children}</span>
    </div>
  );
}

export function CtaFooter() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-bg-primary via-brand-bg-secondary to-brand-bg-primary" />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 xl:max-w-6xl">
        {/* Card 1 — Sync to Logfire */}
        <div className="flex flex-col items-center rounded-2xl border border-brand-bg-tertiary bg-brand-bg-secondary p-8 text-center">
          <h3 className="text-2xl font-bold text-brand-text-primary">
            Sync to Logfire
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
            Sign in from the browser and mirror completed agent turns to
            Pydantic Logfire as structured traces. No key to paste.
          </p>
          <Command>thirdeye logfire enable</Command>
          <Link
            href="/docs/logfire"
            className="mt-6 rounded-lg bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent-primary/25 transition-all hover:shadow-brand-accent-primary/40 hover:brightness-110"
          >
            Set up Logfire
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
          <Link
            href="/docs/workbench"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-brand-accent-secondary/40 px-6 py-3 text-sm font-semibold text-brand-accent-tertiary transition-colors hover:bg-brand-accent-secondary/10 hover:border-brand-accent-secondary"
          >
            Set up the integration
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* Card 3 — Open the UI */}
        <div className="flex flex-col items-center overflow-hidden rounded-2xl border border-brand-bg-tertiary bg-brand-bg-secondary p-8 text-center md:col-span-2">
          <h3 className="text-2xl font-bold text-brand-text-primary">
            Open Thirdeye UI
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
            Explore sessions, evals, usage, and settings in a local browser.
          </p>
          <Command>thirdeye ui</Command>
          <div className="mt-6 w-full overflow-x-auto rounded-xl [&>div]:!m-0 [&>div]:min-w-[720px]">
            <UIPreview />
          </div>
          <Link
            href="/docs/ui"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-brand-accent-secondary/40 px-6 py-3 text-sm font-semibold text-brand-accent-tertiary transition-colors hover:border-brand-accent-secondary hover:bg-brand-accent-secondary/10"
          >
            Explore the UI
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
