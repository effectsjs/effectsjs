module.exports = {
  ignorePatterns: [
    "coverage",
    "dist",
    "**/node_modules/**",
    "**/lib/**",
    "!.eslintrc.js",
    "*highlight*",
    "babel.js", // babel is currently forked and submoduled.  but we need the file for the ui build!
    "**/*example*/**", // ignore until eslint-plugin :ok_hand:
    "**/effects-runtime/examples/**", // ignore until eslint-plugin :ok_hand:
    "**/effects-runtime/test/**", // ignore until eslint-plugin :ok_hand:

    // effects-docs/gatsby
    "public",
    "static",
    ".cache",
    "**/highlight/**",
    "**/*example*.js",
    "example-snippet.ts",
  ],

  // effects-docs/gatsby
  globals: {
    __PATH_PREFIX__: true,
  },

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    /* effects-docs/gastby */ "react-app",
  ],
  rules: {
    "no-restricted-globals": 0, // react rules fight `worker` env globals (self)
    "no-unused-vars": 0, // eslint/ts doesn't play nice with interfaces imports consistently
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    worker: true,
  },
};
