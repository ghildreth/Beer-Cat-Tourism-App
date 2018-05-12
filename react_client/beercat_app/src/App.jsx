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
import Over19 from './Over19';
import { getUser, logIn } from './data-svc';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      over19: localStorage.getItem('over19'),
      current_user: false,
      id: '',
      beers: [],
      breweries: [],
      tours: [],
      tour_breweries: [],
      user_tours:[],
      users: [],
    };

  }

  loadUser = async () => {
    let me = await getUser();
    if (me) {
      this.setState({
        id: me.id,
        current_user: true, me
      });
    }
  }

  componentDidMount() {
    this.loadUser();
  }

  currentUser = (status, id) => {
    this.setState({id: id, current_user: status,});
  }

  // onLogin = async (email, password) => {
  //   await logIn(email, password);
  //   // localStorage.setItem('current_user', true);
  //   this.loadUser();
  // }

  logout = () => {
    this.setState({current_user: false});
    axios.delete('/api/sessions')
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
                    <Over19/>
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
                    <Route path="/signup" render={() => <Signup currentUser={this.currentUser}/>}/>
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