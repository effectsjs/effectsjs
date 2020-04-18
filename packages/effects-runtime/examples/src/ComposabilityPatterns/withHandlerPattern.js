require("../../../lib/prelude-polyfill");

const effectTypeA = "handlerA";
const effectTypeB = "handlerB";

const handlerA = () => recall { response: "A" };
const handlerB = (context) => recall { response: "B-" + context };

const withHandlerA = (fn) => {
  try {
    return fn();
  } handle "handlerA" with (e) {
    return handlerA();
  }
};

const withHandlerB = (context) => (fn) => {
  try {
    return fn();
  } handle "handlerB" with (e) {
    return handlerB(context);
  }
};

// BUMMER! Big Bug: The transform plugin chokes on transforming arrow functions being fixed-up into
//  generator functions.
const entry = (context) =>
  function (fn) {
    return withHandlerA(function () {
      return withHandlerB(context)(fn);
    });
  };

const programA = () => {
  "use effects";
  entry("contextA")(() => {
    console.log("This is the first program. It performs some effects");
    console.log("Performing effect A");
    const { response: responseA } = perform { type: effectTypeA };
    console.log(`Recieved ${responseA} from effect: ${effectTypeA}`);
    console.log("Performing effect B");
    const { response: responseB } = perform { type: effectTypeB };
    console.log(`Received ${responseB} from effect: ${effectTypeB}`);
  });
};

const programB = () => {
  "use effects";
  entry("contextB")(() => {
    console.log(
      "This is the second program, it performs effects into an object!"
    );
    const object = {
      keyA: perform { type: effectTypeA },
      keyB: perform { type: effectTypeB },
    };

    console.log(JSON.stringify(object, null, 2));
  });
};

const programC = async () => {
  try {
    "use effects";
    entry("contextC")(() => {
      console.log(`
        This is the third program. It's cool because it catches errors that the virtual stack throws.
        `);

      perform { type: "this dont exist" };
    });
  } catch (e) {
    console.log(`Caught error from program C: ${e.message}.\nNice.`);
  }
};

(async () => {
  await programA();
  await programB();
  await programC();
})();
