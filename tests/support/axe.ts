import axe from "axe-core";

export async function violations(container: Element): Promise<string[]> {
  const result = await axe.run(container, { rules: { "color-contrast": { enabled: false } } });

  return result.violations.map(violation => `${violation.id}: ${violation.help}`);
}
