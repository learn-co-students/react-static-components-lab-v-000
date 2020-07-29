import React, { Component } from 'react';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

class CatComponent extends Component {
	render() {
		return(
			<div className="CatComponent">
			</div>
		);
	}
}

class GraceHopperQuoteComponent extends Component {
	render(){
		return(
			<div className="GraceHopperComponent">

			</div>
		);
	}
}

class MouseComponent extends Component {
	render(){
		return(
			<div className="MouseComponent"></div>
		);
	}
}

export default App;
