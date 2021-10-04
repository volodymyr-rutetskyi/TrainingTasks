import React from "react";
import Paragraph from "../Paragraph";

export default function ({ paragraphs }) {
  return (
    <div>
       <div className="container contains-paragraphs">
        <Paragraph paragraph={paragraphs[2]} />
      </div>
    </div>
  );
}
