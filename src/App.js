import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent.js';
import MouseCompontent from './MouseComponent.js';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseCompontent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
