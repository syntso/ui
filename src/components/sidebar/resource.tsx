import { Glyph, type Kind, type Link } from "../glyph";
import { MenuContext, type MenuEntry } from "../menu";
import { Pulse, type Activity } from "../pulse";

import { SidebarActions } from "./actions";
import { label, main, row, tail } from "./row";

export interface SidebarResourceProperties {
  name: string;
  kind: Kind;
  link: Link;
  activity?: Activity;
  current?: boolean;
  nested?: boolean;
  entries: MenuEntry[];
  onOpen?: () => void;
}

export function SidebarResource({ name, kind, link, activity, current = false, nested = true, entries, onOpen }: SidebarResourceProperties) {
  return (
    <MenuContext entries={entries}>
      <div className={row} data-current={current || undefined} data-nested={nested || undefined}>
        <button type="button" data-sidebar-row aria-current={current ? "true" : undefined} className={main} onClick={onOpen}>
          <Glyph kind={kind} link={link} />
          <span className={label}>{name}</span>
          {activity === "working" && (
            <span className={tail}>
              <Pulse activity="working" size="small" />
            </span>
          )}
        </button>
        <SidebarActions more={entries} />
      </div>
    </MenuContext>
  );
}
