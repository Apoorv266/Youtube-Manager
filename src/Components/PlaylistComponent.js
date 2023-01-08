import React from 'react'
import Navbar from './Navbar'
import "../Style/Videocard.css";

const PlaylistComponent = ({playlistName, playlistObj}) => {
  return (
    <>
    <Navbar/>
    
    <section className="card-container">
      {playlistObj.map((arr)=>{
        if (arr.playlist === playlistName) {
          return (
            <div className="card" key={arr.id}>
              <img src={arr.thumbnail} alt="" width="300px" height="200px" id="thumbnail"/>
              <i className="fas fa-paint-brush"></i>
              <h3>{arr.title.substring(0,50)}...</h3>
              <p>Channel : {arr.channel}</p>
              <a href={arr.link} id="vid-Link" target="_blank">
                Check link
              </a>
              <div>
                <button id="deleteBtn">Delete</button>
              </div>
            </div>
            )
        }
      })}
    </section>
    </>
  )
}

export default PlaylistComponent