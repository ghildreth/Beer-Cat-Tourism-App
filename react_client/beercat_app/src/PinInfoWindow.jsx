import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'

export class PinInfoWindow extends Component {
  render() {
    const {name, city, description, lat, lng, address} = this.props

    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1>{name}</h1>
            <p>{description}</p>
            <p>City: {city}</p>
            <p>Address: {address}</p>
            <summary>Coords: {lat}, {lng}</summary>

        </div>
      </InfoWindow>
      );
  }
}

export default PinInfoWindow