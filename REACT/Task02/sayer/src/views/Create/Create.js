import React, { useState } from "react";
import "./Create.css";
import "../../App.css";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom"

const btnSt = {
  border: "none",
  minHeight: "70px",
  minWidth: "70px",
  borderRadius: "50%",
  margin: "0 20px 0px 20px",
  color: "white",
  fontSize: "1.5rem",
};
const inputSt = {
  border: "none",
  borderBottom: "1px solid black",
  fontSize: "1.2rem",
  lineHeight: "2.2rem",
  width: "85%",
  margin: "0 20px 0 20px",
};
const containerSt = {
  padding: "20px",
  height: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

function Create(props) {
  let history = useHistory()

  const [title, setTitle] = React.useState("");

  function btnClickHandler() {
    props.addElement(title)
    setTitle("");
    history.push('/main')
  }

  function inputChangeHandler(e) {
    setTitle(e.target.value);
  }

  return (
    <div className="create-view">
      <Header title="Create new item" homeLink={true}/>
      <div style={containerSt}>
        <input
          style={inputSt}
          type="text"
          value={title}
          onChange={(e) => inputChangeHandler(e)}
          placeholder="New item title..."
        />
        <button style={btnSt} className="App-bg-1" onClick={btnClickHandler}>
          <div>{">"}</div>
        </button>
      </div>
    </div>
  );
}

export default Create;
