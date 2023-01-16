import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Navbar from "../Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../Style/NotesCard.css"

const NotesCard = ({ videoLink, NotesArrFunc, currentVidId, notesArr }) => {
  const [value, setValue] = useState("");
  const [title, settitle] = useState("")

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
    NotesArrFunc(value, title, currentVidId, videoLink)
  }
  return (
    <>
      <Navbar />
      <ReactPlayer url={videoLink} controls={true} width={"98.7vw"} />
      <div id="heading-field">
        <label for="heading" style={{
          color: "white",
          fontSize: "30px"
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
