import React from 'react'
import "../Style/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = ({ logout}) => {
  
  return (
    <>
    <div  className='main-navbar'>
        <div>
            <h3>Youtube Recommender</h3>
        </div>

        <div>
        <Link to="/collection">Home</Link>
           <a href="/">My Playlist</a>
           <a href="/explore">Explore</a>
           <button onClick={() => logout({ returnTo: window.location.origin })}  id="logBtn">Log Out</button>
        </div>
    </div>
    </>
  )
}

export default Navbar