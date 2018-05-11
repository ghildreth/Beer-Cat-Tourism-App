/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import './CalcBeerMatch.js'

function calculateBeerMatch(beer, user) {

  let matchPercent = beer.style.length;
  if ((user.preference_ABV === true && beer.score_ABV > 5) || (user.preference_ABV === false && beer.score_ABV <= 5)) {
    matchPercent += 19.2
  }
  if ((user.preference_SRM === true && beer.score_SRM < 15) || (user.preference_SRM === false && beer.score_SRM >= 15)) {
    matchPercent += 17.5
  }
  if ((user.preference_IBU === true && beer.score_IBU > 45) || (user.preference_IBU === false && beer.score_IBU <= 45)) {
    matchPercent += 17.9
  }
  if (user.preference_adventurous === beer.score_adventurous) {
    matchPercent += 15.3
  }
  if (user.preference_sour === beer.score_sour) {
    matchPercent += 18.9
  }
  return (Math.round(matchPercent * 10) / 10);
}

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
    Promise.all([
      Promise.resolve({ data: {
        name: 'Sadie',
        email: 'sadiefreeman@gmail.com',
        preference_ABV: true,
        preference_SRM: false,
        preference_IBU: true,
        preference_adventurous: true,
        preference_sour: true,
      } }),
      axios.get(`/api/beers/`)
    ])
    .then(([{data:user}, { data }]) => {
      const beers = data.map(beer => {
        beer.userPreference = calculateBeerMatch(beer, user);
        return beer;
      })
      .sort((a, b) => b.userPreference - a.userPreference)
      this.setState({ beers })
    })
  }

  render () {
    const { brewery } = this.state
    const { beers } = this.state

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
                { beers ? (beers.filter(beer => beer.brewery_id === brewery.id)
                                .map(beer => (    
                    <div className="individual-beer" key={beer.id}>
                    <span><strong>{beer.name}</strong></span><br/>
                    <span>{beer.description}</span><br/>
                    <span>You will like this beer: {beer.userPreference}%</span><br/>
                    <span>Style: {beer.style}</span><br/>
                    <span>ABV: {beer.score_ABV}</span><br/>
                    <span>SRM: {beer.score_SRM}</span><br/>
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





