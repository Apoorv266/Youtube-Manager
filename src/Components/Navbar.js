import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "../Style/Navbar.css"

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
    <div  className='main-navbar'>
        <div>
            <h3>Youtube Recommender</h3>
        </div>

        <div>
           <a href="/home">Home</a>
           <a href="/playlist">My Playlist</a>
           <a href="/explore">Explore</a>
           <button onClick={() => loginWithRedirect()}>Log In</button>;
        </div>
    </div>
    </>
  )
}

export default Navbar