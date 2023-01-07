import React from 'react'
import "../Style/AddPlaylistForm.css"

const AddToPlaylistForm = ({ closePlayFunc, captureFunc, item, playlistName }) => {
    return (
        <>
            {<div className="modal">
                <div className="overlay" >
                    <div id="main-playForm">
                        <div id="form-close">
                            <h3 onClick={closePlayFunc}>X</h3>
                        </div>
                        <form id="form-body">
                            <label>Select PLaylist:</label>
                            <select name="selectPlaylist" id="selectPlaylist">


                                { playlistName.length > 0 ? playlistName.map((item) => {
                                    return <option key={item.id} value={item.val}>{item.val}</option>
                                }) :  <option key={item.id} value="No playlist added">Add a playlist first</option>}


                            </select>
                            <button
                                type="submit"
                                value="Submit"
                                onClick={(e) => captureFunc(e, item)}
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