/* eslint-disable */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer, withScriptsjs, Polyline } from 'react-google-maps';
import { PinMarker } from './PinMarker'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


const tour = {
  id: 12,
  breweries: [
    { id: 1, name: 'Whatever' },
    { id: 2, name: 'Other' }
  ]
}
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
  return (
  <GoogleMap
    ref={props.onMapMounted}
    onZoomChanged={props.handleMapChanged}
    onDragEnd={props.handleMapChanged}
    onBoundsChanged={props.handleMapFullyLoaded}
    defaultCenter={props.center}
    defaultZoom={props.zoom}
    waypoints={[{ lat: 49.283834, lng: -123.0665496 }, { lat: 49.2691407, lng: -123.1051664 }, { lat: 41.8507300, lng: -87.66 }]}>

    {props.directions && <DirectionsRenderer directions={props.directions} />}
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
       props.directions ? props.directions.routes.map(route => <Polyline path={route.overview_path} />) : null
     }
    }
  </GoogleMap>
)
}
const WrappedTourMap = withGoogleMap(TourMap);

export default class Map extends Component {
  constructor(props) {
    super(props);
    console.log('here are the props', props.places[0].latitude)

    this.xMapBounds = { min: null, max: null }
    this.yMapBounds = { min: null, max: null }

    this.mapFullyLoaded = false
    this.zoom = 12;

    this.state = {
      places: [],
      lat: 49.2827,
      lng: -123.1207,
      waypoints: [49.2827, 123.1207]
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

componentDidMount() {
  console.log('mounting from the ')
  const DirectionsService = makeDirectionService(new google.maps.DirectionsService());
  console.log('CDM', this.props.waypoints);
  const point1 = new google.maps.LatLng( 49.283834, -123.0665496);
  const point2 = new google.maps.LatLng( 49.2691407, -123.1051664);
  const wps = [{location: point1}, {location: point2}]
  const org = new google.maps.LatLng( 49.283834, -123.0665496);
  const des = new google.maps.LatLng(49.2691407, -123.1051664);

  DirectionsService.route({
    origin: org,
    destination:  des,
    waypoints: wps,
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
          waypoints={[{ lat: 49.283834, lng: -123.0665496 }, { lat: 49.2691407, lng: -123.1051664 }, { lat: 41.8507300, lng: -87.66 }]}
          directions={this.state.directions}
        />
      </div>
    );
  }
}