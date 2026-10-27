import type { MenuEntry } from "../../src/components/menu/properties";

export const hostEntries: MenuEntry[] = [
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

export const projectEntries: MenuEntry[] = [
  { kind: "head", title: "prod-infra", detail: "~/Projects/prod-infra" },
  { kind: "item", label: "Open project window", shortcut: "⌘↵" },
  { kind: "item", label: "Show in Finder" },
  { kind: "item", label: "Edit synt.json" },
  { kind: "separator" },
  { kind: "item", label: "Share and sync…" },
  { kind: "item", label: "Close project" },
];

export const addEntries: MenuEntry[] = [
  { kind: "item", label: "Add host…" },
  { kind: "item", label: "Add cluster…" },
  { kind: "item", label: "Add database…" },
  { kind: "item", label: "New runbook" },
];

export const accountEntries: MenuEntry[] = [
  { kind: "head", title: "lantrik", detail: "Pro · renews Nov 27" },
  { kind: "item", label: "Sync on · 2 devices" },
  { kind: "item", label: "Manage account…" },
  { kind: "item", label: "Keyboard shortcuts", shortcut: "⌘/" },
  { kind: "separator" },
  { kind: "item", label: "Sign out" },
];
