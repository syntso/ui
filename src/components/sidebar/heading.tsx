import type { ReactNode } from "react";

export function SidebarHeading({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="mt-[18px] flex h-7 items-center justify-between pr-1 pl-2 text-small text-muted">
      <span>{title}</span>
      {action}
    </div>
  );
}
