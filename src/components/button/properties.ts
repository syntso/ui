import type { ButtonHTMLAttributes } from "react";

export interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "quiet";
  shortcut?: string;
}
