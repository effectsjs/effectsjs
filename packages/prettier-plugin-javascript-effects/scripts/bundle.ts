import webpack from "webpack";
import { promises as fs } from "fs";
import { basename, dirname, resolve } from "path";

const jsPrinterFilename = require.resolve(
  "prettier/src/language-js/printer-estree.js"
);
const jsPrinterDirname = dirname(jsPrinterFilename);
const effectsPrinterTemplateFilename = resolve(__dirname, "..", "src/printer-estree-effects.template.js");
const effectsPrinterBundleEntrypoint = resolve(jsPrinterDirname, "__effects_printer_entry__.js");
const effectsPrinterFilename = resolve(__dirname, "..", "src/printer-estree-effects.bundle.js");
const isWatching = !!process.env.IS_WATCHING;

async function prepareBundleAssets () {
  await fs.stat(effectsPrinterTemplateFilename).catch(err => {
    if (err.code === "ENOENT") {
      throw new Error("unable to find custom effects printer")
    }
    throw err
  })
  await Promise.all(
    [effectsPrinterBundleEntrypoint, effectsPrinterFilename].map(
      filename => fs.unlink(filename).catch(err => {
        if (err.code === "ENOENT") return
        throw err
      })
    )
  )
  await fs.copyFile(effectsPrinterTemplateFilename, effectsPrinterBundleEntrypoint)
}

async function bundle() {
  await prepareBundleAssets();
  const compiler = webpack({
    devtool: false,
    entry: effectsPrinterBundleEntrypoint,
    output: {
      path: dirname(effectsPrinterFilename),
      filename: basename(effectsPrinterFilename),
      libraryTarget: "commonjs",
    },
    mode: (process.env.NODE_ENV as any) || "production",
    target: "node",
    watch: isWatching
  })
  if (isWatching) {
    const chokidar = require("chokidar");
    chokidar
      .watch(effectsPrinterTemplateFilename)
      .on("change", (event: any, path: any) => {
        prepareBundleAssets();
      });
    await compiler.watch({}, (err, stats) => {
      if (err) return console.error(`webpack error:`, err)
      console.log("webpack ok");
    });
  } else {
    await new Promise((res, rej) => compiler.run((err, stats) => {
      if (err) return rej(err)
      if (stats.hasErrors()) throw new Error(stats.compilation.errors[0] || "child error. please inspect");
      res(stats)
    }));
    console.log("ok")
  }

}

bundle()
