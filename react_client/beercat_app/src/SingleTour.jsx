/* eslint-disable */
 import React, { Component } from 'react';
 import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
 import TourList from './TourList';
 import Map from "./Map.jsx";
 import axios from 'axios';
 
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
 // tour is my state
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
         <p>{tour.description}</p><br/>
         <Map/>
       </span>
       <a href="/tours">Back</a>
     </div>
       );
     }
   }
 } 