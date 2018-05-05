/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';

export default class Beer extends Component {
  render() {
    console.log('Rendering <Beer />');

    return (
      <div>
        <h2>Beer</h2>
        <h5>Description:</h5>
        <h5>Style/Type:</h5>
        <h5>ABV:</h5>
        <h5>SRM:</h5>
        <h5>IBU:</h5>
      </div>
    );
  }
}
