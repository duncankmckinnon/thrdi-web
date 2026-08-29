import type { ReactNode } from "react";

const features: { icon: ReactNode; title: string; description: ReactNode }[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Claude + Codex + Cursor capture",
    description:
      "Three coding-agent harnesses, one unified local history and trace model.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    ),
    title: "Local-first storage",
    description: (
      <>
        Everything stays in{" "}
        <code className="rounded bg-brand-bg-tertiary px-1 py-0.5 font-mono text-xs text-brand-accent-tertiary">
          ~/.thirdeye/
        </code>
        . No account or remote service required.
      </>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17V7" />
        <path d="M4 12h5" />
        <path d="M9 8v8" />
        <path d="M9 12h5" />
        <path d="M14 9v6" />
        <path d="M14 12h6" />
      </svg>
    ),
    title: "Pydantic Logfire export",
    description:
      "Optionally mirror completed turns as nested OpenTelemetry traces without adding hook latency.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
    title: "Per-turn token usage",
    description:
      "JSONL sidecars + a SQLite index. Roll up by model, time, or platform.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" x2="7.01" y1="7" y2="7" />
      </svg>
    ),
    title: "Tag & search",
    description:
      "Annotate any event with tags. Search substring or filter by platform, tag, or date.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Evals as rubrics",
    description:
      "Named directive rubrics graded by an installed CLI agent as LLM-as-judge.",
  },
];

export function Features() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything you need to see what your agents did
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-brand-bg-tertiary bg-brand-bg-secondary p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-lg bg-brand-accent-primary/10 p-3 text-brand-accent-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
