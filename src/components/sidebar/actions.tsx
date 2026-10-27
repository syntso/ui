import { Ellipsis, Plus } from "lucide-react";

import { IconButton } from "../icon-button";
import { MenuDropdown, type MenuEntry } from "../menu";

export function SidebarActions({ add, more }: { add?: MenuEntry[]; more: MenuEntry[] }) {
  return (
    <span
      data-actions
      className="absolute right-1 hidden gap-0.5 group-hover/row:flex group-focus-within/row:flex has-[[data-state=open]]:flex"
    >
      {add && add.length > 0 && (
        <MenuDropdown entries={add} align="end">
          <IconButton label="Add" size="small">
            <Plus />
          </IconButton>
        </MenuDropdown>
      )}
      <MenuDropdown entries={more} align="end">
        <IconButton label="More" size="small">
          <Ellipsis />
        </IconButton>
      </MenuDropdown>
    </span>
  );
}
