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
        visible: false
      };
    // this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  showModal = () => {
      this.setState({
        visible: true,
      });
    }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  }

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

      .then( (response) => {
      console.log(response);
      this.handleOk();
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
          <Quiz onSubmit={this.onSubmit} className="form-inline"/>
        </Modal>
      </div>
    );
  }
}