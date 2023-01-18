import React from 'react'
import "../Style/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = ({ logout }) => {

  return (
    <>
      <div className='main-navbar'>
        <div>
          <h3 className='logoMain'>Youtube<span className='logo'>Buddy</span></h3>
        </div>

        <div className='links'>
          <div className='linkVal'>
          <Link to="/collection">My Collections</Link>
          <Link to="/playlist">My playlists</Link>
          <Link to="/notes">My notes</Link>
          <Link to="/explore">Explore</Link>
          </div>
          <button onClick={() => logout({ returnTo: window.location.origin })} id="logBtn">Log Out</button>
        </div>
      </div>
    </>
  )
}

export default Navbar