import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import { EinsteinQuoteComponent } from './EinsteinQuoteComponent';
import MouseComponent from './MouseComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				{/* App should include the cat component: */}
				<CatComponent />

				{/* App should include the einstein-quote component: */}
				<EinsteinQuoteComponent />

				{/* App should include the mouse component: */}
				<MouseComponent />
			</div>
		);
	}
}

export default App;
