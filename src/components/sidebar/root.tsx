import { useKeyDown } from "../../hooks/key-down";

import { moveFocus } from "./keys";
import type { SidebarRootProperties } from "./properties";
import styles from "./root.module.css";

export function SidebarRoot({ top, footer, label, children }: SidebarRootProperties) {
  const nav = useKeyDown<HTMLElement>(moveFocus);

  return (
    <aside className={styles.root}>
      <div className={styles.top}>{top}</div>
      <nav className={styles.nav} aria-label={label} ref={nav}>
        {children}
      </nav>
      <div className={styles.footer}>{footer}</div>
    </aside>
  );
}
