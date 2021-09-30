import React, { useState } from "react";
import "./Create.css";
import "../../App.css";
import Header from '../../components/Header'

function Create() {

  return (
      <div>
        <Header title="Create new item"/>
          <input type="text" placeholder="New item title..."/>
          <button>›</button>
      </div>
  );
}

export default Create;
