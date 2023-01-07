import React from 'react'
import "../Style/AddPlaylistForm.css"

const AddPlaylistForm = ({ closePlayFunc }) => {
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
                            <input
                                type="text"
                                name="link"
                            />
                            <button
                                type="submit"
                                value="Submit"

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

export default AddPlaylistForm