import styles from "./heading.module.css";
import type { SidebarHeadingProperties } from "./properties";

export function SidebarHeading({ title, action }: SidebarHeadingProperties) {
  return (
    <div className={styles.heading}>
      <span>{title}</span>
      {action}
    </div>
  );
}
