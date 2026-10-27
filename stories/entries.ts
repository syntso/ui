import type { MenuEntry } from "../src/components/menu";

export const host: MenuEntry[] = [
  { kind: "head", title: "api-1", detail: "root@10.0.1.4" },
  { kind: "item", label: "Open terminal", shortcut: "↵" },
  { kind: "item", label: "Files", shortcut: "⌘⇧F" },
  { kind: "item", label: "Forward a port…" },
  { kind: "separator" },
  { kind: "item", label: "Edit…", shortcut: "⌘E" },
  { kind: "item", label: "Copy ssh command" },
  { kind: "separator" },
  { kind: "item", label: "Disconnect, stops claude-code", danger: true },
];

export const project: MenuEntry[] = [
  { kind: "head", title: "prod-infra", detail: "~/Projects/prod-infra" },
  { kind: "item", label: "Show in Finder" },
  { kind: "item", label: "Edit synt.json" },
  { kind: "separator" },
  { kind: "item", label: "Close project" },
];

export const add: MenuEntry[] = [
  { kind: "item", label: "Add host…" },
  { kind: "item", label: "Add cluster…" },
  { kind: "item", label: "Add database…" },
];

export const account: MenuEntry[] = [
  { kind: "head", title: "lantrik", detail: "Pro · renews Nov 27" },
  { kind: "item", label: "Manage account…" },
  { kind: "item", label: "Keyboard shortcuts", shortcut: "⌘/" },
  { kind: "separator" },
  { kind: "item", label: "Sign out" },
];
