import "./editor.css";
import { EditorLoading } from "./editor-loading";
import { parseCurrentQuery, setQuery } from "../util/window-location.js";
import React from "react";
import EditorWorker from "./editor.worker.js";

const worker = typeof window === "object" && new EditorWorker();
// kick off download ASAP--on parse--well before react-mount
const reactAceP = import("react-ace");
let virtualConsole;

export default class Editor extends React.PureComponent {
  constructor(props) {
    super(props);
    const { fullscreen: isQueryFullscreen } = parseCurrentQuery();
    this.state = {
      i: 0,
      isAutoEval: true,
      isFullScreen: !!isQueryFullscreen || false,
      logs: [],
      src: props.defaultSource
    };
  }
  async componentDidMount() {
    let virtualConsole;
    this.AceEditor = await reactAceP.then(mod => mod.default);
    await Promise.all([
      import("ace-builds/src-min-noconflict/mode-javascript.js"),
      import("ace-builds/src-min-noconflict/theme-monokai.js")
    ]);
    worker.onmessage = this.handleWorkerMessage;
    this.onChange("");
    if (this.props.defaultSource) this.onChange(this.props.defaultSource);
  }

  handleWorkerMessage = ({ data: { type, payload } }) => {
    switch (type) {
      case "log": {
        if (!virtualConsole)
          virtualConsole = document.getElementById("virtualConsole");
        const key = this.state.i + 1;
        this.state.logs.push({ ...payload, key });
        if (this.state.logs.length === 51) this.state.logs.shift();
        this.setState({ logs: [...this.state.logs], i: key }, () =>
          virtualConsole.scrollTo(0, virtualConsole.scrollHeight + 100)
        );
        break;
      }
      default:
        // pass. classic eslint
        break;
    }
  };

  evaluate = src => {
    worker.evaluate(src).catch(err => {
      console.error("failed to evaluate user source code", err.message);
    });
  };
  onChange = nextSrc => {
    this.setState({ src: nextSrc }, () => {
      if (this.state.isAutoEval) worker.evaluate(nextSrc);
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
    const AceEditor = this.AceEditor || EditorLoading;
    return (
      <div id="editor_container" className={isFullScreen ? "fullscreen" : ""}>
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
          <div id="run_control" onClick={() => this.evaluate(src)}>
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
          {logs.map(({ level, timestamp, msg, key }) => (
            <pre key={key}>
              [{timestamp}] {level}: {msg}
            </pre>
          ))}
        </div>
      </div>
    );
  }
}
