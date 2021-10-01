import React from "react";

const commentSt = {
    borderBottom: "1px solid lightgray",
    padding: "45px 25px",
    display: "flex",
    alignItems: "flex-start"
}

const imgSt = {
    width: "100px",
    height: "100px",
}

const pSt = {
    margin: "0 40px"
}

function Comment(props) {
  return (
    <div style={commentSt}>
      <div style={{...imgSt, background: props.background}} className="App-bg-1"></div>
      <p style={pSt}>{props.comment}</p>
    </div>
  );
}

export default Comment;
