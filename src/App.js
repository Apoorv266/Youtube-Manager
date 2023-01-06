import "./App.css";
import React from "react";
import AddVid from "./Components/AddVid";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import { useAuth0 } from "@auth0/auth0-react";
import Explore from "./Components/Explore";
import ProtectedRoute from "./Components/Private-Route";
import Playlist from "./Components/Playlist";

function App() {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <Routes>

        <Route path="/" element={<Homepage logout={logout} loginWithRedirect={loginWithRedirect} isAuthenticated={isAuthenticated} />} />
          {/* <Route path="/collection" element={<AddVid logout={logout} />} /> */}

        <Route path="/explore" element={<ProtectedRoute component={Explore}  />} />
    
        <Route path="/collection" element={<ProtectedRoute component={AddVid} logout={logout} />} />

        <Route path="/playlist" element={<ProtectedRoute component={Playlist}  />} />
      </Routes>

    </>
  );
}

export default App;
