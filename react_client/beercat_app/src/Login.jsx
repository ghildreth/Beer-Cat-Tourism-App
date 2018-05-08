/* eslint-disable */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SingleUser from './SingleUser';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        show: false,
        current_user: false,
        over_19: true,
        id: '',
        username: '',
        email: '',
        password: '',
      };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  onSubmit(e) {
    e.preventDefault();
    console.log('Button was clicked'); 
    console.log('username', this.state.username);
    console.log('password', this.state.password);
    console.log('logging user in');
    axios.get(`/api/users_by_username/${this.state.username}`)
      .then(response => {
        console.log('response data', response.data);
        if (response.data.username === this.state.username && response.data.password_hash === this.state.password) {
          console.log('logged in');
          window.location = `/user/${response.data.id}`
        } else {
          console.log('not a registered user, cannot log in')
        }
      });
  }

  render() {

    return (
      <div>
        <h2>Login to Beer Cat</h2>
        <form onSubmit={this.onSubmit} className="form-inline">
        <label>Username:</label>
        <input className="username"
          name="username"
          type="text"
          onChange={this.handleChange}
          placeholder="Username"/><br/>
        <label>Password:</label>
        <input className="password"
          name="password"
          type="text"
          onChange={this.handleChange}
          placeholder="Password"/><br/>
        <input type="submit" value="Login right meow." />
        </form>
      </div>
    );
  }
}




