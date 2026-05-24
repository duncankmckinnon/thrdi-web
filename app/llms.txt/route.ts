import { getAllDocs } from "@/lib/docs";

const BASE_URL = "https://thrdi.com";

export function GET() {
  const docs = getAllDocs();

  const docLinks = docs
    .map((doc) => `- [${doc.title}](${BASE_URL}/docs/${doc.slug}): ${doc.description}`)
    .join("\n");

  const content = `# thirdeye

> Local-first observability CLI for AI coding agents. Trace, search, tag, and evaluate every session from Claude Code, Cursor, Codex, Gemini, and Copilot — all on your filesystem.

thirdeye (\`thrdi\` on PyPI, \`thirdeye\` on Homebrew) is a Python CLI that traces every agent session on your machine into a unified, searchable history stored on disk at \`~/.thirdeye/\`. No cloud. No SaaS. One CLI surfaces sessions from every major AI agent you use, with per-turn token usage captured to JSONL plus a SQLite index, and evals dispatched as LLM-as-judge rubrics against recorded sessions.

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
