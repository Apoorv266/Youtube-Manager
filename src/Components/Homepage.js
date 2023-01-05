import React from 'react'
import HomeNavbar from './HomeNavbar'
import "../Style/Homepage.css"

const Homepage = ({loginWithRedirect, logout, isAuthenticated}) => {
  return (
    <>
    <HomeNavbar loginWithRedirect={loginWithRedirect} logout={logout} isAuthenticated={isAuthenticated}/>
    <div className= 'home-title'>
<h1>One Stop destination for all your<br/><span>Youtube Needs</span></h1>
</div>
    </>
  )
}

export default Homepage