import { Plugin } from "prettier";
const printer = require("./printer-estree.bundle");
const prettierParserBabel = require("./parser-babel.bundle.js");
// ^ prettier/language-js/parser-babel.js, with parser rewired

export const astFormat = "estreeEffects";
export const parserName = "babel-effects";

export const languages: Plugin["languages"] = [
  {
    name: "javascript",
    parsers: [parserName],
  },
];

export const parsers: Plugin["parsers"] = {
  [parserName]: {
    ...prettierParserBabel.parsers.babel,
    astFormat,
  },
};

export const printers: Plugin["printers"] = {
  [astFormat]: printer,
};

export const plugin: Plugin = {
  languages,
  parsers,
  printers,
};
