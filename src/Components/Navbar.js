import React from 'react'
import "../Style/Navbar.css"

const Navbar = () => {
  return (
    <>
    <div  className='main-navbar'>
        <div>
            <h3>Youtube Recommender</h3>
        </div>

        <div>
           <a href="">Home</a>
           <a href="">My Playlist</a>
           <a href="">Explore</a>
        </div>
    </div>
    </>
  )
}

export default Navbar