import plugin from "babel-plugin-effects";
import pluginTester from "babel-plugin-tester";
import path from "path";
import { readdirSync } from "fs";

const fixturesDirectory = path.resolve(
  __dirname,
  `__fixtures__`,
  `functional-tests`
);
const unpackTests = () =>
  readdirSync(fixturesDirectory).map((testFile) => ({
    fixture: path.resolve(fixturesDirectory, testFile),
    snapshot: true,
    title: testFile,
  }));

describe("transformEffects", () => {
  pluginTester({
    plugin,
    pluginName: "Transform Effects",
    title: "Transform proposed effects keywords into working JS",
    filename: __filename,
    tests: unpackTests()
  });
});
