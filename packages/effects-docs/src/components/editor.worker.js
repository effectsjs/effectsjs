import debounce from "lodash/debounce";

/**
 * babel (standalone) makes webpack _lose its cool_ in production mode,
 * which is too bad, because webpack should minify it.  it's so bad,
 * that we're ejecting webpack script loading to oldskool script loading
 */
importScripts("/babel.js");
const effectsRuntimeP = import("effects-runtime/lib/prelude-polyfill.js");
const transformEffectsP = import("babel-plugin-effects");

const global = self; // not window. #webworker

// evil, mutable state
let isEvaluating = false;
let nextToEvaluate = "";

async function resolveBabel() {
  while (!global.Babel) await new Promise(res => setTimeout(res, 50));
  return global.Babel;
}

export const evaluate = debounce(
  async function evaluate(src) {
    nextToEvaluate = src;
    if (isEvaluating) {
      setTimeout(() => {
        isEvaluating = false;
      }, 1000);
      return;
    }
    isEvaluating = true;
    const [babel, transformEffects, effectsRuntime] = await Promise.all([
      resolveBabel(),
      transformEffectsP,
      effectsRuntimeP
    ]);
    try {
      const transformed = babel.transform(nextToEvaluate, {
        plugins: [transformEffects]
      }).code;
      unpatchedInfo(transformed);
      new Function(transformed)(); // eslint-disable-line
    } catch (error) {
      console.error({
        message: error.message,
        meta: "see browser console fo more details"
      });
    } finally {
      isEvaluating = false;
    }
  },
  100,
  { maxWait: 2000, trailing: true }
);

self.onunhandledrejection = err => {
  err.preventDefault();
  unpatchedError(err);
  console.error(
    (err && err.reason && err.reason.message) || "mega-bummer, jim"
  );
};
self.onerror = err => {
  err.preventDefault();
  unpatchedError(err);
  console.error("bummer, jim");
};

let unpatchedLog;
let unpatchedInfo;
let unpatchedWarn;
let unpatchedError;

function monkeyPatchConsole(onNextMsg) {
  const patchKeys = ["log", "info", "warn", "error"];
  unpatchedLog = global.console.log;
  unpatchedInfo = global.console.info;
  unpatchedWarn = global.console.warn;
  unpatchedError = global.console.error;
  const withTap = (fn, fn2) => (...args) => {
    fn(...args);
    return fn2(...args);
  };
  const appendLog = (level, ...args) => {
    let msg;
    try {
      msg = args.map(arg =>
        JSON.stringify(arg || "")
          .replace(/^"/, "")
          .replace(/"$/, "")
      );
    } catch (err) {
      msg = `failed to handle console.${level} call: ${err.message}`;
    }
    onNextMsg({
      level,
      timestamp: new Date().toISOString(),
      msg
    });
  };
  global.console.log = withTap(
    (...args) => appendLog("log", ...args),
    unpatchedLog
  );
  global.console.info = withTap(
    (...args) => appendLog("info", ...args),
    unpatchedInfo
  );
  global.console.warn = withTap(
    (...args) => appendLog("warn", ...args),
    unpatchedWarn
  );
  global.console.error = withTap(
    (...args) => appendLog("error", ...args),
    unpatchedError
  );
  return function unMonkeyPatchConsole() {
    global.console.log = unpatchedLog;
    global.console.info = unpatchedInfo;
    global.console.warn = unpatchedWarn;
    global.console.error = unpatchedError;
  };
}

monkeyPatchConsole(payload => {
  self.postMessage({
    type: "log",
    payload
  });
});
