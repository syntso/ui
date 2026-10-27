import type { ReactNode } from "react";

export interface StatusBarProperties {
  start: ReactNode;
  end?: ReactNode;
}

export interface StatusItemProperties {
  tone?: "online" | "agent";
  children: ReactNode;
}
