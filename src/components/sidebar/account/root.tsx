import { ChevronsUpDown } from "lucide-react";

import { MenuDropdown } from "../../menu/dropdown";
import type { SidebarAccountProperties } from "../properties";

import styles from "./styles.module.css";

export function SidebarAccount({ name, plan, entries }: SidebarAccountProperties) {
  return (
    <MenuDropdown entries={entries}>
      <button type="button" className={styles.account}>
        <span className={styles.avatar} aria-hidden>
          {name.slice(0, 1).toUpperCase()}
        </span>
        <span className={styles.name}>{name}</span>
        <span className={styles.plan}>{plan}</span>
        <ChevronsUpDown className={styles.chevrons} aria-hidden />
      </button>
    </MenuDropdown>
  );
}
