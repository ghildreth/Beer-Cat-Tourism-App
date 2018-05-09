/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({currentUser, userID}) => {
  let links = currentUser ?  (<React.Fragment>
        <li><Link to={`/user/${userID}`}>My Profile</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
    </React.Fragment>)
    : (<React.Fragment>
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to='/login'>Login</Link></li>
  </React.Fragment>);
  
  return (
  <header>
    <nav>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Tours</Link></li>
        {links}
      </ul>
    </nav>
  </header>
  )
}


export default Navigation