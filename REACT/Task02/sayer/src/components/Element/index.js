import React, { useEffect } from "react";
import "./Element.css";
import { useHistory } from "react-router-dom";

function Element(props) {
  let history = useHistory();

  function seeComments() {
    history.push({
      pathname: "/comments",
      state: {
        title: props.element.title,
        comments: [...props.element.comments],
      },
    });
  }

  const [deleteBtnState, setDeleteBtnState] = React.useState(false);

  return (
    <div
      className="element"
      onDoubleClick={() => seeComments()}
      onMouseEnter={() => setDeleteBtnState(true)}
      onMouseLeave={() => setDeleteBtnState(false)}
    >
      <span className="App-clr-1">{props.element.title}</span>
      {deleteBtnState ? (
        <button
          className="delete-btn App-bg-2"
          onClick={() => props.deleteElement(props.element.title)}
        >
          Delete
        </button>
      ) : (
        props.element.comments.length > 0 && (
          <div className="notifications App-bg-1">
            <span>{props.element.comments.length}</span>
          </div>
        )
      )}
    </div>
  );
}

export default Element;
