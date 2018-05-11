/* eslint-disable */
import React, { Component } from 'react';

export default class Under19 extends Component {

  render() {
  return(
  <div>
    <h1>Sorry, kitten</h1>
    <h2>You can't come in right meow.</h2>
    <img className="sorry" src={process.env.PUBLIC_URL + '/assets_logo/Milk.png'} alt="avatar"/>
  </div>);
  }
}
