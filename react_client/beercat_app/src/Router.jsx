/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = () => (
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
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Signup = () => (
  <div>
    <h2>Sign-up</h2>
  </div>
);

const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
);

export default Navigation;