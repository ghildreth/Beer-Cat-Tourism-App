/* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class UserTours extends Component {
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
        preference_sour: true
      };
  }

  componentDidMount() {
    console.log('UserTours component did mount')
  }

  render() {

    return (
      <div>
        <h4>Your tours:</h4>
        <ul className='userTours'>
          <li>Tour 1</li>
          <li>Tour 2</li>
        </ul>
      </div>
    );
  }
}




