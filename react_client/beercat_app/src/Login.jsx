/* eslint-disable */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        show: true,
        current_user: false,
        id: '',
      };
      this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    console.log('Button was clicked'); 
    console.log('username', email);
    console.log('password', password);
    console.log('logging user in');
    axios.post('/api/sessions/', {user: { email, password }})
      .then(response => {
        console.log('response data', response);
        if (response.status === 201) {
          console.log('logged in');
          this.setState({
            id: response.data.id,
            current_user: true})
          this.props.currentUser(this.state.current_user, this.state.id)
        } else {
          console.log('not a registered user, cannot log in')
        }
      });
    
  }

  render() {
    if(this.state.current_user){
      return <Redirect to={`/user/${this.state.id}`}/>
    }
    return (
      <div>
        <h2>Login to Beer Cat</h2>
        <form onSubmit={this.onSubmit} className="form-stack">
        <label>Email:</label>
        <input className="email"
          name="email"
          type="email"
          placeholder="Email"/><br/>
        <label>Password:</label>
        <input className="password"
          name="password"
          type="text"
          placeholder="Password"/><br/>
        <input type="submit" value="Login right meow." />
        </form>
      </div>
    );
  }
}




