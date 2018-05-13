/* eslint-disable */
import React, { Component } from 'react';

export default class Under19 extends Component {

  render() {
  return(
  <div className="under19">
    <h1 className="sorrykitten">Sorry, kitten</h1>
    <img className="milk" src={process.env.PUBLIC_URL + '/assets_logo/Milk500.png'} alt="avatar"/>
    <h1>You can't come in right meow.</h1>
  </div>);
  }
}
