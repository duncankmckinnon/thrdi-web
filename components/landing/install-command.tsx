"use client";

import { CopyButton } from "@/components/shared/copy-button";

const COMMAND = "brew install duncankmckinnon/tap/thirdeye";

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
  return (
    <div
      className={`flex items-center rounded-xl border border-brand-bg-tertiary bg-brand-bg-secondary font-mono ${SIZE_CLASSES[size]}`}
    >
      <span className="text-brand-text-muted">$</span>
      <span className="text-brand-text-primary">{COMMAND}</span>
      <CopyButton
        text={COMMAND}
        className="ml-2 text-brand-text-muted hover:text-brand-text-primary transition-colors"
      />
    </div>
  );
}
