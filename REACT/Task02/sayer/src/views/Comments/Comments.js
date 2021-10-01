import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Comments.css";
import "../../App.css";
import Header from "../../components/Header";
import Comment from "../../components/Comment";
import TextInput from "../../components/TextInput";

function Comments(props) {
  const location = useLocation();

  return (
    <div>
      <Header homeLink={true} title={location.state.title} />
      {props.elements
        .filter((el) => el.title === location.state.title)[0]
        .comments.map((c, idx) => {
          if (idx % 2 == 0) {
            return <Comment comment={c} />;
          } else return <Comment comment={c} background="palevioletred" />;
        })}
      {
        <TextInput
          addComment={props.addComment.bind(null, location.state.title)}
        />
      }
    </div>
  );
}

export default Comments;
