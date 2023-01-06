import "./App.css";
import React from "react";
import AddVid from "./Components/AddVid";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import { useAuth0 } from "@auth0/auth0-react";
import Explore from "./Components/Explore";

import Profile from "./Components/Profile";
import ProtectedRoute from "./Components/Private-Route";

function App() {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();




  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage logout={logout} loginWithRedirect={loginWithRedirect} isAuthenticated={isAuthenticated} />} />
        <Route path="/collection" element={<AddVid logout={logout} />} />
        <Route path="/explore" element={<Explore />} />

        {/* <Route exact path='/explore' element={<Explore />} /> */}

        <ProtectedRoute path="/profile" component={Profile} />

        <Route path="some-path" element={<ProtectedRoute component={Profile} />} />
        {/* <Route exact path="/profile" component={<ProtectedRoute/>}>
        <Route path="/profile" element={<Profile/>} exact />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
