/* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UserTours extends Component {
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
      axios.get(`/api/tours/mine`)
      .then(({ data: tours }) => {
        this.setState( { tours })
      })
      
  }

  render() {
    const { tours } = this.state

    
      return (
        <div className="tours-all">
      {tours ? (tours.map(tour => (
        <div key={tour.id} className="tours-individualtour">
          <div className="tours-individualtourtitle">
            <h3><Link to={`/tours/${tour.id}`}>{tour.name}</Link></h3>
          </div>
          <div className="tours-individualtourdetails">
            <h5>City: {tour.city}</h5>
            <h5>Duration: {tour.duration} hrs</h5>
            <h5>Description: {tour.description}</h5>
          </div>
        </div>
        ))
      ) : (
      <div>Loading...</div>
      )}
      </div>
      )
        
        

      //   <div>
      //     <h4>Your tours:</h4> 
      //     <ul className='userTours'>

      //       <li>Tour 1</li>
      //       <li>Tour 2</li>
      //     </ul>
      //   </div>
      // );
    }
  }
export default UserTours




