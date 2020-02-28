const upper = str => str.replace(/^\w/, c => c.toUpperCase());

const toExamples = edges =>
  edges.map(edge => {
    const parts = edge.node.relativePath.split("/");
    const basename = parts[parts.length - 1];
    const name = withoutJsSuffix(
      withoutExampleSuffix(
        basename
          .split("-")
          .map(upper)
          .join(" ")
      )
    );
    return {
      basename,
      name
    };
  });

const withoutExampleSuffix = str => str.replace(/\.example$/, "");
const withoutJsSuffix = str => str.replace(/\.js$/, "");

module.exports = {
  upper,
  toExamples,
  withoutExampleSuffix,
  withoutJsSuffix
};
