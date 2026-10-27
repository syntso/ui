import type { ReactNode } from "react";

export interface RowProperties {
  lead?: ReactNode;
  title: ReactNode;
  detail?: ReactNode;
  trailing?: ReactNode;
  selected?: boolean;
  onOpen?: () => void;
}
