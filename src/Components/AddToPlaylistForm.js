import React, { useState } from 'react'
import "../Style/AddPlaylistForm.css"
// import { v4 as uuid } from "uuid";

const AddToPlaylistForm = ({ closePlayFunc, captureFunc, itemToForm, playlistName }) => {

    const [dropdown, setdropdown] = useState('')


    const handleChange = (event) => {
        setdropdown(event.target.value);
    };


    return (
        <>
        {/* {console.log(item)} */}
            {<div className="modal" key={itemToForm.id}>
                <div className="overlay" >
                    <div id="main-playForm">
                        <div id="form-close">
                            <h3 onClick={closePlayFunc}>X</h3>
                        </div>
                        <form id="form-body">
                            <label>Select PLaylist:</label>
                            <select name="selectPlaylist" id="selectPlaylist" value={dropdown} onChange={handleChange}
                            >

                                <option  >Select a playlist</option>
                                {playlistName.length > 0 ? playlistName.map((item) => {
                                    return <option key={item.id} value={item.id} >{item.val}</option>
                                }) : <option key={itemToForm.id} value={dropdown}>Add a playlist first</option>}


                            </select>
                            <button
                                type="submit"
                                value="Submit"
                                onClick={(e) => captureFunc(e, itemToForm, dropdown)}
                            >
                                Add to Playlist !
                            </button>
                        </form>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default AddToPlaylistForm