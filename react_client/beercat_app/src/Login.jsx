/* eslint-disable */
import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'antd';
import 'antd/lib/modal/style/css';

export default class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        show: true,
        current_user: false,
        id: '',
        username: '',
        email: '',
        password: '',
        loading: false,
        visible: true
      };
      this.onSubmit = this.onSubmit.bind(this);
  }

  showModal = () => {
      this.setState({
        visible: true,
      });
    }

  onSubmit(e) {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    axios.post('/api/sessions/', {user: { email, password }})
      .then(response => {
        if (response.status === 201) {
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
    const { visible, loading } = this.state;
    if(this.state.current_user){
      return <Redirect to={`/user/${this.state.id}`}/>
    }
    return (
      <div>
        <Modal  visible={visible} title="Login">
          <h2>Login to Beer Cat</h2>
          <form onSubmit={this.onSubmit} className="form-stack">
          <label>Email:</label>
          <input className="email"
            name="email"
            type="email"
            onChange={this.handleChange}
            placeholder="Email"
          /><br/>
          <label>Password:</label>
          <input className="password"
            name="password"
            type="text"
            onChange={this.handleChange}
            placeholder="Password"/><br/>
          <input type="submit" className="btn btn-primary" value="Login right meow." />
          </form>
          <h6>Don't have a login? <Link to="/signup">Sign up, meow!</Link></h6>
        </Modal>
      </div>
    );
  }
}




