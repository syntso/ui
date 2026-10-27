import { useId } from "react";

import type { SectionProperties } from "./properties";
import styles from "./styles.module.css";

export function Section({ title, count, children }: SectionProperties) {
  const heading = useId();

  return (
    <section className={styles.section} aria-labelledby={heading}>
      <h2 id={heading} className={styles.title}>
        {title}
        {count !== undefined && <span className={styles.count}>{count}</span>}
      </h2>
      <div className={styles.rows}>{children}</div>
    </section>
  );
}
