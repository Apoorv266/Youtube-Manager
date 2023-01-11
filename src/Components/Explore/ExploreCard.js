import React from "react";

const ExploreCard = ({ videoArray }) => {
  return (
    <div>
      {videoArray.map((recipe) => {
        return (
          <section className="card-container">
            {recipe.url.map((item) => {
              return (
                <div className="card" key={item.id}>
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    alt=""
                    width="300px"
                    height="200px"
                    id="thumbnail"
                  />
                  <i className="fas fa-paint-brush"></i>
                  <h3>{item.snippet.title.substring(0, 90)}...</h3>
                  <p>Channel : {item.snippet.channelTitle}</p>
                  <a href={item.link} id="vid-Link" target="_blank">
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
