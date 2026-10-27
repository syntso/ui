import type { KeyProperties } from "./properties";
import styles from "./styles.module.css";

export function Key({ children }: KeyProperties) {
  return <kbd className={styles.key}>{children}</kbd>;
}
