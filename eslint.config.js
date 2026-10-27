import js from "@eslint/js";
import { importX } from "eslint-plugin-import-x";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "build", "node_modules"] },
  js.configs.recommended,
  ...tseslint.configs.strict,
  jsxA11y.flatConfigs.strict,
  reactHooks.configs.flat.recommended,
  {
    plugins: { "import-x": importX },
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "no-warning-comments": "error",
      "import-x/order": ["error", {
        groups: ["builtin", "external", "internal", "parent", "sibling"],
        "newlines-between": "always",
        alphabetize: { order: "asc" },
      }],
      "padding-line-between-statements": ["error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let"], next: "*" },
        { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },
        { blankLine: "always", prev: "block-like", next: "*" },
      ],
      "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
);
