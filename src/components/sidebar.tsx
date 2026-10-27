import type { ReactNode } from "react";

import { useKeyDown } from "../hooks/key-down";

export interface SidebarProperties {
  label: string;
  top: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

function moveFocus(event: KeyboardEvent, container: HTMLElement): void {
  const rows = [...container.querySelectorAll<HTMLElement>("[data-sidebar-row]")];
  const index = rows.indexOf(document.activeElement as HTMLElement);
  const current = rows[index];

  if (!current) return;

  const head = current.hasAttribute("aria-expanded");
  const open = current.getAttribute("aria-expanded") === "true";
  const parent = current.closest("[data-sidebar-project]")?.querySelector<HTMLElement>("[aria-expanded]");

  const target = {
    ArrowDown: rows[index + 1],
    ArrowUp: rows[index - 1],
    ArrowRight: head && !open ? current : undefined,
    ArrowLeft: head ? (open ? current : undefined) : parent,
  }[event.key];

  if (!target) return;

  event.preventDefault();

  if (target === current) target.click();
  else target.focus();
}

export function Sidebar({ label, top, footer, children }: SidebarProperties) {
  const nav = useKeyDown<HTMLElement>(moveFocus);

  return (
    <aside className="flex h-full min-h-0 flex-col border-r border-line bg-panel">
      <div data-tauri-drag-region className="flex h-13 items-center justify-end gap-1.5 px-2.5">
        {top}
      </div>
      <nav ref={nav} aria-label={label} className="flex-1 overflow-auto px-2 pt-1">
        {children}
      </nav>
      <div className="border-t border-line p-2">{footer}</div>
    </aside>
  );
}
