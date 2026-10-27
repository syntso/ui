import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { useKeyDown } from "../hooks/key-down";

import { Button } from "./button";
import { IconButton } from "./icon-button";
import { MenuDropdown } from "./menu";
import { Pulse } from "./pulse";

export type Grant = "always" | "restart" | "once";

export type Answer = Grant | "deny";

export interface ApprovalProperties {
  agent: string;
  command: string;
  target: string;
  reason: string;
  privileged: boolean;
  onAnswer: (answer: Answer) => void;
}

const labels: Record<Grant, string> = {
  always: "Always for this host",
  restart: "Until restart",
  once: "Allow once",
};

const elevated = /^(sudo|doas|pkexec|su)(\s|$)/;

export function Approval({ agent, command, target, reason, privileged, onAnswer }: ApprovalProperties) {
  const [armed, setArmed] = useState(false);
  const wider: Grant[] = privileged ? [] : ["always", "restart"];
  const answer = (value: Answer) => armed && onAnswer(value);
  const elevation = elevated.exec(command)?.[1];

  useEffect(() => {
    const timer = setTimeout(() => setArmed(true), 600);

    return () => clearTimeout(timer);
  }, []);

  const container = useKeyDown<HTMLDivElement>(event => {
    if (event.target instanceof HTMLButtonElement) return;

    if (event.key === "Enter") answer("once");

    if (event.key === "Escape") answer("deny");
  });

  return (
    <div
      ref={container}
      role="group"
      aria-label={`${agent} is waiting for you`}
      className="-mx-2.5 grid min-h-11 grid-cols-[28px_1fr_auto] items-center gap-3 rounded-row px-2.5 py-2"
    >
      <span className="grid place-items-center">
        <Pulse activity="waiting" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="flex items-baseline gap-2">
          <span className="shrink-0 text-agent">{agent}</span>
          <code className="font-mono text-code break-all whitespace-pre-wrap">
            {elevation && <span className="text-danger">{elevation}</span>}
            {elevation ? command.slice(elevation.length) : command}
          </code>
        </span>
        <span className="text-small text-muted">
          {target} · {reason}
        </span>
      </span>
      <span className="flex gap-2">
        <Button onClick={() => answer("deny")}>Deny</Button>
        <span className="flex gap-px">
          <Button variant="primary" shortcut="↵" className={wider.length ? "rounded-r-none" : ""} onClick={() => answer("once")}>
            {labels.once}
          </Button>
          {wider.length > 0 && (
            <MenuDropdown align="end" entries={wider.map(grant => ({ kind: "item", label: labels[grant], onSelect: () => answer(grant) }))}>
              <IconButton label="Wider grants" className="w-6 rounded-l-none bg-ink text-canvas hover:bg-ink/88 hover:text-canvas data-[state=open]:bg-ink/88 data-[state=open]:text-canvas">
                <ChevronDown />
              </IconButton>
            </MenuDropdown>
          )}
        </span>
      </span>
    </div>
  );
}
