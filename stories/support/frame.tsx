import type { ReactNode } from "react";

import styles from "./frame.module.css";

export function Frame({ width = 760, children }: { width?: number; children: ReactNode }) {
  return (
    <div className={styles.frame} style={{ maxWidth: width }}>
      {children}
    </div>
  );
}
