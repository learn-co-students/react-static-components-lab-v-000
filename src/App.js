import React, { Component } from 'react';
import CatComponent from './CatComponent';
import { EinsteinQuoteComponent } from './EinsteinQuoteComponent';
import MouseComponent from './MouseComponent';

class App extends Component {
	render() {
		// your code in the return statement below!
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

//Warning: React.createElement: type is invalid -- expected a string
//(for built-in components) or a class/function (for composite components)
 //but got: undefined. You likely forgot to export your component from the
  //file it's defined in, or you might have mixed up default and named imports.
