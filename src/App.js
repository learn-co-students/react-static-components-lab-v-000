import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import FordQuoteComponent from './FordQuoteComponent'
import MouseComponent from './MouseComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
      <CatComponent />
      <FordQuoteComponent />
      <MouseComponent />
      </div>
    );
  }
}

export default App;
