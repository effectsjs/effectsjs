require("../../lib/prelude-polyfill");

("use effects");
try {
  const result = perform { type: "effect" };
  console.log(result);
} handle default with (e) {
  recall "Effect Result 😘";
}
