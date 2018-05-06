/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Brewery from './Brewery.jsx';
import Beer from './Beer.jsx';
import Tour from './Tour.jsx';
import Over19 from './pages/Over19';
import Home from './Home';
import axios from 'axios';
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

  render() {
    return (
        <div className="App">
          <div className="container">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Tours</Link></li>
            <li><Link to="/signup">Sign-up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" render={
              () => {
                if(!this.state.over_19){
                  return <Redirect to='/over19'/>
                }
                return <Home/>
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
            {/* <Route path="/about" component={About} /> */}
            {/* <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/beer" component={Beer} />
            <Route path="/tour" component={Tour} />
            <Route path="/brewery(/:id)" component={Brewery} />
            <Route path="/user/:id" component={User}/> */}
          </Switch>
          </div>
        </div>
    );

    const Brewery = ({ match }) => {
      return <h1>Hello {match.params.id}!</h1>
    };
  }
}

export default App