import { Glyph } from "../../glyph/root";
import { MenuContext } from "../../menu/context";
import { Pulse } from "../../pulse/root";
import type { SidebarResourceProperties } from "../properties";

import { SidebarActions } from "./actions";
import styles from "./styles.module.css";

export function SidebarResource({ name, kind, link, activity, current = false, nested = true, entries, onOpen }: SidebarResourceProperties) {
  return (
    <MenuContext entries={entries}>
      <div className={styles.row} data-current={current || undefined} data-nested={nested || undefined}>
        <button type="button" className={styles.main} data-sidebar-row aria-current={current ? "true" : undefined} onClick={onOpen}>
          <Glyph kind={kind} link={link} />
          <span className={styles.label}>{name}</span>
          {activity === "working" && (
            <span className={styles.tail}>
              <Pulse activity="working" size="small" />
            </span>
          )}
        </button>
        <SidebarActions more={entries} />
      </div>
    </MenuContext>
  );
}
