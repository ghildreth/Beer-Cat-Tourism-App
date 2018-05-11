/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import './App.css';
import About from './About';
import SingleBrewery from './SingleBrewery.jsx';
import BreweryList from './BreweryList.jsx';
import SingleBeer from './SingleBeer.jsx';
import BeerList from './BeerList.jsx';
import Navigation from './Navigation';
import TourList from './TourList';
import Signup from './Signup';
import Login from './Login';
import SingleTour from './SingleTour';
import SingleUser from './SingleUser';
import Under19 from './Sorry';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      over19: localStorage.getItem('over19'),
      current_user: localStorage.getItem('current_user'),
      id: '',
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

  currentUser = (status, id) => {
    this.setState({id: id, current_user: status,});
    localStorage.setItem('current_user', true);
    this.setState({current_user: true});
  }

  // onLogin = async (email, password) => {
  //   await logIn(email, password);
  //   localStorage.setItem('current_user', true);
  //   this.setState({current_user: true});
  // }

  logout = () => {
    localStorage.removeItem('current_user');
    this.setState({current_user: false});
  }

  confirmedUserOver19 = () => {
    localStorage.setItem('over19', true);
    this.setState({over19: true});
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Switch>
            <Route path='/over19' render={() => {
                return (
                  <div>
                    <img className="over19" src={process.env.PUBLIC_URL + '/assets_logo/BeerCatMain.png'} alt="avatar"/>
                    <h1>Are you over the legal drinking age where you reside?</h1>
                    <button type="button" class="btn btn-secondary"><Link to='/yes'>Cat.</Link></button>
                    <button type="button" class="btn btn-light"><Link to='/sorry'>Kitten.</Link></button>
                  </div>
                )
            }}/>
            <Route path='/yes' render={() => {
              this.confirmedUserOver19();
              return <Redirect to='/'/>
            }}/>
            <Route path="/sorry" component={Under19}/>
            <Route path="/" render={() => {
              if(!this.state.over19){
                return <Redirect to='/over19'/>
              }
              return (
                <div>
                  <div className="banner"></div>
                  <Navigation currentUser={this.state.current_user} userID={this.state.id}/>
                  <Switch>
                    <Route exact path="/" component={TourList} />
                    <Route path="/about" component={About} />
                    <Route path="/signup" component={() => <Signup currentUser={this.currentUser}/>}/>
                    <Route path="/login" render={({history}) => {
                      return <Login currentUser={this.currentUser} history={history}/>
                    }}/>
                    <Route path='/logout' render={() => {
                      this.logout();
                      return <Redirect to='/'/>
                    }}/>
                    <Route exact path="/breweries" component={BreweryList} />
                    <Route path="/breweries/:id" component={SingleBrewery} />
                    <Route exact path="/beers" component={BeerList} />
                    <Route path="/beers/:id" component={SingleBeer} />
                    <Route exact path="/tours" component={TourList} />
                    <Route path="/tours/:id" component={SingleTour} />
                    <Route path="/users/:id" component={SingleUser}/>
                  </Switch>
                </div>
              )
            }} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App