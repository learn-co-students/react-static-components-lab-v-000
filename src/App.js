import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import { EinsteinQuoteComponent } from './EinsteinQuoteComponent';
import MouseComponent from './MouseComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
		// all I had to do was put <CatOmponent />
		// <EinsteinQuoteComponent />
		// and <Mouse Componant />
		// to pass the tests 
		//div className="App" was initially empty
		return (
			<div className="App">
			  <CatComponent />
			  <EinsteinQuoteComponent />
			  <MouseComponent />
			</div>
		);
	}
}

export default App;
