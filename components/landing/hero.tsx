import Link from "next/link";
import Image from "next/image";
import { InstallCommand } from "@/components/landing/install-command";
import { GitHubStars } from "@/components/landing/github-stars";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
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

      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="hero-line-1 block pb-2 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary bg-clip-text text-transparent">
            All your agents.
          </span>
          <span className="hero-line-2 block py-2">
            Every trace, every eval.
          </span>
          <span className="hero-line-3 block pt-2 pb-4 bg-gradient-to-r from-brand-accent-secondary to-brand-accent-tertiary bg-clip-text text-transparent">
            On your machine.
          </span>
        </h1>

        <div className="hero-fade mt-10">
          <Image
            src="/thrdi-logo.png"
            alt="thirdeye logo"
            width={400}
            height={400}
            className="mx-auto max-w-xs w-full h-auto"
            priority
          />
        </div>

        <p className="hero-fade mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-text-secondary sm:text-xl">
          Local-first observability for Claude Code and Codex, with optional live export to Pydantic Logfire.
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
        </div>

        {/* GitHub stars counter — only renders when ≥ 25 stars */}
        <div className="mt-6 flex justify-center">
          <GitHubStars />
        </div>
      </div>

      {/* Terminal mockup */}
      <div className="hero-fade mx-auto mt-16 max-w-6xl">
        <div className="overflow-hidden rounded-xl border border-brand-bg-tertiary bg-brand-bg-secondary shadow-2xl">
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-brand-bg-tertiary px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-brand-text-muted">terminal</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
            {/* Command */}
            <div className="text-brand-text-primary">
              <span className="text-brand-text-muted">$</span> thirdeye list --since 2026-05-01
            </div>

            {/* Session table */}
            <div className="mt-5">
              <table className="w-full border-collapse text-left whitespace-nowrap">
                <thead>
                  <tr className="border-b border-brand-bg-tertiary text-brand-text-secondary">
                    <th className="py-1 pr-4 font-normal">Platform</th>
                    <th className="py-1 pr-4 font-normal">Started</th>
                    <th className="py-1 pr-4 font-normal text-right">Events</th>
                    <th className="py-1 pr-4 font-normal">Tags</th>
                    <th className="py-1 font-normal">Session ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-bg-tertiary/50">
                    <td className="py-1 pr-4 text-brand-accent-secondary">claude</td>
                    <td className="py-1 pr-4 text-brand-text-muted">2026-05-22 14:08</td>
                    <td className="py-1 pr-4 text-brand-text-muted text-right">47</td>
                    <td className="py-1 pr-4 text-brand-accent-tertiary">review,bug</td>
                    <td className="py-1 text-brand-text-primary">sess_3f9e2a</td>
                  </tr>
                  <tr className="border-b border-brand-bg-tertiary/50">
                    <td className="py-1 pr-4 text-brand-accent-secondary">codex</td>
                    <td className="py-1 pr-4 text-brand-text-muted">2026-05-22 09:31</td>
                    <td className="py-1 pr-4 text-brand-text-muted text-right">23</td>
                    <td className="py-1 pr-4 text-brand-text-muted">-</td>
                    <td className="py-1 text-brand-text-primary">sess_b8c402</td>
                  </tr>
                  <tr className="border-b border-brand-bg-tertiary/50">
                    <td className="py-1 pr-4 text-brand-accent-secondary">claude</td>
                    <td className="py-1 pr-4 text-brand-text-muted">2026-05-21 18:55</td>
                    <td className="py-1 pr-4 text-brand-text-muted text-right">91</td>
                    <td className="py-1 pr-4 text-brand-accent-tertiary">refactor</td>
                    <td className="py-1 text-brand-text-primary">sess_71d9aa</td>
                  </tr>
                  <tr className="border-b border-brand-bg-tertiary/50">
                    <td className="py-1 pr-4 text-brand-accent-secondary">codex</td>
                    <td className="py-1 pr-4 text-brand-text-muted">2026-05-20 11:14</td>
                    <td className="py-1 pr-4 text-brand-text-muted text-right">12</td>
                    <td className="py-1 pr-4 text-brand-text-muted">-</td>
                    <td className="py-1 text-brand-text-primary">sess_4e0f6b</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4 text-brand-accent-secondary">claude</td>
                    <td className="py-1 pr-4 text-brand-text-muted">2026-05-19 22:02</td>
                    <td className="py-1 pr-4 text-brand-text-muted text-right">56</td>
                    <td className="py-1 pr-4 text-brand-accent-tertiary">migration</td>
                    <td className="py-1 text-brand-text-primary">sess_a2c1d3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Follow-up search command */}
            <div className="mt-6 text-brand-text-primary">
              <span className="text-brand-text-muted">$</span> thirdeye search{" "}
              <span className="text-brand-accent-tertiary">&quot;migration&quot;</span> --tag review --platform claude
            </div>
            <div className="mt-2 text-brand-text-secondary">
              <span className="text-brand-text-primary">2</span> result(s):
            </div>
            <div className="mt-1 text-brand-text-muted">
              {"  "}
              <span className="text-brand-text-primary">sess_3f9e2a</span> ·{" "}
              <span className="text-brand-text-muted">2026-05-22</span> ·{" "}
              <span className="text-brand-accent-tertiary">&quot;fix migration drift in user table&quot;</span> → seq 12, 31
            </div>
            <div className="text-brand-text-muted">
              {"  "}
              <span className="text-brand-text-primary">sess_a2c1d3</span> ·{" "}
              <span className="text-brand-text-muted">2026-05-19</span> ·{" "}
              <span className="text-brand-accent-tertiary">&quot;plan migration rollout for staging&quot;</span> → seq 4
            </div>

            {/* Summary */}
            <div className="mt-6">
              <div className="text-cyan-400 font-bold">━━━ Summary ━━━</div>
              <div className="mt-1 text-green-400">
                {"  "}5 sessions across 2 platforms · 229 events captured
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
