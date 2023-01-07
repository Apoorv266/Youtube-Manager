import React,{useState} from "react";
import "../Style/Videocard.css";
import AddToPlaylistForm from "./AddToPlaylistForm";

const Videocard = ({ videoData, deleteCard, captureFunc , playlistName}) => {
  const [toggleplayForm, settoggleplayForm] = useState(false)

  function togglePlayFunc(e) {
    e.preventDefault()
    settoggleplayForm(true)
  }

  function closePlayFunc() {
    settoggleplayForm(false)
  }
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
                <button id="addtolistBtn" onClick={
                  (e)=>togglePlayFunc(e)}>Add to playlist</button>
              </div>
            </div>
            {toggleplayForm && <AddToPlaylistForm closePlayFunc={closePlayFunc} captureFunc={captureFunc} item={item}/>}
          </>
        );
      })}
    </section>
  );
};

export default Videocard;
