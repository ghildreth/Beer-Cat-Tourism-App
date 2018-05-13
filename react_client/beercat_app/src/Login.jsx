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

  handleCancel = () => {
    this.setState({ visible: false });
    window.location.replace('/');
  }

  onSubmit(e) {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    axios.post('/api/sessions/', {user: { email, password }})
      .then(response => {
        if (response.status === 201) {
          console.log('response', response)
          this.setState({
            id: response.data.id,
            current_user: true})
          this.props.currentUser(this.state.current_user, this.state.id)    
          console.log('id', this.state.id)
        } else {
          console.log('not a registered user, cannot log in')
        }
      })
      .catch(function (error) {
        console.error(error)
      });
    }

  render() {
    const { visible, loading } = this.state;
    if(this.state.current_user){
      return <Redirect to={`/users/${this.state.id}`}/>
    }
    return (
      <div>
        <Modal  visible={visible} 
                title="Purrrease login..." 
                onCancel={this.handleCancel} 
                footer={null}>
          <form onSubmit={this.onSubmit} className="form-stack">
          <input className="form-control form-control-lg"
            name="email"
            type="email"
            onChange={this.handleChange}
            placeholder="Email"
          /><br/>
          <input className="form-control form-control-lg"
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="Password"/><br/>
          <input type="submit" className="btn submit-button" value="Login right meow." />
          </form>
          <br/>
          <p><strong>Don't have a login? <Link to="/signup">Sign up, meow!</Link></strong></p>
        </Modal>
      </div>
    );
  }
}




