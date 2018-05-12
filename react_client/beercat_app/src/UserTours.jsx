/* eslint-disable */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Rating from 'react-rating';

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
      .then(({ data: {tours, user_tours} }) => {
        this.setState( { tours, user_tours })
      })
      
  }

  render() {
    const { tours } = this.state
    const { user_tours } = this.state

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
                <h5>
                  Rating:  <Rating initialRating={tour.rating} 
                  emptySymbol={<img src="../assets_paw/black_paw_print.png" 
                  className="icon" />} 
                  fullSymbol={<img src="../assets_paw/blue_paw_print.png" 
                  className="icon" />} />
                </h5>
              </div>

            </div>
            ))
          ) : (
          <div>Loading...</div>
          )}
      </div>
      )
    }
  }
export default UserTours




