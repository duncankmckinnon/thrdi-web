import { getAllDocs } from "@/lib/docs";

const BASE_URL = "https://thrdi.com";

export function GET() {
  const docs = getAllDocs();

  const docLinks = docs
    .map((doc) => `- [${doc.title}](${BASE_URL}/docs/${doc.slug}): ${doc.description}`)
    .join("\n");

  const content = `# thirdeye

> Local-first observability CLI for Claude Code and Codex, with optional live export to Pydantic Logfire.

thirdeye (\`thrdi\` on PyPI, \`thirdeye\` on Homebrew) captures Claude Code and Codex sessions into a unified, searchable history stored at \`~/.thirdeye/\`. Local storage is the default. An optional \`thrdi[logfire]\` extra mirrors completed turns to Pydantic Logfire as OpenTelemetry traces with agent-turn, model-call, tool-call, permission-request, and nested-subagent spans. Per-turn token usage is captured to JSONL plus a SQLite index, and evals can be dispatched as LLM-as-judge rubrics against recorded sessions.

## Documentation

${docLinks}

## Key Resources

- [GitHub Repository](https://github.com/duncankmckinnon/thirdeye)
- [PyPI Package](https://pypi.org/project/thrdi/)
- [Homebrew Tap](https://github.com/duncankmckinnon/homebrew-tap)
- [Sibling Project: workbench](https://wbcli.com) — multi-agent orchestrator
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
