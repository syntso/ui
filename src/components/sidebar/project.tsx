import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { MenuContext, type MenuEntry } from "../menu";
import { Pulse } from "../pulse";

import { SidebarActions } from "./actions";
import { label, main, row, tail } from "./row";

export interface SidebarProjectProperties {
  name: string;
  total: number;
  live: number;
  unreachable?: boolean;
  busy?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  add: MenuEntry[];
  entries: MenuEntry[];
  children: ReactNode;
}

export function SidebarProject({ name, total, live, unreachable = false, busy = false, open, onOpenChange, add, entries, children }: SidebarProjectProperties) {
  const state = unreachable ? "unreachable" : live > 0 ? "live" : undefined;

  return (
    <Collapsible.Root open={open} onOpenChange={onOpenChange} data-sidebar-project className="group/project">
      <MenuContext entries={entries}>
        <div className={row}>
          <Collapsible.Trigger data-sidebar-row className={main}>
            <ChevronRight className="size-3 shrink-0 text-faint transition-[rotate] duration-160 ease-out group-data-[state=open]/project:rotate-90" aria-hidden />
            <span className={label}>{name}</span>
            <span className={tail}>
              {busy && !open && <Pulse activity="working" size="small" />}
              <span
                data-state={state}
                title={unreachable ? "Something here is unreachable" : `${live} of ${total} connected`}
                className="tabular-nums data-[state=live]:text-muted data-[state=unreachable]:text-danger"
              >
                {live > 0 ? `${live}/${total}` : total}
              </span>
            </span>
          </Collapsible.Trigger>
          <SidebarActions add={add} more={entries} />
        </div>
      </MenuContext>
      <Collapsible.Content className="pb-1">{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}
