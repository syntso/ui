import type { ReactNode } from "react";

import type { Activity } from "../../models/agent";
import type { Kind, Link } from "../../models/resource";
import type { MenuEntry } from "../menu/properties";

export interface SidebarRootProperties {
  top: ReactNode;
  footer: ReactNode;
  label: string;
  children: ReactNode;
}

export interface SidebarPlaceProperties {
  icon: ReactNode;
  label: string;
  current?: boolean;
  trailing?: ReactNode;
  onSelect?: () => void;
}

export interface SidebarHeadingProperties {
  title: string;
  action?: ReactNode;
}

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

export interface SidebarAccountProperties {
  name: string;
  plan: string;
  entries: MenuEntry[];
}

export interface SidebarGripProperties {
  width: number;
  min: number;
  max: number;
  onResize: (delta: number) => void;
  onCommit: () => void;
  onReset: () => void;
}
