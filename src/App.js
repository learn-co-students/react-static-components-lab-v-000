import React, { Component } from 'react';
import { GraceHopperQuoteComponent } from './GraceHopperQuoteComponent';
import MouseComponent from './MouseComponent';
import CatComponent from './CatComponent';

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
