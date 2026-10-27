import type { ComponentType, ReactNode } from "react";

export type MenuEntry =
  | { kind: "head"; title: string; detail?: string }
  | { kind: "item"; label: string; shortcut?: string; danger?: boolean; onSelect?: () => void }
  | { kind: "separator" };

export interface MenuParts {
  Item: ComponentType<{ className: string | undefined; onSelect?: () => void; children: ReactNode }>;
  Label: ComponentType<{ className: string | undefined; children: ReactNode }>;
  Separator: ComponentType<{ className: string | undefined }>;
}

export interface MenuDropdownProperties {
  entries: MenuEntry[];
  align?: "start" | "end";
  children: ReactNode;
}

export interface MenuContextProperties {
  entries: MenuEntry[];
  children: ReactNode;
}
