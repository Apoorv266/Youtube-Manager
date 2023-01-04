import "./App.css"
import Add from "./Components/Add";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";


function App() {
  const [toggleForm, settoggleForm] = useState(false)
  return (
    <>
      <div id="main-item">
        <Navbar />
        <Add settoggleForm={settoggleForm}/>
        <Form toggleForm={toggleForm} settoggleForm={settoggleForm}/>
      </div>
    </>
  );
}

export default App;
