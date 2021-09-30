import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./views/Main/Main";
import Create from "./views/Create/Create";
import Comments from "./views/Comments/Comments";
import { useState } from 'react'

function App() {
  const [elements, setElements] = useState([
    "First item with customized long tilde",
    "Second item",
    "Third item (short one)",
  ]);

  function deleteElement(element) {
    setElements(elements.filter((el) => el != element));
  }

  function addElement(element) {
    setElements([...elements, element]);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/main">
            <Main elements={elements} deleteElement={deleteElement}/>
          </Route>
          <Route path="/create">
            <Create addElement={addElement} />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
