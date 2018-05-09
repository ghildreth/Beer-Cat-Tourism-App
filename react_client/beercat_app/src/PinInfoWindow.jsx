/* eslint-disable */

import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';


export class PinInfoWindow extends Component {
  render() {
    const {
      name, city, description, lat, lng, address, id,
    } = this.props;

    return (
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1><Link to={`/breweries/${id}`}>{name}</Link></h1>
          <p>{description}</p>
          <p>City: {city}</p>
          <p>Address: {address}</p>
          <summary>Coords: {lat}, {lng}</summary>

        </div>
      </InfoWindow>
    );
  }
}

export default PinInfoWindow;
