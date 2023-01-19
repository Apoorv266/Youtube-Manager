
import React from 'react'
import "../Style/AddVid.css";
import Add from "./Add";
import Form from "./Form";
import Navbar from "./Navbar";
import Videocard from "./Videocard";

const AddVid = ({logout, toggleForm, closeFormFunc, deleteCard, fetchFunc, videoData, openFormFunc, captureFunc, playlistName,notesWindowFunc, dispModal, dltNoteFunc, keepNoteFunc}) => {
  let Addtext = "Add new video"
   
  return (
    <>
      <div id="main-item">
        <Navbar logout={logout}/>
        <Add openFormFunc={openFormFunc} text={Addtext}/>
        {toggleForm && <Form closeFormFunc={closeFormFunc} fetchFunc={fetchFunc}/>}
        {!toggleForm && <Videocard videoData={videoData} deleteCard={deleteCard} captureFunc={captureFunc} playlistName={playlistName} notesWindowFunc={notesWindowFunc} dispModal={dispModal}  dltNoteFunc={dltNoteFunc} keepNoteFunc={keepNoteFunc} />}
      </div>
    </>
  )
}

export default AddVid