import { writeFileSync } from "node:fs";
import { join } from "node:path";

import { components } from "./components.ts";

const dist = join(import.meta.dirname, "../dist");

for (const { name, modules } of components()) {
  const lines = modules.map(module => `export * from "./types/components/${name}/${module}";`);

  writeFileSync(join(dist, `${name}.d.ts`), `${lines.join("\n")}\n`);
}
