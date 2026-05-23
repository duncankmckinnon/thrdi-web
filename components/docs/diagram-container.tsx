import type { ReactNode } from "react";

export function DiagramContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative my-8 rounded-2xl border border-brand-bg-tertiary bg-brand-bg-secondary p-4">
      {children}
    </div>
  );
}
