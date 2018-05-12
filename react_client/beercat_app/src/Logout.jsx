import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: true,
    };

  }

  logout = () => {
    this.setState({current_user: false});
    axios.delete('/api/sessions')
  }

  render() {
    if(this.state.current_user){
      this.logout();
      return <Redirect to='/'/>
    }

  }
}

export default Logout;