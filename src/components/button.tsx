import type { ButtonHTMLAttributes } from "react";

import { cn } from "../lib/cn";

export interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "quiet";
  shortcut?: string;
}

const looks = {
  primary: "bg-ink text-canvas hover:bg-ink/88",
  quiet: "bg-hover text-ink hover:bg-select",
};

export function Button({ variant = "quiet", shortcut, className, children, type = "button", ...properties }: ButtonProperties) {
  return (
    <button
      {...properties}
      type={type}
      data-variant={variant}
      className={cn("inline-flex h-7 items-center gap-2 rounded-control px-3 text-body font-medium whitespace-nowrap transition-[background-color,scale] duration-120 ease-out active:scale-98", looks[variant], className)}
    >
      {children}
      {shortcut && <kbd className="font-mono text-code-small opacity-70">{shortcut}</kbd>}
    </button>
  );
}
