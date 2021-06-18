import React, { Component } from 'react';
import CatComponent from './CatComponent.js';

import MouseComponent from './MouseComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				
				<MouseComponent />
			</div>
		);
	}
}

export default App;
