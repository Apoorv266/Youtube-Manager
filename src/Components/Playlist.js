import React, { useState } from 'react'
import Navbar from './Navbar'
import Add from "./Add"
import NewPlaylistForm from "./NewPlaylistForm"
import PlaylistViewCard from './PlaylistViewCard'


const Playlist = ({ playlistName,handlePlayListFunc, logout, playlistVideoFunc, dltPlaylist}) => {

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
    handlePlayListFunc(() => ([ ...playlistName,{val : input , id:Math.floor(100000 + Math.random() * 900000) , no : 0}]))
    // console.log(playlistName)
}


  return (

    <>
     <Navbar logout={logout}/>

      <Add openFormFunc={openNewPlaylistFunc} />

      {toggleNewPlaylistForm && <NewPlaylistForm CloseNewPlaylistFunc={CloseNewPlaylistFunc} input={input} setinput={setinput} newplaylistFunc={newplaylistFunc} />}

      <PlaylistViewCard playlistName={playlistName} playlistVideoFunc={playlistVideoFunc} dltPlaylist={dltPlaylist}/>
    </>
  )
}

export default Playlist