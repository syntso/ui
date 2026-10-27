import { useEffect, useMemo, useRef } from "react";

import { useReducedMotion } from "../../hooks/reduced-motion";

import { grids } from "./grids";
import { Pixels } from "./pixels";
import type { PulseProperties } from "./properties";
import styles from "./styles.module.css";
import { pixelTicker } from "./ticker";

export function Pulse({ activity, size = "regular" }: PulseProperties) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const pixels = useMemo(() => new Pixels(grids[size]), [size]);

  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");

    if (!element || !context) return;

    const ratio = devicePixelRatio || 1;

    element.width = pixels.width * ratio;
    element.height = pixels.height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const paint = (time: number) =>
      pixels.draw(context, getComputedStyle(element).color, activity, time);

    paint(0);

    if (reduced || activity === "idle") return;

    return pixelTicker.subscribe(paint);
  }, [activity, pixels, reduced]);

  return (
    <canvas
      ref={canvas}
      aria-hidden
      className={styles.pulse}
      data-activity={activity}
      style={{ width: pixels.width, height: pixels.height }}
    />
  );
}
