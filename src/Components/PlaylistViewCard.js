import React, { useTransition } from "react";
import { Link, Navigate } from "react-router-dom";
import "../Style/PlaylistViewCard.css";
import PlaylistComponent from "./PlaylistComponent";

const PlaylistViewCard = ({ playlistName, playlistVideoFunc }) => {
  let tempid = "d";


  let arr = [{ demo: "d", url: "https://1" }, { demo: "we", url: "https://2" }, { demo: "d", url: "https://3" }, { demo: "d", url: "https://4" }, { demo: "qwewq", url: "https://5" }]



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
