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
        console.log(tours, user_tours)
        this.setState( { tours, user_tours })
      });
  }

  render() {
    const { tours } = this.state
    const { user_tours } = this.state

    const onRate = (rating, user_tour_id) => {
      axios.put(`/api/user_tours/${user_tour_id}`, {
        user_tours: {
        rating: rating
        }
      })
    }

      return (
        <div className="tours-all">
          {tours ? (tours.map(tour => (
            <div key={ tour.id * Math.random() } className="tours-individualtour">

              <div className="tours-individualtourtitle">
                <h3><Link to={`/tours/${tour.id}`}>{tour.name}</Link></h3>
              </div>

              <div className="tours-individualtourdetails">
                <h5>City: {tour.city}</h5>
                <h5>Duration: {tour.duration} hrs</h5>
                <h5>Description: {tour.description}</h5>

                {user_tours.filter(user_tour => user_tour.tour_id === tour.id).map(user_tour => (
                  <div className="individual-beer" key={user_tours.id + 1000}>
                    {user_tour.rating  ? (
                        <h5>Your Rating:</h5>
                      ) : (
                        <h5>Rate this Tour:</h5>
                      )
                    }
                      <h5><Rating onChange={(rate) => onRate(rate, user_tour.id)}
                        initialRating={user_tour.rating}
                        emptySymbol={<img src="../assets_paw/black_paw_print.png"
                        className="icon" />}
                        fullSymbol={<img src="../assets_paw/blue_paw_print.png"
                        className="icon" />} />
                      </h5>

                  </div>
                ))}
              </div>

            </div>
            ))
          ) : (
          <div>
            Hey kitty, it looks like you haven't pounced on any tours!<br/>
            Check them out here: <a href="/tours">Tours</a>
           </div>
          )}
      </div>
      )
    }
  }
export default UserTours




