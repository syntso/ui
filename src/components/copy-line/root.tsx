import { Button } from "../button/root";

import { useCopied } from "./copied";
import type { CopyLineProperties } from "./properties";
import styles from "./styles.module.css";

export function CopyLine({ command }: CopyLineProperties) {
  const [copied, copy] = useCopied();

  return (
    <div className={styles.line}>
      <span className={styles.prompt} aria-hidden>
        $
      </span>
      <code className={styles.command}>{command}</code>
      <Button onClick={() => void copy(command)}>
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </Button>
    </div>
  );
}
