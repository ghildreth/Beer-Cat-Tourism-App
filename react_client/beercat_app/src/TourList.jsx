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
      <div>
        <div className="tours-banner">
            <h6 className="page-small-title">Tours</h6>
          <h1 className="page-title">Choose a tour</h1>
          </div>
        <div className="tours-all">

        {tours ? (tours.map(tour => (
          <Link to={`/tours/${tour.id}`} className="tours-individualtourtitle-link">
            <div key={tour.id} className="tours-individualtour">

              <h3 className="tours-individualtourtitle">{tour.name}</h3>
              <div className="tours-description">{tour.description}</div>
              <p className="tours-individualtourdetails">
                <strong>City:</strong> {tour.city}<br/>
                <strong>Duration:</strong> {tour.duration} hrs<br/><br/>
              </p>

            </div>
          </Link>
          ))
        ) : (
        <div></div>
        )}
        </div>
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