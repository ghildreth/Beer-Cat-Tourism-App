/* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import UserTours from './UserTours';

export default class SingleUser extends Component {
  constructor(props) {
    super(props);
      this.state = {
        current_user: false,
        over_19: true,
        name: '',
        username: null,
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
    const {match: {params} } = this.props;

    axios.get(`/api/users/${params.id}`)
      .then(response => {
        console.log('response', response.data)
        this.setState({
          username: response.data.username,
          name: response.data.name,
          email: response.data.email,
          preference_ABV: response.data.preference_ABV,
          preference_SRM: response.data.preference_SRM,
          preference_IBU: response.data.preference_IBU,
          preference_adventurous: response.data.preference_adventurous,
          preference_sour: response.data.preference_sour
        })
        console.log('username is', this.state.username)
      });
   }

  render() {

    return (
      <div>
        <img className="avatar" src={`https://api.adorable.io/avatars/200/${this.state.username}.png`} style={{borderRadius: 10}} alt="avatar"/>
        <h2>{ `Welcome to Beer Cat, ${ this.state.username === null ? `please sign up` : this.state.username} !` }</h2>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Email: {this.state.email}</li>
          <li>{ `ABV Preference: ${this.state.preference_ABV === true ? `keep it light` : `fuck me up, fam`}`}</li>
        </ul>
        <UserTours/>
      </div>
    );
  }
}




