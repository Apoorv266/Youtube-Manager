import React, { useTransition } from "react";
import { Link, Navigate } from "react-router-dom";
import "../Style/PlaylistViewCard.css";
import PlaylistComponent from "./PlaylistComponent";

const PlaylistViewCard = ({ playlistName, playlistVideoFunc }) => {

  return (
    <>
      <div className="container">

          <Link to={"/playlist/1"}>
        <div className="layout">
            {playlistName.map((item) => {
              return (
                <>
                  <div key={item.id} className="col col-main" onClick={() => playlistVideoFunc(item.val)}>
                    <h1>{item.id}.</h1>
                    <h1>{item.val}</h1>
                  </div>

                </>
              );
            })}
      </div>
          </Link>
        </div>
    </>
  );
};

export default PlaylistViewCard;
