const highlightIndex = require.resolve("highlight.js");
const {
  promises: { readFile, writeFile }
} = require("fs");

const whitelist = ["javascript"];

async function go() {
  const contents = await readFile(highlightIndex, "utf8");
  const nextContents =
    contents
      .split("\n")
      .map(line => {
        if (!line.match(/\s*hljs.registerLanguage\(/)) return line;
        if (whitelist.some(white => line.match(white))) return line;
        return "// " + line;
      })
      .join("\n") + "\n";
  return writeFile(highlightIndex, nextContents, "utf8");
  console.log(
    `[reduce-highlight.js]: highlight languages reduced to ${whitelist.join(
      ", "
    )}`
  );
}
go();
