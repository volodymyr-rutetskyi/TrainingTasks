import React from "react";
import "./NewElement.css";
import { Link } from "react-router-dom";

function NewElement(props) {
  return (
    <div className="new-element App-bg-2">
      <Link to="/create">+</Link>
    </div>
  );
}

export default NewElement;
