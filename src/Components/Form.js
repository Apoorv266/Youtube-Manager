import React, { useState } from "react";
import "../Style/Form.css";

const Form = ({toggleForm, settoggleForm}) => {
  const [formState, setformState] = useState({
    title: "",
    description: "",
    link: "",
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

  function handleSumbit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <>
    {toggleForm && <div id="main-form">
    <div id="form-close"><h3 onClick={()=>settoggleForm(false)}>X</h3></div>
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
        <label>Link:</label>
        <input
          type="text"
          name="link"
          value={formState.link}
          onChange={handleformState}
        />
        <label>Tags: (Seperated by Comma)</label>
        <input type="text" name="tags" value={formState.tags} onChange={handleformState}/>
        <button type="submit" value="Submit" onClick={handleSumbit}>
          Add !
        </button>
      </form>
    </div>}
    </>
  );
};

export default Form;
