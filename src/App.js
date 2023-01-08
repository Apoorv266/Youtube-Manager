import "./App.css";
import React, {useState} from "react";
import AddVid from "./Components/AddVid";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import { useAuth0 } from "@auth0/auth0-react";
import Explore from "./Components/Explore";
import ProtectedRoute from "./Components/Private-Route";
import Playlist from "./Components/Playlist";
import PlaylistComponent from "./Components/PlaylistComponent";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "181198e502msh6a0b4ccf137550fp12a4c2jsn27fdb5945ec7",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

function App() {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [toggleForm, settoggleForm] = useState(false);
  const [videoData, setvideoData] = useState([]);
  const [playlistName, setplaylistName] = useState([])
  const [playlistVideoCardName, setplaylistVideoCardName] = useState("")
  const [playlistObj, setplaylistObj] = useState([])
  
  
 

  function openFormFunc() {
    settoggleForm(true)
  }

  function closeFormFunc() {
    settoggleForm(false)
  }

  function fetchFunc(videoId, formValue) {
    settoggleForm(false)
    let url = `https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`
    fetch(url,options).then((response) => response.json()).then((response) => {
        setvideoData([...videoData,{
          id: videoData.length + 1,
          title: formValue.title,
          link: `https://www.youtube.com/watch?v=${response.videoDetails.videoId}`,
          channel:formValue.channel ,
          thumbnail:response.videoDetails.thumbnail.thumbnails[2].url,
          tags: response.videoDetails.keywords,
        }])
        console.log(videoData)
      })
      .catch((err) => console.error(err));
 
    }

    function deleteCard(id) {
      let arr = videoData.filter(item =>{
        return item.id !== id
      })
      setvideoData(arr)
    }

    function captureFunc(e , item,  dropdown) {
      e.preventDefault()
      if (dropdown !== '' && dropdown !== 'Select a playlist') {
            let obj = item
             obj.playlist = dropdown
             console.log(obj);
             setplaylistObj([...playlistObj, obj])
            console.log(playlistObj)
      }
      else{
          // notification
          console.log("select a playlist first")
      }
    }

    function handlePlayListFunc(val) {
      setplaylistName(val)
      console.log(playlistName)
    }

    function playlistVideoFunc(name) {
      setplaylistVideoCardName(name)
      console.log(playlistVideoCardName);
    }

    
  return (
    <>
      <Routes>

        <Route path="/" element={<Homepage logout={logout} loginWithRedirect={loginWithRedirect} isAuthenticated={isAuthenticated} />} />
        
        <Route path="/explore" element={<ProtectedRoute component={Explore}  />} />
    
        <Route path="/collection" element={<ProtectedRoute component={AddVid} logout={logout} toggleForm={toggleForm} closeFormFunc={closeFormFunc} deleteCard={deleteCard} fetchFunc={fetchFunc} videoData={videoData} openFormFunc={openFormFunc} captureFunc={captureFunc} playlistName={playlistName}/>} />

        <Route path="/playlist" element={<ProtectedRoute component={Playlist} playlistName={playlistName} logout={logout} handlePlayListFunc={handlePlayListFunc} playlistVideoFunc={playlistVideoFunc}/>} />
     

      <Route path="/playlist/1" element={<ProtectedRoute component={PlaylistComponent }  playlistVideoCardName={playlistVideoCardName}/>} />
      </Routes>

    </>
  );
}

export default App;
