import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Comments.css";
import "../../App.css";
import Header from "../../components/Header"

function Comments(props) {
  const location = useLocation()



  return (
      <div>
        <Header homeLink={true} title={location.state.title}/>
      </div>
  );
}

export default Comments;
