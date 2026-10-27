import type { ReactNode } from "react";

export interface ConnectFieldProperties {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  shortcut?: string;
  hint?: ReactNode;
}
