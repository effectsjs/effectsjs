import transformEffects from "babel-plugin-effects";
import pluginTester from "babel-plugin-tester";

const fixturesDirectory = `__fixtures__/transformEffects`;

/*
TODO: when the specification is settled, these should be corrected and enabled
 */
describe("transformEffects", () => {
  pluginTester({
    plugin: transformEffects,
    pluginName: "Transform Effects",
    title: "Transform proposed effects keywords into working JS",
    filename: __filename,
    tests: [
      // {
      //   title: "Perform effect",
      //   fixture: `${fixturesDirectory}/perform/perform-simple-effect-in.js`,
      //   outputFixture: `${fixturesDirectory}/perform/perform-simple-effect-out.js`
      // },
      // {
      //   title: "Perform effect with assignment",
      //   fixture: `${fixturesDirectory}/perform/perform-effect-with-assignment-in.js`,
      //   outputFixture: `${fixturesDirectory}/perform/perform-effect-with-assignment-out.js`
      // },
      // {
      //   title: "Try/Handle/Recall Base Case",
      //   fixture: `${fixturesDirectory}/try-handle-recall/basic-in.js`,
      //   outputFixture: `${fixturesDirectory}/try-handle-recall/basic-out.js`
      // },
      // {
      //   title: "Try/Handle/Recall in Try",
      //   fixture: `${fixturesDirectory}/try-handle-recall/perform-in-try.js`,
      //   // outputFixture: `${fixturesDirectory}/try-handle-recall/basic-out.js`
      // },
      //
      // {
      //   title: "Try/Handle/Recall Multiple Descendants",
      //   fixture: `${fixturesDirectory}/try-handle-recall/multiple-descendents-in.js`,
      //   outputFixture: `${fixturesDirectory}/try-handle-recall/multiple-descendents-out.js`
      // },
      // {
      //   title: "Try/Handle/Recall Assignments",
      //   fixture: `${fixturesDirectory}/try-handle-recall/assignments-in.js`,
      //   outputFixture: `${fixturesDirectory}/try-handle-recall/assignments-out.js`
      // },
      // {
      //   title: "Try/Handle/Recall Assignments",
      //   fixture: `${fixturesDirectory}/try-handle-recall/complex-in.js`,
      //   // outputFixture: `${fixturesDirectory}/try-handle-recall/assignments-out.js`
      // },
      // {
      //   title: "Try/Handle/Recall Handlers as functions",
      //   fixture: `${fixturesDirectory}/try-handle-recall/separated-handlers-in.js`,
      //   outputFixture: `${fixturesDirectory}/try-handle-recall/separated-handlers-out.js`
      // },
      // {
      //   title: "Try/Handle/Recall async handlers",
      //   fixture: `${fixturesDirectory}/try-handle-recall/async-handlers-in.js`,
      //   outputFixture: `${fixturesDirectory}/try-handle-recall/async-handlers-out.js`
      // },
      // {
      //   title: "Try/Handle/Recall nested handlers",
      //   fixture: `${fixturesDirectory}/try-handle-recall/nested-handlers-in.js`,
      //   outputFixture: `${fixturesDirectory}/try-handle-recall/nested-handlers-out.js`
      // },
      // {
      //   title: "Try/Handle/Recall nested handlers",
      //   fixture: `${fixturesDirectory}/try-handle-recall/nested-handlers-in.js`,
      //   outputFixture: `${fixturesDirectory}/try-handle-recall/nested-handlers-out.js`
      // }
      // {
      //   title: "It Should preserve try/catch",
      //   fixture: `${fixturesDirectory}/preserve-try-catch-in.js`,
      //   outputFixture: `${fixturesDirectory}/preserve-try-catch-out.js`
      // }
    ]
  });

  it("will come back", () => {});
});
