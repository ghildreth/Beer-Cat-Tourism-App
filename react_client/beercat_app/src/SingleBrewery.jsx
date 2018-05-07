/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'

class SingleBrewery extends Component {

  state = {
    brewery: null
  }

  componentDidMount() {
    const { match: {params} } = this.props;

    axios.get(`/api/breweries/${params.id}`)
    .then(({ data: brewery }) => {
      this.setState({ brewery })
    })
  }

  render () {
    const { brewery } = this.state
    if (brewery === null) {
        return <div>Loading ... </div>;
      } else {
        return (
          <div>
             <span key={brewery.id}>
               <h2>{brewery.name}</h2>
               <h4>City: {brewery.city}</h4>
               <h4>Address: {brewery.address}</h4>
               <h4>Description: {brewery.description}</h4>
             </span>
             <a href="/breweries">Back</a>
          </div>
      )
    }
  }
}
export default SingleBrewery





