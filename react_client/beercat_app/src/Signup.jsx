 /* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Quiz  from './Quiz'
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        current_user: false,
        over_19: true,
        name: '',
        username: '',
        email: '',
        password_confirmation: '',
        pizza: '',
        preference_ABV: true,
        preference_SRM: true,
        preference_IBU: true,
        preference_adventurous: true,
        preference_sour: true
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
    console.log('Checking password match');
    console.log('password', this.state.password);
    console.log('confirmation', this.state.password_confirmation)
    console.log('name', this.state.name)
    if (this.state.password === this.state.password_confirmation) {
      axios.post('/api/users', {
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password_hash: this.state.password,
        preference_ABV: this.state.preference_ABV,
        preference_SRM: this.state.preference_SRM,
        preference_IBU: this.state.preference_IBU,
        preference_adventurous: this.state.preference_adventurous,
        preference_sour: this.state.preference_sour
      })
      .then(function (response) {
      console.log(response);
      window.location = '/tours'
      });
    } else {
      console.log("Password doesn't match");
    }
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
          name="password"
          type="text"
          onChange={this.handleChange}
          placeholder="Password"/><br/>
        <label>Password Confirmation:</label>
        <input className="password_confirmation"
          name="password_confirmation"
          type="text"
          placeholder="password_confirmation"
          onChange={this.handleChange}/><br/>

        <Quiz handleChange={this.handleChange}/>

        <input type="submit" value="Meow." /><br/>
        </form>
      </div>
    );
  }
}
