/* eslint-disable */
import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class BreweryList extends Component {

  state = {
    breweries: null
  }

  componentDidMount() {
    axios.get('/api/breweries')
    .then(response => {
      this.setState({ breweries: response.data})
    })
    console.log("BreweryList HI")
  }

  render () {
    const { breweries } = this.state
    return (
      <div>
         <ul>
           { breweries ? (
              breweries.map(brewery => (
                <li key={brewery.id}>
                  <Link to={`/breweries/${brewery.id}`}>{brewery.name}</Link>
                </li>
                ))
                ) : (
                <div>Loading ... </div>
                )
            }
        </ul>
      </div>
    )
  }
}
export default BreweryList
