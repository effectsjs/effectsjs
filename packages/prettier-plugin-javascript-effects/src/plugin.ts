import { Plugin } from "prettier";

export const parserName = "babel-effects";
const prettierBabelParsers = require("prettier/src/language-js/parser-babel.js");
const effectsParser = require("../../../babel/packages/babel-parser/lib");

export const parser = effectsParser;
export const astFormat = "estreeEffects"

export const languages: Plugin["languages"] = [
  {
    name: "javascript",
    parsers: [parserName]
  }
];

export const parsers: Plugin["parsers"] = {
  [parserName]: {
    ...(prettierBabelParsers.parsers.babel),
    astFormat,
    parse: effectsParser.parse,
  }
};


export const printers: Plugin["printers"] = {
  [astFormat]: {
    ...(require('./printer-estree-effects.bundle'))
  },
};

export const plugin: Plugin = {
  languages,
  parsers,
  printers
}
