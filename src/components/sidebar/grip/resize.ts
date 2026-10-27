import { useCallback, useRef, useState } from "react";

export interface SidebarWidth {
  width: number;
  min: number;
  max: number;
  resize: (delta: number) => void;
  commit: () => void;
  reset: () => void;
}

export function useSidebarWidth({ initial = 252, min = 200, max = 360 } = {}): SidebarWidth {
  const [width, setWidth] = useState(initial);
  const start = useRef(initial);
  const resize = useCallback((delta: number) => setWidth(Math.min(max, Math.max(min, start.current + delta))), [min, max]);

  const commit = useCallback(() => setWidth(current => (start.current = current)), []);

  const reset = useCallback(() => {
    start.current = initial;
    setWidth(initial);
  }, [initial]);

  return { width, min, max, resize, commit, reset };
}
