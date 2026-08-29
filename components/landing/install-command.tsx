"use client";

import { useState } from "react";
import { CopyButton } from "@/components/shared/copy-button";

type Method = "brew" | "pip" | "uv";

const COMMANDS: Record<Method, string> = {
  brew: "brew install duncankmckinnon/tap/thirdeye",
  pip: "pip install 'thrdi[ui,logfire]'",
  uv: "uv tool install 'thrdi[ui,logfire]'",
};

const SIZE_CLASSES = {
  lg: "gap-4 px-6 py-4 text-lg sm:text-xl",
  md: "gap-3 px-5 py-3 text-base",
  sm: "gap-3 px-4 py-2.5 text-sm",
} as const;

export function InstallCommand({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const [method, setMethod] = useState<Method>("brew");
  const command = COMMANDS[method];

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        role="tablist"
        aria-label="Install method"
        className="inline-flex items-center gap-1 rounded-full border border-brand-bg-tertiary bg-brand-bg-secondary p-1 font-mono text-xs"
      >
        {(Object.keys(COMMANDS) as Method[]).map((m) => {
          const selected = m === method;
          return (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setMethod(m)}
              className={`rounded-full px-3 py-1 transition-colors ${
                selected
                  ? "bg-brand-accent-primary/15 text-brand-accent-tertiary"
                  : "text-brand-text-muted hover:text-brand-text-primary"
              }`}
            >
              {m}
            </button>
          );
        })}
      </div>

      <div
        className={`flex max-w-full items-center overflow-x-auto rounded-xl border border-brand-bg-tertiary bg-brand-bg-secondary font-mono ${SIZE_CLASSES[size]}`}
      >
        <span className="text-brand-text-muted">$</span>
        <span className="whitespace-nowrap text-brand-text-primary">{command}</span>
        <CopyButton
          text={command}
          className="ml-2 text-brand-text-muted hover:text-brand-text-primary transition-colors"
        />
      </div>
    </div>
  );
}
