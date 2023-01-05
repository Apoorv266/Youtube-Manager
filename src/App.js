import "./App.css";
import React from "react";
import AddVid from "./Components/AddVid";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect , logout ,isAuthenticated} = useAuth0();


    
    if (window.location.pathname == "/collection" || window.location.pathname == "/explore") {
      if (!isAuthenticated ) {
        window.location.pathname = "/";
      }
    }

  return (
    <>
      <Routes>
          <Route path="/" element={<Homepage logout={logout} loginWithRedirect={loginWithRedirect} isAuthenticated={isAuthenticated}/>} />
          <Route path="/collection" element={<AddVid logout={logout}/>} />
       </Routes>
    </>
  );
}

export default App;
