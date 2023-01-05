import React from "react";
import "../Style/Videocard.css";

const Videocard = ({ videoData }) => {
  return (
    <section className="card-container">
      {videoData.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt="" width="300px" height="200px" />
            <i className="fas fa-paint-brush"></i>
            <h2>{item.title}</h2>
            <p>{item.channel}</p>
            <a href={item.link} id="vid-Link" target="_blank">
              Check link
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Videocard;
