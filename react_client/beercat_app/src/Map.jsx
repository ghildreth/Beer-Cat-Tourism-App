/* eslint-disable */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer, withScriptsjs, Polyline, Marker } from 'react-google-maps';
import { PinMarker } from './PinMarker'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Navigation from './Navigation';

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

const exampleMapStyles = [
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#f49f53"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#f9ddc5"
            },
            {
                "lightness": -7
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "color": "#645c20"
            },
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#1994bf"
            },
            {
                "saturation": -69
            },
            {
                "gamma": 0.99
            },
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f19f53"
            },
            {
                "weight": 1.3
            },
            {
                "visibility": "on"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi.business"
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#645c20"
            },
            {
                "lightness": 39
            }
        ]
    },
    {
        "featureType": "poi.school",
        "stylers": [
            {
                "color": "#a95521"
            },
            {
                "lightness": 35
            }
        ]
    },
    {},
    {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 38
            },
            {
                "visibility": "off"
            }
        ]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
        "elementType": "labels"
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "color": "#9e5916"
            },
            {
                "lightness": 32
            }
        ]
    },
    {},
    {
        "featureType": "poi.government",
        "stylers": [
            {
                "color": "#9e5916"
            },
            {
                "lightness": 46
            }
        ]
    },
    {
        "featureType": "transit.station",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#f19f53"
            },
            {
                "lightness": -10
            }
        ]
    },
    {},
    {},
    {}
]
const TourMap = props => {

  return (
    <GoogleMap

      defaultOptions={{ styles: exampleMapStyles }}
      ref={props.onMapMounted}
      onZoomChanged={props.handleMapChanged}
      onDragEnd={props.handleMapChanged}
      onBoundsChanged={props.handleMapFullyLoaded}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} options={{suppressMarkers: true}} panel={ document.getElementById('panel') }/>}
{/*      {props.showDirections && <div id="panel"></div>}*/}


      {/*{walkingTour}*/}
      {
        props.places.map(place => (
          <PinMarker
            key={place.id}
            id={place.id}
            city={place.city}
            address={place.address}
            lat={place.latitude}
            lng={place.longitude}
            logo={place.logo_image_url}
            description={ place.description }
            name={ place.name }
          />
        ))
      }
{/*      {

       props.directions ? props.directions.routes.map(route => <Polyline path={route.overview_path} />) : null
      }*/}

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
      showWalkingPath: true
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
    console.log('meh', places)
    return (

      <div className="mappy">

          <WrappedTourMap
            onMapMounted={this.handleMapMounted.bind(this)}
            handleMapChanged={this.handleMapChanged.bind(this)}
            handleMapFullyLoaded={this.handleMapFullyLoaded.bind(this)}
            center={{ lat, lng }}
            places={ places }
            zoom={this.zoom}
            containerElement={ <div style={{height: '100%'}}/> }
            mapElement={ <div style={{height: '100%'}}/> }
            directions={this.state.directions}
            handleMapClick={this.props.closeWindow}
          />

      </div>
    );
  }
}
