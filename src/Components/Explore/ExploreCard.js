import React from "react";
import "../../Style/ExploreCard.css";

const ExploreCard = ({ videoArray, explVidFunc }) => {
  return (
    <div>
      {videoArray.map((val) => {
        return (
          <section className="explorecard-container">
            {val.url.map((item) => {
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
                  <h3 id="exploretitle">{item.snippet.title.substring(0, 40)}</h3>
                  <p>Channel : {item.snippet.channelTitle.substring(0,30)}</p>
                  <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} id="vid-Link" target="_blank">
                    Check link
                  </a>

                 <button id="addtocollectionbtn" onClick={()=>explVidFunc(item.snippet.title,item.snippet.channelTitle, item.snippet.thumbnails.medium.url,item.id.videoId )}>Add to collections</button>
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
