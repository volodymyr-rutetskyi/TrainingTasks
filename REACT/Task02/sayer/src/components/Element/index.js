import React, { useEffect } from "react";
import "./Element.css";

function Element(props) {
  const [deleteBtnState, setDeleteBtnState] = React.useState(false);

  return (
    <div
      className="element"
      onMouseLeave={() => setDeleteBtnState(false)}
      onMouseEnter={() => setDeleteBtnState(true)}
    >
      <span className="App-clr-1">{props.title}</span>
      {deleteBtnState ? (
        <button
          className="delete-btn App-bg-2"
          onClick={() => props.deleteElement(props.title)}
        >
          Delete
        </button>
      ) : (
        <div className="notifications App-bg-1">
          <span>5</span>
        </div>
      )}
    </div>
  );
}

export default Element;
