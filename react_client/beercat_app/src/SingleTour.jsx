/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import TourList from './TourList';
import Map from "./Map.jsx";
import axios from 'axios';

export default class SingleTour extends Component {
  constructor(props){
    super(props);

    this.state = { tour: null };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    console.log('mounting from single tour')
    axios.get(`/api/tours/${params.id}`)
      .then(({ data: tour }) => {
        this.setState( {tour} );
      });
  }

  render() {
// tour is my state
  const { tour } = this.state;


  if(tour === null) {
    return <div>Loading...</div>

  } else {

    return (
    <div>
      <span key={tour.id}>
        <h2>{tour.name}</h2>
        <h5>{tour.city}</h5>
        <h5>{tour.duration} hrs</h5>
        <p>{tour.description}</p><br/>
        <Map/>
      </span>
      <a href="/tours">Back</a>
    </div>
      );
    }
  }
}
{/*      )
    }
}*/}
//     const { tours } = this.state
//     return (
//       <div>
//       <ul>
//       {tours ? (tours.map(tour => (
//         <li key={tour.id}>
//           <Link to={`/tours/${tour.id}`}>{tour.name}</Link>
//         </li>
//         ))
//       ) : (
//       <div>Loading...</div>
//       )}
//       </ul>
//       </div>
//       )
//   }
// }

//   if(!singletour) {
//     return <div>Sorry, but the tour was not found</div>
//   }

//   return

  // <div>
  //   <h1>{singletour.name}</h1>
  // </div>
//   )
// }

  // render() {
  //   const { tours } = this.state
  //   return (
  //     <div>    return <div>Sorry, but the tour was not found</div>

  //     <ul>
  //     {tours ? (tours.map(tour => (
  //       <li key={tour.id}>
  //         <Link to={`/tour/${tour.id}`}>{tour.name}</Link>
  //       </li>
  //       ))
  //     ) : (
  //     <div>Loading...</div>
  //     )}
  //     </ul>
  //     </div>
  //     )
  // }

// const SingleTour = (props) => {
//   const singletour =
//     componentDidMount() {
//     axios.get('/api/tours')
//     .then(response => {
//       console.log('Tours Response', response)
//       this.setState({tours: response.data});
//       console.log('tour state', this.state.tours)
//     })
//   }
// }

// const SingleTour = this.props.tourlist.map((tour) => {
//   return (
//       <span key={tour.id}>
//       <h2>{tour.name}</h2>
//       <h5>{tour.city}</h5>
//       <h5>{tour.duration} hrs</h5>
//       <p>{tour.description}</p><br/>
//       </span>)
//       return (
//       <div>
//         <h2>Individual Tour Page</h2>
//         <h5>{Stour}</h5>
//         <Map/>
//       </div>
//     );
//   }
// })
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
  // const singleTour = this.props.tours.map((tour) => {
  //     return (
  //     <span key={tour.id}>
  //     <h2>{tour.name}</h2>
  //     <h5>{tour.city}</h5>
  //     <h5>{tour.duration} hrs</h5>
  //     <p>{tour.description}</p><br/>
  //     </span>);
  //   });

  //   return (
  //     <div>
  //       <h2>Individual Tour Page</h2>
  //       <h5>{tour}</h5>
  //       <Map/>
  //     </div>
  //   );
  // }