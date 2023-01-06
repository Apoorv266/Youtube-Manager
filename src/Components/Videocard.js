import React from "react";
import "../Style/Videocard.css";

const Videocard = ({ videoData, deleteCard }) => {
  return (
    <section className="card-container">
      {videoData.map((item) => {
        return (
          <>
            <div className="card" key={item.id}>
              <img src={item.thumbnail} alt="" width="300px" height="200px" id="thumbnail"/>
              <i className="fas fa-paint-brush"></i>
              <h3>{item.title}</h3>
              <p>Channel : {item.channel}</p>
              <a href={item.link} id="vid-Link" target="_blank">
                Check link
              </a>
              <div>
                <button id="deleteBtn" onClick={(e)=> deleteCard(item.id)}>Delete</button>
                <button id="addtolistBtn">Add to playlist</button>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Videocard;
