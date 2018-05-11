/* eslint-disable */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer, withScriptsjs, Polyline } from 'react-google-maps';
import { PinMarker } from './PinMarker'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Routes from './Routes'


function makeDirectionService(ds) {
  function route(stuff) {
    return new Promise((resolve, reject) => {
      ds.route(stuff, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    });
  }
  return {
    route,
  };
}

const TourMap = props => {
  // let walkingTour;
  // if (props.showDirections && props.directions) {
  //   walkingTour = <DirectionsRenderer directions={props.directions} />
  // }
  return (
    <GoogleMap
      ref={props.onMapMounted}
      onZoomChanged={props.handleMapChanged}
      onDragEnd={props.handleMapChanged}
      onBoundsChanged={props.handleMapFullyLoaded}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    >

      {props.showDirections && props.directions && <DirectionsRenderer directions={props.directions} />}
      {/*{walkingTour}*/}
      {
        props.places.map(place => (
          <PinMarker
            key={place.id}
            id={place.id}
            city={place.city}xMapBounds
            address={place.address}
            lat={place.latitude}
            lng={place.longitude}
            logo={place.logo_image_url}
            description={ place.description }
            name={ place.name }
          />
        ))
      }
      {
      // this adds a polyline to the map
       // props.directions ? props.directions.routes.map(route => <Polyline path={route.overview_path} />) : null
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
      lng: -123.1207,
      // waypoints: [49.2827, 123.1207]
      showWalkingPath: false
    };
  }

  handleMapChanged() {
    this.getMapBounds()
    this.setMapCenterPoint()
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

  getMapBounds() {
    let mapBounds = this.map.getBounds()
    let xMapBounds = mapBounds.b
    let yMapBounds = mapBounds.f

    this.xMapBounds.min = xMapBounds.b
    this.xMapBounds.max = xMapBounds.f

    this.yMapBounds.min = yMapBounds.f
    this.yMapBounds.max = yMapBounds.b
  }

  _onButtonClick() {
    this.setState({
      showWalkingPath: ! this.state.showWalkingPath,
    });
  }

  componentDidMount() {
    const DirectionsService = makeDirectionService(new google.maps.DirectionsService());
    this.props.places.map(place => {
      console.log('check me out', place.latitude)
    })
    console.log('does zero work', this.props.places[0])
    const coords = this.props.places.map(({latitude, longitude}) => {
      return new google.maps.LatLng(latitude, longitude);
    });
    const origin = coords[0];
    const destination = coords[coords.length - 1];
    const waypoints = coords.slice(1, coords.length - 1)
      .map((location) => ({location, stopover: true}))

    // console.log('realOrigin', this.props.places[0].latitude, this.props.places[0].longitude)
    // console.log('realDesination', this.props.places[this.props.places.length - 1].latitude, this.props.places[this.props.places.length - 1].longitude)
    // const firstPlace = new google.maps.LatLng(this.props.places[0].latitude, this.props.places[0].longitude);
    // const lastPlace = new google.maps.LatLng(this.props.places[this.props.places.length - 1].latitude, this.props.places[this.props.places.length - 1].longitude);
    // for i loop through the this.props.places to generate the nth amount of locations on the map

    DirectionsService.route({
      origin,
      destination,
      waypoints,
      travelMode: google.maps.TravelMode.WALKING,
    }).then((result) => {
      console.log('Directions', result)
      this.setState({
        directions: result,
      });
    }).catch((result) => {
      console.error(`error fetching directions ${result}`);
    });
  }



  render() {
    const { lat, lng } = this.state;
    const { places } = this.props;
    // const waypoints = this.props.places[0].latitude;
    // console.log('way points', waypoints)
    return (

      <div style={{ width: '750px', height: '750px' }}>
        <ul>
          <button onClick={this._onButtonClick.bind(this)}>Button </button>
        {/*  {this.state.showWalkingPath ?
            <Routes /> :
            null
          }*/}
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
          showDirections={this.state.showWalkingPath}
          directions={this.state.directions}
        />
      </div>
    );
  }
}
