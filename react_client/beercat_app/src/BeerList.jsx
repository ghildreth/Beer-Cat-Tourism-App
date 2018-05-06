/* eslint-disable */
import React, { Component } from 'react';
// import Beer from './Beer.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BeerList extends Component {
  state = {
    beers: null
  }

  componentDidMount() {
    axios.get('/api/beers/')
      .then(response => {
        this.setState ({ beers: response.data })
   })
  }

  render() {
    const { beers } = this.state
    return (
      <div>
        <ul>
      { beers ? (beers.map(beer => (
        <li key={beer.id}>
         <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
        </li>
      ))
    ) : (
      <div>Loading...</div>
    )}
    </ul>
    </div>
    )
  }
}

export default BeerList
