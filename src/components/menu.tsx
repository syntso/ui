import * as ContextMenu from "@radix-ui/react-context-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type { ComponentType, ReactNode } from "react";

export type MenuEntry =
  | { kind: "head"; title: string; detail?: string }
  | { kind: "item"; label: string; shortcut?: string; danger?: boolean; onSelect?: () => void }
  | { kind: "separator" };

interface Parts {
  Item: ComponentType<{ className?: string; onSelect?: () => void; children: ReactNode }>;
  Label: ComponentType<{ className?: string; children: ReactNode }>;
  Separator: ComponentType<{ className?: string }>;
}

const surface =
  "z-20 min-w-[220px] rounded-row bg-raised p-1 text-body text-ink shadow-menu data-[state=open]:animate-enter motion-reduce:data-[state=open]:animate-none origin-(--radix-dropdown-menu-content-transform-origin)";

function Entries({ entries, parts: { Item, Label, Separator } }: { entries: MenuEntry[]; parts: Parts }) {
  return entries.map((entry, i) => {
    if (entry.kind === "separator") return <Separator key={i} className="mx-1.5 my-1 h-px bg-line" />;

    if (entry.kind === "head") {
      return (
        <Label key={i} className="flex flex-col gap-px px-2 pt-1.5 pb-2">
          <span className="font-medium">{entry.title}</span>
          {entry.detail && <span className="font-mono text-code-small text-muted">{entry.detail}</span>}
        </Label>
      );
    }

    return (
      <Item
        key={i}
        className={`flex h-7 cursor-default items-center gap-4 rounded-[5px] px-2 outline-none select-none data-[highlighted]:bg-select ${entry.danger ? "text-danger" : ""}`}
        {...(entry.onSelect ? { onSelect: entry.onSelect } : {})}
      >
        <span className="flex-1">{entry.label}</span>
        {entry.shortcut && <kbd className="font-mono text-code-small text-faint">{entry.shortcut}</kbd>}
      </Item>
    );
  });
}

export function MenuDropdown({ entries, align = "start", children }: { entries: MenuEntry[]; align?: "start" | "end"; children: ReactNode }) {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={surface} align={align} sideOffset={4} collisionPadding={8}>
          <Entries entries={entries} parts={DropdownMenu} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function MenuContext({ entries, children }: { entries: MenuEntry[]; children: ReactNode }) {
  return (
    <ContextMenu.Root modal={false}>
      <ContextMenu.Trigger asChild>{children}</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className={surface} collisionPadding={8}>
          <Entries entries={entries} parts={ContextMenu} />
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
