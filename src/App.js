import "./App.css";
import React, { useEffect, useState } from "react";
import AddVid from "./Components/AddVid";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage";
import { useAuth0 } from "@auth0/auth0-react";
import Explore from "./Components/Explore/Explore";
import ProtectedRoute from "./Components/Private-Route";
import Playlist from "./Components/Playlist";
import PlaylistComponent from "./Components/PlaylistComponent";
import Notes from "./Components/Notes/Notes";
import NotesCard from "./Components/Notes/NotesCard";


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "181198e502msh6a0b4ccf137550fp12a4c2jsn27fdb5945ec7",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
const getStoredDataFunc = () => {
  let videoData = localStorage.getItem(`storageData`)
  if (videoData) {
    return JSON.parse(localStorage.getItem(`storageData`))
  }
  else {
    return []
  }
}

function App() {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [toggleForm, settoggleForm] = useState(false);
  const [videoData, setvideoData] = useState(getStoredDataFunc().videoData);
  const [playlistName, setplaylistName] = useState(getStoredDataFunc().playlistName)
  const [playlistVideoCardId, setplaylistVideoCardId] = useState("")
  const [playlistObj, setplaylistObj] = useState(getStoredDataFunc().playlistObj)
  const [InputView, setInputView] = useState(false)
  const [playlistId, setplaylistId] = useState(0)
  const [videoIds, setvideoIds] = useState(getStoredDataFunc().videoIds)

  // useStates for notes
  const [videoLink, setvideoLink] = useState("")
  const [currentVidId, setcurrentVidId] = useState("")
  const [notesArr, setnotesArr] = useState(getStoredDataFunc().notesArr)
  const [dispModal, setdispModal] = useState(false)

  useEffect(() => {
    let obj = {
      videoData: videoData,
      playlistObj: playlistObj,
      playlistName: playlistName,
      videoIds: videoIds,
      notesArr: notesArr
    }
    localStorage.setItem("storageData", JSON.stringify(obj))
  }, [videoData, playlistObj, playlistName, videoIds, notesArr, editplaylistFunc])



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
        playlistList: [],
        channel: formValue.channel,
        thumbnail: response.videoDetails.thumbnail.thumbnails[2].url,
        tags: response.videoDetails.keywords,
      }])


      // preparing explore video id which are unique
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
    let hasMatch = false
    for (let i = 0; i < notesArr.length; i++) {
      if (notesArr[i].itemId === id) {
        hasMatch = true
        break
      }
    }
    if (hasMatch) {
      setdispModal(true)
    } else {
      keepNoteFunc(id)
    }
  }

  // delete video + its note
  function dltNoteFunc(id) {
    setdispModal(false)
    let arr = videoData.filter(item => {
      return item.id !== id
    })
    setvideoData(arr)

    let newArr = videoIds.filter(item => {
      return item.id !== id
    })
    setvideoIds(newArr)

    let newNoteArr = notesArr.filter((item) => item.itemId !== id)
    setnotesArr(newNoteArr)

  }

  // only delete video from collection 
  function keepNoteFunc(id) {
    setdispModal(false)
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
      setplaylistObj([...playlistObj, { ...obj, id: val, originalId: item.id }])

      // to get number of videos in each playlist
      let lengthArr = playlistObj.filter(item => {
        return item.playlistId === dropdown
      })
      playlistName.map((item) => {
        if (item.id == dropdown) {
          item.no = lengthArr.length + 1
        }
      })

      let currentPlaylistName
      for (let j = 0; j < playlistName.length; j++) {
        if (item.playlistId === playlistName[j].id) {
          currentPlaylistName = playlistName[j].val
        }
      }

      videoData.map((val) => {
        if (item.id === val.id) {
          val.playlistList = [...val.playlistList, currentPlaylistName]
        }
      })
    }

    else {
      // notification
      // displayErrorFunc("select a playlist first", true)
    }
  }

  function handlePlayListFunc(val) {
    setplaylistName(val)
  }

  function playlistVideoFunc(id) {
    setplaylistVideoCardId(id)
  }

  // delete video from playlist
  function dltVideoPlaylist(id, playlistNameId, originalVidId) {

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

    // removing playlist tag from video card
    let playlistItem
    playlistName.map((item) => {
      if (item.id === playlistNameId) {
        playlistItem = item.val
      }
    })

    videoData.map((item) => {
      if (item.id === originalVidId) {
        let index = item.playlistList.indexOf(playlistItem);
        item.playlistList.splice(index, 1)
      }
    })

  }


  // delete playlist function
  function dltPlaylist(id, playlistItemName) {
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

    //remove tags of playlist from all collection videos

    videoData.map((item) => {
      let newArr = item.playlistList.filter((val) => {
        return val !== playlistItemName
      })
      item.playlistList = newArr
    })
  }


  //change name of playlist function
  function editplaylistFunc(id, val, originalVal) {
    if (val !== "") {
      // changing playlist name in playlist array
      playlistName.map((item) => {
        if (item.id == id) {
          item.val = val
        }
      })
      setInputView(false)


      // changing playlist tags on collection videos
      videoData.map((item) => {
        let index = item.playlistList.indexOf(originalVal)
        if (index !== -1) {
          item.playlistList.splice(index, 1, val)
        }

      })
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


  // add explore videos to collections
  function explVidFunc(vidtitle, channelName, thumbnailUrl, videoIdVal) {
    let newId = Math.floor(100000 + Math.random() * 900000)
    let obj = {
      id: newId,
      title: vidtitle,
      link: `https://www.youtube.com/watch?v=${videoIdVal}`,
      channel: channelName,
      playlistList: [],
      thumbnail: thumbnailUrl,
      tags: [],
    }
    setvideoData([...videoData, obj])

    let explObj = {
      id: newId,
      videoId: videoIdVal
    }
    setvideoIds([...videoIds, explObj])
  }


  //notes 
  function notesWindowFunc(link, id) {
    setvideoLink(link)
    setcurrentVidId(id)
  }

  function NotesArrFunc(value, title, id, videoLink) {
    let obj = {
      itemId: id,
      title: title,
      content: value,
      videoUrl: videoLink
    }

    // checking if that video exist in notes array
    let hasMatch = false
    for (let i = 0; i < notesArr.length; i++) {
      let value = notesArr[i]
      if (value.itemId == id) {
        hasMatch = true
        break
      }
    }

    // if video exists then update the value
    if (hasMatch) {
      notesArr.map((item) => {
        if (item.itemId === id) {
          item.title = title
          item.content = value
        }
      })
    }
    // if video does not exist push a fresh new object
    else {
      setnotesArr([...notesArr, obj])
    }
  }


  function accessNotesFunc(id, videoUrl) {
    setcurrentVidId(id)
    setvideoLink(videoUrl)
  }

  // delete notes 
  function deleteNotesFunc(noteId) {
    let arr = notesArr.filter((item) => item.itemId !== noteId)
    setnotesArr(arr)
  }

  return (
    <>
      <Routes>

        <Route path="/" element={<Homepage logout={logout} loginWithRedirect={loginWithRedirect} isAuthenticated={isAuthenticated} />} />

        <Route path="/explore" element={<ProtectedRoute component={Explore} videoIds={videoIds} explVidFunc={explVidFunc} logout={logout} />} />

        <Route path="/collection" element={<ProtectedRoute component={AddVid} logout={logout} toggleForm={toggleForm} closeFormFunc={closeFormFunc} deleteCard={deleteCard} fetchFunc={fetchFunc} videoData={videoData} openFormFunc={openFormFunc} captureFunc={captureFunc} playlistName={playlistName} notesWindowFunc={notesWindowFunc} dispModal={dispModal} dltNoteFunc={dltNoteFunc} keepNoteFunc={keepNoteFunc} />} />

        <Route path="/playlist" element={<ProtectedRoute component={Playlist} playlistName={playlistName} logout={logout} handlePlayListFunc={handlePlayListFunc} playlistVideoFunc={playlistVideoFunc} dltPlaylist={dltPlaylist} displayInputPlaylist={displayInputPlaylist} InputView={InputView} cancelEditFunc={cancelEditFunc} playlistId={playlistId} editplaylistFunc={editplaylistFunc} />} />


        <Route path="/playlist/1" element={<ProtectedRoute component={PlaylistComponent} playlistId={playlistVideoCardId} playlistObj={playlistObj} dltVideoPlaylist={dltVideoPlaylist} notesWindowFunc={notesWindowFunc} />} />


        <Route path="/notes" element={<ProtectedRoute component={Notes} notesArr={notesArr} accessNotesFunc={accessNotesFunc} deleteNotesFunc={deleteNotesFunc} />} />

        <Route path="/notes/myNote" element={<ProtectedRoute component={NotesCard} videoLink={videoLink} NotesArrFunc={NotesArrFunc} currentVidId={currentVidId} notesArr={notesArr} />} />



      </Routes>

    </>
  );
}

export default App;
