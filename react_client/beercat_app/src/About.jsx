/* eslint-disable */
import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about-banner">
          <h6 className="page-small-title"></h6>
          <h1 className="page-title">Getting to know Beer Cat</h1>
        </div>
        <div className="about-content">
          <div className="about-us">
            <h5>Do you love Beer? Do you love Cat Puns? Us too.</h5>
            <p>
            Our name is funny, but our premise is simple: We're here to help you discover the best local
            breweries (wherever 'local' happens to be) and help you find your Purrrrrfect Beer Match once you arrive.
            Whether you love to travel, or simply want to prowl around your own backyard, we have brewery tours
            and beer recommendations ready for you to pounce on.<br/>
            <br/>
            Cat puns aside, we're pawsitive you're going to love Beer Cat.<br/>
            <br/>
            Cheers!<br/>
            Your friends at Beer Cat</p>
          </div>
          <div className="how-to">
            <h5>Getting Started:</h5>
            <ol>
              <li>We recommend signing up first to set-up your custom beer profile.</li>
              <li>Answer the questions <em>carefully</em>, that's how we match you with beers!</li>
              <li>Check out our Tours. Find the duration and destination that meets your needs.</li>
              <li>Each brewery now shows how likely you are to like every beer based on your
                preferences. The higher the rating, the closer you are to your Purrfect Beer Match!</li>
              <li>Once you're ready, <em>Pounce!</em> on a tour and it will be added to your profile.</li>
              <li>Tell your friends to pounce on the tour with you set up their custom profiles too.</li>
              <li>After the tour, give it a rating and get ready to <em>pounce</em> again!</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
