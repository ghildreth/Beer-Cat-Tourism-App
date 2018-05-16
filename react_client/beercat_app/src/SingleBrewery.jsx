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
  constructor(props){
    super(props);
    this.state = {
      brewery: null,
      beers: null,
      open: false
    }
    this.goBack = this.goBack.bind(this);
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

  goBack(){
    this.props.history.goBack();
  }

  render () {
    const { brewery } = this.state
    const { beers } = this.state

    if (brewery === null) {
      return <div>Loading ... </div>;
    } else {
      return (
        <div>
          <div className="brewery-banner">
            <h6 className="page-small-title">Brewery</h6>
            <h1 className="page-title">{brewery.name}</h1>
          </div>
            <div className="brewery-content">
              <span className="brewery-details" key={brewery.id}>
                <p className="brewery-description"><strong>{brewery.description}</strong></p>
                <br/>
                <p><strong>Address:</strong><br/> {brewery.address}, {brewery.city}</p>
                <p className="brewery-hours"><strong>Hours: </strong><br/>
                  Sunday: 12-11pm<br/>
                  Monday: Closed <br/>
                  Tuesday: 2-11pm <br/>
                  Wednesday: 2-11pm <br/>
                  Thursday: 2-11pm <br/>
                  Friday: 2-11pm <br/>
                  Saturday: 12-11pm <br/>
                </p>
                <button type="button" className="btn back-button" onClick={this.goBack}><span className="back-link">Back</span></button>
              </span>
            <div className="beer-list">
              <h3 className="beer-list-header">What's on Tap?</h3>
              <span>
                <Slider autoplay="3000" className="slider beer-slider">
                  {beers.filter(beer => beer.brewery_id === brewery.id).map(beer => (
                    <div className="individual-beer" key={beer.id}>
                      <span className="beer-name">{beer.name}</span>
                      <br/>
                      <span><strong>Style:</strong> {beer.style}</span><br/>
                      <span><strong>ABV:</strong> {beer.score_ABV}</span><br/>
                      <span><strong>SRM:</strong> {beer.score_SRM}</span><br/>
                      <span><strong>IBU:</strong> {beer.score_IBU}</span><br/>
                      <br/>
                      {beer.userPreference ? (
                        <span><strong>Purrfect Beer Match:</strong><br/>
                        <h1 className="beer-match">{beer.userPreference}%</h1></span>
                      ) : (
                        <span><strong>Is this your purrfect Beer Match?</strong><br/><em>Sign up to find out!</em></span>
                      )
                       }<br/>
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




