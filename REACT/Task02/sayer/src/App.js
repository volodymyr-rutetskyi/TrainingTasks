import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./views/Main/Main";
import Create from "./views/Create/Create";
import Comments from "./views/Comments/Comments";
import TextInput from "./components/TextInput";
import { useState, useEffect } from "react";
import axios from 'axios'

const host = "http://localhost:"
const port = 8000


function App() {
  const [elements, setElements] = useState([]);

  async function getElements() {
    const response = await axios.get(`${host}${port}`)
    setElements(response.data)
  }

  async function deleteElement(title) {
    setElements((await axios.delete(`${host}${port}/element?title=${title}`,)).data);
  }

  async function addElement(element) {
    setElements((await axios.put(`${host}${port}/element`, element)).data);
  }

  async function addComment(element, comment) {
    setElements((await axios.put(`${host}${port}/comment`, {element, comment})).data)
  }

  useEffect(async () => {
    await getElements()
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/main">
            <Main elements={elements} deleteElement={deleteElement} />
          </Route>
          <Route path="/create">
            <Create addElement={addElement} />
          </Route>
          <Route path="/comments">
            <Comments addComment={addComment} elements={elements}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
