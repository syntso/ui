import { SquareTerminal } from "lucide-react";
import { useId, type ReactNode } from "react";

import { Key } from "./key";

export interface ConnectFieldProperties {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  shortcut?: string;
  hint?: ReactNode;
}

export function ConnectField({ value, onChange, onSubmit, placeholder = "Connect to a host, cluster or database", shortcut = "⌘K", hint }: ConnectFieldProperties) {
  const hintId = useId();

  return (
    <div className="flex flex-col gap-2.5">
      <label className="flex h-13 items-center gap-3 rounded-field bg-field px-4 shadow-[inset_0_0_0_1px_var(--color-line)] transition-shadow duration-120 ease-out focus-within:shadow-[inset_0_0_0_1px_var(--color-faint)]">
        <SquareTerminal className="size-[17px] shrink-0 text-muted" aria-hidden />
        <input
          className="min-w-0 flex-1 bg-transparent text-field text-ink outline-none placeholder:text-faint"
          value={value}
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby={hint ? hintId : undefined}
          autoComplete="off"
          spellCheck={false}
          onChange={event => onChange(event.target.value)}
          onKeyDown={event => event.key === "Enter" && onSubmit?.()}
        />
        <Key>{shortcut}</Key>
      </label>
      {hint && (
        <div id={hintId} className="text-small text-faint">
          {hint}
        </div>
      )}
    </div>
  );
}
