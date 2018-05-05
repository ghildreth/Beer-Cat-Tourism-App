/* eslint-disable */
import React, { Component } from 'react';
import Beer from './Beer.jsx';

export default class BeerList extends Component {

  render() {
    const beerlist = this.props.beerlist.map((beer) => {
      return (<Beer
        key={beer.id}
        name={beer.name}
        description={beer.description}
        style={beer.style}/>);
    });

    return (
      <div id="beer-list">
        {beerlist}
      </div>
    );
  }
}
