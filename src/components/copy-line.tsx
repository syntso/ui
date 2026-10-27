import { useEffect, useRef, useState } from "react";

import { Button } from "./button";

export function CopyLine({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    await navigator.clipboard.writeText(command);

    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex h-10 items-center gap-3 rounded-row bg-field pr-1.5 pl-3.5 font-mono text-code shadow-[inset_0_0_0_1px_var(--color-line)]">
      <span className="text-faint" aria-hidden>
        $
      </span>
      <code className="min-w-0 flex-1 truncate">{command}</code>
      <Button onClick={() => void copy()}>
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </Button>
    </div>
  );
}
