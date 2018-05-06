/* eslint-disable */
import React, { Component } from 'react';
import Map from "./Map.jsx";

export default class Tour extends Component {

  render() {

    const tour = this.props.tours.map((tour) => {
      return (
      <span key={tour.id}>
      <h2>{tour.name}</h2>
      <h5>{tour.city}</h5>
      <h5>{tour.duration} hrs</h5>
      <p>{tour.description}</p><br/>
      </span>);
    });

    return (
      <div>
        <h2>Individual Tour Page</h2>
        <h5>{tour}</h5>
        <Map/>
      </div>
    );
  }
}