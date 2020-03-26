import { addHook } from "pirates";
import { basename, join, resolve } from "path";
import { copyFileSync, readFileSync } from "fs";

const babelOverrideDirname = resolve(__dirname, "..", "babel-override-source");

/**
 * @description
 * these are the critical files needing patching in babel to support
 * effects
 */
const parserRelFilename = join("@babel", "parser", "lib", "index.js");

const monkeyPatchBabelFilesInMemory = () => {
  const revert = addHook(
    (code, filename) => {
      return readFileSync(
        resolve(babelOverrideDirname, basename(filename)),
        "utf8"
      );
    },
    {
      exts: [".js"],
      matcher: filename => {
        return filename.indexOf(parserRelFilename) >= 0;
      },
      ignoreNodeModules: false
    }
  );
  return revert;
};

if (module.parent) {
  monkeyPatchBabelFilesInMemory();
} else {
  if (process.argv[2] === "build") {
    const babelForkRoot = resolve(__dirname, "..", "..", "..", "babel");
    const babelParserRoot = resolve(babelForkRoot, "packages", "babel-parser");
    const babelParserSrcRoot = resolve(babelParserRoot, "lib");
    const babelParserFilename = resolve(babelParserSrcRoot, "index.js");
    copyFileSync(
      babelParserFilename,
      resolve(babelOverrideDirname, basename("index.js"))
    );
  } else {
    throw new Error(`unsupport cmd passed to ${__filename}`);
  }
}
