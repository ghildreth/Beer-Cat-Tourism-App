/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import About from './About';
import SingleBrewery from './SingleBrewery.jsx';
import BreweryList from './BreweryList.jsx';
import SingleBeer from './SingleBeer.jsx';
import BeerList from './BeerList.jsx';
import Over19 from './pages/Over19';
import Navigation from './Navigation';
import TourList from './TourList';
import axios from 'axios';
import Signup from './Signup';
import Login from './Login';
import SingleTour from './SingleTour';
import SingleUser from './SingleUser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      over_19: true,
      current_user: false,
      id: '',
      beers: [],
      breweries: [],
      tours: [],
      tour_breweries: [],
      user_tours:[],
      users: [],
    };
    this.currentUser = this.currentUser.bind(this);
  }

  componentDidMount() {
    axios.get('/api/breweries')
    .then(response => {
      console.log('Breweries Response', response)
      this.setState({breweries: response.data});
    })
    axios.get('/api/beers')
    .then(response => {
      console.log('Beers Response', response)
      this.setState({beers: response.data});
    })
    axios.get('/api/tours')
    .then(response => {
      console.log('Tours Response', response)
      this.setState({tours: response.data});
      console.log('tour state', this.state.tours)
    })

    axios.get('/api/tour_breweries')
    .then(response => {
      console.log('Tour Breweries Response', response)
      this.setState({tour_breweries: response.data});
    })

    axios.get('/api/user_tours')
    .then(response => {
      console.log('User Tours Response', response)
      this.setState({user_tours: response.data});
    })

    axios.get('/api/users')
    .then(response => {
      console.log('Users Response', response)
      this.setState({users: response.data});
    })

    .catch(error => console.log(error))
  }

  currentUser(id, status) {
    this.setState({
      id: id,
      current_user: status,
    });
  }

  render() {
    return (
        <div className="App">
          <div className="container">

          <Switch>
            <Route path='/over19' render={
              () => {
                return this.state.over_19 ?
                  <Redirect to='/'/> :
                  <Over19 agree={() => {
                      this.setState({over_19: true});
                    }}
                    disagree={() => {
                      window.location = 'https://www.ytv.com/';
                    }}/>
              }
            }/>

            <Route path="/" render={
              () => {
                if(!this.state.over_19){
                  return <Redirect to='/over19'/>
                }
                return <div>
                    <Navigation currentUser={this.state.current_user} userID={this.state.id}/>
                    <Switch>
                      <Route exact path="/" component={TourList} />
                      <Route path="/about" component={About} />
                      <Route path="/signup" component={() => <Signup currentUser={this.currentUser}/>}/>
                      <Route path="/login" component={() => <Login currentUser={this.currentUser}/>}/>
                      <Redirect from='/logout' to='/tours'/>
                      <Route exact path="/breweries" component={BreweryList} />
                      <Route path="/breweries/:id" component={SingleBrewery} />
                      <Route exact path="/beers" component={BeerList} />
                      <Route path="/beers/:id" component={SingleBeer} />
                      <Route exact path="/tours" component={TourList} />
                      <Route path="/tours/:id" component={SingleTour} />
                      <Route path="/user/:id" component={SingleUser}/>

                    </Switch>
                  </div>
                return <Tours/>
              }
            } />
          </Switch>
          </div>
        </div>

    );
  }
}

export default App