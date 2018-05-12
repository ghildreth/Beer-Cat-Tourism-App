/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Under19 extends Component {

  render() {
  return(
    <div className="welcome">
    <img className="over19" src={process.env.PUBLIC_URL + '/assets_logo/BeerCat600.png'} alt="avatar"/>
    <h1>Are you over the legal drinking age where you reside?</h1>
    <button type="button" className="btn cat-button"><Link to='/yes'>Cat.</Link></button>
    <button type="button" className="btn cat-button"><Link to='/sorry'>Kitten.</Link></button>
  </div>);
  }
}
