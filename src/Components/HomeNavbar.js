import React from 'react'
import "../Style/HomeNavbar.css"


const HomeNavbar = ({ loginWithRedirect, logout, isAuthenticated }) => {

  return (
    <>
      <div className='home-navbar'>
        <div>
          <h3 className='logoMain'>Youtube<span className='logo'>Buddy</span></h3>
        </div>

        <div>
          {isAuthenticated ? <button onClick={() => logout({ returnTo: window.location.origin })} id="logBtn">Log Out</button> :
            <button onClick={() => loginWithRedirect()} id="loginBtn">Log In</button>}
        </div>
      </div>
    </>
  )
}

export default HomeNavbar