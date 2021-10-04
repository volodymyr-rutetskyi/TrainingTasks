import React from "react";
import style from "./style.css";

export default function ({ paragraph }) {
  return (
    <div className="paragraph" style={{ margin: "0 0 145px 0" }}>
      <h2 style={{ fontSize: "3rem", margin: "40px 0" }}>{paragraph.title}</h2>
      <div
        style={{ background: "darkgreen", width: "120px", height: "8px" }}
      ></div>
      <h3>{paragraph.content.lenght}</h3>

      {paragraph.content.length > 1 ? (
        <ul className="p-content">
          {paragraph.content.map((el) => (
            <li style={{lineHeight: "4.3rem"}}>{el}</li>
          ))}
        </ul>
      ) : (
        <p
          className="p-content"
        >
          {paragraph.content}
        </p>
      )}
    </div>
  );
}
