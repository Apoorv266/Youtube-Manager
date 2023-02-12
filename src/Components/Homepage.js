import React, { useEffect } from 'react'
import HomeNavbar from './HomeNavbar'
import "../Style/Homepage.css"
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";

const Homepage = ({ loginWithRedirect, logout, isAuthenticated }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/collection");
    }
    else{
      navigate("/");
    }
  }, [isAuthenticated])
  return (
    <>
     {isAuthenticated ? <Navbar logout={logout}/> : <HomeNavbar loginWithRedirect={loginWithRedirect} logout={logout} isAuthenticated={isAuthenticated} />}
      <div className='home-title'>
        <h1 id='homepage-title'>One Stop destination for all your<br /><span>Youtube Needs</span></h1>
      </div>
    </>
  )
}

export default Homepage