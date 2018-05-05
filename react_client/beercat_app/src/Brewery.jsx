/* eslint-disable */
import React, {Component} from 'react';

export default class Brewery extends Component{

  render() {
  console.log('Rendering <Brewery />');
  return (
    <div>
      <img alt="beer" src="https://pixabay.com/get/ea36b5082cf5013ed1534705fb0938c9bd22ffd41cb3144592f6c87aa6/eat-3347410_1920.jpg"/>
      <h3>Brewery Avatar</h3>
      <h4>Address: </h4>
      <h4>Website: </h4>
      <h4>Description: </h4>
      <h4>Beer List: (BEER COMPONENT)</h4>


    </div>
    );
  }
}