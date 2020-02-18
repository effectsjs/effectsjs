const { transform } = require("../../babel/packages/babel-core");
const { promises: fs, readdirSync, readFileSync } = require("fs");
const path = require("path");
const nodeEval = require("node-eval");

const FUNCTIONAL_TEST_DIRECTORY = path.resolve(
  __dirname,
  `__fixtures__`,
  `functional-tests`
);

const readAndParseFile = textFixtureBaseName => {
  const filename = path.resolve(FUNCTIONAL_TEST_DIRECTORY, textFixtureBaseName);
  const file = `require('../lib/prelude-polyfill');\n ${readFileSync(
    filename,
    "utf8"
  )}`;

  return transform(file).code;
};

const evaluateModule = code => nodeEval(code, "testFixtureModule");

const extractTests = () => {
  return readdirSync(FUNCTIONAL_TEST_DIRECTORY).map(testFile => {
    const code = readAndParseFile(testFile);
    const { test } = evaluateModule(code);

    return { code, test, fileName: testFile };
  });
};

const modules = extractTests();

describe("Effects Functional Tests", () => {
  modules.forEach(({ code, test, fileName }) => {
    if (typeof test === "function") {
      if (
        process.env.DEBUG_TRANSPILE &&
        process.env.DEBUG_TRANSPILE === "true"
      ) {
        console.log(code);
      }
      describe(`Test Case: ${fileName}`, () => {
        test({ code, expect, it, describe });
      });
    }
  });
});
