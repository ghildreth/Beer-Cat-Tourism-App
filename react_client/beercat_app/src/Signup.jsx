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
        username: '',
        id: '',
        current_user: '',
      };
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
    console.log('Button was clicked');
    console.log('Checking password match');
    console.log('event', e)
    if (e.password === e.passwordConfirmation) {
      this.setState({username: e.userName})
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
        console.log('after-post response', response)
        if (response.status === 201) {
          console.log('logged in');
          this.setState({
            id: response.data.id,
            current_user: true})
          this.props.currentUser(this.state.current_user, this.state.id)
          }
      })
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
          <Quiz onSubmit={this.onSubmit} className="form-inline"/>
        </Modal>
      </div>
    );
  }
}