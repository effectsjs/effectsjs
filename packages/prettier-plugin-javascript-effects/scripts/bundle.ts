import webpack from "webpack";
import { promises as fs } from "fs";
import { dirname, resolve } from "path";

const effectsBabelParserFilename = require.resolve(
  "../../../babel/packages/babel-parser/lib"
);

const projectRootDirname = resolve(__dirname, "..");
const prettierJsLangDirname = dirname(
  require.resolve("prettier/src/language-js")
);
const effectsPrinterTemplateFilename = resolve(
  projectRootDirname,
  "src/printer-estree.template.js"
);
const effectsParserBabelTemplateFilename = resolve(
  projectRootDirname,
  "src/parser-babel.template.js"
);
const effectsPrinterBundleEntrypoint = resolve(
  prettierJsLangDirname,
  "__effects_printer_entry__.js"
);
const effectsParserBabelBundleEntrypoint = resolve(
  prettierJsLangDirname,
  "__effects_parser_babel_entry__.js"
);
const effectsPrinterTargetFilename = resolve(
  projectRootDirname,
  "src/printer-estree-effects.bundle.js"
);

const isWatching = !!process.env.IS_WATCHING;

async function prepareBundleAssets() {
  const templateFilenames = [
    effectsPrinterTemplateFilename,
    effectsParserBabelTemplateFilename
  ];
  // assert template files exist
  await Promise.all(templateFilenames.map(filename => fs.stat(filename)));
  // clean
  await Promise.all(
    [effectsPrinterBundleEntrypoint, effectsPrinterTargetFilename].map(
      filename =>
        fs.unlink(filename).catch(err => {
          if (err.code === "ENOENT") {
            return;
          }
          throw err;
        })
    )
  );
  // install templates for compilation
  await fs.copyFile(
    effectsPrinterTemplateFilename,
    effectsPrinterBundleEntrypoint
  );
  await fs.copyFile(
    effectsParserBabelTemplateFilename,
    effectsParserBabelBundleEntrypoint
  );
}

async function bundle() {
  await prepareBundleAssets();
  const compiler = webpack({
    devtool: false,
    entry: {
      // simulate prettier basenames for less cognitive gymnastics
      "printer-estree": effectsPrinterBundleEntrypoint,
      "parser-babel": effectsParserBabelBundleEntrypoint
    },
    output: {
      path: dirname(effectsPrinterTargetFilename),
      filename: "[name].bundle.js",
      libraryTarget: "commonjs"
    },
    mode: (process.env.NODE_ENV as any) || "production",
    target: "node",
    watch: isWatching,
    resolve: {
      alias: {
        "@babel/parser": effectsBabelParserFilename
      }
    }
    // @TODO we gotta turn this on, but require statements to chunks are not
    // generated :/
    // optimization: {
    //   splitChunks: {
    //     chunks: "all"
    //   }
    // }
  });
  if (isWatching) {
    const chokidar = require("chokidar");
    const watcher = chokidar.watch(
      [effectsPrinterTemplateFilename, effectsParserBabelTemplateFilename],
      {}
    );
    watcher.on("change", (event: any, path: any) => {
      console.log("updating bundle assets");
      prepareBundleAssets();
    });
    await compiler.watch({}, (err, stats) => {
      if (err) return console.error(`webpack error:`, err)
      console.log("webpack ok");
    });
  } else {
    await new Promise((res, rej) =>
      compiler.run((err, stats) => {
        if (err) {
          return rej(err);
        }
        if (stats.hasErrors()) {
          throw new Error(
            stats.compilation.errors[0] || "child error. please inspect"
          );
        }
        res(stats);
      })
    );
    console.log("ok");
  }
}

bundle();
