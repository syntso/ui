import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";

import { Pixels, type Grid } from "./pulse/pixels";
import { Ticker } from "./pulse/ticker";

export type Activity = "idle" | "working" | "waiting";

const grids = {
  regular: { columns: 7, rows: 5, cell: 2, gap: 1 },
  small: { columns: 5, rows: 3, cell: 2, gap: 1 },
} satisfies Record<string, Grid>;

const ticker = new Ticker(90);

const reducedMotion = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(change: () => void): () => void {
  const query = matchMedia(reducedMotion);

  query.addEventListener("change", change);

  return () => query.removeEventListener("change", change);
}

export function Pulse({ activity, size = "regular" }: { activity: Activity; size?: keyof typeof grids }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const reduced = useSyncExternalStore(subscribeToMotion, () => matchMedia(reducedMotion).matches, () => false);
  const pixels = useMemo(() => new Pixels(grids[size]), [size]);

  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");

    if (!element || !context) return;

    const ratio = devicePixelRatio || 1;

    element.width = pixels.width * ratio;
    element.height = pixels.height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const paint = (time: number) => pixels.draw(context, getComputedStyle(element).color, activity, time);

    paint(0);

    if (reduced || activity === "idle") return;

    return ticker.subscribe(paint);
  }, [activity, pixels, reduced]);

  return (
    <canvas
      ref={canvas}
      aria-hidden
      className="block shrink-0 text-pixel"
      data-activity={activity}
      style={{ width: pixels.width, height: pixels.height }}
    />
  );
}
