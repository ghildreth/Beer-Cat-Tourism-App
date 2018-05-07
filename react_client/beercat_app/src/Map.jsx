/* eslint-disable */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const AirbnbMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom}
  />
));

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.zoom = 7;

    this.state = {
      lat: 49.2827,
      lng: -123.1207,
    };
  }

  render() {
    const { lat, lng } = this.state;

    return (
      <div style={{ width: '100px', height: '100px' }}>
        <AirbnbMap
          center={{
            lat,
            lng,
          }}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
        />
      </div>
    );
  }
}