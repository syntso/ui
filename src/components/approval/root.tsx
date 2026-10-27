import { ChevronDown } from "lucide-react";

import { useKeyDown } from "../../hooks/key-down";
import { Button } from "../button/root";
import { IconButton } from "../icon-button/root";
import { MenuDropdown } from "../menu/dropdown";
import { Pulse } from "../pulse/root";

import { useArmed } from "./armed";
import { ApprovalCommand } from "./command";
import { grantLabels, grantsFor } from "./grants";
import type { Answer, ApprovalProperties } from "./properties";
import styles from "./styles.module.css";

export function Approval({ agent, command, target, reason, privileged, onAnswer }: ApprovalProperties) {
  const armed = useArmed();
  const grants = grantsFor({ privileged });
  const main = grants[grants.length - 1] ?? "once";
  const wider = grants.filter(grant => grant !== main);
  const answer = (value: Answer) => armed && onAnswer(value);

  const container = useKeyDown<HTMLDivElement>(event => {
    if (event.target instanceof HTMLButtonElement) return;

    if (event.key === "Enter") answer(main);

    if (event.key === "Escape") answer("deny");
  });

  return (
    <div className={styles.approval} role="group" aria-label={`${agent} is waiting for you`} ref={container}>
      <span className={styles.lead}>
        <Pulse activity="waiting" />
      </span>
      <span className={styles.text}>
        <span className={styles.title}>
          <span className={styles.agent}>{agent}</span>
          <ApprovalCommand command={command} />
        </span>
        <span className={styles.detail}>
          {target} · {reason}
        </span>
      </span>
      <span className={styles.actions}>
        <Button onClick={() => answer("deny")}>Deny</Button>
        <span className={styles.split}>
          <Button variant="primary" shortcut="↵" onClick={() => answer(main)}>
            {grantLabels[main]}
          </Button>
          {wider.length > 0 && (
            <MenuDropdown align="end" entries={wider.map(grant => ({ kind: "item", label: grantLabels[grant], onSelect: () => answer(grant) }))}>
              <IconButton label="Wider grants" className={styles.more}>
                <ChevronDown />
              </IconButton>
            </MenuDropdown>
          )}
        </span>
      </span>
    </div>
  );
}
