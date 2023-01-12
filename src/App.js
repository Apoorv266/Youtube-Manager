import "./App.css";
import React, { useState } from "react";
import AddVid from "./Components/AddVid";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import { useAuth0 } from "@auth0/auth0-react";
import Explore from "./Components/Explore/Explore";
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
  const [playlistVideoCardId, setplaylistVideoCardId] = useState("")
  const [playlistObj, setplaylistObj] = useState([])
  const [InputView, setInputView] = useState(false)
  const [playlistId, setplaylistId] = useState(0)
  const [videoIds, setvideoIds] = useState([])
  const [exprVideoArray, setexprVideoArray] = useState([])

  function openFormFunc() {
    settoggleForm(true)
  }

  function closeFormFunc() {
    settoggleForm(false)
  }

  function fetchFunc(videoId, formValue) {
    settoggleForm(false)

    let url = `https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`
    fetch(url, options).then((response) => response.json()).then((response) => {
      let newId = Math.floor(100000 + Math.random() * 900000)
      setvideoData([...videoData, {
        id: newId,
        title: formValue.title,
        link: `https://www.youtube.com/watch?v=${response.videoDetails.videoId}`,
        channel: formValue.channel,
        thumbnail: response.videoDetails.thumbnail.thumbnails[2].url,
        tags: response.videoDetails.keywords,
      }])


      // preparing explore video id with are unique
      let hasMatch = false;
      for (var i = 0; i < videoIds.length; ++i) {
        let currentVal = videoIds[i]
        if (currentVal.videoId === videoId) {
          hasMatch = true
          break
        }
      }

      if (!hasMatch) {
        setvideoIds([...videoIds, { id: newId, videoId: videoId }])
      }
    })
      .catch((err) => console.error(err));
  }

  function deleteCard(id) {
    let arr = videoData.filter(item => {
      return item.id !== id
    })
    setvideoData(arr)

    let newArr = videoIds.filter(item => {
      return item.id !== id
    })
    setvideoIds(newArr)

  }


  function captureFunc(e, item, dropdown) {
    e.preventDefault()
    if (dropdown !== '' && dropdown !== 'Select a playlist') {
      let obj = item
      obj.playlistId = dropdown
      let val = Math.floor(100000 + Math.random() * 900000)
      setplaylistObj([...playlistObj, { ...obj, id: val }])

      // to get number of videos in each playlist
      let lengthArr = playlistObj.filter(item => {
        return item.playlistId === dropdown
      })
      playlistName.map((item) => {
        if (item.id == dropdown) {
          item.no = lengthArr.length + 1
        }
      })
    }
    else {
      // notification
      console.log("select a playlist first")
    }
  }

  function handlePlayListFunc(val) {
    setplaylistName(val)
  }

  function playlistVideoFunc(id) {
    setplaylistVideoCardId(id)
  }

  // delete video from playlist
  function dltVideoPlaylist(id, playlistNameId) {
    // reducing video number from playlistName array
    playlistName.map((item) => {
      if (item.id == playlistNameId) {
        item.no = item.no - 1
      }
    })
    // removing video of that playlist from playlistObj array
    let arr = playlistObj.filter(item => {
      return item.id !== id
    })
    setplaylistObj(arr)
  }


  // delete playlist function
  function dltPlaylist(id) {
    // removing playlist from playlistName array
    let playListArr = playlistName.filter(item => {
      return item.id !== id
    })
    setplaylistName(playListArr)

    // removing videos in that playlist from playlistObj array
    let playlistVideoarr = playlistObj.filter(item => {
      return item.playlistId !== id
    })
    setplaylistObj(playlistVideoarr)
  }


  //change name of playlist function
  function editplaylistFunc(id, val) {
    if (val === "") {
      // error
      console.log("playlist name cant be empty")
    }
    else {
      playlistName.map((item) => {
        if (item.id == id) {
          item.val = val
        }
      })
      setInputView(false)
    }
  }

  // display input for playlist name change Function
  function displayInputPlaylist(id) {
    setplaylistId(id)
    setInputView(true)
  }

  // cancel edit function
  function cancelEditFunc(id) {
    setplaylistId(id)
    setInputView(false)
  }






  return (
    <>
      <Routes>

        <Route path="/" element={<Homepage logout={logout} loginWithRedirect={loginWithRedirect} isAuthenticated={isAuthenticated} />} />

        <Route path="/explore" element={<ProtectedRoute component={Explore} videoIds={videoIds} />} />

        <Route path="/collection" element={<ProtectedRoute component={AddVid} logout={logout} toggleForm={toggleForm} closeFormFunc={closeFormFunc} deleteCard={deleteCard} fetchFunc={fetchFunc} videoData={videoData} openFormFunc={openFormFunc} captureFunc={captureFunc} playlistName={playlistName} />} />

        <Route path="/playlist" element={<ProtectedRoute component={Playlist} playlistName={playlistName} logout={logout} handlePlayListFunc={handlePlayListFunc} playlistVideoFunc={playlistVideoFunc} dltPlaylist={dltPlaylist} displayInputPlaylist={displayInputPlaylist} InputView={InputView} cancelEditFunc={cancelEditFunc} playlistId={playlistId} editplaylistFunc={editplaylistFunc} />} />


        <Route path="/playlist/1" element={<ProtectedRoute component={PlaylistComponent} playlistId={playlistVideoCardId} playlistObj={playlistObj} dltVideoPlaylist={dltVideoPlaylist} />} />
      </Routes>

    </>
  );
}

export default App;
