/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SingleBrewery extends Component {

  state = {
    brewery: null,
    beers: null
  }

  componentDidMount() {
    const { match: {params} } = this.props;
    axios.get(`/api/breweries/${params.id}`)
    .then(({ data: brewery }) => {
      this.setState({ brewery: brewery })
    })
    axios.get(`/api/beers/`)
    .then(({ data: beers }) => {
      this.setState({ beers: beers })
    })
  }

  render () {
    const { brewery } = this.state
    const { beers } = this.state



    console.log('BEER', { beers })
    if (brewery === null) {
        return <div>Loading ... </div>;
      } else {
        return (
          <div>
             <span key={brewery.id}>
               <h1>{brewery.name}</h1>
               <h4>City: {brewery.city}</h4>
               <h4>Address: {brewery.address}</h4>
               <h4>Description: {brewery.description}</h4>
               <ul>
                { beers ? (beers.filter(beer => beer.brewery_id === brewery.id).map(beer => (
                                <li key={beer.id}>
                                <h2>{beer.name}</h2>
                                <h4>{beer.description}</h4>
                                <h4>Style: {beer.style}</h4>
                                <h4>ABV: {beer.score_ABV}</h4>
                                <h4>SRM: {beer.score_SRM}</h4>
                                <h4>IBU: {beer.score_IBU}</h4>
                                </li>
                                ))
                           ) : (
                <div>Loading...</div>
              )}
              </ul>
             </span>
             <a href="/breweries">Back</a>
          </div>
      )
    }
  }
}
export default SingleBrewery





