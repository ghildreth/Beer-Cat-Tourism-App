/* eslint-disable */
import React, { Component } from 'react';
import { Map } from './Map';
import Navigation from './Router.jsx';
import './App.css';

class App extends Component {
  componentDidMount(){
    fetch('/api/breweries')
      .then(response => response.json())
      .then((breweries) => {
        console.log('breweries', breweries)
      })
  }
  render() {
    return (
      <Navigation />
    );
  }
}

export default App
