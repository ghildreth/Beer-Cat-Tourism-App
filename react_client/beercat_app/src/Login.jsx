/* eslint-disable */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SingleUser from './SingleUser';
import axios from 'axios';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style/css';

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
        loading: false,
        visible: true
      };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
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
    e.preventDefault();
    const form = e.target
    const password = form.password.value;
    const username = form.username.value;
    console.log('Button was clicked');
    console.log('username', username);
    console.log('password', password);
    console.log('logging user in');
    axios.post(`/api/users_login/${username}/${password}`)
      .then(response => {
        console.log('response data', response);
        if (response.status === 200) {
          console.log('logged in');
          axios.get(`/api/users_by_username/${username}`)
            .then(response => {
              console.log('response data', response.data);
              this.handleOk();
              this.setState({
                id: response.data.id,
                current_user: true});
            })
          // this.setState({
          //   current_user: true,
          //   over_19: true,
          //   id: response.data.id,
          //   username: response.data.username,
          //   email: response.data.email,
          // })
          // this.props.currentUser(this.state.id, this.state.current_user);
        } else {
          console.log('not a registered user, cannot log in')
        }
      });

  }

  render() {
    const { visible, loading } = this.state;
    if(this.state.current_user){
      return <Redirect to={`/user/${this.state.id}`}/>
    }
    return (
      <div>
        <Modal  visible={visible} title="Tell me more about you...">
          <h2>Login to Beer Cat</h2>
          <form onSubmit={this.onSubmit} className="form-stack">
          <label>Username:</label>
          <input className="username"
            name="username"
            type="text"
            onChange={this.handleChange}
            placeholder="Username"
          /><br/>
          <label>Password:</label>
          <input className="password"
            name="password"
            type="text"
            onChange={this.handleChange}
            placeholder="Password"/><br/>
          <input type="submit" value="Login right meow." />
          </form>
        </Modal>
      </div>
    );
  }
}




