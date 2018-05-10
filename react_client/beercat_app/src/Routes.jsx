/* global google */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

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

function buddy(array, agg = []) {
  if (array.length < 2) return agg;
  const [first, second, ...rest] = array;
  return buddy([second, ...rest], [...agg, [first, second]]);
}
const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = makeDirectionService(new google.maps.DirectionsService());
      console.log('CDM', this.props.waypoints);

      DirectionsService.route({
        origin: this.props.waypoints[0],
        destination: this.props.waypoints[this.props.waypoints.length - 1],
        waypoints: this.props.waypoints.slice(1, this.props.waypoints.length - 1).map(location => ({ location, stopover: true })),
        travelMode: google.maps.TravelMode.DRIVING,
      }).then((result) => {
        this.setState({
          directions: result,
        });
      }).catch((result) => {
        console.error(`error fetching directions ${result}`);
      });
    },
  }),
)(props =>
  (<GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>),
);
ReactDOM.render(<MapWithADirectionsRenderer waypoints={[{ lat: 41.8507300, lng: -87.6512600 }, { lat: 41.8525800, lng: -87.6514100 }, { lat: 41.8507300, lng: -87.66 }]} />

  , document.getElementById('root'));
registerServiceWorker();
