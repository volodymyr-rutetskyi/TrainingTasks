import React from "react";
import "./Header.css";
import "../../App.css";
import {Link} from "react-router-dom"

function Header(props) {
  return (
    <div className="header App-bg-1">
        <Link to="/main">⟵</Link>
        <span>{props.title}</span>
    </div>
  );
}

export default Header;
