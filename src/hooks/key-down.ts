import { useEffect, useRef, type RefObject } from "react";

export function useKeyDown<T extends HTMLElement>(handler: (event: KeyboardEvent, element: T) => void): RefObject<T | null> {
  const element = useRef<T>(null);
  const latest = useRef(handler);

  useEffect(() => {
    latest.current = handler;
  });

  useEffect(() => {
    const target = element.current;

    if (!target) return;

    const listener = (event: KeyboardEvent) => latest.current(event, target);

    target.addEventListener("keydown", listener);

    return () => target.removeEventListener("keydown", listener);
  }, []);

  return element;
}
