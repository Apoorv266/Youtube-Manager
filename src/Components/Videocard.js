import React, { useState } from "react";
import "../Style/Videocard.css";
import AddToPlaylistForm from "./AddToPlaylistForm";
import { BsFillPencilFill } from "react-icons/bs";

const Videocard = ({ videoData, deleteCard, captureFunc, playlistName }) => {
  const [toggleplayForm, settoggleplayForm] = useState(false);
  const [itemToForm, setitemToForm] = useState("");

  function togglePlayFunc(e, item) {
    e.preventDefault();
    setitemToForm(item);
    settoggleplayForm(true);
  }

  function closePlayFunc() {
    settoggleplayForm(false);
  }
  return (
    <section className="card-container">
      {videoData.map((item) => {
        return (
          <>
            <div className="mainCard">
              {/* <div className="utility">
                <img
                  src={require("../Assets/notes.png")}
                  alt=""
                  srcset=""
                  width="40px"
                />
              </div> */}
              <div className="card" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt=""
                  width="300px"
                  height="200px"
                  id="thumbnail"
                />
                <div id="playlist-list">
                  {Array.from(new Set(item.playlistList)).map((val) => {
                    return <p id="playlist-tag">{val}</p>;
                  })}
                </div>
                <i className="fas fa-paint-brush"></i>
                <h3>{item.title.substring(0, 40)}..</h3>
                <p>Channel : {item.channel}</p>
                <a href={item.link} id="vid-Link" target="_blank">
                  Check link
                </a>
                {toggleplayForm && (
                  <AddToPlaylistForm
                    closePlayFunc={closePlayFunc}
                    captureFunc={captureFunc}
                    itemToForm={itemToForm}
                    playlistName={playlistName}
                  />
                )}
                <div>
                  <button
                    id="deleteBtn"
                    onClick={(e) => deleteCard(item.id, item.link.slice(-11))}
                  >
                    Delete
                  </button>
                  <button
                    id="addtolistBtn"
                    onClick={(e) => togglePlayFunc(e, item)}
                  >
                    Add to playlist
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Videocard;
