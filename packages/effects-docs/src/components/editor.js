import "./editor.css";
import { parseCurrentQuery, setQuery } from "../util/window-location.js";
import Helmet from "react-helmet";
import React from "react";

const effectsRuntimeP = import("effects-runtime/lib/prelude-polyfill.js");
const transformEffectsP = import("babel-plugin-effects");
const reactAceP = import("react-ace");

export default class Editor extends React.PureComponent {
  constructor(props) {
    super(props);
    const { fullscreen: isQueryFullscreen } = parseCurrentQuery();
    this.state = {
      isFullScreen: isQueryFullscreen || false,
      src: props.defaultSource,
      isAutoEval: true,
      logs: []
    };
  }
  async componentDidMount() {
    let virtualConsole;
    this.AceEditor = await reactAceP.then(mod => mod.default);
    await Promise.all([
      import("ace-builds/src-min-noconflict/mode-javascript.js"),
      import("ace-builds/src-min-noconflict/theme-monokai.js")
    ]);
    // the react-ace-editor obnoxiously logs on init.
    // let it render before patching logging and setting initial state
    setTimeout(() => {
      this.onChange("");
      this.unMonkeyMatch = maybeMonkeyPatchConsole(msg => {
        if (!virtualConsole)
          virtualConsole = document.getElementById("virtualConsole");
        this.state.logs.push(msg);
        if (this.state.logs.length === 51) this.state.logs.shift();
        this.setState({ logs: [...this.state.logs] }, () =>
          virtualConsole.scrollTo(0, virtualConsole.scrollHeight + 100)
        );
      });
      // blastoff
      if (this.props.defaultSource) this.onChange(this.props.defaultSource);
    }, 100);
  }
  componentWillUnmount() {
    this.unMonkeyMatch && this.unMonkeyMatch();
  }

  onChange = nextSrc => {
    this.setState({ src: nextSrc }, () => {
      if (this.state.isAutoEval) evaluate(nextSrc);
    });
  };

  toggleAutoEval = () => {
    this.setState({ isAutoEval: !this.state.isAutoEval });
  };

  toggleFullscreen = () => {
    const isFullScreen = !this.state.isFullScreen;
    const query = parseCurrentQuery();
    if (!isFullScreen) delete query.fullscreen;
    else query.fullscreen = 1;
    setQuery(query);
    this.setState({ isFullScreen });
  };
  render() {
    const { logs, isAutoEval, src, isFullScreen } = this.state;
    const AceEditor = this.AceEditor || (() => <h3>Downloading editor...</h3>);
    return (
      <div id="editor_container" className={isFullScreen ? "fullscreen" : ""}>
        <Helmet>
          {/**
           * babel (standalone) makes webpack _lose its cool_ in production mode,
           * which is too bad, because webpack should minify it.  it's so bad,
           * that we're ejecting to script loading this little bugger
           * */}
          <script
            src={
              process.env.NODE_ENV === "development"
                ? "/babel.js"
                : "/effectsjs/babel.js"
            }
          ></script>
        </Helmet>
        <div id="top_options" className="node">
          <label htmlFor="toggle_is_fullscreen_control" children="fullscreen" />
          <input
            id="toggle_is_fullscreen_control"
            type="checkbox"
            name="is_fullscreen"
            checked={isFullScreen}
            onChange={this.toggleFullscreen}
          />
          <label htmlFor="toggle_autoeval_control" children="autoeval" />
          <input
            id="toggle_autoeval_control"
            type="checkbox"
            name="autoeval"
            checked={isAutoEval}
            onChange={this.toggleAutoEval}
          />
          <div id="run_control" onClick={() => evaluate(src)}>
            Run
            <div className="arrow-right" />
          </div>
        </div>
        <AceEditor
          id="editor"
          {...(isFullScreen
            ? { width: "100%", height: "calc(85vh - 30px)" }
            : { width: "100%", height: "400px" })}
          placeholder="Type some javascript here and use effects!"
          className="node"
          mode="javascript"
          theme="monokai"
          name="editor"
          onChange={this.onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={src}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
        <div className="node" id="virtualConsole">
          {logs.map(({ level, timestamp, msg }) => (
            <pre key={timestamp}>
              [{timestamp}] {level}: {msg}
            </pre>
          ))}
        </div>
      </div>
    );
  }
}

let unpatchedLog;
let unpatchedInfo;
let unpatchedWarn;
let unpatchedError;

function maybeMonkeyPatchConsole(onNextMsg) {
  const patchKeys = ["log", "info", "warn", "error"];
  unpatchedLog = window.console.log;
  unpatchedInfo = window.console.info;
  unpatchedWarn = window.console.warn;
  unpatchedError = window.console.error;
  const withTap = (fn, fn2) => (...args) => {
    fn(...args);
    return fn2(...args);
  };
  const appendLog = (level, ...args) => {
    let msg;
    try {
      msg = args.map(arg =>
        JSON.stringify(arg)
          .replace(/^"/, "")
          .replace(/"$/, "")
      );
    } catch (err) {
      msg = `failed to handle console.${level}: ${err.message}`;
    }
    onNextMsg({
      level,
      timestamp: new Date().toISOString(),
      msg
    });
  };
  window.console.log = withTap(
    (...args) => appendLog("log", ...args),
    unpatchedLog
  );
  window.console.info = withTap(
    (...args) => appendLog("info", ...args),
    unpatchedInfo
  );
  window.console.warn = withTap(
    (...args) => appendLog("warn", ...args),
    unpatchedWarn
  );
  window.console.error = withTap(
    (...args) => appendLog("error", ...args),
    unpatchedError
  );
  return function unMonkeyPatchConsole() {
    window.console.log = unpatchedLog;
    window.console.info = unpatchedInfo;
    window.console.warn = unpatchedWarn;
    window.console.error = unpatchedError;
  };
}

let isEvaluating = false;
let nextToEvaluate = "";
const evaluate = src => {
  nextToEvaluate = src;
  if (isEvaluating) {
    return;
  }
  isEvaluating = true;
  window.requestAnimationFrame(async () => {
    const [babel, transformEffects, effectsRuntime] = await Promise.all([
      window.Babel || window.babel,
      transformEffectsP,
      effectsRuntimeP
    ]);
    try {
      const transformed = babel.transform(nextToEvaluate, {
        plugins: [transformEffects]
      }).code;
      await Promise.resolve(eval(transformed)); // eslint-disable-line
    } catch (error) {
      console.error({
        message: error.message,
        meta: "see browser console fo more details"
      });
    } finally {
      isEvaluating = false;
    }
  });
};
