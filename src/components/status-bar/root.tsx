import type { StatusBarProperties } from "./properties";
import styles from "./styles.module.css";

export function StatusBar({ start, end }: StatusBarProperties) {
  return (
    <footer className={styles.bar}>
      <span className={styles.group}>{start}</span>
      {end && <span className={styles.group}>{end}</span>}
    </footer>
  );
}
