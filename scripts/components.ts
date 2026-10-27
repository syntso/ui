import { readdirSync } from "node:fs";
import { join, relative } from "node:path";

export const source = join(import.meta.dirname, "../src/components");

export interface Component {
  name: string;
  modules: string[];
}

export function components(): Component[] {
  return readdirSync(source, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(({ name }) => ({
      name,
      modules: readdirSync(join(source, name), { recursive: true, encoding: "utf8" })
        .filter(file => /\.tsx?$/.test(file) && !file.endsWith(".d.ts"))
        .map(file => relative(join(source, name), join(source, name, file)).replace(/\.tsx?$/, ""))
        .sort(),
    }));
}
