import React from "react";

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
  border: "1px solid gray",
  fontSize: "1.2rem",
  lineHeight: "2.6rem",
  width: "95%",
  margin: "0 0 0 10px",
};
const containerSt = {
  position: "fixed",
  bottom: "0",
  width: "640px",
  background: "lightgrey",
  height: "85px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default function (props) {
  const [title, setTitle] = React.useState("");

  function inputChangeHandler(e) {
    setTitle(e.target.value);
  }

  function buttonClickHandler() {
      props.addComment(title)
    setTitle("");
  }

  return (
    <div style={{ ...containerSt, ...props.styling }}>
      <input
        style={inputSt}
        type="text"
        value={title}
        onChange={(e) => inputChangeHandler(e)}
        placeholder="New item title..."
      />
      <button style={btnSt} className="App-bg-1" onClick={buttonClickHandler}>
        <div>{">"}</div>
      </button>
    </div>
  );
}
