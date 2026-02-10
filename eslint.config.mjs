// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{js,ts,jsx,tsx}"]},
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "loader/**",
      "www/**",
      "build/**",
      "webpack.config.js",
    ],
  },
  {languageOptions: { globals: globals.browser }},
  {rules: {
    'react/react-in-jsx-scope': 'warn',
  }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...storybook.configs["flat/recommended"],

];
