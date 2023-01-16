import React from "react";
import Navbar from "../Navbar";
import "../../Style/Notes.css";
import { Link } from "react-router-dom";

const Notes = ({ notesArr, accessNotesFunc }) => {
  return (
    <>
      <Navbar />
      <div class="container">
        <main class="grid">
          {notesArr.map((item) => {
            return (
              <article>
                <div class="text">
                  <h3>{item.title}</h3>
                  <Link to={"/notes/myNote"}>
                    <button onClick={()=>accessNotesFunc(item.itemId, item.videoUrl)}>Full Notes</button>
                  </Link>
                </div>
              </article>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Notes;
