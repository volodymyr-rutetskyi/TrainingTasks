import React from "react";
import "./Element.css";

function Element(props) {
  return (
    <div className="element">
      <span className="App-clr-1">
        {props.title.length > 25
          ? props.title.slice(0, 25) + "..."
          : props.title}
      </span>
      <div className="notifications App-bg-1">
        <span>5</span>
      </div>
    </div>
  );
}

export default Element;
