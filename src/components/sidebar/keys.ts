const rows = "[data-sidebar-row]";

export function moveFocus(event: KeyboardEvent, container: HTMLElement): void {
  const all = [...container.querySelectorAll<HTMLElement>(rows)];
  const index = all.indexOf(document.activeElement as HTMLElement);

  if (index < 0) return;

  const current = all[index];
  const project = current?.closest<HTMLElement>("[data-sidebar-project]");
  const isHead = current?.hasAttribute("aria-expanded") ?? false;
  const open = current?.getAttribute("aria-expanded") === "true";
  const target = {
    ArrowDown: all[Math.min(index + 1, all.length - 1)],
    ArrowUp: all[Math.max(index - 1, 0)],
    ArrowRight: isHead && !open ? current : undefined,
    ArrowLeft: isHead ? (open ? current : undefined) : project?.querySelector<HTMLElement>("[aria-expanded]"),
  }[event.key];

  if (!target) return;

  event.preventDefault();

  if ((event.key === "ArrowRight" || event.key === "ArrowLeft") && target === current) target.click();
  else target.focus();
}
