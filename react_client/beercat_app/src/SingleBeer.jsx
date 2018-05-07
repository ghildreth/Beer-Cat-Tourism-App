/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BeerList from './BeerList.jsx';


class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { beer: null}
  }

  componentDidMount() {
    const {match: {params} } = this.props;

    axios.get(`/api/beers/${params.id}`)
      .then(({ data: beer }) => {
        this.setState ( {beer} );
      });
    }

  render() {
    const { beer } = this.state

    if(beer === null) {
      return(<div>Loading...</div>)
    } else {
      return (
        <div>
          <span key={beer.id}>
            <h1>{beer.name}</h1>
            <h3>{beer.description}</h3>
            <h4>Style: {beer.style}</h4>
            <h4>ABV: {beer.score_ABV}</h4>
            <h4>SRM: {beer.score_IBU}</h4>
            <h4>IBU: {beer.score_IBU}</h4>
        </span>
        <a href='/beers'>Back</a>
      </div>
      );
    }
  }
}

export default SingleBeer