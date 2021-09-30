import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./views/Main/Main";
import Create from "./views/Create/Create";
import Comments from "./views/Comments/Comments";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/create">
            <Create />
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
