import React from "react";
import { Link } from "react-router-dom";
import "../Style/PlaylistViewCard.css";

const PlaylistViewCard = ({ playlistName, playlistVideoFunc, dltPlaylist }) => {

  
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
                        onClick={() => playlistVideoFunc( item.id)}
                        id="CardClickArea" >
                        <h1>#</h1>
                        <h1>{item.val}</h1>
                        <div>
                          <p>
                            {item.no === 1
                              ? `${item.no} Video`
                              : `${item.no} Videos`}
                          </p>
                        </div>
                      </div>
                    </Link>
                    <button onClick={() => dltPlaylist(item.id)}>
                      Delete
                    </button>
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
