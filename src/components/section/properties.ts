import type { ReactNode } from "react";

export interface SectionProperties {
  title: string;
  count?: number;
  children: ReactNode;
}
