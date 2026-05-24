export function CodeExample() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            From session to insight in two commands
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left panel — Search and inspect */}
          <div className="overflow-hidden rounded-xl border border-brand-bg-tertiary bg-brand-bg-secondary">
            <div className="flex items-center border-b border-brand-bg-tertiary px-4 py-3">
              <span className="rounded bg-brand-bg-tertiary px-2 py-1 text-xs text-brand-text-secondary">
                Search and inspect
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div>
                <span className="text-brand-text-muted">$</span>{" "}
                <span className="text-brand-text-primary">thirdeye search</span>{" "}
                <span className="text-brand-accent-tertiary">&quot;OAuth bug&quot;</span>{" "}
                <span className="text-brand-text-primary">--tag review</span>
              </div>
              <div className="mt-2 text-brand-text-secondary">
                <span className="text-brand-text-primary">3</span> result(s) —{" "}
                <span className="text-brand-accent-secondary">claude</span>{" "}
                <span className="text-brand-text-muted">(2)</span>,{" "}
                <span className="text-brand-accent-secondary">codex</span>{" "}
                <span className="text-brand-text-muted">(1)</span>
              </div>

              <div className="mt-5">
                <span className="text-brand-text-muted">$</span>{" "}
                <span className="text-brand-text-primary">thirdeye events sess_3f9e2a</span>
              </div>
              <div className="mt-2 space-y-0.5">
                <div>
                  <span className="text-brand-text-muted">[seq 12]</span>{" "}
                  <span className="text-brand-accent-secondary">tool_use</span>
                  {"   "}
                  <span className="text-brand-text-primary">Edit</span>
                  {"              "}
                  <span className="text-brand-text-muted">auth/oauth.py</span>
                </div>
                <div>
                  <span className="text-brand-text-muted">[seq 13]</span>{" "}
                  <span className="text-brand-accent-secondary">tool_result</span>{" "}
                  <span className="text-green-400">ok</span>
                </div>
                <div>
                  <span className="text-brand-text-muted">[seq 14]</span>{" "}
                  <span className="text-brand-accent-secondary">message</span>
                  {"    "}
                  <span className="text-brand-text-primary">user</span>
                  {"              "}
                  <span className="text-brand-accent-tertiary">&quot;still failing on refresh&quot;</span>
                </div>
                <div>
                  <span className="text-brand-text-muted">[seq 31]</span>{" "}
                  <span className="text-brand-accent-secondary">tool_use</span>
                  {"   "}
                  <span className="text-brand-text-primary">Bash</span>
                  {"              "}
                  <span className="text-brand-text-muted">pytest tests/test_oauth.py</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel — Evaluate a session */}
          <div className="overflow-hidden rounded-xl border border-brand-bg-tertiary bg-brand-bg-secondary">
            <div className="flex items-center border-b border-brand-bg-tertiary px-4 py-3">
              <span className="rounded bg-brand-bg-tertiary px-2 py-1 text-xs text-brand-text-secondary">
                Evaluate a session
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div>
                <span className="text-brand-text-muted">$</span>{" "}
                <span className="text-brand-text-primary">thirdeye eval run sess_3f9e2a \</span>
              </div>
              <div className="text-brand-text-primary">
                {"    "}--agent claude --using token-efficiency
              </div>

              <div className="mt-4 text-brand-text-secondary">
                → dispatching <span className="text-brand-accent-secondary">claude</span> in read-only mode...
              </div>
              <div className="mt-1 text-green-400">
                ✓ completed in <span className="text-brand-text-primary">41s</span>
              </div>

              <div className="mt-5">
                <span className="text-brand-accent-primary font-semibold">VERDICT:</span>{" "}
                <span className="text-yellow-400">warn</span>
              </div>
              <div className="mt-1 text-brand-text-secondary">findings:</div>
              <div className="mt-1 text-brand-text-muted">
                {"  "}
                <span className="text-brand-text-primary">seq 12</span>{"  "}
                redundant Edit before reading file
              </div>
              <div className="text-brand-text-muted">
                {"  "}
                <span className="text-brand-text-primary">seq 31</span>{"  "}
                test rerun could have been targeted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
