const assert = require("assert");
const prettier = require("prettier");
const { promises: fs } = require("fs");
const { resolve } = require("path");
const { plugin, parserName } = require("../");

const fixturesDir = resolve(
  __dirname,
  "../../effects-runtime/test/__fixtures__/functional-tests"
);

async function test() {
  const codes = await readFixtures();
  for (const { filename, code } of codes) {
    const formatted = prettier.format(code, {
      parser: parserName,
      plugins: [plugin],
    });
    if (formatted !== code) {
      await fs.writeFile(filename, formatted);
    }
  }
}

async function readFixtures() {
  const basenames = await fs.readdir(fixturesDir);
  const fixtureFilenames = basenames
    .filter((basename) => basename.match(/js$/))
    .map((basename) => resolve(fixturesDir, basename));
  return Promise.all(
    fixtureFilenames.map(async (filename) => ({
      filename,
      code: await fs.readFile(filename, "utf8"),
    }))
  );
}

test();
