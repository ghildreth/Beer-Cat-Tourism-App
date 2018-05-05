/* eslint-disable */
import React, { Component } from 'react'
import { Map } from './components/Map'
import Brewery from './Brewery'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <Brewery/>
      </div>
    );
  }
}

export default App
