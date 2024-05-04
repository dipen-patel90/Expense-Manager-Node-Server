module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    // "indent": ["error", 2],
    "indent": 0,
    "@typescript-eslint/no-var-requires": 0,
    "new-cap": 0,
    "camelcase": "off",
    "require-jsdoc": 0,
    "object-curly-spacing": ["error", "always"],
    "no-array-constructor": 0,
    "space-before-function-paren": 0,
    "max-len": ["error", { code: 140 }],
  },
};
