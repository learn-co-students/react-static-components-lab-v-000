import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import MouseComponent from './MouseComponent'
import FordQuoteComponent from './FordQuoteComponent'

class App extends Component {
  render() {
    // your code in the return statement below!
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
