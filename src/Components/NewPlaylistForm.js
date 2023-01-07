import React from 'react'
import "../Style/AddPlaylistForm.css"

const NewPlaylistForm = ({ CloseNewPlaylistFunc, input, setinput, newplaylistFunc }) => {
    

    return (
        <>
            {<div className="modal">
                <div className="overlay" >
                    <div id="main-playForm">
                        <div id="form-close">
                            <h3 onClick={CloseNewPlaylistFunc}>X</h3>
                        </div>
                        <form id="form-body">
                            <label>Add playlist Name:</label>
                            <input
                                type="text"
                                name="playlistName"
                                value={input}
                                onChange={(e) => setinput(e.target.value)}
                            />
                            <button
                                type="submit"
                                value="Submit"
                                onClick={(e) => newplaylistFunc(e)}
                            >
                                Add New Playlist !
                            </button>
                        </form>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default NewPlaylistForm