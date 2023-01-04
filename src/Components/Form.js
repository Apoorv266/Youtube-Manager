import React, { useState } from "react";
import "../Style/Form.css";

const Form = () => {
  const [formState, setformState] = useState({
    title: "",
    description: "",
    tags: [],
  });

  let name;
  let value;
  function handleformState(e) {

      name = e.target.name;
    if (name == "tags") {
        value = e.target.value.split(",")
        setformState({...formState,   [name]: value})
    }else{
        value = e.target.value;
        setformState({...formState, [name] : value})
    }
    
  }

 
//   function handleTags(e) {
//     tagValue = e.taget.value
//     setformState({...formState, tags : tagValue})
//   }

  function handleSumbit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div id="main-form">
      <form id="form-body">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleformState}
        />
        <label>Description:</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          value={formState.description}
          onChange={handleformState}
        ></textarea>
        <label>Tags:</label>
        <input type="text" name="tags" value={formState.tags} onChange={handleformState}/>
        <button type="submit" value="Submit" onClick={handleSumbit}>
          Submit !
        </button>
      </form>
    </div>
  );
};

export default Form;
