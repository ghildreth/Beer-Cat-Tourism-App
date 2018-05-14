/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, BrowserHistory } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
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
    function getBrewery(id){
      return axios.get(`/api/breweries/${id}`)
        .then(({data}) => data);
    }
    function getBeersByBreweryId(id){
      return axios.get('/api/beers') // '/api/breweries/{id}/beers'
        .then((response) => response.data);
    }
    function getMe(){
      return axios.get('/api/users/me')
        .then((response) => response.data)
        .catch(() => null)
    }
    const { match: {params} } = this.props;

    Promise.all([
      getMe(),
      getBrewery(this.props.match.params.id),
      getBeersByBreweryId(this.props.match.params.id)
    ])
    .then(([user, brewery, breweryBeers]) => {
      let beers = breweryBeers;
      if(user){
         beers = breweryBeers.map(beer => {
          beer.userPreference = calculateBeerMatch(beer, user);
          return beer;
        })
        .sort((a, b) => b.userPreference - a.userPreference)
      }
      this.setState({ beers, brewery })
    })
  }

  render () {
    const { brewery } = this.state
    const { beers } = this.state

    if (brewery === null) {
      return <div>Loading ... </div>;
    } else {
      return (
        <div className="brewery-content">
            <h1 className="brewery-name">{brewery.name}</h1>
            <div className="brewery-tombstone">
              <div className="breweries-description">
              <span key={brewery.id}>
                <p><strong>City: </strong>{brewery.city}</p>
                <p><strong>Address: </strong>{brewery.address}</p>
                <p><strong>Description: </strong>{brewery.description}</p>
                <strong>Hours: </strong>
                <ul className="brewery-hours">
                  <li>Sunday:       12-11pm </li>
                  <li>Monday:       Closed </li>
                  <li>Tuesday:       2-11pm </li>
                  <li>Wednesday:       2-11pm </li>
                  <li>Thursday:       2-11pm </li>
                  <li>Friday:       2-11pm </li>
                  <li>Saturday:      12-11pm </li>
                </ul>
                <button type="button" className="btn back-button"><Link className="back-link" to='/tours'>Back</Link></button>
              </span>
            </div>

            <div className="beer-list">
              <h4 className="beer-list-header">What's on Tap?</h4>
              <span>
                {/*<Slider autoplay="2000" >*/}
                <Slider className="slider beer-slider">
                  {beers.filter(beer => beer.brewery_id === brewery.id).map(beer => (
                    <div className="individual-beer" key={beer.id}>
                      <strong>{beer.name}</strong><br/>
                      {beer.userPreference ? (
                        <em><span>Beer Match: {beer.userPreference}%</span></em>
                      ) : (
                        <em><span>Beer Match: Sign up to find out!</span></em>
                      )
                       }<br/>
                      
                      <span>Style: {beer.style}</span><br/>
                      <span>ABV: {beer.score_ABV}</span><br/>
                      <span>SRM: {beer.score_SRM}</span><br/>
                      <span>IBU: {beer.score_IBU}</span><br/>
                    </div>
                  ))}
                </Slider>
              </span>
             </div>
          </div>
        </div>
      )
    }
  }
}
export default SingleBrewery




