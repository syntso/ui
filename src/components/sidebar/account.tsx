import { ChevronsUpDown } from "lucide-react";

import { MenuDropdown, type MenuEntry } from "../menu";

export function SidebarAccount({ name, plan, entries }: { name: string; plan: string; entries: MenuEntry[] }) {
  return (
    <MenuDropdown entries={entries}>
      <button type="button" className="flex h-9 w-full items-center gap-2.5 rounded-control px-2 text-left hover:bg-hover data-[state=open]:bg-hover">
        <span aria-hidden className="grid size-[22px] place-items-center rounded-full bg-select text-small font-medium">
          {name.slice(0, 1).toUpperCase()}
        </span>
        <span className="flex-1">{name}</span>
        <span className="text-small text-muted">{plan}</span>
        <ChevronsUpDown className="size-3 text-faint" aria-hidden />
      </button>
    </MenuDropdown>
  );
}
