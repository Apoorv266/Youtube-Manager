import React from "react";
import "../../Style/ExploreCard.css";

const ExploreCard = ({ videoArray }) => {
  return (
    <div>
      {videoArray.map((recipe) => {
        return (
          <section className="explorecard-container">
            {recipe.url.map((item) => {
              return (
                <div className="explorecard" key={item.snippet.publishTime}>
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    alt=""
                    width="200px"
                    // height="200px"
                    id="thumbnail"
                  />
                  <i className="fas fa-paint-brush"></i>
                  <h3 id="exploretitle">{item.snippet.title.substring(0, 50)}</h3>
                  <p>Channel : {item.snippet.channelTitle}</p>
                  <a href={`https://www.youtube.com/watch?v=${item.snippet.videoId}`} id="vid-Link" target="_blank">
                    Check link
                  </a>
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};

export default ExploreCard;
