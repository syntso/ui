import type { IconButtonProperties } from "./properties";
import styles from "./styles.module.css";

export function IconButton({ label, shortcut, size = "regular", className, children, type = "button", ...props }: IconButtonProperties) {
  return (
    <button
      {...props}
      type={type}
      aria-label={label}
      title={shortcut ? `${label}  ${shortcut}` : label}
      data-size={size}
      className={className ? `${styles.button} ${className}` : styles.button}
    >
      {children}
    </button>
  );
}
