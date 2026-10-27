export function Key({ children }: { children: string }) {
  return <kbd className="rounded-[4px] px-1.5 py-[3px] font-mono text-code-small leading-none text-faint shadow-[inset_0_0_0_1px_var(--color-line)]">{children}</kbd>;
}
