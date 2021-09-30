import React from "react";
import "./Header.css";
import "../../App.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header App-bg-1">
      {props.homeLink === true && <Link to="/main">⟵</Link>}
      <span>{props.title}</span>
      <div className="children">{props.children && props.children.map((c) => c)}</div>
    </div>
  );
}

export default Header;
