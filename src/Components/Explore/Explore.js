import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import Navbar from "../Navbar";
import ExploreCard from "./ExploreCard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "181198e502msh6a0b4ccf137550fp12a4c2jsn27fdb5945ec7",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '181198e502msh6a0b4ccf137550fp12a4c2jsn27fdb5945ec7',
// 		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
// 	}
// };

const Explore = ({ videoIds, explVidFunc }) => {
  const [videoArray, setvideoArray] = useState([]);
  const [display, setdisplay] = useState(false);

  function fetchFunc() {
    if (videoIds.length !== 0) {
      setdisplay(true)
      videoIds.map((item) => {
        let url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${item.videoId}&part=id%2Csnippet&type=video&maxResults=5`;
        fetch(url, options)
          .then((response) => response.json())
          .then((response) => {
            
            let newId = Math.floor(100000 + Math.random() * 900000);
            let urlArray;
            if (videoIds.length <= 1) {
              urlArray = response.items.slice(0, 24);
            } else {
              urlArray = response.items.slice(0, 12);
            }
            let obj = {
              id: newId,
              url: urlArray,
            };
            let copyarr = videoArray;
            copyarr.unshift(obj);
            setvideoArray(copyarr);
            setdisplay(false)
          })
          .catch((err) => console.error(err));
      });
    }
  }

  useEffect(() => {
    fetchFunc();
    // setTimeout(() => {
    //   setdisplay(true);
    // }, 2000);
  }, []);

  return (
    <>
      <Navbar />
      {display && <Loading />}
      {videoIds.length !== 0 ? (
        <ExploreCard videoArray={videoArray} explVidFunc={explVidFunc} />
      ) : (
        <h3 style={{color:"white", textAlign: "center"}}>Enter at least one video in collection first</h3>
      )}
    </>
  );
};

export default Explore;
