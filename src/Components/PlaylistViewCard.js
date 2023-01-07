import React from "react";
import "../Style/PlaylistViewCard.css";

const PlaylistViewCard = ({playlistName}) => {

    function checkFunc() {
        console.log("test");
    }
  return (
    <>
      <div className="container">
        <div className="layout">

            {playlistName.map((item)=>{
                return (

          <p key={item.id} className="col col-main" onClick={checkFunc} >
            <h1>{item.id}.</h1>
            <h1>{item.val}</h1>
          </p>
                )
            })}

          
          
        </div>
      </div>
    </>
  );
};

export default PlaylistViewCard;
