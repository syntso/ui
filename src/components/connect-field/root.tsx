import { SquareTerminal } from "lucide-react";
import { useId } from "react";

import { Key } from "../key/root";

import type { ConnectFieldProperties } from "./properties";
import styles from "./styles.module.css";

export function ConnectField({
  value,
  onChange,
  onSubmit,
  placeholder = "Connect to a host, cluster or database",
  shortcut = "⌘K",
  hint,
}: ConnectFieldProperties) {
  const hintId = useId();

  return (
    <div className={styles.connect}>
      <label className={styles.field}>
        <SquareTerminal className={styles.icon} aria-hidden />
        <input
          className={styles.input}
          value={value}
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby={hint ? hintId : undefined}
          autoComplete="off"
          spellCheck={false}
          onChange={event => onChange(event.target.value)}
          onKeyDown={event => event.key === "Enter" && onSubmit?.()}
        />
        <Key>{shortcut}</Key>
      </label>
      {hint && (
        <div id={hintId} className={styles.hint}>
          {hint}
        </div>
      )}
    </div>
  );
}
