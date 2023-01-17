import React from "react";
import Navbar from "../Navbar";
import "../../Style/Notes.css";
import { Link } from "react-router-dom";

const Notes = ({ notesArr, accessNotesFunc, deleteNotesFunc }) => {
  return (
    <>
      <Navbar />
      <div class="container">
        {notesArr.length === 0 ? (
          <h3 style={{textAlign : "center", color : "white"}}>Currently there are no notes !</h3>
        ) : (
          <main class="grid">
            {notesArr.map((item) => {
              return (
                <article>
                  <div class="text">
                    <h2>{item.title}</h2>
                    <div id="notesBtn">
                      <Link to={"/notes/myNote"}>
                        <button
                          onClick={() =>
                            accessNotesFunc(item.itemId, item.videoUrl)
                          }
                          className="notesBtn"
                        >
                          Full Notes
                        </button>
                      </Link>
                      <button
                        className="dltBtn"
                        onClick={() => deleteNotesFunc(item.itemId)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </main>
        )}
      </div>
    </>
  );
};

export default Notes;
