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

const Explore = ({ videoIds }) => {
  const [videoArray, setvideoArray] = useState([]);
  const [display, setdisplay] = useState(false);

  function fetchFunc() {
    videoIds.map((item) => {
      let url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${item}&part=id%2Csnippet&type=video&maxResults=5`;
      fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
          let newId = Math.floor(100000 + Math.random() * 900000);
          let urlArray = response.items.slice(0, 8);
          let obj = {
            id: newId,
            url: urlArray,
          };
          let copyarr = videoArray;
          copyarr.unshift(obj);
          setvideoArray(copyarr);
        })
        .catch((err) => console.error(err));
    });
  }

  useEffect(() => {
    fetchFunc();
    setTimeout(() => {
      setdisplay(true);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />
      {display ? <ExploreCard videoArray={videoArray} /> : <Loading />}
    </>
  );
};

export default Explore;
