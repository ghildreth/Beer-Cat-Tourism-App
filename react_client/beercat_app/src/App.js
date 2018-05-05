/* eslint-disable */
import React, { Component } from 'react';
import { Map } from './Map';
import Navigation from './Router.jsx';
import Brewery from './Brewery';
import Beer from './Beer';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      breweries: [],
      tours: [],
      tour_breweries: [],
      user_tours:[],
      users: []
    };
  }

  componentDidMount(){

    fetch('/api/breweries')
      .then(response => response.json())
      .then((breweries) => {
        console.log('breweries', breweries);
        const breweryList = this.state.breweries.concat(breweries)
        this.setState({breweries: breweryList});
      })

    fetch('/api/beers')
      .then(response => response.json())
      .then((beers) => {
        const beersList = this.state.beers.concat(beers)
        this.setState({beers: beersList});
      })

    fetch('/api/tours')
      .then(response => response.json())
      .then((tours) => {
        const tourList = this.state.tours.concat(tours)
        this.setState({tours: tourList})
    })

    fetch('/api/tour_breweries')
      .then(response => response.json())
      .then((tour_breweries) => {
        console.log('tour_breweries', tour_breweries);
    })

    fetch('/api/user_tours')
    .then(response => response.json())
    .then((user_tours) => {
      console.log('user_tours', user_tours);
    })

    fetch('/api/users')
    .then(response => response.json())
    .then((users) => {
      console.log('users', users);
    })
  }
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default App