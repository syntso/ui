import { Ellipsis, Plus } from "lucide-react";

import { IconButton } from "../../icon-button/root";
import { MenuDropdown } from "../../menu/dropdown";
import type { MenuEntry } from "../../menu/properties";

import styles from "./styles.module.css";

export function SidebarActions({ add, more }: { add?: MenuEntry[]; more: MenuEntry[] }) {
  return (
    <span className={styles.actions}>
      {add && (
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
