module.exports = {
  ignorePatterns: ["node_modules", "**/lib/**", "!.eslintrc.js", "*highlight*"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-unused-vars": 0 // eslint/ts doesn't play nice with interfaces imports consistently
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  }
};
