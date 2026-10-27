import type { ButtonProperties } from "./properties";
import styles from "./styles.module.css";

export function Button({ variant = "quiet", shortcut, className, children, type = "button", ...props }: ButtonProperties) {
  return (
    <button {...props} type={type} data-variant={variant} className={className ? `${styles.button} ${className}` : styles.button}>
      {children}
      {shortcut && <kbd className={styles.shortcut}>{shortcut}</kbd>}
    </button>
  );
}
