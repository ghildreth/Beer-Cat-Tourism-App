/* eslint-disable */
import React, { Component } from 'react';
import Map from "./Map.jsx";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class TourList extends Component {

  state = {
    tours: null
  }

  componentDidMount() {
    axios.get('/api/tours')
    .then(response => {
      console.log('Tours Response', response)
      this.setState({tours: response.data});
      console.log('tour state', this.state.tours)
    })
  }

  render() {
    const { tours } = this.state
    return (
      <div>
      <ul>
      {tours ? (tours.map(tour => (
        <li key={tour.id}>
          <Link to={`/tours/${tour.id}`}>{tour.name}</Link>
        </li>
        ))
      ) : (
      <div>Loading...</div>
      )}
      </ul>
      </div>
      )
  }
}



// export default class Tour extends Component {
// const tourAPI =
//     axios.get('/api/tours')
//     .then(response => {
//       console.log('Tours Response', response)
//       response.data
//     })

// const Tour = () => (
//   <div>
//     <ul>
//       {
//         tourAPI.map(t => (
//           <li key={t.id}>
//             <Link to={`/tours/${t.id}`}>{t.name}></Link>
//           </li>
//         ))
//       }
//     </ul>
//   </div>
// )

// export default Tour

//   render() {


// }