import React from "react";
import style from "./style.css";

export default function (props) {
  const links = ["WORK", "SERVICES", "ABOUT", "TUTORIALS"];

  return (
    <div className="header">
      <div className="container">
        <div className="topper">
          <span style={{ fontSize: "2rem" }}>DECISION MAPPER</span>
          <nav>
            {links.map((l) => (
              <a href="#" className="link">
                {l}
              </a>
            ))}
            <button className="button">CONTACT</button>
          </nav>
        </div>
        <div className="main">
          <span
            style={{ fontSize: "7rem", fontWeight: "bold", margin: "20px" }}
          >
            Lingua.Live
          </span>
          <span style={{ fontSize: "1.6rem", margin: "10px" }}>
            Helping language learners grow through conversation with native
            speakers
          </span>
        </div>
      </div>
    </div>
  );
}
