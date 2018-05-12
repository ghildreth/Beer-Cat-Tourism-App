/* eslint-disable */
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
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
        username: '',
        id: '',
        current_user: '',
        modal_step: 1
      };
    this.onSubmit = this.onSubmit.bind(this);
  }

  showModal = () => {
      this.setState({
        visible: true,
      });
    }

  handleOk = (e) => {
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
        console.log('after-post response', response)
        if (response.status === 201) {
          console.log('logged in');
          this.setState({
            id: response.data.id,
            current_user: true})
          // this.props.currentUser(this.state.current_user, this.state.id)
        }
      });
    } else {
      console.log("Password doesn't match");
    }
  }

  render() {
    if(this.state.current_user){
      return <Redirect to={`/user/${this.state.id}`}/>
    }
    const { visible, loading } = this.state;
    return (
      <div>
        <Modal  visible={visible}
                title="Tell us more about you...">
          <Quiz onSubmit={this.onSubmit} className="form-inline" modalStep={ this.state.modal_step } handleNextQuestion={ this.handleNextQuestion } />
        </Modal>
      </div>
    );
  }
}
