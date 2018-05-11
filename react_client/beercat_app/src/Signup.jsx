/* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Quiz  from './Quiz';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style/css';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {

        loading: false,
        visible: true,
        modal_step: 1
      };
    // this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.handleNextQuestion = this.handleNextQuestion(this);
  }

  showModal = () => {
      this.setState({
        visible: true,
      });
    }

  handleOk = (e) => {
    // e.preventDefault();
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  }

  handleNextQuestion = (question) => {
    this.setState({ modal_step: question })
  }

  onSubmit(e) {
    e.preventDefault();
    const form = e.target.elements
    console.log('Button was clicked');
    console.log('Checking password match');
    console.log('ABV', typeof form.preference_ABV.value);
    console.log('SRM', typeof form.preference_SRM.value);

    if (form.password.value === form.passwordConfirmation.value) {
      console.log("pws matched, fire ze missiles")
      console.log('ABV VALUE', form.preference_ABV.value)
      axios.post('/api/users', {
        user: {
          name: form.name.value,
          email: form.email.value,
          username: form.userName.value,
          password: form.password.value,
          password_confirmation: form.passwordConfirmation.value,
          preference_ABV: form.preference_ABV.value === 'true',
          preference_SRM: form.preference_SRM.value === 'true',
          preference_IBU: form.preference_IBU.value === 'true',
          preference_adventurous: form.preference_adventurous.value === 'true',
          preference_sour: form.preference_sour.value === 'true',
        }
      })
      .then( (response) => {
        console.log(response);
        this.handleOk(e);
        // window.location = '/tours'
      });
    } else {
      console.log("Password doesn't match");
    }
  }

  render() {
    const { visible, loading } = this.state;
    console.log('MODAL STEP: ', this.state.modal_step)
    return (
      <div>
        <h2>Signup for BeerCat</h2>
        <h5>Tell us a bit about you.</h5>
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal  visible={visible}
                title="Tell me more about you...">
          <Quiz onSubmit={this.onSubmit} className="form-inline" modalStep={ this.state.modal_step } handleNextQuestion={ this.handleNextQuestion } />
        </Modal>
      </div>
    );
  }
}