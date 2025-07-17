// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  // Global ignore patterns
  {
    ignores: ["dist", "node_modules"],
  },
  // Main configuration block
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    // Base configurations to extend
    extends: [
      js.configs.recommended,           // Base JS rules
      ...tseslint.configs.recommended,  // TypeScript support
      prettier,                         // Disables conflicting formatting rules
    ],
    rules: {
      ...react.configs.recommended.rules,         // Recommended React rules
      ...reactHooks.configs.recommended.rules,    // React Hooks rules
      "react/react-in-jsx-scope": "off",          // Not needed in React 17+
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  }
);
