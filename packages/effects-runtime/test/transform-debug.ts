#!/usr/bin/env node

import { transform } from "../../../babel/packages/babel-core";
import plugin from "babel-plugin-effects";
import { readFileSync } from "fs";
import path from "path";
import { exec } from "child_process";

const FUNCTIONAL_TEST_DIRECTORY = path.resolve(
  __dirname,
  `__fixtures__`,
  `functional-tests`
);
const fixture = process.argv[2];

const readAndParseFile = textFixtureBaseName => {
  const filename = path.resolve(FUNCTIONAL_TEST_DIRECTORY, textFixtureBaseName);
  const file = readFileSync(filename, "utf8");

  try {
    return [file, transform(file, { plugins: [plugin] }).code];
  } catch (e) {
    throw new Error(`${filename} failed to parse with ${e.message}`);
  }
};

(async () => {
  try {
    const [original, transformation] = readAndParseFile(fixture);

    console.log(transformation);
  } catch (e) {
    console.error(`${e.message}`);
    process.exit(1);
  }
})();
