import React from "react";
import Paragraph from "../Paragraph";

export default function ({ paragraphs }) {
  return (
    <div>
      <div className="container contains-paragraphs">
        <Paragraph paragraph={paragraphs[3]}>
          <div style={{ fontSize: "2.5rem", width: "90%", margin: "0 auto" }}>
            Language learners need a way to practice speaking because the goal
            of learning a new language is to be ablt to have real-world
            conversations.
          </div>
        </Paragraph>
      </div>
    </div>
  );
}
