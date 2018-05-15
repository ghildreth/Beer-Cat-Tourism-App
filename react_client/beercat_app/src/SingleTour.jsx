/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import TourList from './TourList';
import Map from "./Map.jsx";
import axios from 'axios';
import Rating from 'react-rating';
import Alert from 'react-s-alert';
import './styles/alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default class SingleTour extends Component {
   constructor(props){
     super(props);
     console.log('what props we working with', props)
     this.state = { tour: null };
   }

   componentDidMount() {
     const { match: { params } } = this.props;

     console.log('mounting from single tour', this.props.match.params.id)
     axios.get(`/api/tours/${params.id}`)
       .then(({ data: tour }) => {
        console.log('Tour: ', tour)
         this.setState( {tour} );
       });

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
         this.setState({logged_in: true, id: response.data.id})
       } else {
         this.setState({logged_in: false})
       }
     })
     .catch(function (error) {
       console.error(error)
     });
  }

    handleClick3(e) {
        e.preventDefault();

    }

 handleTourSubmit = event => {
  event.preventDefault();
  axios.post('/api/user_tours', {
    user_tours: {
      user_id: this.state.id,
      tour_id: this.props.match.params.id
    }}).then(res => {
      Alert.success("Tour Added, furry good choice!", {
          position: 'top-right',
          effect: 'jelly',
          timeout: 2000
      });
      console.log(res);
      console.log(res.data);
  })
  }

   render() {
   const { tour } = this.state;
   if(tour === null) {
     return <div>Loading...</div>

   } else {

     return (
      <div>
        <div className="tour-banner">
          <h6 className="page-small-title">Tour</h6>
          <h1 className="page-title">{tour.name}</h1>
        </div>
        <div className="tour-content">
          <span className="tour-details" key={tour.id}>
            <p className="tour-city"><strong>City:</strong> {tour.city}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <span className="tour-duration"><strong>Duration:</strong> {tour.duration} hrs</span>
            </p>
            <span className="tour-rating"><strong>Average User Rating:</strong><br/>
              <Rating initialRating={tour.rating}
                      readonly
                      emptySymbol={<img src="../assets_paw/black_paw_print.png"
                      className="icon" />}
                      fullSymbol={<img src="../assets_paw/blue_paw_print.png"
                      className="icon" />} />
            </span>
            <p className="tour-description">{tour.full_description}</p><br/>
            <span className="brewery-route"><strong>Stops on the Tour:</strong></span>
            <Slider autoplay="1500" className="slider tour-slider">        
              {this.state.tour.breweries.map((brewery) => 
                <div key={brewery.id}>
                  <Link to={`/breweries/${brewery.id}`}><p className="tour-slider-name">{brewery.name}</p></Link>
                </div>)}
            </Slider>
            <button onClick={this.handleTourSubmit.bind(this)} className="btn button-pounce">Pounce on this tour!</button>&nbsp;&nbsp; 
            <button type="button" className="btn back-button"><Link className="back-link" to='/tours'>Back</Link></button>
          </span>
          <Map tips={this.state.tour} places={ this.state.tour.breweries } />
       </div>
       <Alert stack={{limit: 1}} />
     </div>

       );
     }
   }
 }

