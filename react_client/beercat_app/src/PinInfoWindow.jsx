/* eslint-disable */
import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


export class PinInfoWindow extends Component {
  render() {
    const {
      name, city, description, lat, lng, address, id,
    } = this.props;

    return (
      <InfoWindow onCloseClick={this.props.closeWindow} options={{boxStyle: {boxShadow: `3px 3px 10px rgba(0,0,0,0.6)`}}}>
        <div>
          <p><Link to={`/breweries/${id}`}>{name}</Link></p>
          <p>{description}</p>
          <p>City: {city}</p>
          <p>Address: {address}</p>
        </div>
      </InfoWindow>
    );
  }
}

export default PinInfoWindow;
