import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../Style/NotesCard.css"

const NotesCard = ({ videoLink, NotesArrFunc, currentVidId, notesArr}) => {
  const [value, setValue] = useState("");
  const [title, settitle] = useState("");
  const [saveMsg, setsaveMsg] = useState(false)
  
  // console.log("LINK -", videoLink);
  // console.log("notes array -", notesArr);


  useEffect(() => {
    let hasMatch = false
    for (let i = 0; i < notesArr.length; i++) {
      let value = notesArr[i]
      if (value.itemId == currentVidId) {
        hasMatch = true
        break
      }
    }

    if (hasMatch) {
      notesArr.map((item) => {
        if (item.itemId === currentVidId) {
          settitle(item.title)
          setValue(item.content)
        }
      })
    }
    else {
      settitle("")
      setValue("")
    }
  }, [])


  function handleOnClick() {
    console.log("id", currentVidId);
    NotesArrFunc(value, title, currentVidId, videoLink)
    setsaveMsg(true)
    setTimeout(() => {
      setsaveMsg(false)
    }, 1000);
  }
  return (
    <>
      <Navbar />
      <ReactPlayer url={videoLink} controls={true} width={"98.7vw"} />
        {saveMsg && <h4 style={{color: "white", textAlign: "center"}}>Your note is saved !</h4>}
      <div id="heading-field">
        <label for="heading" style={{
          color: "white",
          fontSize: "25px"
        }}>Title :</label>
        <input type="text" id="heading" value={title} onChange={(e) => settitle(e.target.value)} />
        <button onClick={handleOnClick} id="saveBtn">Save</button>
      </div>

      <div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          style={{
            color: "white",
            height: "300px",
          }}
        />
      </div>
      <div></div>
    </>
  );
};

export default NotesCard;
