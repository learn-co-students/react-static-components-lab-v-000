import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js';
import MouseComponent from './MouseComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				{/* one more component missing */}
				<MouseComponent />
			</div>
		);
	}
}

export default App;
