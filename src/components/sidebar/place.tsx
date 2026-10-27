import type { ReactNode } from "react";

import { label, main, row, tail } from "./row";

export interface SidebarPlaceProperties {
  icon: ReactNode;
  label: string;
  current?: boolean;
  trailing?: ReactNode;
  onSelect?: () => void;
}

export function SidebarPlace({ icon, label: text, current = false, trailing, onSelect }: SidebarPlaceProperties) {
  return (
    <div className={row} data-current={current || undefined}>
      <button type="button" data-sidebar-row aria-current={current ? "page" : undefined} className={main} onClick={onSelect}>
        <span className="grid shrink-0 place-items-center text-muted group-data-[current]/row:text-ink [&_svg]:size-[15px]">{icon}</span>
        <span className={label}>{text}</span>
        {trailing && <span className={tail}>{trailing}</span>}
      </button>
    </div>
  );
}
