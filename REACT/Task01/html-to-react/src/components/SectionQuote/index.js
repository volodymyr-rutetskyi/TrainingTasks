import React from "react";

export default function (props) {
  return (
    <div
      style={{
        background: "lightgray",
        height: "320px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          height: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <q style={{ fontSize: "2.55rem", fontWeight: "lighter" }}>
          The goal of learning a new language is to be able to have real-world
          conversations.
        </q>
        <span
          style={{
            alignSelf: "flex-end",
            fontSize: "2.2rem",
            fontWeight: "lighter",
          }}
        >
          <b>Yulia</b> Russian Language Student
        </span>
      </div>
    </div>
  );
}
