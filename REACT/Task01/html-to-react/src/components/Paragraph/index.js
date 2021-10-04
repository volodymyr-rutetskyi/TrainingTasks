import React from "react";
import style from "./style.css";

export default function ({ paragraph, children }) {
  return (
    <div className="paragraph" style={{ margin: "0 0 155px 0" }}>
      <h2 style={{ fontSize: "3rem", margin: "40px 0" }}>{paragraph.title}</h2>
      {paragraph.title && (
        <div
          style={{ background: "darkgreen", width: "120px", height: "8px" }}
        ></div>
      )}
      {paragraph.subtitle && (
        <h3 style={{ fontSize: "3rem", margin: "70px 0" }}>
          {paragraph.subtitle}
        </h3>
      )}

      {paragraph.content.length > 1 ? (
        <ul className="p-content">
          {paragraph.content.map((el) => (
            <li style={{ lineHeight: "4.3rem" }}>{el}</li>
          ))}
        </ul>
      ) : (
        <p className="p-content">{paragraph.content}</p>
      )}
      {children}
    </div>
  );
}
