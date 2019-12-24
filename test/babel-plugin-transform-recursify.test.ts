import recursify from "../src/babel-plugin-transform-recursify";
import pluginTester from "babel-plugin-tester";

describe("recursify", () => {
  pluginTester({
    plugin: recursify,
    pluginName: "Recursify",
    title: "Convert functions to recursion",
    filename: __filename,
    tests: [
      {
        title: "Simple Case",
        fixture: "__fixtures__/recursify/while/base-case-in.js",
        outputFixture: "__fixtures__/recursify/while/base-case-out.js"
      },
      {
        title: "Simple Case, variable in header",
        fixture: "__fixtures__/recursify/while/header-simple-case-in.js",
        outputFixture: "__fixtures__/recursify/while/header-simple-case-out.js"
      },
      {
        title: "Multiple iterator case",
        fixture: "__fixtures__/recursify/while/multi-iterator-case-in.js",
        outputFixture: "__fixtures__/recursify/while/multi-iterator-case-out.js"
      },
      {
        title: "Nested iterator case",
        fixture: "__fixtures__/recursify/while/nested-iterator-in.js",
        outputFixture: "__fixtures__/recursify/while/nested-iterator-out.js"
      },
      {
        title: "Function Param Case",
        fixture: "__fixtures__/recursify/while/function-params-in.js",
        outputFixture: "__fixtures__/recursify/while/function-params-out.js"
      },
      {
        title: "Try/Catch",
        fixture: "__fixtures__/recursify/while/try-catch-in.js",
        outputFixture: "__fixtures__/recursify/while/try-catch-out.js"
      },

      {
        title: "For-loop case",
        fixture: "__fixtures__/recursify/for/basic-for-loop-in.js",
        outputFixture: "__fixtures__/recursify/for/basic-for-loop-out.js"
      },

      {
        title: "Nested For-loop case",
        fixture: "__fixtures__/recursify/for/nested-for-loop-in.js",
        outputFixture: "__fixtures__/recursify/for/nested-for-loop-out.js"
      }
    ]
  });
});
