import React, { useState } from "react";
import "./Main.css";
import "../../App.css";
import Element from "../Element";
import NewElement from "../NewElement";

function Main() {
  const [elements, setElements] = useState([
    "First item with customized long tilde",
    "Second item",
    "Third item (short one)",
  ]);

  function deleteElement(element) {
    setElements(elements.filter((el) => el != element));
  }

  return (
    <div id="main">
      <div className="header App-bg-1">
        <div>
          <strong>Sayer</strong>
          <span>World's most used time waster</span>
        </div>
      </div>
      {elements.length > 0 ? (
        elements.map((el) => (
          <Element title={el} deleteElement={deleteElement} />
        ))
      ) : (
        <h2 className="App-clr-1">No elemnets</h2>
      )}
      <NewElement />
    </div>
  );
}

export default Main;
