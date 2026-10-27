import type { SidebarPlaceProperties } from "../properties";

import styles from "./styles.module.css";

export function SidebarPlace({ icon, label, current = false, trailing, onSelect }: SidebarPlaceProperties) {
  return (
    <div className={styles.row} data-current={current || undefined}>
      <button type="button" className={styles.main} data-sidebar-row aria-current={current ? "page" : undefined} onClick={onSelect}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.label}>{label}</span>
        {trailing && <span className={styles.tail}>{trailing}</span>}
      </button>
    </div>
  );
}
