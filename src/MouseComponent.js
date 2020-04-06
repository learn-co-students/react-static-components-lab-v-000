import React, { Component } from 'react';
import { EinsteinQuoteComponent } from './EinsteinQuoteComponent.js';

export default class MouseComponent extends Component {

  componentDidMount() {
    require("./hoverEffect.js")
  }
  
  render() {
    return (
      <div className="bar" id="mouse">
          <EinsteinQuoteComponent />
        <canvas id="canvas">
        </canvas>
      </div>
    )
  }
}
