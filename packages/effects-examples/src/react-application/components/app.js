import React, { Component } from "react";
import "@babel/polyfill";

class App extends Component {
  constructor(props) {
    super(props);

    this.performAnyEffect = this.props.boundary(
      () => perform { type: "any!", data: `look ma I'm performin!` }
    );
  }

  async componentDidMount() {
    console.log("mounted");
    const result = await this.performAnyEffect();

    console.log(result);
  }

  render() {
    return <h1>{`My React Appsicle`}</h1>;
  }
}

export default App;
