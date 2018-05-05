/* eslint-disable */
import React, { Component } from 'react';
import Map from "./Map.jsx";

export default class Tour extends Component {
  render() {
    console.log('Rendering <Tour />');

    return (
      <div>
        <h2>Individual Tour Page</h2>
        <h5>Description, map w/ breweries, 'pounce' button</h5>
        <Map/>
      </div>
    );
  }
}