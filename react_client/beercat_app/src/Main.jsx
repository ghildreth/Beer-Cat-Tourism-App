/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import About from './About.jsx';
import Brewery from './Brewery.jsx';
import Beer from './Beer.jsx';
import Tour from './Tour.jsx';
import Over19 from './pages/Over19';
import Navigation from './Navigation';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import axios from 'axios';
import './App.css';


class Main extends Component {


  render() {
    return (
        <div className="App">
          <div className="container">
          
          <Navigation/>

          <hr />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/* <Route path="/beer" component={Beer} />
            <Route path="/tour" component={Tour} />
            <Route path="/brewery(/:id)" component={Brewery} />
            <Route path="/user/:id" component={User}/> */}
          </Switch>
          </div>
        </div>
    );
  }
}

export default Main