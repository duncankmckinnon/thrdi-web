// Faithful static mock of the thirdeye sessions-list view (`/`).
// Mirrors templates in src/thirdeye/web/templates/ and the palette in
// src/thirdeye/web/static/app.css. Self-contained — uses inline styles to
// reproduce the UI's exact colors regardless of the docs site theme.

const palette = {
  bg: "#020617",
  surface: "#0a1a1f",
  accent: "#14b8b8",
  text: "#ecfeff",
  muted: "#94d8d8",
  border: "#1f2f33",
} as const;

const fontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const sessions: {
  sid: string;
  platform: string;
  cwd: string;
  started: string;
  events: number;
  status: "open" | "closed";
}[] = [
  {
    sid: "a3f2c8b1",
    platform: "claude",
    cwd: "thrdi-web",
    started: "2026-05-22 14:08",
    events: 47,
    status: "open",
  },
  {
    sid: "91e4d20a",
    platform: "codex",
    cwd: "thirdeye",
    started: "2026-05-22 11:03",
    events: 91,
    status: "closed",
  },
  {
    sid: "7d12c9b3",
    platform: "cursor",
    cwd: "wbcli-web",
    started: "2026-05-21 18:41",
    events: 23,
    status: "closed",
  },
  {
    sid: "4e0f6b88",
    platform: "gemini",
    cwd: "workbench",
    started: "2026-05-20 09:14",
    events: 12,
    status: "closed",
  },
];

const savedViews = ["last 24h claude", "audit-tagged", "workbench"];
const allTags = ["bug", "review", "audit", "exemplar", "refactor", "migration"];

function StatusPill({ status }: { status: "open" | "closed" }) {
  const color = status === "open" ? "#5ce0c8" : palette.muted;
  return (
    <span
      style={{
        color,
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
      }}
    >
      {status}
    </span>
  );
}

