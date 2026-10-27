import { useId, type ReactNode } from "react";

export function Section({ title, count, children }: { title: string; count?: number; children: ReactNode }) {
  const heading = useId();

  return (
    <section aria-labelledby={heading} className="mt-11">
      <h2 id={heading} className="mb-2 flex items-baseline gap-2 text-body font-medium text-muted">
        {title}
        {count !== undefined && <span className="font-mono text-code-small text-faint">{count}</span>}
      </h2>
      <div className="flex flex-col">{children}</div>
    </section>
  );
}
