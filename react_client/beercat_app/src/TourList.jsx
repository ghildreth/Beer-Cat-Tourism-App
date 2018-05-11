/* eslint-disable */
import React, { Component } from 'react';
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
      <div className="tours-all">
      {tours ? (tours.map(tour => (
        <div key={tour.id} className="tours-individualtour">
          <div className="tours-individualtourtitle">
            <h3><Link to={`/tours/${tour.id}`}>{tour.name}</Link></h3>
          </div>
          <div className="tours-individualtourdetails">
            <p><strong>City:</strong> {tour.city}</p>
            <p><strong>Duration:</strong> {tour.duration} hrs</p>
            <p><strong>Description:</strong><br/> {tour.description}</p>
          </div>
        </div>
        ))
      ) : (
      <div>Loading...</div>
      )}
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