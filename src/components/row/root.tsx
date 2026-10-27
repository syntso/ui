import type { RowProperties } from "./properties";
import styles from "./styles.module.css";

export function Row({ lead, title, detail, trailing, selected = false, onOpen }: RowProperties) {
  return (
    <div className={styles.row} data-selected={selected || undefined}>
      <span className={styles.lead}>{lead}</span>
      <span className={styles.text}>
        {onOpen ? (
          <button type="button" className={styles.open} onClick={onOpen}>
            {title}
          </button>
        ) : (
          <span className={styles.title}>{title}</span>
        )}
        {detail && <span className={styles.detail}>{detail}</span>}
      </span>
      {trailing && <span className={styles.trailing}>{trailing}</span>}
    </div>
  );
}
