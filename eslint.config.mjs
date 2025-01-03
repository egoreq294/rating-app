import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/typescript", "prettier"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
    },
  }),
];

export default eslintConfig;
