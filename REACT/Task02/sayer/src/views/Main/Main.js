import React, { useState } from "react";
import "./Main.css";
import "../../App.css";
import Element from "../../components/Element";
import Header from "../../components/Header";
import NewElement from "../../components/NewElement";

function Main(props) {
  return (
    <div id="main">
      <Header homeLink="false">
        <h1
          style={{
            fontSize: "3rem",
            margin: "0",
          }}
        >
          Sayer
        </h1>
        <h4 style={{ margin: "0" }}>World's most used time waster</h4>
      </Header>
      {props.elements.length > 0 ? (
        props.elements.map((el) => (
          <Element title={el} deleteElement={props.deleteElement} />
        ))
      ) : (
        <h2 className="App-clr-1">No elemnets</h2>
      )}
      <NewElement />
    </div>
  );
}

export default Main;
