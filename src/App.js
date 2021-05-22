import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent.js'
import MouseCompnent from './MouseComponent.js'



class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseCompnent />
			</div>
		);
	}
}

export default App;
