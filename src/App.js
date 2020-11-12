import React, { Component } from "react";
import CatComponent from "./CatComponent";
import GraceHopperQuoteComponent from "./GraceHopperQuoteComponent";
import MouseComponent from "./MouseComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatComponent />
        <GraceHopperQuoteComponent />
        <MouseComponent />
      </div>
    );
  }
}

export default App;
