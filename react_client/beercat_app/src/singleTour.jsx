/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Tour from './Tour';

// const Tours =  () => (
//   <Switch>
//     <Route exact path='/Tour' component={Tour}/>
//   </Switch>
// )

// export default Tours

// export default class Tours extends Component {
//   render() {
//     console.log('Rendering <Tours />');

//     return (
//       <div>
//         <h2>Homepage/Tour Page</h2>
//         <h5>This is the home page where you'd see tours.</h5>
//       </div>
//     );
//   }
// }
  const singleTour = this.props.tours.map((tour) => {
      return (
      <span key={tour.id}>
      <h2>{tour.name}</h2>
      <h5>{tour.city}</h5>
      <h5>{tour.duration} hrs</h5>
      <p>{tour.description}</p><br/>
      </span>);
    });

    return (
      <div>
        <h2>Individual Tour Page</h2>
        <h5>{tour}</h5>
        <Map/>
      </div>
    );
  }