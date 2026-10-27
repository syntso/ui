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
