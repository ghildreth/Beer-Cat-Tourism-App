/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SingleBrewery extends Component {

  state = {
    brewery: null,
    beers: null,
    open: false
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
            <h1>{brewery.name}</h1>
            <div className="brewery-tombstone">
              <span key={brewery.id}>
                <h4>City: {brewery.city}</h4>
                <h4>Address: {brewery.address}</h4>
                <h4>Description: {brewery.description}</h4>
                <a href="/tours">Back</a>
              </span>
            </div>   
            <div className="beer-list">
              <h4>What's on Tap?</h4>
              <span>
                { beers ? (beers.filter(beer => beer.brewery_id === brewery.id).map(beer => (
                    
                    <div className="individual-beer" key={beer.id}>
                    <span><strong>{beer.name}</strong></span><br/>
                    <span>{beer.description}</span><br/>
                    <span>Style: {beer.style}</span><br/>
                    <span>ABV: {beer.score_ABV}</span><br/>
                    <span>SRM: {beer.score_IBU}</span><br/>
                    <span>IBU: {beer.score_IBU}</span><br/>
                    </div>
                                ))
                           ) : (
                <div>Loading...</div>
              )}
              </span>
             </div>
             
          </div>
      )
    }
  }
}
export default SingleBrewery





