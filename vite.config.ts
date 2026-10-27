import { join } from "node:path";

import react from "@vitejs/plugin-react";
import type { Plugin } from "vite";
import { defineConfig } from "vitest/config";

import { components, source } from "./scripts/components.ts";

const prefix = "virtual:synt-entry/";

function entries(): Plugin {
  const all = new Map(components().map(component => [component.name, component.modules]));

  return {
    name: "synt-entries",
    resolveId: id => (id.includes(prefix) ? `\0${prefix}${id.split(prefix)[1]}` : null),
    load(id) {
      if (!id.startsWith(`\0${prefix}`)) return null;

      const name = id.slice(prefix.length + 1);

      return (all.get(name) ?? []).map(module => `export * from ${JSON.stringify(join(source, name, module))};`).join("\n");
    },
  };
}

export default defineConfig({
  plugins: [react(), entries()],
  css: {
    modules: { localsConvention: "camelCaseOnly", generateScopedName: "synt-[local]-[hash:base64:5]" },
  },
  build: {
    lib: {
      entry: {
        theme: join(import.meta.dirname, "src/theme/root.ts"),
        ...Object.fromEntries(components().map(({ name }) => [name, prefix + name])),
      },
      formats: ["es"],
      fileName: (_, name) => `${name}.js`,
      cssFileName: "styles",
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [/^react/, /^@radix-ui\//, "lucide-react"],
      output: { chunkFileNames: "chunks/[name]-[hash].js" },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    include: ["tests/**/*.test.{ts,tsx}"],
    setupFiles: ["tests/setup.ts"],
    css: { modules: { classNameStrategy: "non-scoped" } },
  },
});
