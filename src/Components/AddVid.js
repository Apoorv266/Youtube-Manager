
import React , { useState }from 'react'
import "../Style/AddVid.css";
import Add from "./Add";
import Form from "./Form";
import Navbar from "./Navbar";
import Videocard from "./Videocard";

const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "181198e502msh6a0b4ccf137550fp12a4c2jsn27fdb5945ec7",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };

const AddVid = ({logout}) => {
    const [toggleForm, settoggleForm] = useState(false);
  const [videoData, setvideoData] = useState([]);

  function fetchFunc(videoId, formValue) {
    settoggleForm(false)
    let url = `https://youtube-search-and-download.p.rapidapi.com/video?id=${videoId}`
    fetch(url,options).then((response) => response.json()).then((response) => {
        setvideoData([...videoData,{
          id: videoData.length + 1,
          title: formValue.title,
          link: `https://www.youtube.com/watch?v=${response.videoDetails.videoId}`,
          channel:formValue.channel ,
          thumbnail:response.videoDetails.thumbnail.thumbnails[2].url,
          tags: response.videoDetails.keywords,
        }])
        console.log(videoData)
      })
      .catch((err) => console.error(err));

  }
  return (
    <>
      <div id="main-item">
        <Navbar logout={logout}/>
        <Add settoggleForm={settoggleForm} />
        <Form toggleForm={toggleForm} settoggleForm={settoggleForm} fetchFunc={fetchFunc}/>
        {!toggleForm && <Videocard videoData={videoData}/>}
      </div>
    </>
  )
}

export default AddVid