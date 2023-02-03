import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../Style/NotesCard.css"

const NoteEditor = ({ NotesArrFunc, currentVidId, notesArr, videoLink }) => {
    const [value, setValue] = useState("");
    const [title, settitle] = useState("");
    const [saveMsg, setsaveMsg] = useState(false)


    useEffect(() => {
        let hasMatch = false
        for (let i = 0; i < notesArr.length; i++) {
            let value = notesArr[i]
            if (value.itemId === currentVidId) {
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
        setsaveMsg(true)
        setTimeout(() => {
        NotesArrFunc(value, title, currentVidId, videoLink)
        }, 800);
        setTimeout(() => {
            setsaveMsg(false)
        }, 500);
    }


    return (

        <>
            {saveMsg && (
                <h4 style={{ color: "white", textAlign: "center" }}>
                    Your note is getting saved !
                </h4>
            )}
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
        </>
    )
}

export default NoteEditor