/* eslint-disable */
import React from 'react';

function Over19({ agree, disagree }) {
  return (
  <div>
    <h1>Are you 19 or over?</h1>
    <p>
      <button onClick={agree}>Totes</button>
      <button onClick={disagree}>Nahh</button>
    </p>
  </div>);
}

export default Over19;
