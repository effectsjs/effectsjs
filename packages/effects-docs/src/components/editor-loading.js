import * as React from "react";
import Logo from "./logo";

export function EditorLoading() {
  return (
    <div id="editor_downloading_status">
      <Logo animated spin />
      <h3>Downloading editor...</h3>
    </div>
  );
}
