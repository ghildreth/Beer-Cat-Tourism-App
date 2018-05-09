/* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Quiz  from './Quiz';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        show: false,
        modal_step: 1,
        current_user: false,
        id: '',
      };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
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

  handleNextStep = (step) => {
    this.setState({ modal_step: step});
  };


  onSubmit(e) {
    e.preventDefault();
    console.log('Button was clicked'); 
    const form = e.target;
    const password = form.password.value;
    const password_confirmation = form.password_confirmation.value;
    console.log('Checking password match');
    console.log('password', password);
    console.log('confirmation', password_confirmation)
    if (password === password_confirmation) {  
      console.log('passwords match!');
      axios.post('/api/users', {user: {
        name: form.name.value,
        email: form.email.value,
        username: form.username.value,
        password: form.password.value,
        password_confirmation: form.password_confirmation.value,
        preference_ABV: true,
        preference_SRM: true,
        preference_IBU: true,
        preference_adventurous: true,
        preference_sour: true
      }
      })
      .then(function (response) {
      console.log(response);
      // const user_status = response.config.data.user.id
      // window.location = '/tours'
      });
    } else {
      console.log("Password doesn't match");
    }
  }

  render() {
    // console.log('MODAL STEP: ', this.state.modal_step)
    if(this.state.current_user){
      return <Redirect to={`/user/${this.state.id}`}/>
    }
    return (
      <div>
        <h2>Signup for BeerCat</h2>
        <h5>Tell us a bit about you.</h5>
        <form onSubmit={this.onSubmit} className="form-stack">
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

        {/* <Quiz handleChange={this.handleChange}
              show={this.state.show}
              handleClose={this.hideModal}
              modalStep={this.state.modal_step}
              handleNextStep={this.handleNextStep}/>
        <button type="button" onClick={this.showModal}>SHOW MODAL</button> */}
        <input type="submit" value="Meow." /><br/>

        </form>
      </div>
    );
  }
}