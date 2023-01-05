import React, { useState } from "react";
import "../Style/Form.css";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "181198e502msh6a0b4ccf137550fp12a4c2jsn27fdb5945ec7",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

const Form = ({ toggleForm, settoggleForm, fetchFunc }) => {
  const [formState, setformState] = useState([
    {
      title: "",
      link: "",
      channel: "",
      tags: [],
    },
  ]);

  let name;
  let value;
  function handleformState(e) {
    name = e.target.name;
    if (name == "tags") {
      value = e.target.value.split(",");
      setformState({ ...formState, [name]: value });
    } else {
      value = e.target.value;
      setformState({ ...formState, [name]: value });
    }
  }

  function handleSubmit(e) {
    let videoId = `${formState.link.slice(-11)}`;
    e.preventDefault();
    fetchFunc(videoId, formState);
  }

  function handleUrl(urlInput, e) {
    e.preventDefault();
    let id = urlInput.slice(-11);

    let url = `https://youtube-search-and-download.p.rapidapi.com/video?id=${id}`;

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setformState({
          ...formState,
          title: response.videoDetails.title,
          channel: response.videoDetails.author,
          tags: response.videoDetails.keywords,
        });
      });
  }
  return (
    <>
      {toggleForm && (
        <div className="modal">
          <div className="overlay" onClick={() => settoggleForm(false)}>
            <div id="main-form">
              <div id="form-close">
                <h3 onClick={() => settoggleForm(false)}>X</h3>
              </div>
              <form id="form-body">
                <label>Link:</label>
                <input
                  type="text"
                  name="link"
                  value={formState.link}
                  onChange={handleformState}
                  onBlur={(e) => handleUrl(formState.link, e)}
                />
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formState.title}
                  onChange={handleformState}
                />
                <label>Channel:</label>
                <input
                  type="text"
                  name="channel"
                  value={formState.channel}
                  onChange={handleformState}
                />

                <label>Tags: (Seperated by Comma)</label>
                <input
                  type="text"
                  name="tags"
                  value={formState.tags}
                  onChange={handleformState}
                />

                <button
                  type="submit"
                  value="Submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Add Video!
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
