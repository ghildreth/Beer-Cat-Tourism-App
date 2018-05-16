/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = ({currentUser, userID}) => {
  let links = currentUser ?  (<React.Fragment>
        <div className="nav-item"><Link to={`/users/${userID}`} className="nav-a">My Profile</Link></div>
        <div className="nav-item"><Link to='/logout' className="nav-a">Logout</Link></div>
    </React.Fragment>)
    : (<React.Fragment>
      <div className="nav-item"><Link to="/signup" className="nav-a">Sign Up</Link></div>
      <div className="nav-item"><Link to='/login' className="nav-a">Login</Link></div>
  </React.Fragment>);
  
  return (
    <nav className="nav-bar">
      <div className="nav">
        <div className="nav-item"><Link to='/about' className="nav-a">About</Link></div>
        <div className="nav-item"><Link to='/tours' className="nav-a">Tours</Link></div>
        <div><Link to='/'><img className="nav-item logo" src={process.env.PUBLIC_URL + '/assets_logo/BeerCat.png'} alt="avatar"/></Link></div>
        {links}
      </div>
    </nav>
  )
}


export default Navigation