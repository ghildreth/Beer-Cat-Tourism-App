/* eslint-disable */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { PinMarker } from './PinMarker'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


const TourMap = props => {
  return (
  <GoogleMap
    ref={props.onMapMounted}
    onZoomChanged={props.handleMapChanged}
    onDragEnd={props.handleMapChanged}
    onBoundsChanged={props.handleMapFullyLoaded}
    defaultCenter={props.center}
    defaultZoom={props.zoom}>
    {
      props.places && props.places.map(place => (
        <PinMarker
                    key={place.id}
                    id={place.id}
                    city={place.city}
                    address={place.address}
                    lat={place.latitude}
                    lng={place.longitude}
                    logo={place.logo_image_url}
                    description={ place.description }
                    name={ place.name } />
        ))
    }
  </GoogleMap>
)
}
const WrappedTourMap = withGoogleMap(TourMap);

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.xMapBounds = { min: null, max: null }
    this.yMapBounds = { min: null, max: null }

    this.mapFullyLoaded = false
    this.zoom = 12;

    this.state = {
      places: [],
      lat: 49.2827,
      lng: -123.1207
    };
  }

  handleMapChanged() {
    this.getMapBounds()
    this.setMapCenterPoint()
    this.fetchPlacesFromApi()
  }

  handleMapMounted(map) {
    this.map = map
  }

  handleMapFullyLoaded() {
    if (this.mapFullyLoaded)
      return

    this.mapFullyLoaded = true
    this.handleMapChanged()
  }

  setMapCenterPoint() {
    this.setState({
      lat: this.map.getCenter().lat(),
      lng: this.map.getCenter().lng()
    })
  }

fetchPlacesFromApi() {

  axios.get(`/api/breweries`)
  .then(({data: places }) => {
    this.setState({ places })
  console.log('this is what u want', places)

  })
}

  // const places = [
  // {
  //   id: 1,
  //   lat: 49.2827,
  //   lng: -123.1207,
  //   description: 'description',
  //   name: 'BrewHaus'
  // },
  //   {
  //   id: 2,
  //   lat: 49.5827,
  //   lng: -123.2207,
  //   description: 'second',
  //   name: 'Taphouse'
  // }
  // ];//<PinMarker lat={49.2827} lng={-123.1207} description={'description'} name={'BrewHaus'} />


getMapBounds() {
  let mapBounds = this.map.getBounds()
  let xMapBounds = mapBounds.b
  let yMapBounds = mapBounds.f

  this.xMapBounds.min = xMapBounds.b
  this.xMapBounds.max = xMapBounds.f

  this.yMapBounds.min = yMapBounds.f
  this.yMapBounds.max = yMapBounds.b
}

  render() {
    const { lat, lng, places } = this.state;
    return (
      <div style={{ width: '750px', height: '750px' }}>
        <ul>
          <li>lng: {lng}</li>
          <li>lat: {lat}</li>
          <li>xMapBounds.min: {this.xMapBounds.min}</li>
          <li>xMapBounds.max: {this.xMapBounds.max}</li>
          <li>yMapBounds.min: {this.yMapBounds.min}</li>
          <li>yMapBounds.max: {this.yMapBounds.max}</li>
        </ul>
        <WrappedTourMap
          onMapMounted={this.handleMapMounted.bind(this)}
          handleMapChanged={this.handleMapChanged.bind(this)}
          handleMapFullyLoaded={this.handleMapFullyLoaded.bind(this)}
          center={{ lat, lng }}
          places={ places }
          zoom={this.zoom}
          containerElement={ <div style={{height: '100%'}}/> }
          mapElement={ <div style={{height: '100%'}}/> }
        />
      </div>
    );
  }
}