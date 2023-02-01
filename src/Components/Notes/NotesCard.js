import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar";
import NoteEditor from "./NoteEditor";
import "../../Style/NotesCard.css"

const NotesCard = ({ videoLink, NotesArrFunc, currentVidId, notesArr, handleSaveMsg, saveMsg}) => {

  return (
    <>
      <Navbar />
      <ReactPlayer url={videoLink} controls={true} width={"98.7vw"} />
     <NoteEditor NotesArrFunc={NotesArrFunc} currentVidId={currentVidId} notesArr={notesArr} videoLink={videoLink} handleSaveMsg={handleSaveMsg} saveMsg={saveMsg}/>
    </>
  );
};

export default React.memo(NotesCard);
