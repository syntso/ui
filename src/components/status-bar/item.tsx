import type { StatusItemProperties } from "./properties";
import styles from "./styles.module.css";

export function StatusItem({ tone, children }: StatusItemProperties) {
  return (
    <span className={styles.item} data-tone={tone}>
      {tone === "online" && <span className={styles.dot} aria-hidden />}
      {children}
    </span>
  );
}
