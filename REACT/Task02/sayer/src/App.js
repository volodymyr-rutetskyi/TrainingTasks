import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./views/Main/Main";
import Create from "./views/Create/Create";
import Comments from "./views/Comments/Comments";
import TextInput from "./components/TextInput";
import { useState } from "react";

function App() {
  const [elements, setElements] = useState([
    {
      title: "First item with customized long tilde",
      comments: ["very good!"],
    },
    {
      title: "Second item",
      comments: ["very good!", "not so good"],
    },
    {
      title: "Third item (short one)",
      comments: [],
    },
  ]);

  function deleteElement(element) {
    setElements(elements.filter((el) => el != element));
  }

  function addElement(element) {
    setElements([...elements, element]);
  }

  function addComment(element, comment) {
    const newEls = elements.map(el => {
      if(element === el.title) {
        el.comments.push(comment)
        return el
      }
      return el
    })
    setElements(newEls)
  }

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
