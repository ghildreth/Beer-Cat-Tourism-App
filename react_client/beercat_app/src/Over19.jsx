/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Under19 extends Component {

  render() {
  return(
    <div className="welcome">
    <img className="over19" src={process.env.PUBLIC_URL + '/assets_logo/BeerCat500.png'} alt="avatar"/>
    <h1 className="welcome-h1">Are you over the legal drinking age where you reside?</h1>
    <button type="button" className="btn agecheck-button-yes"><Link to='/yes' className="agecheck-link-yes">Yes, I'm a Cat!</Link></button>
    <button type="button" className="btn agecheck-button-no"><Link className="agecheck-link-no" to='/under19'>Nope, I'm a Kitten.</Link></button>
  </div>);
  }
}
