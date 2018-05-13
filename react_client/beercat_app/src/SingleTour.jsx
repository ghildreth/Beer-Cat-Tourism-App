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

     console.log('mounting from single tour')
     axios.get(`/api/tours/${params.id}`)
       .then(({ data: tour }) => {
         this.setState( {tour} );
       });
   }

   handleTourSubmit(){
    // axios.post(`api/user_tour`)
    // if()
    //   .then(({ }))
    console.log('here i am', this.prpos.currentUser.id)
   }

   render() {
   const { tour } = this.state;
   if(tour === null) {
     return <div>Loading...</div>

   } else {

     return (
      <div>
       <div className="tour-content">

         <span className="tour-details" key={tour.id}>
          <h2>{tour.name}</h2>
          <h5 className="tour-city">{tour.city}</h5>
          <h5 className="tour-duration">{tour.duration} hrs</h5>
          <h5 className="tour-rating">Tour Rating: {tour.rating} </h5>
          <Rating initialRating={tour.rating}
                  readonly
                  emptySymbol={<img src="../assets_paw/black_paw_print.png"
                  className="icon" />}
                  fullSymbol={<img src="../assets_paw/blue_paw_print.png"
                  className="icon" />} />
          <p className="tour-description">{tour.description}</p><br/>
          <button onClick={this.handleTourSubmit.bind(this)} className="btn btn-success pounce">Pounce!</button>
          <form method="get" action="/tours">
            <button className="btn back"type="submit">Back</button>
          </form>
          </span>
          <Map places={ this.state.tour.breweries } />
       </div>
     </div>

       );
     }
   }
 }

