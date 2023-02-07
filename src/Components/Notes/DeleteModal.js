import React from 'react'
import "../../Style/DeleteModal.css"

const DeleteModal = ({ dltNoteFunc, keepNoteFunc, dltId , hideNoteVidFunc, setdltId}) => {
   

    function handlClickFunc1(e) {
        e.preventDefault()
        dltNoteFunc(dltId)
        setdltId(null)
        console.log('currId', dltId);
    }

    function handlClickFunc2(e) {
        e.preventDefault()
        setdltId(null)
        keepNoteFunc(dltId)
        console.log("currId",dltId);
    }

    return (
        <>
            <div className="modal">
                <div className="overlay">
                    <div id="main-Dltform">
                        <div id="noteFrmClose">
                            <h3 onClick={()=>setdltId(null)}>X</h3>
                        </div>
                        <form id="form-body">
                            <h4 style={{ textAlign: "center" }}>Notes corresponding to this video exists,what do you want to do ?</h4>
                            <button
                                type="submit"
                                value="Submit"
                                onClick={(e) => handlClickFunc1(e)}
                            >
                                Delete Notes as well !
                            </button>
                            <button
                                type="submit"
                                value="Submit"
                                onClick={(e) => handlClickFunc2(e)}
                            >
                                Keep the Note !
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal