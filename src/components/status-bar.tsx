import type { ReactNode } from "react";

export function StatusBar({ start, end }: { start: ReactNode; end?: ReactNode }) {
  return (
    <footer className="flex h-7 items-center justify-between border-t border-line bg-panel px-3 text-[11.5px] text-muted">
      <span className="flex items-center gap-4">{start}</span>
      {end && <span className="flex items-center gap-4">{end}</span>}
    </footer>
  );
}

export function StatusItem({ tone, children }: { tone?: "online" | "agent"; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${tone === "agent" ? "text-agent" : ""}`}>
      {tone === "online" && <span className="size-1.5 rounded-full bg-ok" aria-hidden />}
      {children}
    </span>
  );
}
