import type { Grant } from "./properties";

export const grantLabels: Record<Grant, string> = {
  always: "Always for this host",
  restart: "Until restart",
  once: "Allow once",
};

export function grantsFor({ privileged }: { privileged: boolean }): Grant[] {
  return privileged ? ["once"] : ["always", "restart", "once"];
}
