/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import About from './About';
// import SingleBrewery from './SingleBrewery.jsx';
// import BreweryList from './BreweryList.jsx';
import Beer from './Beer.jsx';
// import BeerList from './BeerList.jsx';
// import SingleTour from './SingleTour.jsx';
import Over19 from './pages/Over19';
import Navigation from './Navigation';
import TourList from './TourList';
import axios from 'axios';
import Signup from './Signup';
import Login from './Login';
import SingleTour from './SingleTour'
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      over_19: false,
      beers: [],
      breweries: [],
      tours: [],
      tour_breweries: [],
      user_tours:[],
      users: [],
    };
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
    // axios.get('/api/tours')
    // .then(response => {
    //   console.log('Tours Response', response)
    //   this.setState({tours: response.data});
    //   console.log('tour state', this.state.tours)
    // })
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
    axios.post('/api/user*s', {
                              name: 'Fred',
                              email: 'fred@fred.fred',
                              username: 'yabbadabbaDO',
                              password_hash: 'asdf',
                              preference_ABV: 5,
                              preference_SRM: 5,
                              perference_IBU: 55,
                              perference_adventurous: true,
                              prefereence_sour: false

    })
    .then(function (response) {
      console.log(response);
    })

    .catch(error => console.log(error))
  }

  render() {
    return (
        <div className="App">
          <div className="container">

          <Navigation/>
          <hr />
          <Switch>
            <Route exact path="/" render={
              () => {
                if(!this.state.over_19){
                  return <Redirect to='/over19'/>
                }
                return <TourList/>
              }
            } />
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
            <Route path="/about" component={About} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route exact path="/tours" component={TourList} />
            <Route path="/tours/:id" component={SingleTour} />

            {/* <Route path="/beers" component={BeerList} />
            <Route path="/beers/:id" component={Beer} />
            <Route path="/tours" component={Tours} />
            <Route path="/tours/:id" component={SingleTour} />
            <Route path="/breweries/:id" component={SingleBrewery} />
            <Route path="/breweries" component={BreweryList} /> */}

            {/* <Route path="/user/:id" component={User}/> */}
          </Switch>
          </div>
        </div>
    );
  }
}

export default App