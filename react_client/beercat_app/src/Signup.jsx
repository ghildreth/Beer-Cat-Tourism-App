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
        password: '',
        password_confirmation: '',
        preference_ABV: true,
        preference_SRM: true,
        preference_IBU: true,
        preference_adventurous: true,
        preference_sour: true,
        show: false,
        modal_step: 1
      };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  // handleNextStep = (step) => {
  //   this.setState({ modal_step: step});

  // };


  onSubmit(e) {

    console.log('THIS IS EEEEE: ', e);
    console.log('Button was clicked');
    console.log('Checking password match');
    if (e.password === e.passwordConfirmation) {
      axios.post('/api/users', {user: {
        name: e.name,
        email: e.email,
        username: e.userName,
        password: e.password,
        password_confirmation: e.passwordConfirmation,
        preference_ABV: e.preference_ABV,
        preference_SRM: e.preference_SRM,
        preference_IBU: e.preference_IBU,
        preference_adventurous: e.preference_adventurous,
        preference_sour: e.preference_sour
      }
      })

      .then(function (response) {
      console.log(response);
      // window.location = '/tours'
      });
    } else {
      console.log("Password doesn't match");
    }
  }

  render() {
    console.log('MODAL STEP: ', this.state.modal_step)
    return (
      <div>
        <h2>Signup for BeerCat</h2>
        <h5>Tell us a bit about you.</h5>
        <button type="button" onClick={this.showModal}>Get Started</button>
        {/*<form onSubmit={this.onSubmit} className="form-inline">*/}
        <Quiz onSubmit={this.onSubmit} handleChange={this.handleChange} className="form-inline"/>

        {/*</form>*/}
      </div>
    );
  }
}