/* eslint-disable */

import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import { PinInfoWindow } from './PinInfoWindow'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

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

  onMouseOver() {
    this.setState({ showTooltip: !this.state.showTooltip });
  }

  onCloseclick() {
    this.setState({ showTooltip: false });
  }

  onHover() {
    this.setState({ showTooltip: true });
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
        onHover={this.onHover.bind(this)}
        onClick={this.clickTooltip.bind(this)}
        onCloseclick={this.onCloseclick.bind(this)}
      >
        {showTooltip && (
        <PinInfoWindow
          description={description}
          id={id}
          name={name}
          city={city}
          address={address}
          closeWindow={this.closeWindow.bind(this)}
          stateOfWindow={this.state.showTooltip}
        />
      )}
      </Marker>
    );
  }
}

export default PinMarker;
