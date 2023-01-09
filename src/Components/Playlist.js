import React, { useState } from 'react'
import Navbar from './Navbar'
import Add from "./Add"
import NewPlaylistForm from "./NewPlaylistForm"
import PlaylistViewCard from './PlaylistViewCard'


const Playlist = ({ playlistName,handlePlayListFunc, logout, playlistVideoFunc}) => {

  const [toggleNewPlaylistForm, settoggleNewPlaylistForm] = useState(false)
  const [input, setinput] = useState("")

  function openNewPlaylistFunc() {
    settoggleNewPlaylistForm(true)
  }

  function CloseNewPlaylistFunc() {
    settoggleNewPlaylistForm(false)
  }


  function newplaylistFunc(e) {
    e.preventDefault()
    settoggleNewPlaylistForm(false)
    handlePlayListFunc(() => ([ ...playlistName,{val : input , id:playlistName.length + 1 , no : 0}]))
    // console.log(playlistName)
}


  return (

    <>
     <Navbar logout={logout}/>

      <Add openFormFunc={openNewPlaylistFunc} />

      {toggleNewPlaylistForm && <NewPlaylistForm CloseNewPlaylistFunc={CloseNewPlaylistFunc} input={input} setinput={setinput} newplaylistFunc={newplaylistFunc} />}

      <PlaylistViewCard playlistName={playlistName} playlistVideoFunc={playlistVideoFunc} />
    </>
  )
}

export default Playlist