import React from 'react'
import "../Style/Navbar.css"


const HomeNavbar = ({loginWithRedirect, logout, isAuthenticated}) => {
    
  return (
    <>
    <div  className='main-navbar'>
        <div>
            <h3 className='title'>Youtube Recommender</h3>
        </div>

        <div>
        {isAuthenticated ? <button onClick={() => logout({ returnTo: window.location.origin })}  id="logBtn">Log Out</button> :
        <button onClick={() => loginWithRedirect()} id="logBtn">Log In</button>}
        </div>
    </div>
    </>
  )
}

export default HomeNavbar