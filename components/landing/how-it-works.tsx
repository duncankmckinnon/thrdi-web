import type { ReactNode } from "react";

const steps: { number: string; title: string; description: ReactNode; code: string; icon: ReactNode }[] = [
  {
    number: "1",
    title: "Install",
    description: "One command, including the browser UI and Logfire support.",
    code: "brew install duncankmckinnon/tap/thirdeye",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Wire it up",
    description:
      "Set up tracing, agent skills, and optional Logfire sync in one guided flow.",
    code: "thirdeye setup",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Understand & improve your workflow",
    description:
      "List, tail, search, tag, and evaluate every session",
    code: 'thirdeye list && thirdeye search "auth refactor" --tag review',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 pb-24 pt-16 lg:px-8">
      <div className="mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
        </div>

        <div className="relative mt-16">
          {/* Connecting line — desktop only */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-bg-tertiary to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 2xl:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step number badge */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent-primary to-brand-accent-secondary text-white shadow-lg shadow-brand-accent-primary/25">
                  {step.icon}
                </div>

                {/* Arrow — mobile only, between steps */}
                {index < steps.length - 1 && (
                  <div className="my-4 text-brand-bg-tertiary lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                  </div>
                )}

                <h3 className="mt-6 text-xl font-semibold text-brand-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
                  {step.description}
                </p>
                <div className="mt-4 w-full overflow-x-auto rounded-lg border border-brand-bg-tertiary bg-brand-bg-secondary px-3 py-2 text-left font-mono text-xs [@media(min-width:1600px)]:whitespace-nowrap">
                  <span className="text-brand-text-muted">$ </span>
                  <span className="text-brand-text-primary">{step.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
