import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'

export class PinInfoWindow extends Component {
  render() {
    const {name, city, description, latitude, longitude} = this.props

    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </InfoWindow>
      );
  }
}

export default PinInfoWindow