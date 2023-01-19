import React, { useState } from 'react'
import Navbar from './Navbar'
import Add from "./Add"
import NewPlaylistForm from "./NewPlaylistForm"
import PlaylistViewCard from './PlaylistViewCard'


const Playlist = ({ playlistName, handlePlayListFunc, logout, playlistVideoFunc, dltPlaylist, displayInputPlaylist, InputView, cancelEditFunc, playlistId, editplaylistFunc }) => {

  const [toggleNewPlaylistForm, settoggleNewPlaylistForm] = useState(false)
  const [input, setinput] = useState("")
  const [dispErrorMsg, setdispErrorMsg] = useState(false)
  let playtext = "Add new playlist"

  function openNewPlaylistFunc() {
    settoggleNewPlaylistForm(true)
  }

  function CloseNewPlaylistFunc() {
    settoggleNewPlaylistForm(false)
  }


  function newplaylistFunc(e) {
    e.preventDefault()
    if (input === "") {
      setdispErrorMsg(true)
     setTimeout(() => {
      setdispErrorMsg(false)
     }, 1000);
    }
    else{

      settoggleNewPlaylistForm(false)
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      handlePlayListFunc(() => ([...playlistName, { val: input, id: Math.floor(100000 + Math.random() * 900000), no: 0, date: `${day}-${month}-${year}` }]))
    }
  }


  return (

    <>
      <Navbar logout={logout} />

      <Add openFormFunc={openNewPlaylistFunc} text={playtext}/>

      {toggleNewPlaylistForm && <NewPlaylistForm CloseNewPlaylistFunc={CloseNewPlaylistFunc} input={input} setinput={setinput} newplaylistFunc={newplaylistFunc} dispErrorMsg={dispErrorMsg}/>}

      <PlaylistViewCard playlistName={playlistName} playlistVideoFunc={playlistVideoFunc} dltPlaylist={dltPlaylist} displayInputPlaylist={displayInputPlaylist} InputView={InputView} cancelEditFunc={cancelEditFunc} playlistId={playlistId} editplaylistFunc={editplaylistFunc} />
    </>
  )
}

export default Playlist