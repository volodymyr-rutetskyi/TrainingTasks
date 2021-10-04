import React from "react";
import style from "./style.css";
import Paragraph from "../Paragraph";

export default function({paragraphs}) {
  return (
    <div className="section-one">
      <div className="container" style={{paddingTop: "140px"}}>
          <Paragraph paragraph={paragraphs[0]}/>
          <Paragraph paragraph={paragraphs[1]}/>
      </div>
    </div>
  );
}