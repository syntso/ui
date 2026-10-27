import type { KeyboardEvent, PointerEvent } from "react";

import type { SidebarGripProperties } from "../properties";

import styles from "./styles.module.css";

const step = 16;

export function SidebarGrip({ width, min, max, onResize, onCommit, onReset }: SidebarGripProperties) {
  const drag = (event: PointerEvent<HTMLDivElement>) => {
    const grip = event.currentTarget;
    const origin = event.clientX;

    grip.setPointerCapture(event.pointerId);
    grip.dataset.dragging = "";
    grip.onpointermove = move => onResize(move.clientX - origin);
    grip.onpointerup = () => {
      grip.onpointermove = null;
      grip.onpointerup = null;
      delete grip.dataset.dragging;
      onCommit();
    };
  };

  const keys = (event: KeyboardEvent<HTMLDivElement>) => {
    const delta = { ArrowLeft: -step, ArrowRight: step }[event.key];

    if (event.key === "Enter") onReset();

    if (delta === undefined) return;

    event.preventDefault();
    onResize(delta);
    onCommit();
  };

  return (
    <div
      className={styles.grip}
      role="separator"
      tabIndex={0}
      aria-orientation="vertical"
      aria-label="Resize sidebar"
      aria-valuenow={width}
      aria-valuemin={min}
      aria-valuemax={max}
      title="Drag to resize, double-click to reset"
      onPointerDown={drag}
      onKeyDown={keys}
      onDoubleClick={onReset}
    />
  );
}
