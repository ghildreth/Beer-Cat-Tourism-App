/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Tour from "./Tour.jsx";
import Brewery from "./Brewery.jsx";
import Beer from "./Beer.jsx";



const SiteRouter = () => (
  <Router>
    <div id="navigation">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Tours</Link>
        </li>
        <li>
          <Link to="/signup">Sign-up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/beer" component={Beer} />
      <Route path="/tour" component={Tour} />
      <Route path="/brewery" component={Brewery} />
    </div>
  </Router>
);


export default SiteRouter;