export function UIPreview() {
  const inputStyle: React.CSSProperties = {
    background: palette.surface,
    color: palette.text,
    border: `1px solid ${palette.border}`,
    borderRadius: 4,
    padding: "0.4rem 0.6rem",
    font: "inherit",
    minWidth: 0,
  };
  const buttonStyle: React.CSSProperties = {
    background: palette.accent,
    color: palette.bg,
    border: "none",
    borderRadius: 4,
    padding: "0.4rem 0.9rem",
    cursor: "default",
    fontWeight: 500,
  };
  const thStyle: React.CSSProperties = {
    color: palette.muted,
    fontWeight: 500,
    textAlign: "left",
    padding: "0.5rem 0.75rem",
    borderBottom: `1px solid ${palette.border}`,
  };
  const tdStyle: React.CSSProperties = {
    padding: "0.5rem 0.75rem",
    borderBottom: `1px solid ${palette.border}`,
  };

  return (
    <div
      role="img"
      aria-label="Preview of the thirdeye sessions list page"
      style={{
        background: palette.bg,
        color: palette.text,
        fontFamily: fontStack,
        fontSize: 13,
        lineHeight: 1.45,
        border: `1px solid ${palette.border}`,
        borderRadius: 12,
        overflow: "hidden",
        margin: "1.5rem 0",
        boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
      }}
    >
      {/* topbar */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          padding: "0.75rem 1.25rem",
          background: palette.surface,
          borderBottom: `1px solid ${palette.border}`,
        }}
      >
        <span style={{ color: palette.accent, fontWeight: 600, fontSize: "1rem" }}>
          thirdeye
        </span>
        <div style={{ flex: 1, maxWidth: 360 }}>
          <input
            type="text"
            placeholder="search events"
            readOnly
            style={{ ...inputStyle, width: "100%", background: palette.bg }}
          />
        </div>
        <nav style={{ display: "flex", gap: "1rem", color: palette.muted }}>
          <span>search</span>
          <span>evals</span>
          <span>usage</span>
        </nav>
      </header>

      {/* main */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "180px 1fr",
          gap: "1.25rem",
          padding: "1.25rem",
        }}
      >
        {/* saved views sidebar */}
        <aside style={{ minWidth: 0 }}>
          <h3
            style={{
              margin: "0 0 0.5rem",
              fontSize: "0.8rem",
              color: palette.muted,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: 600,
            }}
          >
            Saved views
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {savedViews.map((v) => (
              <li
                key={v}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.3rem 0",
                  borderBottom: `1px solid ${palette.border}`,
                }}
              >
                <span style={{ color: palette.accent }}>{v}</span>
                <span style={{ color: palette.muted, fontSize: "0.85rem" }}>×</span>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "0.35rem", marginTop: "0.75rem" }}>
            <input
              type="text"
              placeholder="view name"
              readOnly
              style={{ ...inputStyle, flex: 1, minWidth: 0 }}
            />
            <button type="button" style={buttonStyle}>
              Save
            </button>
          </div>
        </aside>

        {/* sessions main */}
        <div style={{ minWidth: 0 }}>
          {/* filter form */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              alignItems: "flex-start",
              marginBottom: "0.75rem",
            }}
          >
            <input type="text" placeholder="platform" readOnly style={inputStyle} />
            <input type="text" placeholder="cwd" readOnly style={inputStyle} />
            <select
              disabled
              style={{ ...inputStyle, appearance: "none" }}
              defaultValue="any"
            >
              <option>any status</option>
            </select>
            <input
              type="text"
              placeholder="since (e.g. 7d)"
              defaultValue="7d"
              readOnly
              style={inputStyle}
            />
            <input type="text" placeholder="until" readOnly style={inputStyle} />
            <select
              disabled
              style={{ ...inputStyle, appearance: "none" }}
              defaultValue="newest"
            >
              <option>newest first</option>
            </select>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "0.78rem",
                color: palette.muted,
              }}
            >
              tags
              <div
                style={{
                  background: palette.surface,
                  border: `1px solid ${palette.border}`,
                  borderRadius: 4,
                  padding: "0.3rem 0.4rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.25rem",
                  maxWidth: 200,
                }}
              >
                {allTags.map((t) => {
                  const selected = t === "review" || t === "bug";
                  return (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.78rem",
                        padding: "0.1rem 0.45rem",
                        borderRadius: 999,
                        background: selected
                          ? palette.accent
                          : "transparent",
                        color: selected ? palette.bg : palette.muted,
                        border: `1px solid ${selected ? palette.accent : palette.border}`,
                      }}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
            <button type="button" style={buttonStyle}>
              Filter
            </button>
          </div>

          {/* ask panel */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto auto",
              gap: "0.5rem",
              alignItems: "center",
              padding: "0.6rem 0.75rem",
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 6,
              marginBottom: "0.75rem",
            }}
          >
            <span style={{ color: palette.muted, fontWeight: 600 }}>Ask</span>
            <input
              type="text"
              placeholder="describe what you want…"
              defaultValue="long-lasting claude runs about workbench plans this week"
              readOnly
              style={{ ...inputStyle, width: "100%" }}
            />
            <select disabled style={{ ...inputStyle, appearance: "none" }} defaultValue="claude">
              <option>claude</option>
            </select>
            <button type="button" style={buttonStyle}>
              Ask
            </button>
          </div>

          {/* eval batch bar */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "0.5rem",
              alignItems: "center",
            }}
          >
            <select disabled style={{ ...inputStyle, appearance: "none" }} defaultValue="pick">
              <option>Pick eval…</option>
            </select>
            <select disabled style={{ ...inputStyle, appearance: "none" }} defaultValue="pick">
              <option>Pick agent…</option>
            </select>
            <button type="button" style={buttonStyle}>
              Dispatch
            </button>
            <span style={{ color: palette.muted, fontSize: "0.8rem", marginLeft: "auto" }}>
              {sessions.length} sessions
            </span>
          </div>

          {/* sessions table */}
          <div
            style={{
              border: `1px solid ${palette.border}`,
              borderRadius: 6,
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                tableLayout: "fixed",
              }}
            >
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: 32 }}></th>
                  <th style={{ ...thStyle, width: 96 }}>session</th>
                  <th style={{ ...thStyle, width: 72 }}>platform</th>
                  <th style={thStyle}>cwd</th>
                  <th style={{ ...thStyle, width: 140 }}>started</th>
                  <th style={{ ...thStyle, width: 60, textAlign: "right" }}>events</th>
                  <th style={{ ...thStyle, width: 70 }}>status</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((s, i) => (
                  <tr
                    key={s.sid}
                    style={{
                      background: i === 0 ? "rgba(20,184,184,0.06)" : "transparent",
                    }}
                  >
                    <td style={tdStyle}>
                      <span
                        style={{
                          display: "inline-block",
                          width: 12,
                          height: 12,
                          border: `1px solid ${palette.border}`,
                          borderRadius: 2,
                          background: i === 0 ? palette.accent : palette.surface,
                          verticalAlign: "middle",
                        }}
                      />
                    </td>
                    <td style={{ ...tdStyle, color: palette.accent, fontFamily: "monospace" }}>
                      {s.sid}
                    </td>
                    <td style={tdStyle}>{s.platform}</td>
                    <td style={{ ...tdStyle, color: palette.muted }}>{s.cwd}</td>
                    <td style={{ ...tdStyle, color: palette.muted }}>{s.started}</td>
                    <td style={{ ...tdStyle, textAlign: "right" }}>{s.events}</td>
                    <td style={tdStyle}>
                      <StatusPill status={s.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              color: palette.muted,
              fontSize: "0.78rem",
              margin: "0.6rem 0 0",
              fontStyle: "italic",
            }}
          >
            Live preview — not interactive. The real UI streams open sessions via SSE
            and persists filters in <code style={{ color: palette.accent }}>localStorage</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
