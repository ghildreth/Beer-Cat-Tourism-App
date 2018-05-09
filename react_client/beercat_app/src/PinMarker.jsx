/* eslint-disable */

import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import { PinInfoWindow } from './PinInfoWindow';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';


export class PinMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
    };
  }
  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip });
  }

  closeWindow() {
    this.setState({ showTooltip: false });
  }

  render() {
    const { showTooltip } = this.state;
    const {
      lat, lng, name, city, description, address, id,
    } = this.props;

    return (
      <Marker
        position={{
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    }}
        onClick={this.clickTooltip.bind(this)}
      >
        {showTooltip && (
        <PinInfoWindow
          description={description}
          id={id}
          name={name}
          city={city}
          address={address}
          lat={lat}
          lng={lng}
          closeWindow={this.closeWindow.bind(this)}
        />
      )}
      </Marker>
    );
  }
}

export default PinMarker;
