import { defineConfig } from "vite";

export default defineConfig({
  css: {
    modules: { localsConvention: "camelCaseOnly", generateScopedName: "synt-[local]-[hash:base64:5]" },
  },
});
