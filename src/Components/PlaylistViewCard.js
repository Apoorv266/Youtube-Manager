import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/PlaylistViewCard.css";

const PlaylistViewCard = ({
  playlistName,
  playlistVideoFunc,
  dltPlaylist,
  displayInputPlaylist,
  InputView,
  cancelEditFunc,
  playlistId,
  editplaylistFunc,
}) => {
  const [inputValue, setinputValue] = useState("");

  function handleChange(e) {
    setinputValue(e.target.value);
  }


  return (
    <>
      <div className="container">
        <div className="layout">
          {playlistName.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <div className="col col-main">
                    <Link to={"/playlist/1"}>
                      <div
                        onClick={() => playlistVideoFunc(item.id)}
                        id="CardClickArea"
                      >
                        <div id="title">
                          {InputView && playlistId === item.id ? (
                            <input
                              type="text"
                              id="inputbox"
                              value={inputValue}
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              onChange={(e) => handleChange(e)}
                            />
                          ) : (
                            <h1>{item.val}</h1>
                          )}
                        </div>
                        <div id="playlistDetail">
                          <p>
                            {item.no === 1
                              ? `${item.no} Video`
                              : `${item.no} Videos`}
                          </p>
                          <p>Created On : {item.date}</p>
                        </div>
                      </div>
                    </Link>
                    <div id="btnBox">
                      {InputView && playlistId === item.id ? (
                        <div>
                          <div id="dltBtn" onClick={() => editplaylistFunc(item.id, inputValue)}>
                            Done
                          </div>
                          <div
                            id="editBtn"
                            onClick={() => cancelEditFunc(item.id)}
                          >
                            Cncl
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div onClick={() => dltPlaylist(item.id)} id="dltBtn">
                            Dlt
                          </div>
                          <div
                            onClick={(e) => displayInputPlaylist(item.id)}
                            id="editBtn"
                          >
                            Edit
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PlaylistViewCard;
