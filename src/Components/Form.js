import React, { useState } from "react";
import "../Style/Form.css";

const Form = () => {
  const [formState, setformState] = useState({
    title: "",
    description: "",
    tags: [],
  });

  function handleField() {}

  function handleSumbit(e) {
    e.preventDefault
  }

  return (
    <div id="main-form">
      <form id="form-body">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={(e)=> (setformState(e.target.name))}
        />
        <label>Description:</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          value={formState.description}
          onChange={handleField}
        ></textarea>
        <label>Tags:</label>
        <input type="text" name="name" value={formState.tags} />
        <button type="submit" value="Submit" onClick={handleSumbit}>
          Submit !
        </button>
      </form>
    </div>
  );
};

export default Form;
