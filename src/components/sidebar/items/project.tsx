import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";

import { MenuContext } from "../../menu/context";
import { Pulse } from "../../pulse/root";
import type { SidebarProjectProperties } from "../properties";

import { SidebarActions } from "./actions";
import { liveCount } from "./count";
import styles from "./project.module.css";
import row from "./styles.module.css";

export function SidebarProject({ name, total, live, unreachable = false, busy = false, open, onOpenChange, add, entries, children }: SidebarProjectProperties) {
  const title = unreachable ? "Something here is unreachable" : `${live} of ${total} connected`;

  return (
    <Collapsible.Root open={open} onOpenChange={onOpenChange} className={styles.project} data-sidebar-project>
      <MenuContext entries={entries}>
        <div className={row.row}>
          <Collapsible.Trigger className={row.main} data-sidebar-row>
            <ChevronRight className={styles.chevron} aria-hidden />
            <span className={row.label}>{name}</span>
            <span className={row.tail}>
              {busy && !open && <Pulse activity="working" size="small" />}
              <span className={row.count} data-state={unreachable ? "unreachable" : live > 0 ? "live" : undefined} title={title}>
                {liveCount(live, total)}
              </span>
            </span>
          </Collapsible.Trigger>
          <SidebarActions add={add} more={entries} />
        </div>
      </MenuContext>
      <Collapsible.Content className={styles.content}>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}
