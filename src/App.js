import "./App.css";
import Add from "./Components/Add";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import Videocard from "./Components/Videocard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "181198e502msh6a0b4ccf137550fp12a4c2jsn27fdb5945ec7",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

function App() {
  const [toggleForm, settoggleForm] = useState(false);
  const [videoData, setvideoData] = useState({
    id: 1,
    title: "",
    link: "",
    channel: "",
    tags: [],
  });

  function testFunc() {
    fetch(
      "https://youtube-search-and-download.p.rapidapi.com/video?id=rWUlDAHk1mM",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setvideoData({
          ...videoData, 
          id: response.videoId,
          title: response.title,
          link: `https://www.youtube.com/watch?v=${response.videoId}`,
          channel:response.author ,
          tags: response.keywords,
        })
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div id="main-item">
        <Navbar />
        <Add settoggleForm={settoggleForm} />
        <Form toggleForm={toggleForm} settoggleForm={settoggleForm} />
        <Videocard />
      </div>

      {/* <button onClick={testFunc}>Check !</button> */}
    </>
  );
}

export default App;
