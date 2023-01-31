import React from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar";
import "../../Style/NotesCard.css"
import NoteEditor from "./NoteEditor";

const NotesCard = ({ videoLink, NotesArrFunc, currentVidId, notesArr}) => {
 
  return (
    <>
      <Navbar />
      <ReactPlayer url={videoLink} controls={true} width={"98.7vw"} />
    
     <NoteEditor NotesArrFunc={NotesArrFunc} currentVidId={currentVidId} notesArr={notesArr} videoLink={videoLink} />
    </>
  );
};

export default NotesCard;
