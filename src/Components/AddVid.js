
import React from 'react'
import "../Style/AddVid.css";
import Add from "./Add";
import Form from "./Form";
import Navbar from "./Navbar";
import ErrorMsg from "./ErrorMsg"
import Videocard from "./Videocard";

const AddVid = ({logout, toggleForm, closeFormFunc, deleteCard, fetchFunc, videoData, openFormFunc, captureFunc, playlistName, dispError, errorMsg}) => {
   
  return (
    <>
      <div id="main-item">
        <Navbar logout={logout}/>
        {dispError && <ErrorMsg errorMsg={errorMsg}/>}
        <Add openFormFunc={openFormFunc} />
        {toggleForm && <Form closeFormFunc={closeFormFunc} fetchFunc={fetchFunc}/>}
        {!toggleForm && <Videocard videoData={videoData} deleteCard={deleteCard} captureFunc={captureFunc} playlistName={playlistName}/>}
      </div>
    </>
  )
}

export default AddVid