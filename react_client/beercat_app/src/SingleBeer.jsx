/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SingleBeer = axios.get('/api/beers/')
.then(response) => {
  console.log('Beers Response', response.data)
  response.data
});





const SingleBeer = (props) => {
  const singleBeer = axios.get('/api/beers')
  .then(response => {
    console.log('Breweries Response', response)
    response.data
    console.log(singleBeer.id)

  if (!singleBeer.id) {
    return <div>Sorry, we couldn't find this Beer - not to worry, there's loads more</div> 
  }
  return (
    <div>
      <h1>{singleBeer.name}</h1>
      <h2>{singleBeer.description}</h2>
    </div>
  )
}

export default SingleBeer