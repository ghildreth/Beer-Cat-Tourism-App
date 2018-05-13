/* eslint-disable */
 import React, { Component } from 'react';
 import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
 import TourList from './TourList';
 import Map from "./Map.jsx";
 import axios from 'axios';
 import Rating from 'react-rating';
 import './Map.css'

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

   handleTourSubmit = event => {
    event.preventDefault();
    axios.post('/api/user_tours', {
      user_tours: {
        user_id: this.state.id,
        tour_id: this.props.match.params.id
      }}).then(res => {
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
       <div className="tour-content">
         <span key={tour.id}>
          <h2>{tour.name}</h2>
          <h5>{tour.city}</h5>
          <h5>{tour.duration} hrs</h5>
          <h5>Tour Rating: {tour.rating} </h5>
          <Rating initialRating={tour.rating}
                  readonly
                  emptySymbol={<img src="../assets_paw/black_paw_print.png"
                  className="icon" />}
                  fullSymbol={<img src="../assets_paw/blue_paw_print.png"
                  className="icon" />} />
          <p>{tour.description}</p><br/>
          <button onClick={this.handleTourSubmit.bind(this)} className="btn btn-success">Pounce!</button>
          <a href="/tours">Back</a>
          </span>
          <Map places={ this.state.tour.breweries } />
       </div>
     </div>

       );
     }
   }
 }

