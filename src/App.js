import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import {EinsteinQuoteComponent} from './EinsteinQuoteComponent.js'
// import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatComponent />
		<EinsteinQuoteComponent />
        {/* <GraceHopperQuoteComponent /> */}
        <MouseComponent />
      </div>
    );
  }
}

export default App;