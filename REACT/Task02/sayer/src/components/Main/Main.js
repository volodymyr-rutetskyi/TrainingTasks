import React from "react";
import "./Main.css";
import "../../App.css"
import Element from "../Element";
import NewElement from "../NewElement";

function Main() {
  const elements = [
    "First item with customized long tilde",
    "Second item",
    "Third item (short one)",
  ];

  return (
    <div id="main">
      <div className="header App-bg-1">
        <div>
          <strong>Sayer</strong>
          <span>World's most used time waster</span>
        </div>
      </div>
      {
        elements.map(el => <Element title={el}/>)
      }
      <NewElement />
    </div>
  );
}

export default Main;
