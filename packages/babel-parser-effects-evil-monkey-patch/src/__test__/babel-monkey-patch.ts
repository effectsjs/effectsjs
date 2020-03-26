import "../patch-in-memory";
import assert from "assert";
import fs from "fs";
import { resolve } from "path";
import { parse } from "@babel/parser";

const fixtureFilename = resolve(
  __dirname,
  "../../../effects-runtime/test/__fixtures__/functional-tests/perform-get-integer.js"
);
const fixtureEffectsFileContents = fs.readFileSync(fixtureFilename, "utf8");
assert(
  fixtureEffectsFileContents.length > 50,
  "fixture file has loads of code inside"
);
const parsed = parse(fixtureEffectsFileContents);
assert(parsed.program.body);
