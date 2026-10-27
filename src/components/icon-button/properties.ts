import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProperties extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
  shortcut?: string;
  size?: "regular" | "small";
  children: ReactNode;
}
