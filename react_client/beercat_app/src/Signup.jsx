/* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
    super(props);
      this.state = {
        over_19: true,
        name: '',
        username: '',
        email: '',
        password_hash: '',
        preference_ABV: true,
        preference_SRM: true,
        perference_IBU: true,
        perference_adventurous: true,
        prefereence_sour: true
      };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Button was clicked');    
    axios.post('/api/users', {
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password_hash: this.state.password_hash,
      preference_ABV: this.state.preference_ABV,
      preference_SRM: this.state.preference_SRM,
      perference_IBU: this.state.perference_IBU,
      perference_adventurous: this.state.perference_adventurous,
      prefereence_sour: this.state.preference_sour
    })
    .then(function (response) {
    console.log(response);
    window.location = '/tours'
    })
    .catch(error => console.log(error))
  }

  render() {

    return (
      <div>
        <h2>Signup for BeerCat</h2>
        <h5>Tell us a bit about you.</h5>
        <form onSubmit={this.onSubmit} className="form-inline">
        <label>Full Name:</label>
        <input className="name"
          name="name"
          type="text"
          onChange={this.handleChange}
          placeholder="Name"/><br/>
        <label>Email:</label>
        <input className="email"
          name="email"
          type="text"
          onChange={this.handleChange}
          placeholder="Email"/><br/>
        <label>Username:</label>
        <input className="username"
          name="username"
          type="text"
          onChange={this.handleChange}
          placeholder="Username"/><br/>
        <label>Password:</label>
        <input className="password"
          name="password_hash"
          type="text"
          onChange={this.handleChange}
          placeholder="Password"/><br/>
        <label>Password Confirmation:</label>
        <input className="password"
          name="password confirmation"
          type="text"
          placeholder="Password Confirmation"/><br/>
        <input type="submit" value="Meow." />
        </form>
      </div>
    );
  }
}
