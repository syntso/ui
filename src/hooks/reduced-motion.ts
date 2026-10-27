import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(change: () => void): () => void {
  const list = matchMedia(query);

  list.addEventListener("change", change);

  return () => list.removeEventListener("change", change);
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, () => matchMedia(query).matches, () => false);
}
