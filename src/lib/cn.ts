import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const merge = extendTailwindMerge({
  extend: {
    theme: {
      color: ["canvas", "panel", "raised", "field", "line", "ink", "muted", "faint", "hover", "select", "agent", "pixel", "ok", "danger"],
      text: ["title", "field", "body", "small", "code", "code-small"],
      radius: ["control", "row", "field"],
      shadow: ["menu"],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return merge(clsx(inputs));
}
