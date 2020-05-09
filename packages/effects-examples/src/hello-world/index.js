require("effects-runtime/lib/prelude-polyfill");
require("@babel/polyfill");

const main = () => {
  "use effects";
  try {
    console.log(`hello`, perform {});
  } handle default with (e) {
    recall "world";
  }
};

main();
