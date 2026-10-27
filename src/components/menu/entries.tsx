import type { MenuEntry, MenuParts } from "./properties";
import styles from "./styles.module.css";

export function MenuEntries({ entries, parts }: { entries: MenuEntry[]; parts: MenuParts }) {
  const { Item, Label, Separator } = parts;

  return entries.map((entry, i) => {
    if (entry.kind === "separator") return <Separator key={i} className={styles.separator} />;

    if (entry.kind === "head") {
      return (
        <Label key={i} className={styles.head}>
          <span className={styles.title}>{entry.title}</span>
          {entry.detail && <span className={styles.detail}>{entry.detail}</span>}
        </Label>
      );
    }

    return (
      <Item key={i} className={styles.item} data-danger={entry.danger || undefined} {...(entry.onSelect ? { onSelect: entry.onSelect } : {})}>
        <span className={styles.label}>{entry.label}</span>
        {entry.shortcut && <kbd className={styles.shortcut}>{entry.shortcut}</kbd>}
      </Item>
    );
  });
}
