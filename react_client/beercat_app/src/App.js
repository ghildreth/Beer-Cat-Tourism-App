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
        const beerList = this.state.beers.concat(beers)
        this.setState({beers: beerList});
      })

    fetch('/api/tours')
      .then(response => response.json())
      .then((tours) => {
        const tourList = this.state.tours.concat(tours)
        this.setState({tours: tourList});
    })

    fetch('/api/tour_breweries')
      .then(response => response.json())
      .then((tour_breweries) => {
        const tourBreweryList = this.state.tour_breweries.concat(tour_breweries)
        this.setState({tour_breweries: tourBreweryList});
    })

    fetch('/api/user_tours')
    .then(response => response.json())
    .then((user_tours) => {
      const userTourList = this.state.user_tours.concat(user_tours)
      this.setState({user_tours: userTourList});
    })

    fetch('/api/users')
    .then(response => response.json())
    .then((users) => {
      const userList = this.state.users.concat(users)
      this.setState({users: userList});
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