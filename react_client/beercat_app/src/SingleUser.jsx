/* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import UserTours from './UserTours';

export default class SingleUser extends Component {
  constructor(props) {
    super(props);
      this.state = {
        logged_in: true,
        current_user: false,
        id: '',
        name: '',
        username: null,
        email: '',
        preference_ABV: true,
        preference_SRM: true,
        preference_IBU: true,
        preference_adventurous: true,
        preference_sour: true
      };
  }

  componentDidMount() {
    const {match: {params} } = this.props;
    console.log('params id', params.id)
    axios.get(`/api/users/${params.id}`)
      .then(response => {
        console.log('user_profile_response', response)
        this.setState({
          username: response.data.username,
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          preference_ABV: response.data.preference_ABV,
          preference_SRM: response.data.preference_SRM,
          preference_IBU: response.data.preference_IBU,
          preference_adventurous: response.data.preference_adventurous,
          preference_sour: response.data.preference_sour,
        })
        console.log('username for profile is', this.state.username)
      })
      axios.get('/api/users/me')
      .then(response => {
        if (response.status === 204) {
          console.log('user session deleted')
          this.setState({
            current_user: false,
            logged_in: false,
          })
        }
        if (response.status === 200 || response.status === 201) {
          console.log('logged in user is', response)
          this.setState({logged_in: true})
        } else {
          this.setState({logged_in: false})
        }
        if (response.data.id === this.state.id) {
          this.setState({current_user: true})
          console.log('current user and page user are the same')
        } else {
          console.log('not the same user')
        }
        if (response.data.id === params.id) {
          this.setState({logged_in: true, current_user: true})
        }
      })
      .catch(function (error) {
        console.error(error)
      });
   }

  render() {
    if (this.state.current_user) {
      return (
        <div className="user-profile">
          <div className="user-banner">
            <h1 className="user-title">Hello, {this.state.username}!</h1>
          </div>
          <div className="user-content">
            <div className="user-preferences">
              <br/>
              <h2>Your Beer Preferences:</h2><br/>
              <span className="badge badge-ABV">{ `${this.state.preference_ABV ? `Strong Beer` : `Light Beer`}`}</span>
              <span className="badge badge-SRM">{ `${this.state.preference_SRM ? `Lagers & Pilsners` : `Stouts & Ales`}`}</span>
              <span className="badge badge-IBU">{ `${this.state.preference_IBU ? `Hoppy IPAs` : `Malty Lagers`}`}</span>
              <span className="badge badge-SOUR">{ `${this.state.preference_sour ? `Team Sour` : `Team Sweet`}`}</span>
              <br/>
            </div>
              <UserTours user_id={this.state.id}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="user-profile">
          <div className="user-banner">
            <h1 className="user-title">{this.state.username}</h1>
          </div>
          <div className="user-content">
            <div className="user-preferences">
              <br/>
              <h2>Beer Preferences:</h2><br/>
              <span className="badge badge-ABV">{ `${this.state.preference_ABV ? `Strong Beer` : `Light Beer`}`}</span>
              <span className="badge badge-SRM">{ `${this.state.preference_SRM ? `Lagers & Pilsners` : `Stouts & Ales`}`}</span>
              <span className="badge badge-IBU">{ `${this.state.preference_IBU ? `Hoppy IPAs` : `Malty Lagers`}`}</span>
              <span className="badge badge-SOUR">{ `${this.state.preference_sour ? `Team Sour` : `Team Sweet`}`}</span>
              <br/>
            </div>
              <UserTours user_id={this.state.id}/>
          </div>
        </div>
      );
    }
  }
}




