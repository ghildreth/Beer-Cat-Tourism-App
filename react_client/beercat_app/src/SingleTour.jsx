/* eslint-disable */
 import React, { Component } from 'react';
 import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
 import TourList from './TourList';
 import Map from "./Map.jsx";
 import axios from 'axios';
 import Rating from 'react-rating';

 export default class SingleTour extends Component {
   constructor(props){
     super(props);

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

   render() {
   const { tour } = this.state;
   if(tour === null) {
     return <div>Loading...</div>

   } else {

     return (
     <div>
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
                className="icon"
                />} />
         <p>{tour.description}</p><br/>
         <Map places={ this.state.tour.breweries } />
       </span>
       <a href="/tours">Back</a>
     </div>
       );
     }
   }
 }

