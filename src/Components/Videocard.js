import React from "react";
import "../Style/Videocard.css";
import data from "../Data/Data"

const Videocard = () => {
  return (
    <section className="card-container">

        {data.map(item =>{
            return (
<div className="card">
		<i className="fas fa-paint-brush"></i>
		<h1>{item.title}</h1>
        <img src="../demo.jpg" alt="" srcset="" width='300px' height="200px"/>
		<p>{item.channel}</p>
        <a href="" id="vid-Link">Check link</a>
	</div>
            )
        })}

	


</section>

  );
};

export default Videocard;
